import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import clientPromise from '@/app/lib/mongodb';

const resend = new Resend(process.env.RESEND_API_KEY);

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
            cvData: cvData,
            registeredAt: new Date(),
            status: 'pending'
        });

        console.log('Saved to database');

        // Get sender email from environment (fallback to site settings if needed)
        const senderEmail = process.env.EMAIL_FROM || 'Admissions@ists-institute.com';
        const adminEmail = process.env.ADMIN_EMAIL || senderEmail;

        console.log('Sending emails from:', senderEmail);

        // ─── Send notification to admin ───
        await resend.emails.send({
            from: `ISTS Institute <${senderEmail}>`,
            to: [adminEmail],
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
            `,
        });

        // ─── Send confirmation to student ───
        await resend.emails.send({
            from: `ISTS Institute <${senderEmail}>`,
            to: [email],
            subject: `Registration Confirmation: ${course} - ISTS`,
            html: `
                <h2>Thank You for Registering!</h2>
                <p>Dear ${name},</p>
                <p>Thank you for registering for <strong>${course}</strong> with ISTS.</p>
                <p>Our team will contact you within 24-48 hours.</p>
                <br>
                <p><strong>Your Registration Details:</strong></p>
                <p><strong>Course:</strong> ${course}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Education:</strong> ${education}</p>
                ${experience ? `<p><strong>Experience:</strong> ${experience}</p>` : ''}
                ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
                <br>
                <p>Best regards,<br>ISTS Team</p>
                <hr>
                <p style="font-size: 12px; color: #666;">This is an automated confirmation. Please do not reply to this email.</p>
            `,
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