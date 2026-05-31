'use client';
import { useState, useEffect } from 'react';

export default function HiQual() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await fetch('/api/admin/courses');
            const allCourses = await response.json();
            const hiqualCourses = allCourses.filter(course =>
                course.category === 'HiQual' || course.category === 'HIQUAL' || course.category === 'hiqual'
            );
            setCourses(hiqualCourses);
        } catch (error) {
            console.error('Error fetching courses:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 py-20 px-4 text-center">
                <div className="text-4xl mb-4">⏳</div>
                <p className="text-gray-500">Loading courses...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-orange-600 bg-clip-text text-transparent">
                    HiQual Certifications
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mt-4 mb-4"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    QA/QC, HSE & ISO-Based Professional Certifications
                </p>
                <p className="text-sm text-blue-600 mt-2">
                    Total {courses.length} courses available
                </p>
            </div>

            <div className="max-w-7xl mx-auto">
                {courses.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                        <div className="text-4xl mb-4">📭</div>
                        <p className="text-gray-500">No HiQual courses available yet.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((course) => (
                            <a
                                key={course._id}
                                href={`/courses/id/${course._id}`}
                                className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-orange-500 transition-all duration-300 block"
                            >
                                <div className="p-5">
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mb-2">
                                                {course.hours}
                                            </div>
                                            <h3 className="text-lg font-bold text-blue-900 mb-1">{course.name}</h3>
                                        </div>
                                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-full flex items-center justify-center">
                                            →
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}