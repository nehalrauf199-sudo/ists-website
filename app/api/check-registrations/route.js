import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('ists');

        // Get all registrations
        const registrations = await db.collection('registrations').find({}).toArray();

        return NextResponse.json({
            success: true,
            count: registrations.length,
            registrations: registrations
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}