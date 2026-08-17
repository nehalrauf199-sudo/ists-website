import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Review from '@/models/Review';

// GET - Fetch all reviews
export async function GET() {
    try {
        await connectDB();
        const reviews = await Review.find({}).sort({ createdAt: -1 });
        return NextResponse.json(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
    }
}

// PUT - Approve or reject a review
export async function PUT(request) {
    try {
        const { id, action } = await request.json();

        if (!id || !action) {
            return NextResponse.json({ error: 'ID and action required' }, { status: 400 });
        }

        if (action !== 'approve' && action !== 'reject') {
            return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
        }

        await connectDB();
        const status = action === 'approve' ? 'approved' : 'rejected';
        const review = await Review.findByIdAndUpdate(id, { status }, { new: true });

        if (!review) {
            return NextResponse.json({ error: 'Review not found' }, { status: 404 });
        }

        return NextResponse.json(review);
    } catch (error) {
        console.error('Error updating review:', error);
        return NextResponse.json({ error: 'Failed to update review' }, { status: 500 });
    }
}

// DELETE - Delete a review
export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'ID required' }, { status: 400 });
        }

        await connectDB();
        await Review.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Review deleted successfully' });
    } catch (error) {
        console.error('Error deleting review:', error);
        return NextResponse.json({ error: 'Failed to delete review' }, { status: 500 });
    }
}