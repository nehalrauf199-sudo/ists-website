'use client';

import Link from 'next/link';
import { categories } from './data/courses';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

export default function CoursesPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCategories = categories.filter(category => {
        const matches = category.name.toLowerCase().includes(searchTerm) ||
            category.description.toLowerCase().includes(searchTerm);
        return matches;
    });

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-blue-900 text-center mb-4">
                    Our Certification Programs
                </h1>
                <p className="text-xl text-gray-600 text-center mb-8">
                    Choose your path to professional excellence
                </p>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-12">
                    <SearchBar
                        placeholder=""
                        onSearch={(term) => setSearchTerm(term)}
                    />
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <Link
                                key={category.id}
                                href={`/courses/${category.id}`}
                                className="block"
                            >
                                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-orange-500 h-full flex flex-col">
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="p-3 bg-orange-100 rounded-lg flex-shrink-0">
                                            <Icon className="w-6 h-6 text-orange-500" />
                                        </div>
                                        <h3 className="text-lg font-bold text-blue-900 line-clamp-2">
                                            {category.name}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-sm flex-grow line-clamp-2">
                                        {category.description}
                                    </p>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                            {category.courses.length} Courses
                                        </span>
                                        <span className="text-orange-500 font-semibold text-sm">
                                            Explore →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {filteredCategories.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-500 text-xl">No categories found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
}