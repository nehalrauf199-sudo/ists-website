import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Review from '@/models/Review';

// POST - Submit a new review
export async function POST(request) {
    try {
        await connectDB();

        const { name, email, course, rating, comment } = await request.json();

        // Validate required fields
        if (!name || !email || !course || !rating || !comment) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Create review
        const review = new Review({
            name,
            email,
            course,
            rating,
            comment,
            status: 'pending' // Admin must approve
        });

        await review.save();

        return NextResponse.json(
            { message: 'Review submitted successfully' },
            { status: 201 }
        );

    } catch (error) {
        console.error('Review error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}