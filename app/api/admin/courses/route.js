import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

// Simple in‑memory cache
let cachedCourses = null;
let cacheTimestamp = 0;
const CACHE_TTL = 60000; // 60 seconds

export async function GET() {
    try {
        const now = Date.now();
        if (cachedCourses && (now - cacheTimestamp) < CACHE_TTL) {
            return NextResponse.json(cachedCourses);
        }

        const client = await clientPromise;
        const db = client.db('ists');
        // Only fetch fields needed for the frontend course cards
        const courses = await db.collection('courses')
            .find({}, { projection: { name: 1, category: 1, hours: 1, slug: 1 } })
            .toArray();

        cachedCourses = courses;
        cacheTimestamp = now;

        return NextResponse.json(courses);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}