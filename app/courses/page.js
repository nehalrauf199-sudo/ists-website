// app/courses/page.js
// Main courses page with all categories and search functionality

'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { categories } from './data/courses';

export default function CoursesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Filter categories based on search
    const filteredCategories = useMemo(() => {
        if (searchTerm.trim() === '' && selectedCategory === 'all') {
            return categories;
        }

        return categories
            .map(cat => {
                // Filter courses within each category
                const filteredCourses = cat.courses.filter(course =>
                    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                return {
                    ...cat,
                    courses: filteredCourses
                };
            })
            .filter(cat => cat.courses.length > 0);
    }, [searchTerm, selectedCategory]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-orange-600 text-white py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Certification Programs
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Choose your path to professional excellence
                    </p>
                </div>
            </div>

            {/* Search and Filter Section */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search Bar */}
                        <div className="flex-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search courses by name or category..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                                <svg
                                    className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                            {/* ✅ FIXED: This line was causing the error */}
                            {searchTerm && (
                                <p className="text-sm text-gray-500 mt-2">
                                    Showing results for: <span className="font-semibold text-blue-900">&#34;{searchTerm}&#34;</span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Categories Grid */}
                {filteredCategories.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-xl shadow-lg">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No courses found</h3>
                        <p className="text-gray-500">
                            Try adjusting your search terms or browse all categories above.
                        </p>
                        <button
                            onClick={() => setSearchTerm('')}
                            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition"
                        >
                            Clear Search
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredCategories.map((category) => {
                            const IconComponent = category.icon;
                            return (
                                <Link
                                    key={category.id}
                                    href={`/courses/${category.id}`}
                                    className="group"
                                >
                                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-transparent hover:border-orange-500 h-full flex flex-col items-center text-center">
                                        <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-orange-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-orange-100 transition">
                                            {IconComponent && (
                                                <IconComponent className="w-10 h-10 text-blue-900 group-hover:text-orange-600 transition" />
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-orange-600 transition">
                                            {category.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3">
                                            {category.description}
                                        </p>
                                        <div className="flex items-center justify-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all">
                                            <span>EXPLORE</span>
                                            <svg
                                                className="w-4 h-4 group-hover:translate-x-1 transition"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}