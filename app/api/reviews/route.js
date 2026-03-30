import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';
import nodemailer from 'nodemailer';

// GET approved reviews
export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('ists');

        const reviews = await db.collection('reviews')
            .find({ status: 'approved' })
            .sort({ createdAt: -1 })
            .toArray();

        return NextResponse.json(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return NextResponse.json([]);
    }
}

// POST new review
export async function POST(req) {
    try {
        const { name, email, course, rating, comment, image } = await req.json();

        const client = await clientPromise;
        const db = client.db('ists');

        // Save review pending approval
        const review = {
            name,
            email,
            course,
            rating,
            comment,
            image: image || 'https://randomuser.me/api/portraits/men/default.jpg',
            status: 'pending',
            createdAt: new Date()
        };

        await db.collection('reviews').insertOne(review);

        // Notify admin
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'raufh137@gmail.com',
            subject: `New Review Pending Approval from ${name}`,
            html: `
                <h2>New Student Review</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Course:</strong> ${course}</p>
                <p><strong>Rating:</strong> ${rating}/5</p>
                <p><strong>Review:</strong> ${comment}</p>
                <hr />
                <p>Go to admin dashboard to approve or reject this review.</p>
            `
        });

        return NextResponse.json({
            success: true,
            message: 'Thank you for your review! It will be published after admin approval.'
        });

    } catch (error) {
        console.error('Review error:', error);
        return NextResponse.json({ error: 'Failed to submit review' }, { status: 500 });
    }
}