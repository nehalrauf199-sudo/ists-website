'use client';
import { useState } from 'react';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Courses', path: '/courses' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Register', path: '/register', isButton: true },
        { name: 'Admin', path: '/admin', isAdmin: true }
    ];

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-blue-800 transition"
                aria-label="Menu"
            >
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-blue-900 shadow-lg z-50 md:hidden">
                    <div className="flex flex-col p-4 space-y-2">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-2 rounded-lg transition ${item.isButton
                                    ? 'bg-orange-500 text-white text-center font-bold'
                                    : item.isAdmin
                                        ? 'bg-blue-700 text-white text-center border border-blue-500'
                                        : 'text-white hover:bg-blue-800'
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}