import './globals.css';
import LayoutWrapper from './components/LayoutWrapper';
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
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="o701f4kxw46OO44UinyYPOL89roAQWgtQkrM6d9mu1w" />
        {/* Google Analytics */}
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
        <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_MEASUREMENT_ID}');`,
        }} />
      </head>
      <body className="bg-gray-100 text-gray-800 font-sans">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}