'use client';
import { useState } from 'react';

export default function DevelopmentBanner() {
    const [visible, setVisible] = useState(true);
    if (!visible) return null;
    return (
        <div className="bg-red-600 text-white py-3 px-4 sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex-1 overflow-hidden whitespace-nowrap">
                    <div className="inline-block animate-marquee font-bold text-lg md:text-xl tracking-wide">
                        🛠️ SITE UNDER CONSTRUCTION – SOME FEATURES MAY CHANGE &nbsp;&nbsp;|&nbsp;&nbsp;
                        🛠️ SITE UNDER CONSTRUCTION – SOME FEATURES MAY CHANGE &nbsp;&nbsp;|&nbsp;&nbsp;
                        🛠️ SITE UNDER CONSTRUCTION – SOME FEATURES MAY CHANGE &nbsp;&nbsp;|&nbsp;&nbsp;
                    </div>
                </div>
                <button
                    onClick={() => setVisible(false)}
                    className="text-white hover:text-gray-200 ml-4 text-xl font-bold"
                    aria-label="Close banner"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}