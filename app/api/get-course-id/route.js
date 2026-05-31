import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('ists');
        // Get the first course (any course) and return only its _id and name
        const course = await db.collection('courses').findOne({}, { projection: { _id: 1, name: 1 } });
        if (!course) {
            return NextResponse.json({ error: 'No courses found' }, { status: 404 });
        }
        return NextResponse.json({ id: course._id.toString(), name: course.name });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}