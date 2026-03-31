import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('ists');
        const courses = await db.collection('courses').find({}).sort({ category: 1, name: 1 }).toArray();
        return NextResponse.json(courses);
    } catch (error) {
        console.error('GET Error:', error);
        return NextResponse.json([]);
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const client = await clientPromise;
        const db = client.db('ists');
        const newCourse = { ...body, createdAt: new Date(), updatedAt: new Date() };
        const result = await db.collection('courses').insertOne(newCourse);
        return NextResponse.json({ success: true, id: result.insertedId });
    } catch (error) {
        console.error('POST Error:', error);
        return NextResponse.json({ error: 'Failed to create course' }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const body = await req.json();
        const { id, ...updateData } = body;

        if (!id) {
            return NextResponse.json({ error: 'Course ID is required' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('ists');

        const result = await db.collection('courses').updateOne(
            { _id: new ObjectId(id) },
            { $set: { ...updateData, updatedAt: new Date() } }
        );

        if (result.matchedCount === 0) {
            return NextResponse.json({ error: 'Course not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('PUT Error:', error);
        return NextResponse.json({ error: 'Failed to update course' }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get('id');

        console.log('DELETE request received for ID:', id);

        if (!id) {
            return NextResponse.json({ error: 'Course ID is required' }, { status: 400 });
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
        console.error('DELETE Error:', error);
        return NextResponse.json({ error: 'Failed to delete course: ' + error.message }, { status: 500 });
    }
}