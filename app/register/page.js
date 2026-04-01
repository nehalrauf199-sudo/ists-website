'use client';
import { useState, useEffect } from 'react';

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
    const [file, setFile] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [courseSearch, setCourseSearch] = useState('');
    const [showCourseDropdown, setShowCourseDropdown] = useState(false);
    const [courses, setCourses] = useState([]);
    const [loadingCourses, setLoadingCourses] = useState(true);

    // Fetch courses from database
    useEffect(() => {
        fetch('/api/manage/courses')
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                setLoadingCourses(false);
            })
            .catch(err => {
                console.error('Error fetching courses:', err);
                setLoadingCourses(false);
            });
    }, []);

    // Filter courses based on search
    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(courseSearch.toLowerCase())
    );

    const handleCourseSelect = (courseName) => {
        setFormData({ ...formData, course: courseName });
        setCourseSearch('');
        setShowCourseDropdown(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');

        const data = new FormData();
        data.append('course', formData.course);
        data.append('name', formData.name);
        data.append('phone', formData.phone);
        data.append('email', formData.email);
        data.append('education', formData.education);
        data.append('experience', formData.experience);
        data.append('message', formData.message);
        if (file) {
            data.append('cv', file);
        }

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
                setFile(null);
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

                        {/* Course Selection with Search */}
                        <div className="mb-6 relative">
                            <label className="block text-blue-900 font-bold mb-2">Select Course *</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={formData.course || courseSearch}
                                    onChange={(e) => {
                                        setCourseSearch(e.target.value);
                                        setShowCourseDropdown(true);
                                        if (formData.course) {
                                            setFormData({ ...formData, course: '' });
                                        }
                                    }}
                                    onFocus={() => setShowCourseDropdown(true)}
                                    placeholder={loadingCourses ? "Loading courses..." : "🔍 Search for a course..."}
                                    disabled={loadingCourses}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                                {!loadingCourses && showCourseDropdown && courseSearch && (
                                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                        {filteredCourses.length > 0 ? (
                                            filteredCourses.map((course, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => handleCourseSelect(course.name)}
                                                    className="px-4 py-2 hover:bg-orange-50 cursor-pointer border-b border-gray-100 text-sm"
                                                >
                                                    {course.name}
                                                </div>
                                            ))
                                        ) : (
                                            <div className="px-4 py-2 text-gray-500 text-sm">
                                                No courses found. Type another name...
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            {formData.course && (
                                <p className="text-sm text-green-600 mt-1">
                                    ✓ Selected: {formData.course}
                                </p>
                            )}
                            <p className="text-sm text-gray-500 mt-1">
                                {loadingCourses ? 'Loading courses...' : `${courses.length} courses available. Type to search.`}
                            </p>
                        </div>

                        {/* Name */}
                        <div className="mb-6">
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

                        {/* Phone */}
                        <div className="mb-6">
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

                        {/* Email */}
                        <div className="mb-6">
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

                        {/* Education */}
                        <div className="mb-6">
                            <label className="block text-blue-900 font-bold mb-2">Highest Education *</label>
                            <textarea
                                name="education"
                                value={formData.education}
                                onChange={handleChange}
                                required
                                rows="2"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="e.g., Bachelor's in Engineering, Diploma in Safety, etc."
                            />
                        </div>

                        {/* Experience */}
                        <div className="mb-6">
                            <label className="block text-blue-900 font-bold mb-2">Work Experience (if any)</label>
                            <textarea
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                rows="2"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="e.g., 2 years as Safety Officer, 5 years in Construction, etc."
                            />
                        </div>

                        {/* CV Upload */}
                        <div className="mb-6">
                            <label className="block text-blue-900 font-bold mb-2">Upload CV / Resume *</label>
                            <input
                                type="file"
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600"
                            />
                            <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                        </div>

                        {/* Additional Message */}
                        <div className="mb-6">
                            <label className="block text-blue-900 font-bold mb-2">Additional Message (Optional)</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="3"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Any questions or special requirements?"
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
                            disabled={submitting || !formData.course}
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