import './globals.css';
import WhatsAppWidget from './components/WhatsAppWidget';
import Script from 'next/script';

export const metadata = {
  title: 'ISTS - Institute of Safety & Technical Studies | Professional Safety & HSE Certifications',
  description: 'Get internationally recognized OSHA, IOSH, OTHM, and HiQual certifications.',
  keywords: 'OSHA certification, IOSH course, safety training',
  authors: [{ name: 'ISTS Institute' }],
  openGraph: {
    title: 'ISTS - Institute of Safety & Technical Studies',
    description: 'Professional safety and technical certifications for career growth',
    url: 'https://ists.com',
    siteName: 'ISTS Institute',
    images: [{ url: '/logo.jpeg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
  verification: { google: 'your-google-verification-code' },
};

const GA_MEASUREMENT_ID = 'G-18TJMCKHW1';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
        <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_MEASUREMENT_ID}');`,
        }} />
      </head>
      <body className="bg-gray-100 text-gray-800 font-sans">
        {/* SIMPLE NAVBAR - FIXED */}
        <div style={{ backgroundColor: '#1e3a8a', padding: '12px 16px', position: 'sticky', top: 0, zIndex: 50 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            {/* LEFT SIDE - LOGO */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img src="/logo.jpeg" alt="ISTS Logo" style={{ width: '36px', height: '36px', borderRadius: '50%' }} />
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>ISTS</span>
            </div>

            {/* RIGHT SIDE - HAMBURGER (mobile only) */}
            <div style={{ display: 'block' }} className="md-hidden">
              <label htmlFor="menu-toggle" style={{ cursor: 'pointer', color: 'white', fontSize: '24px' }}>☰</label>
              <input type="checkbox" id="menu-toggle" style={{ display: 'none' }} />
              <div style={{ position: 'absolute', top: '60px', left: '0', right: '0', backgroundColor: '#1e3a8a', padding: '16px', display: 'none' }} className="menu-dropdown">
                <a href="/" style={{ display: 'block', color: 'white', padding: '8px', textDecoration: 'none' }}>Home</a>
                <a href="/courses" style={{ display: 'block', color: 'white', padding: '8px', textDecoration: 'none' }}>Courses</a>
                <a href="/about" style={{ display: 'block', color: 'white', padding: '8px', textDecoration: 'none' }}>About</a>
                <a href="/contact" style={{ display: 'block', color: 'white', padding: '8px', textDecoration: 'none' }}>Contact</a>
                <a href="/register" style={{ display: 'block', backgroundColor: '#f97316', color: 'white', padding: '8px', textAlign: 'center', borderRadius: '20px', marginTop: '8px', textDecoration: 'none' }}>Register</a>
                <a href="/admin" style={{ display: 'block', backgroundColor: '#2563eb', color: 'white', padding: '8px', textAlign: 'center', borderRadius: '8px', marginTop: '8px', textDecoration: 'none' }}>👑 Admin</a>
              </div>
            </div>

            {/* DESKTOP MENU */}
            <div style={{ display: 'none', gap: '16px', alignItems: 'center' }} className="md-flex">
              <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
              <a href="/courses" style={{ color: 'white', textDecoration: 'none' }}>Courses</a>
              <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
              <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
              <a href="/register" style={{ backgroundColor: '#f97316', color: 'white', padding: '6px 16px', borderRadius: '20px', textDecoration: 'none' }}>Register</a>
              <a href="/admin" style={{ backgroundColor: '#2563eb', color: 'white', padding: '6px 12px', borderRadius: '8px', textDecoration: 'none' }}>👑 Admin</a>
            </div>
          </div>
        </div>

        {/* Add CSS for mobile menu toggle */}
        <style>{`
          #menu-toggle:checked + .menu-dropdown {
            display: block !important;
          }
          @media (min-width: 768px) {
            .md-hidden { display: none !important; }
            .md-flex { display: flex !important; }
          }
          @media (max-width: 767px) {
            .md-flex { display: none !important; }
          }
        `}</style>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER */}
        <footer style={{ backgroundColor: '#1e3a8a', color: 'white', textAlign: 'center', padding: '32px 16px', marginTop: '64px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '16px' }}>
              <span style={{ color: '#f97316', fontWeight: 'bold', fontSize: '20px' }}>ISTS</span>
              <p style={{ fontSize: '12px', marginTop: '4px' }}>Institute of Safety & Technical Studies</p>
            </div>
            <p>Phone: +92 316 1720551 | Email: info@ists.com</p>
            <p style={{ fontSize: '10px', marginTop: '16px' }}>© 2026 ISTS. All rights reserved.</p>
          </div>
        </footer>

        {/* WhatsApp Chat Widget */}
        <WhatsAppWidget />
      </body>
    </html>
  );
}