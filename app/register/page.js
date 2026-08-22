'use client';

import { useState, useEffect } from 'react';
import { getAllCourses } from '../courses/data/courses';

export default function Register() {
    const [formData, setFormData] = useState({
        course: '',
        name: '',
        phone: '',
        email: '',
        education: '',
        experience: '',
        message: ''
    });
    const [cvFile, setCvFile] = useState(null);
    const [idDocumentFile, setIdDocumentFile] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [courseSearch, setCourseSearch] = useState('');
    const [showCourseDropdown, setShowCourseDropdown] = useState(false);
    const [courses, setCourses] = useState([]);

    // Load courses from hardcoded data
    useEffect(() => {
        const allCourses = getAllCourses();
        setCourses(allCourses);
    }, []);

    // Filter courses based on search
    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(courseSearch.toLowerCase()) ||
        course.categoryName.toLowerCase().includes(courseSearch.toLowerCase())
    );

    const handleCourseSelect = (courseName) => {
        setFormData({ ...formData, course: courseName });
        setCourseSearch(courseName);
        setShowCourseDropdown(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e, setFileFunc) => {
        const file = e.target.files[0];
        if (file) {
            // No file size limit - unlimited
            setFileFunc(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate CV is required
        if (!cvFile) {
            setError('Please upload your CV/Resume (Required)');
            return;
        }

        setSubmitting(true);
        setError('');

        const data = new FormData();
        data.append('course', formData.course || 'Not specified');
        data.append('name', formData.name || 'Not specified');
        data.append('phone', formData.phone || 'Not specified');
        data.append('email', formData.email || 'Not specified');
        data.append('education', formData.education || 'Not specified');
        data.append('experience', formData.experience || '');
        data.append('message', formData.message || '');

        // Append files
        if (cvFile) data.append('cv', cvFile);
        if (idDocumentFile) data.append('idDocument', idDocumentFile);

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                body: data
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({
                    course: '',
                    name: '',
                    phone: '',
                    email: '',
                    education: '',
                    experience: '',
                    message: ''
                });
                setCvFile(null);
                setIdDocumentFile(null);
                setCourseSearch('');
                // Reset file inputs
                document.querySelectorAll('input[type="file"]').forEach(input => input.value = '');
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
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Registration Submitted Successfully!</h2>
                    <p className="text-gray-700 mb-6">Thank you for registering. Our team will contact you within 24 hours.</p>
                    <a href="/" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition">
                        Back to Home
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-orange-600 bg-clip-text text-transparent">
                        Register for a Course
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mt-4"></div>
                    <p className="text-gray-600 mt-4">Fill out the form below to secure your spot</p>
                </div>

                {/* Registration Form */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <form onSubmit={handleSubmit} className="p-8">
                        {/* Course - Manual Input Only (No Dropdown) */}
                        <div className="mb-6">
                            <label className="block text-blue-900 font-bold mb-2">Course Name</label>
                            <input
                                type="text"
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                placeholder="Enter your course name (e.g., OSHA 30-Hour, IOSH Managing Safely, etc.)"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <p className="text-sm text-gray-500 mt-1">You can type any course name - even if not listed</p>
                        </div>

                        {/* Name */}
                        <div className="mb-6">
                            <label className="block text-blue-900 font-bold mb-2">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        {/* Phone */}
                        <div className="mb-6">
                            <label className="block text-blue-900 font-bold mb-2">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+92 300 1234567"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-6">
                            <label className="block text-blue-900 font-bold mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        {/* Education */}
                        <div className="mb-6">
                            <label className="block text-blue-900 font-bold mb-2">Highest Education</label>
                            <textarea
                                name="education"
                                value={formData.education}
                                onChange={handleChange}
                                rows="2"
                                placeholder="e.g., Bachelor's in Engineering, Diploma in Safety, etc."
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        {/* Experience */}
                        <div className="mb-6">
                            <label className="block text-blue-900 font-bold mb-2">Work Experience</label>
                            <textarea
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                rows="2"
                                placeholder="e.g., 2 years as Safety Officer, 5 years in Construction, etc."
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        {/* CV Upload - Required */}
                        <div className="mb-6">
                            <label className="block text-blue-900 font-bold mb-2">
                                Upload CV / Resume *
                            </label>
                            <input
                                type="file"
                                onChange={(e) => handleFileChange(e, setCvFile)}
                                accept=".pdf,.doc,.docx"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600"
                            />
                            <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX - <span className="text-red-500">Required</span></p>
                            {cvFile && <p className="text-sm text-green-600 mt-1">✓ {cvFile.name} uploaded</p>}
                        </div>

                        {/* ID Document - Combined Optional Upload (No Label) */}
                        <div className="mb-6">
                            <input
                                type="file"
                                onChange={(e) => handleFileChange(e, setIdDocumentFile)}
                                accept="image/*,.pdf"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600"
                            />
                            <p className="text-sm text-gray-500 mt-1">Accepted: JPG, PNG, PDF - Upload ID Card or Passport (Optional)</p>
                            {idDocumentFile && <p className="text-sm text-green-600 mt-1">✓ {idDocumentFile.name} uploaded</p>}
                        </div>

                        {/* Additional Message */}
                        <div className="mb-6">
                            <label className="block text-blue-900 font-bold mb-2">Additional Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="3"
                                placeholder="Any questions or special requirements?"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                                {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full bg-gradient-to-r from-blue-900 to-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition duration-300 disabled:opacity-50"
                        >
                            {submitting ? 'Submitting...' : 'Submit Registration'}
                        </button>

                        <p className="text-center text-gray-500 text-sm mt-4">
                            By submitting, you agree to our terms and conditions. Our team will contact you shortly.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}