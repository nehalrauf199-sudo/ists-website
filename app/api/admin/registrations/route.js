import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('ists');

        const registrations = await db.collection('registrations')
            .find({})
            .sort({ registeredAt: -1 })
            .toArray();

        return NextResponse.json(registrations);
    } catch (error) {
        console.error('Error fetching registrations:', error);
        return NextResponse.json({ error: 'Failed to fetch registrations' }, { status: 500 });
    }
}