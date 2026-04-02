import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import clientPromise from '@/app/lib/mongodb';

export async function POST(req) {
    try {
        console.log('📝 Contact API called');

        const { name, email, phone, course, message } = await req.json();

        console.log('📋 Contact data:', { name, email, phone, course });

        // Validate required fields
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: 'Please fill all required fields' },
                { status: 400 }
            );
        }

        // ========== SAVE TO DATABASE ==========
        let savedContact = null;
        try {
            const client = await clientPromise;
            const db = client.db('ists');

            const contactData = {
                name: name,
                email: email,
                phone: phone,
                course: course || 'Not specified',
                message: message,
                submittedAt: new Date(),
                status: 'unread'
            };

            const result = await db.collection('contacts').insertOne(contactData);
            savedContact = result;
            console.log('✅ Contact saved to database! ID:', result.insertedId);

        } catch (dbError) {
            console.error('❌ Database error:', dbError);
        }

        // Get sender email from Site Settings
        const client = await clientPromise;
        const db = client.db('ists');
        const settings = await db.collection('settings').findOne({ _id: 'site_settings' });
        const senderEmail = settings?.email || process.env.EMAIL_USER;
        const adminEmail = process.env.ADMIN_EMAIL || senderEmail;

        console.log('Sending emails from:', senderEmail);

        // ========== SEND EMAILS ==========
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: senderEmail,
                pass: process.env.EMAIL_PASS
            }
        });

        // Email to admin
        const adminEmailContent = `
            <h2>New Contact Form Submission</h2>
            <table style="border-collapse: collapse; width: 100%;">
                <tr><td style="padding: 8px;"><strong>Name:</strong></td><td>${name}</td>
                <tr><td style="padding: 8px;"><strong>Email:</strong></td><td>${email}</td>
                <tr><td style="padding: 8px;"><strong>Phone:</strong></td><td>${phone}</td>
                <tr><td style="padding: 8px;"><strong>Course:</strong></td><td>${course || 'Not specified'}</td>
                <tr><td style="padding: 8px;"><strong>Message:</strong></td><td>${message}</td>
            </table>
            <hr />
            <p>Submitted on: ${new Date().toLocaleString()}</p>
        `;

        await transporter.sendMail({
            from: `"ISTS Institute" <${senderEmail}>`,
            to: adminEmail,
            subject: `New Contact Message from ${name}`,
            html: adminEmailContent
        });

        // Auto-reply to user
        const userEmailContent = `
            <div style="font-family: Arial, sans-serif;">
                <h2 style="color: #1e3a8a;">Thank You for Contacting ISTS</h2>
                <p>Dear ${name},</p>
                <p>We have received your message and will respond within 24 hours.</p>
                <p><strong>Your message:</strong> ${message}</p>
                <p>Best regards,<br>ISTS Team</p>
            </div>
        `;

        await transporter.sendMail({
            from: `"ISTS Institute" <${senderEmail}>`,
            to: email,
            subject: 'We received your message - ISTS',
            html: userEmailContent
        });

        console.log('📧 Emails sent successfully');

        return NextResponse.json({
            success: true,
            message: 'Message sent successfully!'
        });

    } catch (error) {
        console.error('❌ Contact error:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again.' },
            { status: 500 }
        );
    }
}