import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import clientPromise from '@/app/lib/mongodb';

export async function POST(req) {
    try {
        const formData = await req.formData();

        const course = formData.get('course');
        const name = formData.get('name');
        const phone = formData.get('phone');
        const email = formData.get('email');
        const education = formData.get('education');
        const experience = formData.get('experience');
        const message = formData.get('message');
        const file = formData.get('cv');

        console.log('Registration received:', { course, name, phone, email });

        // Validate required fields
        if (!course || !name || !phone || !email || !education) {
            return NextResponse.json(
                { error: 'Please fill all required fields' },
                { status: 400 }
            );
        }

        // Handle file upload - convert to base64 for MongoDB
        let cvData = null;
        let cvFileName = null;

        if (file && file.size > 0) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);
            cvData = buffer.toString('base64');
            cvFileName = file.name;
        }

        // Save to database
        const client = await clientPromise;
        const db = client.db('ists');

        await db.collection('registrations').insertOne({
            course,
            name,
            phone,
            email,
            education,
            experience: experience || '',
            message: message || '',
            cvFileName: cvFileName,
            cvData: cvData, // Store CV as base64 in database
            registeredAt: new Date(),
            status: 'pending'
        });

        console.log('Saved to database');

        // Send email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Email to admin
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: `New Registration: ${name} - ${course}`,
            html: `
                <h2>New Course Registration</h2>
                <p><strong>Course:</strong> ${course}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Education:</strong> ${education}</p>
                <p><strong>Experience:</strong> ${experience || 'Not provided'}</p>
                <p><strong>Message:</strong> ${message || 'No message'}</p>
                <p><strong>CV Attached:</strong> ${cvFileName || 'No CV uploaded'}</p>
                <hr>
                <p>Registration Date: ${new Date().toLocaleString()}</p>
            `
        });

        // Confirmation to student
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: `Registration Confirmation: ${course} - ISTS`,
            html: `
                <h2>Thank You for Registering!</h2>
                <p>Dear ${name},</p>
                <p>Thank you for registering for <strong>${course}</strong> with ISTS.</p>
                <p>Our team will contact you within 24-48 hours.</p>
                <p>Best regards,<br>ISTS Team</p>
            `
        });

        return NextResponse.json({
            success: true,
            message: 'Registration submitted successfully!'
        });

    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { error: 'Failed to submit registration: ' + error.message },
            { status: 500 }
        );
    }
}