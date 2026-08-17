'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({
        phone: '+92 308 5727897',
        email: 'info@ists-institute.com'
    });
    const pathname = usePathname();

    // Fetch settings from API
    useEffect(() => {
        fetch('/api/site/settings')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setSettings(prev => ({
                        ...prev,
                        phone: data.phone || prev.phone,
                        email: data.email || prev.email
                    }));
                }
            })
            .catch(err => console.error('Error fetching settings:', err));
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/courses', label: 'Courses' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
        { href: '/register', label: 'Register' },
    ];

    const isActive = (path) => pathname === path;

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-white font-bold text-xl">ISTS</span>
                            </div>
                            <div>
                                <span className="text-xl font-bold text-blue-900">ISTS</span>
                                <span className="block text-xs text-gray-500 -mt-1">Institute of Safety & Technical Studies</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-300 ${isActive(link.href)
                                    ? 'bg-orange-500 text-white'
                                    : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Contact Info - Desktop */}
                        <div className="ml-4 pl-4 border-l border-gray-200">
                            <a href={`tel:${settings.phone}`} className="text-sm text-gray-600 hover:text-orange-600 block">
                                📞 {settings.phone}
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-700 hover:text-orange-600 focus:outline-none"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-4 py-3 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-2 rounded-lg text-sm font-medium transition ${isActive(link.href)
                                    ? 'bg-orange-500 text-white'
                                    : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-3 mt-3 border-t border-gray-200">
                            <a href={`tel:${settings.phone}`} className="block text-sm text-gray-600 hover:text-orange-600">
                                📞 {settings.phone}
                            </a>
                            <a href={`mailto:${settings.email}`} className="block text-sm text-gray-600 hover:text-orange-600 mt-1">
                                ✉️ {settings.email}
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}