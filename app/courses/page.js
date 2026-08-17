// app/courses/page.js
import Link from 'next/link';
import { categories } from './data/courses';

export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-blue-900 text-center mb-4">
                    Our Certification Programs
                </h1>
                <p className="text-xl text-gray-600 text-center mb-12">
                    Choose your path to professional excellence
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <Link key={category.id} href={`/courses/${category.id}`}>
                            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition border-2 border-transparent hover:border-orange-500">
                                <h3 className="text-xl font-bold text-blue-900 mb-2">{category.name}</h3>
                                <p className="text-gray-600 text-sm">{category.description}</p>
                                <span className="inline-block mt-4 text-orange-500 font-semibold">
                                    {category.courses.length} Courses →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}