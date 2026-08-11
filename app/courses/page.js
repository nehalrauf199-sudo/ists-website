// app/courses/page.js
// Main courses page - SIMPLIFIED WORKING VERSION

'use client';
import Link from 'next/link';
import { categories } from './data/courses';

export default function CoursesPage() {
    const totalCourses = categories.reduce((acc, cat) => acc + cat.courses.length, 0);

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
                    <p className="text-sm text-blue-200 mt-2">
                        {totalCourses} courses across {categories.length} categories
                    </p>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categories.map((category) => {
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
                                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                        {category.description}
                                    </p>
                                    <div className="flex items-center justify-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all">
                                        <span>{category.courses.length} Courses</span>
                                        <span className="text-gray-300">|</span>
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
            </div>
        </div>
    );
}