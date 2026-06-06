'use client';
import { useState } from 'react';

export default function DevelopmentBanner() {
    const [visible, setVisible] = useState(true);
    if (!visible) return null;
    return (
        <div className="bg-yellow-50 border-b border-yellow-200 text-yellow-800 text-sm py-2 px-4 text-center sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex-1 text-center">
                    🛠️ Site Under Construction – Some features may change
                </div>
                <button
                    onClick={() => setVisible(false)}
                    className="text-yellow-600 hover:text-yellow-800 ml-4"
                    aria-label="Close banner"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}