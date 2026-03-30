'use client';
import { useState, useEffect } from 'react';

export default function WhatsAppWidget() {
    const [isVisible, setIsVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [settings, setSettings] = useState({});

    useEffect(() => {
        // Fetch settings for phone number
        fetch('/api/site/settings')
            .then(res => res.json())
            .then(data => setSettings(data))
            .catch(err => console.error('Error fetching settings:', err));

        let lastScrollTop = 0;
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollTop = scrollTop;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const phoneNumber = settings.phone ? settings.phone.replace(/[^0-9]/g, '') : '923161720551';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const presetMessages = [
        "Hi, I'm interested in OSHA certification. Can you tell me more?",
        "Hello, I'd like to register for a course. What are the fees?",
        "Hi, I need information about course schedules.",
        "Hello, I want to know about online courses availability."
    ];

    const sendMessage = () => {
        if (message.trim()) {
            window.open(whatsappUrl, '_blank');
            setIsOpen(false);
            setMessage('');
        }
    };

    return (
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
            {!isOpen ? (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110 group"
                    aria-label="Chat on WhatsApp"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.588 2.014.896 3.13.896h.002c3.18 0 5.767-2.586 5.768-5.766-.001-3.18-2.586-5.767-5.767-5.768zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.067-.248-.08-.573-.187-.99-.334-1.162-.408-1.947-1.469-2.008-1.536-.06-.067-.483-.642-.483-1.225 0-.583.307-.868.416-.986.108-.118.235-.147.313-.147.078 0 .156.007.226.007.07 0 .165-.024.259.197.092.221.356.874.387.937.031.063.051.142.016.22-.035.078-.065.114-.13.175-.065.061-.128.137-.183.184-.061.05-.124.104-.053.202.07.099.313.516.672.83.447.392.824.516.925.574.101.058.159.048.219-.03.06-.078.259-.303.332-.407.072-.104.145-.086.242-.051.098.035.617.291.723.344.106.053.176.079.202.123.026.044.026.256-.118.661z" />
                    </svg>
                </button>
            ) : (
                <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
                    <div className="bg-green-500 text-white p-4 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#25D366" className="p-1">
                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.588 2.014.896 3.13.896h.002c3.18 0 5.767-2.586 5.768-5.766-.001-3.18-2.586-5.767-5.767-5.768z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold">WhatsApp Chat</p>
                                <p className="text-xs text-green-100">We usually reply within 5 minutes</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
                            ✕
                        </button>
                    </div>

                    <div className="p-4">
                        <p className="text-gray-600 text-sm mb-3">Hello! 👋 How can we help you today?</p>

                        <div className="space-y-2 mb-4">
                            {presetMessages.map((msg, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setMessage(msg)}
                                    className="block w-full text-left text-sm bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-2 transition"
                                >
                                    {msg}
                                </button>
                            ))}
                        </div>

                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message here..."
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                            rows="3"
                        />

                        <button
                            onClick={sendMessage}
                            className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
                        >
                            Send Message
                        </button>

                        <p className="text-xs text-gray-400 text-center mt-3">
                            Powered by WhatsApp | ISTS Institute
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}