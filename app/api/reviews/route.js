import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Review from '@/models/Review';

// GET - Fetch approved reviews for frontend
export async function GET() {
    try {
        await connectDB();

        // Only fetch approved reviews
        const reviews = await Review.find({ status: 'approved' })
            .sort({ createdAt: -1 })
            .limit(10);

        return NextResponse.json(reviews);

    } catch (error) {
        console.error('Error fetching reviews:', error);
        return NextResponse.json(
            { error: 'Failed to fetch reviews' },
            { status: 500 }
        );
    }
}

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

        // Create review with pending status
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