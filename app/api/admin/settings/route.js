import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('ists');

        let settings = await db.collection('settings').findOne({ _id: 'site_settings' });

        if (!settings) {
            settings = {
                _id: 'site_settings',
                phone: '+92 316 1720551',
                email: 'raufh137@gmail.com',
                officeHours: '24/7 Available',
                facebook: 'https://www.facebook.com/share/1HmBAuXeg3/',
                instagram: 'https://www.instagram.com/ists_official',
                whatsapp: 'https://wa.me/923161720551',
                footerText: 'Institute of Safety & Technical Studies',
                address: 'Pakistan',
                directorName: 'Dr. Ahmed Raza',
                directorTitle: 'Director',
                academicDirectorName: 'Prof. Sarah Khan',
                academicDirectorTitle: 'Academic Director',
                signaturePath: null
            };
            await db.collection('settings').insertOne(settings);
        }

        return NextResponse.json(settings);
    } catch (error) {
        console.error('Error fetching settings:', error);
        return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const contentType = req.headers.get('content-type') || '';
        let body = {};
        let signaturePath = null;

        // Handle FormData (for file upload)
        if (contentType.includes('multipart/form-data')) {
            const formData = await req.formData();

            for (const [key, value] of formData.entries()) {
                if (key !== 'signature') {
                    body[key] = value;
                }
            }

            // Handle signature upload
            const signatureFile = formData.get('signature');
            if (signatureFile && signatureFile.size > 0) {
                const bytes = await signatureFile.arrayBuffer();
                const buffer = Buffer.from(bytes);

                const uploadDir = path.join(process.cwd(), 'public', 'signatures');
                if (!fs.existsSync(uploadDir)) {
                    fs.mkdirSync(uploadDir, { recursive: true });
                }

                const timestamp = Date.now();
                const fileName = `signature_${timestamp}.png`;
                const filePath = path.join(uploadDir, fileName);

                fs.writeFileSync(filePath, buffer);
                signaturePath = `/signatures/${fileName}`;
                body.signaturePath = signaturePath;
            }
        } else {
            // Handle JSON (for normal settings save)
            body = await req.json();
        }

        const client = await clientPromise;
        const db = client.db('ists');

        await db.collection('settings').updateOne(
            { _id: 'site_settings' },
            {
                $set: {
                    ...body,
                    updatedAt: new Date()
                }
            },
            { upsert: true }
        );

        const updatedSettings = await db.collection('settings').findOne({ _id: 'site_settings' });

        return NextResponse.json({ success: true, data: updatedSettings });
    } catch (error) {
        console.error('Error updating settings:', error);
        return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
    }
}