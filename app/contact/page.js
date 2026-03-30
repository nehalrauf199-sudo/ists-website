'use client';
import { useState, useEffect } from 'react';

export default function Contact() {
    const [settings, setSettings] = useState({
        phone: '+92 316 1720551',
        email: 'info@ists.com',
        officeHours: '24/7 Available',
        facebook: '#',
        instagram: '#',
        whatsapp: '#'
    });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('/api/site/settings')
            .then(res => res.json())
            .then(data => setSettings(data))
            .catch(err => console.error('Error fetching settings:', err));
    }, []);

    const courses = [
        "Select a course",
        "OSHA 30-Hour Construction Safety",
        "OSHA 30-Hour General Industry",
        "OSHA 10-Hour Construction Safety",
        "OSHA 10-Hour General Industry",
        "OSHA 48-Hour Master Safety",
        "OSHA HAZWOPER 40-Hour",
        "OTHM Level 6 Diploma in Occupational Health & Safety",
        "OTHM Level 7 Diploma in Project Management",
        "HiQual ISO Lead Auditor",
        "HiQual HSE Level 1-3 Awards",
        "HiQual QA/QC Welding & Piping Inspector",
        "IOSH Managing Safely",
        "IOSH Working Safely",
        "Other - Please specify in message"
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    course: '',
                    message: ''
                });
            } else {
                const result = await response.json();
                setError(result.error || 'Something went wrong');
            }
        } catch (err) {
            setError('Failed to submit. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen bg-gray-50 py-20 px-4">
                <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
                    <div className="text-green-500 text-6xl mb-4">✓</div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Message Sent Successfully!</h2>
                    <p className="text-gray-700 mb-6">Thank you for contacting us. Our team will get back to you within 24 hours.</p>
                    <a href="/" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition">
                        Back to Home
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-orange-600 text-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Get in touch with us for any inquiries about courses, admissions, or partnerships
                    </p>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 py-16">
                {/* Contact Info Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
                        <div className="text-4xl mb-4">📞</div>
                        <h3 className="text-xl font-bold text-blue-900 mb-2">Phone / WhatsApp</h3>
                        <p className="text-gray-700 text-lg font-semibold">{settings.phone}</p>
                        <p className="text-gray-500 text-sm mt-2">Available 24/7 for your inquiries</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
                        <div className="text-4xl mb-4">✉️</div>
                        <h3 className="text-xl font-bold text-blue-900 mb-2">Email Us</h3>
                        <p className="text-gray-700 text-lg font-semibold">{settings.email}</p>
                        <p className="text-gray-500 text-sm mt-2">We respond within 24 hours</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
                        <div className="text-4xl mb-4">🕒</div>
                        <h3 className="text-xl font-bold text-blue-900 mb-2">Office Hours</h3>
                        <p className="text-gray-700 text-lg font-semibold">{settings.officeHours}</p>
                        <p className="text-gray-500 text-sm mt-2">We're always here to help you</p>
                    </div>
                </div>

                {/* Contact Form & Social Section */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-900 to-orange-600 px-6 py-4">
                            <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
                            <p className="text-blue-100 text-sm">Fill out the form and we'll get back to you soon</p>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-5">
                            <div>
                                <label className="block text-blue-900 font-bold mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label className="block text-blue-900 font-bold mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-blue-900 font-bold mb-2">Phone Number *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="+92 300 1234567"
                                />
                            </div>

                            <div>
                                <label className="block text-blue-900 font-bold mb-2">Course Interested In</label>
                                <select
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                >
                                    {courses.map((course, index) => (
                                        <option key={index} value={course}>{course}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-blue-900 font-bold mb-2">Your Message *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Tell us about your inquiry or requirements..."
                                />
                            </div>

                            {error && (
                                <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full bg-gradient-to-r from-blue-900 to-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition disabled:opacity-50"
                            >
                                {submitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Social Media & Connect */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Connect With Us</h2>
                            <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
                            <div className="space-y-4">
                                <a href={settings.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition group">
                                    <div className="text-3xl">📘</div>
                                    <div className="flex-1">
                                        <p className="font-bold text-blue-800">Facebook</p>
                                        <p className="text-sm text-gray-500">Follow us for updates and news</p>
                                    </div>
                                    <span className="text-gray-400">→</span>
                                </a>

                                <a href={settings.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition group">
                                    <div className="text-3xl">📷</div>
                                    <div className="flex-1">
                                        <p className="font-bold text-pink-700">Instagram</p>
                                        <p className="text-sm text-gray-500">See photos and stories</p>
                                    </div>
                                    <span className="text-gray-400">→</span>
                                </a>

                                <a href={settings.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition group">
                                    <div className="text-3xl">💬</div>
                                    <div className="flex-1">
                                        <p className="font-bold text-green-700">WhatsApp Direct</p>
                                        <p className="text-sm text-gray-500">Chat with us instantly</p>
                                    </div>
                                    <span className="text-gray-400">→</span>
                                </a>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-6 text-center">
                            <div className="text-4xl mb-3">⚡</div>
                            <h3 className="text-xl font-bold text-blue-900 mb-2">Quick Response Guarantee</h3>
                            <p className="text-gray-700">
                                We respond to all inquiries within 24 hours. For urgent matters,
                                please call or WhatsApp us directly.
                            </p>
                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <p className="text-sm text-gray-500">
                                    📞 Call/WhatsApp: <span className="font-bold text-blue-800">{settings.phone}</span>
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                    ✉️ Email: <span className="font-bold text-blue-800">{settings.email}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Frequently Asked Questions</h2>
                    <div className="w-16 h-1 bg-orange-500 mx-auto mb-8"></div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-blue-800 mb-2">❓ How long does it take to get a response?</h4>
                            <p className="text-gray-600 text-sm">We respond to all inquiries within 24 hours, often sooner.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-800 mb-2">❓ Can I visit the office in person?</h4>
                            <p className="text-gray-600 text-sm">Please call ahead to schedule an appointment for in-person meetings.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-800 mb-2">❓ Do you offer online courses?</h4>
                            <p className="text-gray-600 text-sm">Yes, we offer both online and classroom training options.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-800 mb-2">❓ How do I register for a course?</h4>
                            <p className="text-gray-600 text-sm">Click the "Register Now" button in the navigation menu or contact us directly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}