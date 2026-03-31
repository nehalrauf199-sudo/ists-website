import './globals.css';
import WhatsAppWidget from './components/WhatsAppWidget';
import Script from 'next/script';

export const metadata = {
  title: 'ISTS - Institute of Safety & Technical Studies | Professional Safety & HSE Certifications',
  description: 'Get internationally recognized OSHA, IOSH, OTHM, and HiQual certifications. Professional safety training with expert trainers. Start your career today!',
  keywords: 'OSHA certification, IOSH course, safety training, HSE course, QA/QC training, NEBOSH, safety officer course, Pakistan',
  authors: [{ name: 'ISTS Institute' }],
  openGraph: {
    title: 'ISTS - Institute of Safety & Technical Studies',
    description: 'Professional safety and technical certifications for career growth',
    url: 'https://ists.com',
    siteName: 'ISTS Institute',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const GA_MEASUREMENT_ID = 'G-18TJMCKHW1';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </head>
      <body className="bg-gray-100 text-gray-800 font-sans">
        {/* NAVBAR - FIXED FOR MOBILE */}
        <nav className="bg-blue-900 text-white px-4 py-4 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50 shadow-lg">
          <div className="flex items-center justify-center gap-3 mb-4 md:mb-0 w-full md:w-auto">
            <img src="/logo.jpeg" alt="ISTS Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
            <h1 className="text-lg md:text-xl font-bold text-white">ISTS</h1>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            <a href="/" className="hover:text-orange-400 transition text-sm md:text-base px-2 py-1">Home</a>
            <a href="/courses" className="hover:text-orange-400 transition text-sm md:text-base px-2 py-1">Courses</a>
            <a href="/about" className="hover:text-orange-400 transition text-sm md:text-base px-2 py-1">About</a>
            <a href="/contact" className="hover:text-orange-400 transition text-sm md:text-base px-2 py-1">Contact</a>
            <a href="/register" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-3 rounded-full text-sm transition">
              Register
            </a>
            <a href="/admin" className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-lg text-sm transition border border-blue-500">
              👑 Admin
            </a>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="bg-blue-900 text-white text-center py-8 mt-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-4">
              <span className="text-orange-400 font-bold text-xl">ISTS</span>
              <p className="text-sm mt-1">Institute of Safety & Technical Studies</p>
            </div>
            <p className="text-gray-300">Phone: +92 316 1720551 | Email: info@ists.com</p>
            <p className="text-gray-400 text-sm mt-4">© 2026 ISTS. All rights reserved.</p>
          </div>
        </footer>

        {/* WhatsApp Chat Widget */}
        <WhatsAppWidget />
      </body>
    </html>
  );
}