import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';
import fs from 'fs';
import path from 'path';

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        const client = await clientPromise;
        const db = client.db('ists');

        const certificate = await db.collection('certificates').findOne({ certificateId: id });

        if (!certificate) {
            return NextResponse.json({ error: 'Certificate not found' }, { status: 404 });
        }

        const { studentName, courseName, completionDate } = certificate;

        const settings = await db.collection('settings').findOne({ _id: 'site_settings' });

        const directorName = settings?.directorName || 'Arshan Rauf';

        /* ------------------ LOGO ------------------ */

        let logoBase64 = '';
        const logoPath = path.join(process.cwd(), 'public', 'logo.jpeg');

        if (fs.existsSync(logoPath)) {
            const logoBuffer = fs.readFileSync(logoPath);
            logoBase64 = `data:image/jpeg;base64,${logoBuffer.toString('base64')}`;
        }

        /* ------------------ SIGNATURE FROM MONGODB ------------------ */

        let signatureBase64 = '';

        if (settings?.signatureData) {
            signatureBase64 = `data:image/png;base64,${settings.signatureData}`;
        }

        /* ------------------ HTML ------------------ */

        const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Certificate of Completion - ISTS</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
background:#e5e7eb;
display:flex;
justify-content:center;
align-items:center;
min-height:100vh;
padding:40px;
font-family:'Times New Roman','Georgia',serif;
}

.certificate-container{
max-width:950px;
width:100%;
background:white;
border-radius:0px;
box-shadow:0 20px 40px rgba(0,0,0,0.2);
overflow:hidden;
}

.four-side-border{
background:linear-gradient(135deg,#1e42a7,#f97316,#1e3a8a,#c4611b);
padding:15px;
}

.certificate-white{
background:
radial-gradient(circle at top right,#69b6e9 8%,#f8ab75 20%,#ffffff 50%),
radial-gradient(circle at bottom left,#689cbe 2%,#f8ab75 15%,#ffffff 30%);
background-blend-mode:normal;
padding:45px 55px;
}

.logo-img{
width:120px;
height:120px;
border-radius:50%;
display:block;
margin:0 auto;
border:3px solid #f97316;
}

.institute-name{
text-align:center;
font-size:29px;
font-weight:bold;
color:#1e3a8a;
margin-top:15px;
}

.institute-tagline{
text-align:center;
font-size:15px;
color:#f97316;
margin-top:5px;
}

.divider{
width:80px;
height:2px;
background:linear-gradient(90deg,#1e3a8a,#f97316);
margin:12px auto;
}

.cert-title{
text-align:center;
font-size:39px;
font-weight:bold;
color:#f97316;
letter-spacing:3px;
margin:30px 0 15px;
}

.present-text{
text-align:center;
font-size:17px;
color:#4b5563;
}

.student-wrapper{
display:flex;
align-items:center;
justify-content:center;
gap:20px;
margin:30px 0;
}

.line-left{
width:80px;
height:2px;
background:linear-gradient(90deg,#f97316,#1e3a8a);
}

.student-name{
font-size:49px;
font-weight:bold;
color:#1e3a8a;
letter-spacing:2px;
}

.line-right{
width:80px;
height:2px;
background:linear-gradient(90deg,#1e3a8a,#f97316);
}

.course-text{
text-align:center;
font-size:17px;
color:#4b5563;
}

.course-name{
text-align:center;
font-size:28px;
font-weight:bold;
color:#f97316;
margin:12px 0;
display:inline-block;
width:100%;
}

.course-name span{
border-bottom:2px solid #1e3a8a;
padding-bottom:5px;
}

.footer{
display:flex;
justify-content:space-between;
align-items:flex-end;
margin-top:45px;
}

.date-label{
font-size:12px;
color:#565b66;
}

.date-value{
font-size:14px;
color:#1c3886;
font-weight:500;
margin-top:5px;
}

.signature-section{
text-align:center;
width:250px;
margin-left:auto;
}

.signature-img{
height:60px;
margin-bottom:5px;
display:block;
margin-left:auto;
margin-right:auto;
}

.signature-line{
border-bottom:2px solid #1e3a8a;
width:100%;
margin-bottom:8px;
}

.signature-name{
font-weight:bold;
font-size:16px;
color:#1e3a8a;
margin-top:5px;
}

.signature-title{
font-size:11px;
color:#6b7280;
}

</style>
</head>

<body>

<div class="certificate-container">

<div class="four-side-border">

<div class="certificate-white">

${logoBase64
                ? `<img src="${logoBase64}" class="logo-img">`
                : `<div style="width:120px;height:120px;background:#1e3a8a;border-radius:50%;margin:0 auto;"></div>`
            }

<div class="institute-name">INSTITUTE OF SAFETY & TECHNICAL STUDIES</div>
<div class="institute-tagline">Internationally Recognized Training Provider</div>
<div class="divider"></div>

<div class="cert-title">CERTIFICATE OF COMPLETION</div>

<div class="present-text">This is to certify that</div>

<div class="student-wrapper">
<div class="line-left"></div>
<div class="student-name">${studentName.toUpperCase()}</div>
<div class="line-right"></div>
</div>

<div class="course-text">has successfully completed the course</div>

<div class="course-name">
<span>${courseName}</span>
</div>

<div class="course-text">
with demonstrated excellence in occupational safety and technical studies
</div>

<div class="footer">

<div>
<div class="date-label">ISSUED ON</div>
<div class="date-value">
${new Date(completionDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
</div>
</div>

<div class="signature-section">

${signatureBase64
                ? `<img src="${signatureBase64}" class="signature-img">`
                : `<div class="signature-line"></div>`
            }

<div class="signature-name">${directorName}</div>
<div class="signature-title">Director</div>

</div>

</div>

</div>
</div>
</div>

</body>
</html>`;

        return new NextResponse(html, {
            headers: { 'Content-Type': 'text/html' }
        });

    } catch (error) {
        console.error('Certificate error:', error);
        return NextResponse.json({ error: 'Certificate not found' }, { status: 404 });
    }
}