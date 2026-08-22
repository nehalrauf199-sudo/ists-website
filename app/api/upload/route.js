import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file');

        if (!file) {
            return NextResponse.json(
                { error: 'No file provided' },
                { status: 400 }
            );
        }

        // Validate file size (max 50MB)
        if (file.size > 50 * 1024 * 1024) {
            return NextResponse.json(
                { error: 'File size must be less than 50MB' },
                { status: 400 }
            );
        }

        // Generate unique filename
        const timestamp = Date.now();
        const ext = file.name.split('.').pop();
        const filename = `registrations/${timestamp}-${file.name}`;

        // Upload to Vercel Blob
        const blob = await put(filename, file, {
            access: 'public',
            contentType: file.type,
        });

        return NextResponse.json({
            url: blob.url,
            filename: file.name,
            size: file.size,
            success: true
        });

    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json(
            { error: 'Upload failed: ' + error.message },
            { status: 500 }
        );
    }
}