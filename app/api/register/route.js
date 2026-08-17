import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
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

        // Create uploads directory if it doesn't exist
        const uploadDir = path.join(process.cwd(), 'public/uploads');
        await mkdir(uploadDir, { recursive: true });

        // Helper function to save file
        const saveFile = async (file, prefix) => {
            if (!file) return null;

            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            // Create unique filename
            const timestamp = Date.now();
            const ext = path.extname(file.name);
            const filename = `${prefix}_${timestamp}${ext}`;
            const filepath = path.join(uploadDir, filename);

            await writeFile(filepath, buffer);
            return `/uploads/${filename}`;
        };

        // Save all files
        const cvPath = await saveFile(cvFile, 'cv');
        const idFrontPath = await saveFile(idFrontFile, 'id_front');
        const idBackPath = await saveFile(idBackFile, 'id_back');
        const passportPath = await saveFile(passportFile, 'passport');

        // Create registration record
        const registration = new Registration({
            course,
            name,
            phone,
            email,
            education,
            experience,
            message,
            cv: cvPath,
            idFront: idFrontPath,
            idBack: idBackPath,
            passport: passportPath,
            status: 'pending'
        });

        await registration.save();

        return NextResponse.json(
            { message: 'Registration submitted successfully', data: registration },
            { status: 201 }
        );

    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}