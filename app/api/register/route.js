import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Registration from '@/models/Registration';

export async function POST(request) {
    try {
        await connectDB();

        const {
            course, name, phone, email, education, experience, message,
            cvUrl, cvFileName, cvFileSize,
            idDocumentUrl, idDocumentFileName, idDocumentFileSize
        } = await request.json();

        // Validate CV URL is required
        if (!cvUrl) {
            return NextResponse.json(
                { error: 'CV is required. Please upload your CV.' },
                { status: 400 }
            );
        }

        // Create registration with file URLs
        const registration = new Registration({
            course,
            name,
            phone,
            email,
            education,
            experience,
            message,
            cvUrl,
            cvFileName,
            cvFileSize,
            idDocumentUrl,
            idDocumentFileName,
            idDocumentFileSize,
            status: 'pending'
        });

        await registration.save();

        return NextResponse.json(
            {
                message: 'Registration submitted successfully',
                registrationId: registration._id
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { error: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}