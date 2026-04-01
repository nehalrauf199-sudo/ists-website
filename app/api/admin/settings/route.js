import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

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
                directorName: 'Arshan Rauf',
                directorTitle: 'Director',
                academicDirectorName: 'Dr. Sarah Khan',
                academicDirectorTitle: 'Academic Director',
                signatureData: null,
                signatureFileName: null
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
        let updateData = {};

        // Handle FormData (for file upload from admin page)
        if (contentType.includes('multipart/form-data')) {
            const formData = await req.formData();

            // Get all fields from formData
            for (const [key, value] of formData.entries()) {
                if (key === 'signature') {
                    // Handle signature file
                    if (value && value.size > 0) {
                        const bytes = await value.arrayBuffer();
                        const buffer = Buffer.from(bytes);
                        updateData.signatureData = buffer.toString('base64');
                        updateData.signatureFileName = value.name;
                        console.log('Signature uploaded:', value.name, 'Size:', value.size);
                    }
                } else {
                    // Handle text fields
                    updateData[key] = value;
                }
            }
        } else {
            // Handle JSON (for normal settings save)
            updateData = await req.json();
        }

        const client = await clientPromise;
        const db = client.db('ists');

        await db.collection('settings').updateOne(
            { _id: 'site_settings' },
            {
                $set: {
                    ...updateData,
                    updatedAt: new Date()
                }
            },
            { upsert: true }
        );

        const updatedSettings = await db.collection('settings').findOne({ _id: 'site_settings' });

        return NextResponse.json({ success: true, data: updatedSettings });
    } catch (error) {
        console.error('Error updating settings:', error);
        return NextResponse.json({ error: 'Failed to update settings: ' + error.message }, { status: 500 });
    }
}