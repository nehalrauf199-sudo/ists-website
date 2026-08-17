'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategoryById } from '../../data/courses';
import { FaArrowLeft, FaClipboardList, FaBook, FaGraduationCap, FaRocket } from 'react-icons/fa';
import React, { useState } from 'react';

export default function CourseDetailPage({ params }) {
    // ✅ UNWRAP params for Next.js 16
    const { category, slug } = React.use(params);
    const categoryData = getCategoryById(category);

    if (!categoryData) {
        notFound();
    }

    const course = categoryData.courses.find(c => c.slug === slug);

    if (!course) {
        notFound();
    }

    // Tab state
    const [activeTab, setActiveTab] = useState('requirements');

    // Tab content configuration
    const tabs = {
        requirements: {
            label: 'Entry Requirements',
            icon: FaClipboardList,
            content: course.entryRequirements
        },
        units: {
            label: 'Study Units',
            icon: FaBook,
            content: course.studyUnits
        },
        outcomes: {
            label: 'Learning Outcomes',
            icon: FaGraduationCap,
            content: course.learningOutcomes
        },
        progression: {
            label: 'Future Progression',
            icon: FaRocket,
            content: course.futureProgression
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[300px] md:h-[400px] bg-gray-800">
                {course.image ? (
                    <img
                        src={course.image}
                        alt={course.name}
                        className="w-full h-full object-cover opacity-70"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-900 to-orange-600">
                        <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
                            {course.name}
                        </h1>
                    </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 w-full">
                        <Link
                            href={`/courses/${category}`}
                            className="inline-flex items-center text-white hover:text-orange-300 mb-4 transition"
                        >
                            <FaArrowLeft className="mr-2" /> Back to {categoryData.name}
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
                            {course.name}
                        </h1>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
                                {categoryData.name}
                            </span>
                            {course.duration && (
                                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                                    {course.duration}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Content with Tabs */}
            <div className="max-w-5xl mx-auto px-4 py-12">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Tab Navigation */}
                    <div className="border-b border-gray-200">
                        <div className="flex flex-wrap">
                            {Object.entries(tabs).map(([key, tab]) => {
                                const Icon = tab.icon;
                                const isActive = activeTab === key;
                                return (
                                    <button
                                        key={key}
                                        onClick={() => setActiveTab(key)}
                                        className={`px-6 py-4 font-medium text-sm md:text-base transition flex items-center ${isActive
                                            ? 'border-b-2 border-orange-500 text-orange-600'
                                            : 'text-gray-600 hover:text-gray-900'
                                            }`}
                                    >
                                        <Icon className="mr-2" /> {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6 md:p-8">
                        {Object.entries(tabs).map(([key, tab]) => {
                            const isActive = activeTab === key;
                            return (
                                <div key={key} className={isActive ? 'block' : 'hidden'}>
                                    <h2 className="text-2xl font-bold text-blue-900 mb-4">{tab.label}</h2>
                                    <div className="prose max-w-none">
                                        {tab.content ? (
                                            typeof tab.content === 'string' ? (
                                                <p className="text-gray-700 text-lg">{tab.content}</p>
                                            ) : Array.isArray(tab.content) ? (
                                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                                    {tab.content.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-gray-700 text-lg">{tab.content}</p>
                                            )
                                        ) : (
                                            <p className="text-gray-500">No information available.</p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Enroll Button */}
                <div className="mt-8 text-center">
                    <Link
                        href="/contact"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg transition duration-300 text-lg shadow-lg hover:shadow-xl"
                    >
                        Enroll Now
                    </Link>
                </div>
            </div>
        </div>
    );
}