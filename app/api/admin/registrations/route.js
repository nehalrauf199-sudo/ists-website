import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';
import { ObjectId } from 'mongodb';

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
        return NextResponse.json(
            { error: 'Failed to fetch registrations', details: error.message },
            { status: 500 }
        );
    }
}

export async function DELETE(req) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get('id');
        if (!id) {
            return NextResponse.json({ error: 'No ID provided' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('ists');
        const result = await db.collection('registrations').deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return NextResponse.json({ error: 'Registration not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting registration:', error);
        return NextResponse.json(
            { error: 'Failed to delete registration', details: error.message },
            { status: 500 }
        );
    }
}