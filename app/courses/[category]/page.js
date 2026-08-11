// app/courses/[category]/page.js
// Dynamic category page – handles ALL categories

'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { categories, getCategoryById } from '../data/courses';

export default function CategoryPage() {
    const params = useParams();
    const categoryId = params.category;
    const [searchTerm, setSearchTerm] = useState('');

    // Get the category from our hardcoded data
    const category = getCategoryById(categoryId);

    // Filter courses based on search
    const filteredCourses = useMemo(() => {
        if (!category) return [];
        if (searchTerm.trim() === '') return category.courses;
        return category.courses.filter(course =>
            course.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [category, searchTerm]);

    // If category not found
    if (!category) {
        return (
            <div className="min-h-screen bg-gray-50 py-20 px-4 text-center">
                <h1 className="text-3xl font-bold text-blue-900">Category Not Found</h1>
                <p className="mt-4 text-gray-600">The category you're looking for doesn't exist.</p>
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-md mx-auto">
                    <p className="text-sm text-gray-600">Category ID: <code className="bg-gray-100 px-2 py-1 rounded">{categoryId}</code></p>
                    <p className="text-sm text-gray-600 mt-1">Available categories: <code className="bg-gray-100 px-2 py-1 rounded">{categories.map(c => c.id).join(', ')}</code></p>
                </div>
                <Link href="/courses" className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition">
                    View All Categories
                </Link>
            </div>
        );
    }

    const IconComponent = category.icon;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-orange-600 text-white py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        {IconComponent && <IconComponent className="w-12 h-12 text-white" />}
                        <h1 className="text-4xl md:text-5xl font-bold">{category.name}</h1>
                    </div>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">{category.description}</p>
                </div>
            </div>

            {/* Search and Course List */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Search Bar */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder={`Search ${category.name} courses...`}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                                <svg className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Course Count */}
                <div className="mb-6">
                    <p className="text-gray-600">
                        <span className="font-semibold text-blue-900">{filteredCourses.length}</span> courses available
                    </p>
                </div>

                {/* Course Grid */}
                {filteredCourses.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-xl shadow-lg">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No courses found</h3>
                        <p className="text-gray-500">No courses match your search in this category.</p>
                        <button onClick={() => setSearchTerm('')} className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition">
                            Clear Search
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourses.map((course, index) => (
                            <Link key={index} href={`/courses/${category.id}/${course.slug}`} className="group">
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-500 h-full">
                                    {course.image ? (
                                        <div className="relative h-48 overflow-hidden">
                                            <img src={course.image} alt={course.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                                        </div>
                                    ) : (
                                        <div className="h-48 bg-gradient-to-r from-blue-100 to-orange-100 flex items-center justify-center">
                                            <div className="text-6xl">📚</div>
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-orange-600 transition">{course.name}</h3>
                                        <p className="text-sm text-gray-500 mb-3">Duration: <span className="font-semibold text-blue-700">{course.duration}</span></p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600 group-hover:text-orange-600 transition">View Details →</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                {/* Back to Categories */}
                <div className="mt-8 text-center">
                    <Link href="/courses" className="inline-flex items-center gap-2 text-blue-600 hover:text-orange-600 transition font-semibold">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to All Categories
                    </Link>
                </div>
            </div>
        </div>
    );
}