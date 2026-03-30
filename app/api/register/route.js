import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import clientPromise from '@/app/lib/mongodb';

export async function POST(req) {
    try {
        console.log('📝 Registration API called');

        const formData = await req.formData();

        const course = formData.get('course');
        const name = formData.get('name');
        const phone = formData.get('phone');
        const email = formData.get('email');
        const education = formData.get('education');
        const experience = formData.get('experience');
        const message = formData.get('message');
        const file = formData.get('cv');

        console.log('📋 Form data:', { course, name, phone, email });

        // Validate required fields
        if (!course || !name || !phone || !email || !education) {
            return NextResponse.json(
                { error: 'Please fill all required fields' },
                { status: 400 }
            );
        }

        // Handle file upload
        let fileInfo = null;

        if (file && file.size > 0) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const uploadDir = path.join(process.cwd(), 'uploads');
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            const timestamp = Date.now();
            const originalName = file.name;
            const fileName = `${timestamp}_${originalName}`;
            const filePath = path.join(uploadDir, fileName);

            fs.writeFileSync(filePath, buffer);

            fileInfo = {
                originalName: originalName,
                fileName: fileName,
                size: file.size,
                type: file.type
            };

            console.log('📎 File saved:', fileName);
        }

        // ========== SAVE TO DATABASE ==========
        try {
            const client = await clientPromise;
            const db = client.db('ists');

            const registrationData = {
                course: course,
                name: name,
                phone: phone,
                email: email,
                education: education,
                experience: experience || '',
                message: message || '',
                cvFileName: fileInfo ? fileInfo.fileName : null,
                cvOriginalName: fileInfo ? fileInfo.originalName : null,
                registeredAt: new Date(),
                status: 'pending'
            };

            const result = await db.collection('registrations').insertOne(registrationData);
            console.log('✅ Registration saved to database! ID:', result.insertedId);

        } catch (dbError) {
            console.error('❌ Database error:', dbError);
        }

        // ========== SEND EMAILS ==========
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Email to admin
        const adminEmailContent = `
            <h2>New Course Registration</h2>
            <h3 style="color: #1e3a8a;">Student Information:</h3>
            <table style="border-collapse: collapse; width: 100%;">
                <tr><td style="padding: 8px;"><strong>Course:</strong></td><td>${course}</td></tr>
                <tr><td style="padding: 8px;"><strong>Name:</strong></td><td>${name}</td></tr>
                <tr><td style="padding: 8px;"><strong>Phone:</strong></td><td>${phone}</td></tr>
                <tr><td style="padding: 8px;"><strong>Email:</strong></td><td>${email}</td></tr>
                <tr><td style="padding: 8px;"><strong>Education:</strong></td><td>${education}</td></tr>
                <tr><td style="padding: 8px;"><strong>Experience:</strong></td><td>${experience || 'Not provided'}</td></tr>
                <tr><td style="padding: 8px;"><strong>Message:</strong></td><td>${message || 'No message'}</td></tr>
            </table>
            ${fileInfo ? `<p><strong>CV Attached:</strong> ${fileInfo.originalName}</p>` : ''}
            <hr />
            <p>Registration Date: ${new Date().toLocaleString()}</p>
        `;

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: `New Registration: ${name} - ${course}`,
            html: adminEmailContent,
            attachments: fileInfo ? [{
                filename: fileInfo.originalName,
                path: path.join(process.cwd(), 'uploads', fileInfo.fileName)
            }] : []
        });

        // Confirmation email to student
        const studentEmailContent = `
            <div style="font-family: Arial, sans-serif;">
                <h2 style="color: #1e3a8a;">Thank You for Registering!</h2>
                <p>Dear ${name},</p>
                <p>Thank you for registering for <strong>${course}</strong> with ISTS.</p>
                <p>Our team will contact you within 24-48 hours.</p>
                <p>Best regards,<br>ISTS Team</p>
            </div>
        `;

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: `Registration Confirmation: ${course} - ISTS`,
            html: studentEmailContent
        });

        console.log('📧 Emails sent successfully');

        return NextResponse.json({
            success: true,
            message: 'Registration submitted successfully!'
        });

    } catch (error) {
        console.error('❌ Registration error:', error);
        return NextResponse.json(
            { error: 'Failed to submit registration. Please try again.' },
            { status: 500 }
        );
    }
}