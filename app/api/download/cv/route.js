import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const file = searchParams.get('file');

        if (!file) {
            return NextResponse.json({ error: 'No file specified' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('ists');

        // Find the registration with this CV file
        const registration = await db.collection('registrations').findOne({ cvFileName: file });

        if (!registration || !registration.cvData) {
            return NextResponse.json({ error: 'File not found' }, { status: 404 });
        }

        // Convert base64 back to buffer
        const fileBuffer = Buffer.from(registration.cvData, 'base64');

        // Determine content type
        let contentType = 'application/octet-stream';
        if (registration.cvFileName?.endsWith('.pdf')) contentType = 'application/pdf';
        if (registration.cvFileName?.endsWith('.doc')) contentType = 'application/msword';
        if (registration.cvFileName?.endsWith('.docx')) contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': contentType,
                'Content-Disposition': `attachment; filename="${registration.cvFileName}"`,
            },
        });
    } catch (error) {
        console.error('Download error:', error);
        return NextResponse.json({ error: 'Failed to download file' }, { status: 500 });
    }
}