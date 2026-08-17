import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Registration from '@/models/Registration';

export async function POST(request) {
    try {
        await connectDB();

        const formData = await request.formData();

        // Get text fields
        const course = formData.get('course');
        const name = formData.get('name');
        const phone = formData.get('phone');
        const email = formData.get('email');
        const education = formData.get('education');
        const experience = formData.get('experience');
        const message = formData.get('message');

        // Get files
        const cvFile = formData.get('cv');
        const idFrontFile = formData.get('idFront');
        const idBackFile = formData.get('idBack');
        const passportFile = formData.get('passport');

        // Validate required fields
        if (!name || !phone || !email || !education || !course) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        if (!cvFile) {
            return NextResponse.json(
                { error: 'CV/Resume is required' },
                { status: 400 }
            );
        }

        // Helper function to convert file to base64
        const fileToBase64 = async (file) => {
            if (!file) return null;
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const base64 = buffer.toString('base64');
            const mimeType = file.type || 'application/octet-stream';
            return `data:${mimeType};base64,${base64}`;
        };

        // Convert files to base64
        const cvBase64 = await fileToBase64(cvFile);
        const idFrontBase64 = await fileToBase64(idFrontFile);
        const idBackBase64 = await fileToBase64(idBackFile);
        const passportBase64 = await fileToBase64(passportFile);

        // Create registration with base64 files
        const registration = new Registration({
            course,
            name,
            phone,
            email,
            education,
            experience,
            message,
            cv: cvBase64,
            cvFileName: cvFile.name,
            cvFileType: cvFile.type,
            idFront: idFrontBase64,
            idFrontFileName: idFrontFile?.name,
            idBack: idBackBase64,
            idBackFileName: idBackFile?.name,
            passport: passportBase64,
            passportFileName: passportFile?.name,
            status: 'pending'
        });

        await registration.save();

        return NextResponse.json(
            { message: 'Registration submitted successfully' },
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