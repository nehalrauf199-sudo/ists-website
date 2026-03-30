import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('ists');

        const reviews = await db.collection('reviews')
            .find({})
            .sort({ createdAt: -1 })
            .toArray();

        return NextResponse.json(reviews);
    } catch (error) {
        return NextResponse.json([]);
    }
}

export async function PUT(req) {
    try {
        const { id, action } = await req.json();
        const client = await clientPromise;
        const db = client.db('ists');

        const status = action === 'approve' ? 'approved' : 'rejected';

        await db.collection('reviews').updateOne(
            { _id: new ObjectId(id) },
            { $set: { status, updatedAt: new Date() } }
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update review' }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        const client = await clientPromise;
        const db = client.db('ists');

        await db.collection('reviews').deleteOne({ _id: new ObjectId(id) });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete review' }, { status: 500 });
    }
}