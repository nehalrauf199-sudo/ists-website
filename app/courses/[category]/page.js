'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategoryById } from '../data/courses';
import SearchBar from '../../components/SearchBar';
import { useState } from 'react';
import React from 'react';

export default function CategoryPage({ params }) {
    // ✅ CORRECT: Unwrap the params Promise for Next.js 16
    const { category } = React.use(params);
    const categoryData = getCategoryById(category);
    const [searchTerm, setSearchTerm] = useState('');

    // ✅ If no category found, show 404
    if (!categoryData) {
        notFound();
    }

    const Icon = categoryData.icon;
    const filteredCourses = categoryData.courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <Link
                    href="/courses"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
                >
                    ← Back to All Courses
                </Link>

                {/* Category Header */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-orange-100 rounded-lg">
                            <Icon className="w-8 h-8 text-orange-500" />
                        </div>
                        <h1 className="text-3xl font-bold text-blue-900">
                            {categoryData.name}
                        </h1>
                    </div>
                    <p className="text-gray-600 text-lg">
                        {categoryData.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {categoryData.courses.length} Courses Available
                        </span>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="mb-8">
                    <div className="max-w-xl">
                        <SearchBar
                            placeholder="Search courses in this category..."
                            onSearch={(term) => setSearchTerm(term)}
                        />
                    </div>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map((course) => (
                        <Link
                            key={course.slug}
                            href={`/courses/${category}/${course.slug}`}
                            className="block"
                        >
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                                {/* Course Image */}
                                <div className="relative h-48 bg-gray-200">
                                    {course.image ? (
                                        <img
                                            src={course.image}
                                            alt={course.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-600">
                                            <span className="text-white text-lg font-semibold">
                                                {categoryData.name}
                                            </span>
                                        </div>
                                    )}
                                    {/* Duration Badge */}
                                    <div className="absolute bottom-3 right-3 bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                                        {course.duration || 'Flexible Duration'}
                                    </div>
                                </div>
                                {/* Course Info */}
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-blue-900 mb-2 line-clamp-2">
                                        {course.name}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">
                                            {categoryData.name}
                                        </span>
                                        <span className="text-orange-500 font-medium text-sm">
                                            View Details →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* No Results Message */}
                {filteredCourses.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No courses found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
}