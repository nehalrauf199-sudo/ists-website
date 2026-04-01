'use client';
import { useState, useEffect } from 'react';

export default function OtherCourses() {
    const [openCourse, setOpenCourse] = useState(null);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await fetch('/api/admin/courses');
            const allCourses = await response.json();
            // Filter only Other category courses
            const otherCourses = allCourses.filter(course =>
                course.category === 'Other' || course.category === 'other'
            );
            setCourses(otherCourses);
        } catch (error) {
            console.error('Error fetching courses:', error);
        } finally {
            setLoading(false);
        }
    };

    const toggleCourse = (courseId) => {
        if (openCourse === courseId) {
            setOpenCourse(null);
        } else {
            setOpenCourse(courseId);
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
                    Other Professional Courses
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mt-4 mb-4"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Specialized courses in various professional fields
                </p>
                <p className="text-sm text-blue-600 mt-2">
                    Total {courses.length} courses available
                </p>
            </div>

            <div className="max-w-7xl mx-auto">
                {courses.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                        <div className="text-4xl mb-4">📭</div>
                        <p className="text-gray-500">No "Other" category courses available yet. Check back soon!</p>
                        <p className="text-sm text-gray-400 mt-2">Admin can add new courses with category "Other"</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((course) => (
                            <div key={course._id} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-orange-500 transition-all duration-300">
                                <div className="p-5">
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <div className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded mb-2">
                                                {course.category}
                                            </div>
                                            <h3 className="text-lg font-bold text-blue-900 mb-1">{course.name}</h3>
                                            <p className="text-sm text-orange-600 font-semibold">{course.hours}</p>
                                        </div>
                                        <button
                                            onClick={() => toggleCourse(course._id)}
                                            className="w-8 h-8 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                                        >
                                            {openCourse === course._id ? '▲' : '▼'}
                                        </button>
                                    </div>
                                </div>

                                {openCourse === course._id && (
                                    <div className="border-t border-gray-200 bg-gray-50 p-5 space-y-4">
                                        <div>
                                            <h4 className="font-bold text-blue-800 mb-2">📖 Course Overview</h4>
                                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                {course.content?.map((item, idx) => <li key={idx}>{item}</li>)}
                                            </ul>
                                            <p className="text-gray-700 text-sm mt-2 font-semibold">Learning Outcomes:</p>
                                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                {course.outcomes?.map((item, idx) => <li key={idx}>{item}</li>)}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-blue-800 mb-2">✅ Eligibility Criteria</h4>
                                            <p className="text-gray-700 text-sm">{course.eligibility}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-blue-800 mb-2">📚 Study Modules</h4>
                                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                {course.modules?.map((module, idx) => <li key={idx}>{module}</li>)}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-blue-800 mb-2">🎯 Learning Objectives</h4>
                                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                {course.learningObjectives?.map((obj, idx) => <li key={idx}>{obj}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}