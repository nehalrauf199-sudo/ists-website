'use client';
import { useState, useEffect } from 'react';
import crypto from 'crypto';

export default function Avatar({ name, email, size = 'w-24 h-24', className = '' }) {
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [hasGravatar, setHasGravatar] = useState(false);
    const [loading, setLoading] = useState(true);

    // Get first letter of name
    const firstLetter = name ? name.charAt(0).toUpperCase() : '?';

    // Generate random but consistent color based on name
    const getColorFromName = (name) => {
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        const hue = Math.abs(hash % 360);
        return `hsl(${hue}, 70%, 60%)`;
    };

    const bgColor = getColorFromName(name);

    // MD5 hash function for Gravatar
    const md5 = (string) => {
        return crypto.createHash('md5').update(string).digest('hex');
    };

    // Check for Gravatar
    useEffect(() => {
        if (email) {
            const emailHash = md5(email.trim().toLowerCase());
            const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?d=404&s=200`;

            fetch(gravatarUrl, { method: 'HEAD' })
                .then(res => {
                    if (res.ok) {
                        setAvatarUrl(`https://www.gravatar.com/avatar/${emailHash}?s=200&d=identicon`);
                        setHasGravatar(true);
                    } else {
                        setHasGravatar(false);
                    }
                })
                .catch(() => setHasGravatar(false))
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [email]);

    if (loading) {
        return (
            <div className={`${size} rounded-full bg-gray-200 animate-pulse ${className}`}></div>
        );
    }

    if (hasGravatar && avatarUrl) {
        return (
            <img
                src={avatarUrl}
                alt={name}
                className={`${size} rounded-full object-cover border-4 border-orange-500 ${className}`}
            />
        );
    }

    return (
        <div
            className={`${size} rounded-full flex items-center justify-center text-white font-bold text-3xl border-4 border-orange-500 ${className}`}
            style={{ backgroundColor: bgColor }}
        >
            {firstLetter}
        </div>
    );
}