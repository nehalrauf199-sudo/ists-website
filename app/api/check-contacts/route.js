import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('ists');

        const contacts = await db.collection('contacts').find({}).sort({ submittedAt: -1 }).toArray();

        return NextResponse.json({
            success: true,
            count: contacts.length,
            contacts: contacts
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}