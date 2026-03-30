import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('ists');

        // Update email to raufh137@gmail.com
        const result = await db.collection('settings').updateOne(
            { _id: 'site_settings' },
            {
                $set: {
                    email: 'raufh137@gmail.com',
                    phone: '+92 316 1720551',
                    officeHours: '24/7 Available',
                    facebook: 'https://www.facebook.com/share/1HmBAuXeg3/',
                    instagram: 'https://www.instagram.com/ists_official',
                    whatsapp: 'https://wa.me/923161720551',
                    footerText: 'Institute of Safety & Technical Studies',
                    address: 'Pakistan',
                    updatedAt: new Date()
                }
            },
            { upsert: true }
        );

        // Get the updated settings
        const settings = await db.collection('settings').findOne({ _id: 'site_settings' });

        return NextResponse.json({
            success: true,
            message: 'Settings updated successfully!',
            settings: settings
        });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({
            error: 'Failed to update settings',
            details: error.message
        }, { status: 500 });
    }
}
