import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('ists');

        // Get all OSHA courses
        const allCourses = await db.collection('courses').find({ category: 'OSHA' }).toArray();

        // Find duplicates by name
        const seen = new Set();
        const duplicates = [];
        const unique = [];

        for (const course of allCourses) {
            if (seen.has(course.name)) {
                duplicates.push(course);
            } else {
                seen.add(course.name);
                unique.push(course);
            }
        }

        // Delete duplicates
        let deletedCount = 0;
        for (const dup of duplicates) {
            await db.collection('courses').deleteOne({ _id: dup._id });
            deletedCount++;
        }

        return NextResponse.json({
            success: true,
            total: allCourses.length,
            unique: unique.length,
            duplicates: duplicates.length,
            deleted: deletedCount,
            message: `Cleaned ${deletedCount} duplicate courses. Now you have ${unique.length} unique OSHA courses.`
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}