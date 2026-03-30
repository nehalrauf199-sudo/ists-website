import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { email } = await req.json();

        // Check if email matches admin email
        if (email !== 'raufh137@gmail.com') {
            return NextResponse.json({ error: 'Email not recognized' }, { status: 404 });
        }

        // Email configuration
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Send reset email
        const resetEmailContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px;">
                <h2 style="color: #1e3a8a;">Admin Password Reset</h2>
                <p>You requested to reset your admin password for ISTS website.</p>
                <p><strong>Your current admin password is: admin123</strong></p>
                <p>To change your password, please edit the admin page file:</p>
                <p><code>app/admin/page.js</code> and change the ADMIN_PASSWORD variable.</p>
                <p>If you didn't request this, please ignore this email.</p>
                <hr />
                <p style="font-size: 12px; color: #666;">ISTS Admin Panel</p>
            </div>
        `;

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'ISTS Admin - Password Reset Request',
            html: resetEmailContent
        });

        return NextResponse.json({ success: true, message: 'Reset email sent!' });

    } catch (error) {
        console.error('Reset error:', error);
        return NextResponse.json({ error: 'Failed to send reset email' }, { status: 500 });
    }
}