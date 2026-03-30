import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('ists');
        const courses = await db.collection('courses').find().limit(5).toArray();

        return NextResponse.json({
            success: true,
            count: courses.length,
            sample: courses.map(c => c.name)
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}