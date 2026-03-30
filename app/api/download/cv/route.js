import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const filename = searchParams.get('file');

        if (!filename) {
            return NextResponse.json({ error: 'No file specified' }, { status: 400 });
        }

        const filePath = path.join(process.cwd(), 'uploads', filename);

        if (!fs.existsSync(filePath)) {
            return NextResponse.json({ error: 'File not found' }, { status: 404 });
        }

        const fileBuffer = fs.readFileSync(filePath);

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': `attachment; filename="${filename}"`,
            },
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to download file' }, { status: 500 });
    }
}