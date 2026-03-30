import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('ists');

        let settings = await db.collection('settings').findOne({ _id: 'site_settings' });

        if (!settings) {
            settings = {
                phone: '+92 316 1720551',
                email: 'info@ists.com',
                officeHours: '24/7 Available',
                facebook: 'https://www.facebook.com/share/1HmBAuXeg3/',
                instagram: 'https://www.instagram.com/ists_official',
                whatsapp: 'https://wa.me/923161720551',
                footerText: 'Institute of Safety & Technical Studies',
                address: 'Pakistan'
            };
        }

        return NextResponse.json(settings);
    } catch (error) {
        console.error('Error fetching settings:', error);
        return NextResponse.json({
            phone: '+92 316 1720551',
            email: 'info@ists.com',
            officeHours: '24/7 Available',
            footerText: 'Institute of Safety & Technical Studies'
        });
    }
}