'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategoryById } from '../../data/courses';
import { FaArrowLeft, FaClipboardList, FaBook, FaGraduationCap, FaRocket } from 'react-icons/fa';
import React from 'react';

export default function CourseDetailPage({ params }) {
    // UNWRAP params using React.use() - REQUIRED for Next.js 16
    const { category, slug } = React.use(params);
    const categoryData = getCategoryById(category);

    if (!categoryData) {
        notFound();
    }

    const course = categoryData.courses.find(c => c.slug === slug);

    if (!course) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50">
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

            <div className="max-w-5xl mx-auto px-4 py-12">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="border-b border-gray-200">
                        <div className="flex flex-wrap">
                            <TabButton id="requirements" active={true}>
                                <FaClipboardList className="mr-2" /> Entry Requirements
                            </TabButton>
                            <TabButton id="units">
                                <FaBook className="mr-2" /> Study Units
                            </TabButton>
                            <TabButton id="outcomes">
                                <FaGraduationCap className="mr-2" /> Learning Outcomes
                            </TabButton>
                            <TabButton id="progression">
                                <FaRocket className="mr-2" /> Future Progression
                            </TabButton>
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        <TabContent id="requirements" active={true}>
                            <h2 className="text-2xl font-bold text-blue-900 mb-4">Entry Requirements</h2>
                            <div className="prose max-w-none">
                                {course.entryRequirements ? (
                                    typeof course.entryRequirements === 'string' ? (
                                        <p className="text-gray-700 text-lg">{course.entryRequirements}</p>
                                    ) : (
                                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                            {course.entryRequirements.map((req, index) => (
                                                <li key={index}>{req}</li>
                                            ))}
                                        </ul>
                                    )
                                ) : (
                                    <p className="text-gray-500">No specific entry requirements listed.</p>
                                )}
                            </div>
                        </TabContent>

                        <TabContent id="units">
                            <h2 className="text-2xl font-bold text-blue-900 mb-4">Study Units</h2>
                            <div className="prose max-w-none">
                                {course.studyUnits && course.studyUnits.length > 0 ? (
                                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                        {course.studyUnits.map((unit, index) => (
                                            <li key={index} className="text-lg">{unit}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-500">Study units will be provided upon enrollment.</p>
                                )}
                            </div>
                        </TabContent>

                        <TabContent id="outcomes">
                            <h2 className="text-2xl font-bold text-blue-900 mb-4">Learning Outcomes</h2>
                            <div className="prose max-w-none">
                                {course.learningOutcomes && course.learningOutcomes.length > 0 ? (
                                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                        {course.learningOutcomes.map((outcome, index) => (
                                            <li key={index} className="text-lg">{outcome}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-500">Learning outcomes will be provided upon enrollment.</p>
                                )}
                            </div>
                        </TabContent>

                        <TabContent id="progression">
                            <h2 className="text-2xl font-bold text-blue-900 mb-4">Future Progression</h2>
                            <div className="prose max-w-none">
                                {course.futureProgression ? (
                                    typeof course.futureProgression === 'string' ? (
                                        <p className="text-gray-700 text-lg">{course.futureProgression}</p>
                                    ) : (
                                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                            {course.futureProgression.map((prog, index) => (
                                                <li key={index}>{prog}</li>
                                            ))}
                                        </ul>
                                    )
                                ) : (
                                    <p className="text-gray-500">Future progression opportunities available.</p>
                                )}
                            </div>
                        </TabContent>
                    </div>
                </div>

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

function TabButton({ id, active, children }) {
    return (
        <button
            className={`tab-button px-6 py-4 font-medium text-sm md:text-base transition flex items-center ${active
                ? 'border-b-2 border-orange-500 text-orange-600'
                : 'text-gray-600 hover:text-gray-900'
                }`}
            data-tab={id}
            onClick={() => {
                document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
                const target = document.getElementById(`tab-${id}`);
                if (target) target.classList.remove('hidden');
                document.querySelectorAll('.tab-button').forEach(btn => {
                    btn.classList.remove('border-orange-500', 'text-orange-600');
                    btn.classList.add('text-gray-600');
                });
                const button = document.querySelector(`.tab-button[data-tab="${id}"]`);
                if (button) {
                    button.classList.add('border-orange-500', 'text-orange-600');
                    button.classList.remove('text-gray-600');
                }
            }}
        >
            {children}
        </button>
    );
}

function TabContent({ id, active, children }) {
    return (
        <div
            id={`tab-${id}`}
            className={`tab-content ${active ? '' : 'hidden'}`}
        >
            {children}
        </div>
    );
}