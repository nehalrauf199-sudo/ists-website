'use client';
import { useState, useEffect } from 'react';

export default function ReviewForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        course: '',
        rating: 5,
        comment: ''
    });
    const [courses, setCourses] = useState([]);
    const [loadingCourses, setLoadingCourses] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

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
            const response = await fetch('/api/reviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    course: '',
                    rating: 5,
                    comment: ''
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
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">⭐</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700">Your review has been submitted and will appear after admin approval.</p>
            </div>
        );
    }

    if (loadingCourses) {
        return (
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">⏳</div>
                <p className="text-gray-500">Loading courses...</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Share Your Experience</h3>
            <p className="text-gray-600 mb-6">Help other students make the right choice</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Your Name *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter your full name"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="your@email.com"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Course Taken *</label>
                    <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                        <option value="">Select a course</option>
                        {courses.map((course, idx) => (
                            <option key={idx} value={course.name}>{course.name}</option>
                        ))}
                    </select>
                    <p className="text-xs text-gray-500 mt-1">{courses.length} courses available</p>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Rating *</label>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setFormData({ ...formData, rating: star })}
                                className={`text-3xl ${star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'} hover:scale-110 transition`}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Your Review *</label>
                    <textarea
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        required
                        rows="4"
                        placeholder="Tell us about your experience with the course and instructor..."
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition"
                >
                    {submitting ? 'Submitting...' : 'Submit Review'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                    Your review will be reviewed by admin before publishing
                </p>
            </form>
        </div>
    );
}