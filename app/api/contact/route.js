import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Contact from '@/models/Contact';

export async function POST(request) {
    try {
        await connectDB();

        const { name, email, phone, course, message } = await request.json();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // Create contact
        const contact = new Contact({
            name,
            email,
            phone,
            course,
            message,
            submittedAt: new Date()
        });

        await contact.save();

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 201 }
        );

    } catch (error) {
        console.error('Contact error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}