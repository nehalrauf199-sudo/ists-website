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
        return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 });
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

        return NextResponse.json({ success: true, id: result.insertedId, course: newCourse });
    } catch (error) {
        console.error('Error creating course:', error);
        return NextResponse.json({ error: 'Failed to create course' }, { status: 500 });
    }
}

// UPDATE course
export async function PUT(req) {
    try {
        const body = await req.json();
        const { id, ...updateData } = body;
        const client = await clientPromise;
        const db = client.db('ists');

        const result = await db.collection('courses').updateOne(
            { _id: new ObjectId(id) },
            {
                $set: {
                    ...updateData,
                    updatedAt: new Date()
                }
            }
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error updating course:', error);
        return NextResponse.json({ error: 'Failed to update course' }, { status: 500 });
    }
}

// DELETE course
export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        const client = await clientPromise;
        const db = client.db('ists');

        await db.collection('courses').deleteOne({ _id: new ObjectId(id) });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting course:', error);
        return NextResponse.json({ error: 'Failed to delete course' }, { status: 500 });
    }
}