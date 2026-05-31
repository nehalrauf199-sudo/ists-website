// app/courses/[slug]/page.js
import clientPromise from '@/app/lib/mongodb';
import Image from 'next/image';

// Helper to get course by slug
async function getCourseBySlug(slug) {
    const client = await clientPromise;
    const db = client.db('ists');
    // Since slug is not a separate field, we generate it from name: lowercase, spaces replaced with hyphens.
    // We'll fetch all courses and then find the one whose slug matches.
    const courses = await db.collection('courses').find({}).toArray();
    const course = courses.find(c =>
        c.name.toLowerCase().replace(/\s+/g, '-') === slug
    );
    return course;
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
    const slug = params.slug;
    const course = await getCourseBySlug(slug);
    if (!course) {
        return {
            title: 'Course Not Found - ISTS',
            description: 'The requested course does not exist.'
        };
    }
    return {
        title: course.seoTitle || course.name,
        description: course.metaDescription || `Learn ${course.name} at ISTS.`,
        keywords: course.focusKeyword,
        openGraph: {
            title: course.seoTitle || course.name,
            description: course.metaDescription || `Learn ${course.name} at ISTS.`,
            images: course.featuredImage ? [{ url: course.featuredImage }] : [],
        },
    };
}

export default async function CoursePage({ params }) {
    const slug = params.slug;
    const course = await getCourseBySlug(slug);

    if (!course) {
        return (
            <div className="min-h-screen bg-gray-50 py-20 px-4 text-center">
                <h1 className="text-3xl font-bold text-blue-900">Course Not Found</h1>
                <p className="mt-4">The course you are looking for does not exist.</p>
                <a href="/courses" className="inline-block mt-6 bg-orange-500 text-white px-6 py-2 rounded-full">View All Courses</a>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Course Title and Featured Image */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.name}</h1>
                    <p className="text-blue-100">Category: {course.category} | Duration: {course.hours}</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Featured Image (if exists) */}
                {course.featuredImage && (
                    <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                        <img src={course.featuredImage} alt={course.name} className="w-full h-auto object-cover" />
                    </div>
                )}

                {/* Dynamic Sections – Admin can add any number of sections */}
                {course.sections && course.sections.length > 0 ? (
                    <div className="space-y-8">
                        {course.sections.map((section, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-md p-6">
                                <h2 className="text-2xl font-bold text-blue-900 mb-3">{section.heading}</h2>
                                <div className="text-gray-700 whitespace-pre-line">{section.description}</div>
                            </div>
                        ))}
                    </div>
                ) : (
                    // Fallback: display old hardcoded fields if sections are empty (for backward compatibility)
                    <div className="space-y-8">
                        {course.description && (
                            <div className="bg-white rounded-xl shadow-md p-6">
                                <h2 className="text-2xl font-bold text-blue-900 mb-3">Course Overview</h2>
                                <p className="text-gray-700">{course.description}</p>
                            </div>
                        )}
                        {course.content && course.content.length > 0 && (
                            <div className="bg-white rounded-xl shadow-md p-6">
                                <h2 className="text-2xl font-bold text-blue-900 mb-3">Course Content</h2>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {course.content.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                        )}
                        {course.outcomes && course.outcomes.length > 0 && (
                            <div className="bg-white rounded-xl shadow-md p-6">
                                <h2 className="text-2xl font-bold text-blue-900 mb-3">Learning Outcomes</h2>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {course.outcomes.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                        )}
                        {course.eligibility && (
                            <div className="bg-white rounded-xl shadow-md p-6">
                                <h2 className="text-2xl font-bold text-blue-900 mb-3">Eligibility Criteria</h2>
                                <p className="text-gray-700">{course.eligibility}</p>
                            </div>
                        )}
                        {course.modules && course.modules.length > 0 && (
                            <div className="bg-white rounded-xl shadow-md p-6">
                                <h2 className="text-2xl font-bold text-blue-900 mb-3">Study Modules</h2>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {course.modules.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                        )}
                        {course.learningObjectives && course.learningObjectives.length > 0 && (
                            <div className="bg-white rounded-xl shadow-md p-6">
                                <h2 className="text-2xl font-bold text-blue-900 mb-3">Learning Objectives</h2>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {course.learningObjectives.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {/* FAQ Section – Accordion */}
                {course.faqs && course.faqs.length > 0 && (
                    <div className="mt-12 bg-white rounded-xl shadow-md p-6">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4" suppressHydrationWarning>
                            {course.faqs.map((faq, idx) => (
                                <details key={idx} className="border rounded-lg p-4">
                                    <summary className="font-semibold text-gray-800 cursor-pointer">{faq.question}</summary>
                                    <p className="mt-2 text-gray-600 pl-4">{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                )}

                {/* Call to Action */}
                <div className="mt-12 text-center">
                    <a href="/register" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition">Register for this Course</a>
                </div>
            </div>
        </div>
    );
}