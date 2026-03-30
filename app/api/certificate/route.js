import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
    try {
        const { registrationId, studentName, courseName, completionDate, studentEmail } = await req.json();

        const client = await clientPromise;
        const db = client.db('ists');

        const settings = await db.collection('settings').findOne({ _id: 'site_settings' });

        const directorName = settings?.directorName || 'Arshan Rauf';
        const signaturePath = settings?.signaturePath || null;

        const certificateId = `ISTS-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

        await db.collection('certificates').insertOne({
            certificateId,
            registrationId,
            studentName,
            courseName,
            completionDate: new Date(completionDate),
            issuedAt: new Date(),
            studentEmail,
            status: 'active'
        });

        // Get base URL
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ||
            (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

        // Get logo as base64
        let logoBase64 = '';
        const logoPath = path.join(process.cwd(), 'public', 'logo.jpeg');
        if (fs.existsSync(logoPath)) {
            const logoBuffer = fs.readFileSync(logoPath);
            logoBase64 = `data:image/jpeg;base64,${logoBuffer.toString('base64')}`;
        }

        // Get signature as base64
        let signatureBase64 = '';
        if (signaturePath) {
            const fullSignaturePath = path.join(process.cwd(), 'public', signaturePath);
            if (fs.existsSync(fullSignaturePath)) {
                const sigBuffer = fs.readFileSync(fullSignaturePath);
                signatureBase64 = `data:image/png;base64,${sigBuffer.toString('base64')}`;
            }
        }

        const certificateViewUrl = `${baseUrl}/api/certificate/view?id=${certificateId}`;

        // Professional Certificate HTML - NO SAVE BUTTON
        const certificateHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Certificate of Completion - ISTS</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            background: #e5e7eb;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 40px;
            font-family: 'Times New Roman', 'Georgia', serif;
        }
        
        .certificate-container {
            max-width: 950px;
            width: 100%;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            overflow: hidden;
        }
        
        /* 4-SIDE GRADIENT BORDER - BLUE + ORANGE */
        .four-side-border {
            background: linear-gradient(135deg, #1e3a8a, #f97316, #1e3a8a, #f97316);
            padding: 12px;
        }
        
        .certificate-white {
            background: white;
            border-radius: 12px;
            padding: 45px 55px;
        }
        
        /* Logo */
        .logo-img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            display: block;
            margin: 0 auto;
            border: 3px solid #f97316;
        }
        
        .institute-name {
            text-align: center;
            font-size: 26px;
            font-weight: bold;
            color: #1e3a8a;
            margin-top: 15px;
        }
        
        .institute-tagline {
            text-align: center;
            font-size: 11px;
            color: #f97316;
            margin-top: 5px;
        }
        
        .divider {
            width: 80px;
            height: 2px;
            background: linear-gradient(90deg, #1e3a8a, #f97316);
            margin: 12px auto;
        }
        
        /* Title */
        .cert-title {
            text-align: center;
            font-size: 38px;
            font-weight: bold;
            color: #f97316;
            letter-spacing: 3px;
            margin: 30px 0 15px;
        }
        
        .present-text {
            text-align: center;
            font-size: 16px;
            color: #4b5563;
        }
        
        /* Student Name with Lines */
        .student-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            margin: 30px 0;
        }
        
        .line-left {
            width: 80px;
            height: 2px;
            background: linear-gradient(90deg, #f97316, #1e3a8a);
        }
        
        .student-name {
            font-size: 48px;
            font-weight: bold;
            color: #1e3a8a;
            letter-spacing: 2px;
        }
        
        .line-right {
            width: 80px;
            height: 2px;
            background: linear-gradient(90deg, #1e3a8a, #f97316);
        }
        
        /* Course */
        .course-text {
            text-align: center;
            font-size: 15px;
            color: #4b5563;
        }
        
        .course-name {
            text-align: center;
            font-size: 26px;
            font-weight: bold;
            color: #f97316;
            margin: 12px 0;
            display: inline-block;
            width: 100%;
        }
        
        .course-name span {
            border-bottom: 2px solid #1e3a8a;
            padding-bottom: 5px;
        }
        
        /* Footer */
        .footer {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-top: 45px;
        }
        
        .date-section {
            text-align: left;
        }
        
        .date-label {
            font-size: 11px;
            color: #6b7280;
        }
        
        .date-value {
            font-size: 13px;
            color: #1e3a8a;
            font-weight: 500;
            margin-top: 5px;
        }
        
        /* Signature - LARGER SIZE */
        .signature-section {
            text-align: center;
            width: 280px;
        }
        
        .signature-img {
            height: 100px;
            margin-bottom: 8px;
        }
        
        .signature-line {
            border-bottom: 2px solid #1e3a8a;
            width: 100%;
            margin-bottom: 8px;
        }
        
        .signature-name {
            font-weight: bold;
            font-size: 16px;
            color: #1e3a8a;
            margin-top: 10px;
        }
        
        .signature-title {
            font-size: 12px;
            color: #6b7280;
        }
        
        @media print {
            body {
                background: white;
                padding: 0;
                margin: 0;
            }
            .certificate-container {
                box-shadow: none;
                margin: 0;
                padding: 0;
            }
            .four-side-border {
                padding: 12px;
                print-color-adjust: exact;
                -webkit-print-color-adjust: exact;
            }
            .certificate-white {
                padding: 35px;
            }
        }
        
        @media (max-width: 700px) {
            .certificate-white {
                padding: 25px;
            }
            .student-name {
                font-size: 28px;
            }
            .line-left, .line-right {
                width: 40px;
            }
            .institute-name {
                font-size: 18px;
            }
            .cert-title {
                font-size: 24px;
            }
            .course-name {
                font-size: 20px;
            }
            .logo-img {
                width: 70px;
                height: 70px;
            }
            .footer {
                flex-direction: column;
                align-items: center;
                gap: 30px;
            }
            .date-section {
                text-align: center;
            }
            .signature-img {
                height: 70px;
            }
        }
    </style>
</head>
<body>
    <div class="certificate-container">
        <div class="four-side-border">
            <div class="certificate-white">
                <!-- Logo -->
                <div>
                    ${logoBase64 ? `<img src="${logoBase64}" class="logo-img">` : '<div style="width:100px;height:100px;background:#1e3a8a;border-radius:50%;margin:0 auto;"></div>'}
                    <div class="institute-name">INSTITUTE OF SAFETY & TECHNICAL STUDIES</div>
                    <div class="institute-tagline">Internationally Recognized Training Provider</div>
                    <div class="divider"></div>
                </div>
                
                <!-- Title -->
                <div class="cert-title">CERTIFICATE OF COMPLETION</div>
                <div class="present-text">This is to certify that</div>
                
                <!-- Student Name with Lines -->
                <div class="student-wrapper">
                    <div class="line-left"></div>
                    <div class="student-name">${studentName.toUpperCase()}</div>
                    <div class="line-right"></div>
                </div>
                
                <!-- Course -->
                <div class="course-text">has successfully completed the course</div>
                <div class="course-name"><span>${courseName}</span></div>
                <div class="course-text">with demonstrated excellence in occupational safety and technical studies</div>
                
                <!-- Footer -->
                <div class="footer">
                    <div class="date-section">
                        <div class="date-label">ISSUED ON</div>
                        <div class="date-value">${new Date(completionDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    </div>
                    <div class="signature-section">
                        ${signatureBase64 ? `<img src="${signatureBase64}" class="signature-img">` : '<div class="signature-line"></div>'}
                        <div class="signature-name">${directorName}</div>
                        <div class="signature-title">Director</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;

        // Send email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const emailContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: linear-gradient(135deg, #1e3a8a, #f97316); padding: 30px; text-align: center; border-radius: 15px 15px 0 0;">
                    <h1 style="color: white; margin: 0;">🎓 Congratulations!</h1>
                    <p style="color: white; margin-top: 10px;">Your Certificate is Ready</p>
                </div>
                <div style="background: white; padding: 30px; border-radius: 0 0 15px 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                    <h2 style="color: #1e3a8a;">Dear ${studentName},</h2>
                    <p>Congratulations on successfully completing <strong>${courseName}</strong>!</p>
                    <p><strong>Certificate ID:</strong> ${certificateId}</p>
                    <p><strong>Completion Date:</strong> ${new Date(completionDate).toLocaleDateString()}</p>
                    
                    <div style="background: #f0f9ff; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #f97316;">
                        <p style="margin: 0; color: #1e3a8a;"><strong>📱 View Your Certificate:</strong></p>
                        <p style="margin: 5px 0 0; font-size: 14px;">Click the button below to view your certificate</p>
                    </div>
                    
                    <div style="text-align: center; margin: 25px 0;">
                        <a href="${certificateViewUrl}" target="_blank" 
                           style="display: inline-block; background: #f97316; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">
                            🎓 View Your Certificate
                        </a>
                    </div>
                    
                    <hr>
                    <p style="font-size: 12px; color: #666; text-align: center;">
                        ISTS Institute of Safety & Technical Studies<br>
                        © ${new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
        `;

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: studentEmail,
            subject: `🎓 Your Certificate of Completion - ${courseName}`,
            html: emailContent
        });

        return NextResponse.json({ success: true, certificateId, viewUrl: certificateViewUrl });

    } catch (error) {
        console.error('Certificate error:', error);
        return NextResponse.json({ error: 'Failed to issue certificate: ' + error.message }, { status: 500 });
    }
}