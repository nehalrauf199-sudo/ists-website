import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('ists');
        const courses = await db.collection('courses').find({}).toArray();
        return NextResponse.json(courses);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const client = await clientPromise;
        const db = client.db('ists');
        const result = await db.collection('courses').insertOne(body);
        return NextResponse.json({ success: true, id: result.insertedId });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const body = await req.json();
        const { id, ...data } = body;
        const client = await clientPromise;
        const db = client.db('ists');
        await db.collection('courses').updateOne(
            { _id: new ObjectId(id) },
            { $set: data }
        );
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get('id');

        console.log('DELETE called with ID:', id);

        if (!id) {
            return NextResponse.json({ error: 'No ID provided' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('ists');

        const result = await db.collection('courses').deleteOne({ _id: new ObjectId(id) });

        console.log('Delete result:', result);

        if (result.deletedCount === 0) {
            return NextResponse.json({ error: 'Course not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, deletedCount: result.deletedCount });
    } catch (error) {
        console.error('DELETE error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}