import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';
import { ObjectId } from 'mongodb';

// GET all courses
export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('ists');

        const courses = await db.collection('courses')
            .find({})
            .sort({ category: 1, name: 1 })
            .toArray();

        return NextResponse.json(courses);
    } catch (error) {
        console.error('Error fetching courses:', error);
        return NextResponse.json([]);
    }
}

// POST new course
export async function POST(req) {
    try {
        const body = await req.json();
        const client = await clientPromise;
        const db = client.db('ists');

        const newCourse = {
            ...body,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        const result = await db.collection('courses').insertOne(newCourse);

        return NextResponse.json({ success: true, id: result.insertedId });
    } catch (error) {
        console.error('Error creating course:', error);
        return NextResponse.json({ error: 'Failed to create course' }, { status: 500 });
    }
}

// PUT update course - FIXED
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
        console.error('Error updating course:', error);
        return NextResponse.json({ error: 'Failed to update course' }, { status: 500 });
    }
}

// DELETE course - FIXED
export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'Course ID is required' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('ists');

        const result = await db.collection('courses').deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return NextResponse.json({ error: 'Course not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting course:', error);
        return NextResponse.json({ error: 'Failed to delete course' }, { status: 500 });
    }
}