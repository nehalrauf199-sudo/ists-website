import clientPromise from '@/app/lib/mongodb';
import { ObjectId } from 'mongodb';
import Link from 'next/link';

async function getCourseById(id) {
    const client = await clientPromise;
    const db = client.db('ists');
    const course = await db.collection('courses').findOne({ _id: new ObjectId(id) });
    return course;
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const course = await getCourseById(id);
    if (!course) {
        return { title: 'Course Not Found', description: 'The requested course does not exist.' };
    }
    return {
        title: course.seoTitle || course.name,
        description: course.metaDescription || `Learn ${course.name} at ISTS.`,
        keywords: course.focusKeyword,
    };
}

export default async function CoursePage({ params }) {
    const { id } = await params;
    const course = await getCourseById(id);

    if (!course) {
        return (
            <div className="min-h-screen bg-gray-50 py-20 px-4 text-center">
                <h1 className="text-3xl font-bold text-blue-900">Course Not Found</h1>
                <p className="mt-4">The course you are looking for does not exist.</p>
                <Link href="/courses" className="inline-block mt-6 bg-orange-500 text-white px-6 py-2 rounded-full">
                    View All Courses
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.name}</h1>
                    <p className="text-blue-100">Category: {course.category} | Duration: {course.hours}</p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-12">
                {course.featuredImage && (
                    <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                        <img src={course.featuredImage} alt={course.name} className="w-full h-auto object-cover" />
                    </div>
                )}
                {course.sections?.map((section, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-md p-6 mb-6">
                        <h2 className="text-2xl font-bold text-blue-900 mb-3">{section.heading}</h2>
                        <div className="text-gray-700 whitespace-pre-line">{section.description}</div>
                    </div>
                ))}
                {course.faqs?.length > 0 && (
                    <div className="mt-12 bg-white rounded-xl shadow-md p-6">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {course.faqs.map((faq, idx) => (
                                <details key={idx} className="border rounded-lg p-4">
                                    <summary className="font-semibold cursor-pointer">{faq.question}</summary>
                                    <p className="mt-2 text-gray-600 pl-4">{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                )}
                <div className="mt-12 text-center">
                    <Link href="/register" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition">
                        Register for this Course
                    </Link>
                </div>
            </div>
        </div>
    );
}