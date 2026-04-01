'use client';
import { useState, useEffect } from 'react';
import WhatsAppWidget from './WhatsAppWidget';

export default function LayoutWrapper({ children }) {
    const [settings, setSettings] = useState({
        phone: '+92 316 1720551',
        email: 'info@ists.com',
        footerText: 'Institute of Safety & Technical Studies'
    });

    useEffect(() => {
        fetch('/api/site/settings')
            .then(res => res.json())
            .then(data => setSettings(data))
            .catch(err => console.error('Error fetching settings:', err));
    }, []);

    return (
        <>
            {/* NAVBAR */}
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

            {/* FOOTER - USING DYNAMIC SETTINGS */}
            <footer style={{ backgroundColor: '#1e3a8a', color: 'white', textAlign: 'center', padding: '32px 16px', marginTop: '64px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '16px' }}>
                        <span style={{ color: '#f97316', fontWeight: 'bold', fontSize: '20px' }}>ISTS</span>
                        <p style={{ fontSize: '12px', marginTop: '4px' }}>{settings.footerText}</p>
                    </div>
                    <p>Phone: {settings.phone} | Email: {settings.email}</p>
                    <p style={{ fontSize: '10px', marginTop: '16px' }}>© 2026 ISTS. All rights reserved.</p>
                </div>
            </footer>

            {/* WhatsApp Chat Widget */}
            <WhatsAppWidget />
        </>
    );
}