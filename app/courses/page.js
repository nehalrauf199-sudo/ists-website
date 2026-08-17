// app/courses/page.js
import Link from 'next/link';
import { categories } from './data/courses';
import { FaSearch } from 'react-icons/fa';

export default function CoursesPage() {
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
                    <div className="relative">
                        <input
                            type="text"
                            id="categorySearch"
                            placeholder="Search for courses or categories..."
                            className="w-full px-6 py-4 pl-14 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm"
                            onKeyUp={(e) => {
                                const searchTerm = e.target.value.toLowerCase();
                                const categoryCards = document.querySelectorAll('.category-card');
                                let hasResults = false;
                                categoryCards.forEach((card) => {
                                    const title = card.querySelector('.category-title')?.textContent?.toLowerCase() || '';
                                    const desc = card.querySelector('.category-desc')?.textContent?.toLowerCase() || '';
                                    const match = title.includes(searchTerm) || desc.includes(searchTerm);
                                    card.style.display = match ? 'block' : 'none';
                                    if (match) hasResults = true;
                                });
                                const noResults = document.getElementById('noResults');
                                if (noResults) {
                                    noResults.style.display = hasResults ? 'none' : 'block';
                                }
                            }}
                        />
                        <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <Link
                                key={category.id}
                                href={`/courses/${category.id}`}
                                className="category-card block"
                            >
                                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-orange-500 h-full flex flex-col">
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="p-3 bg-orange-100 rounded-lg flex-shrink-0">
                                            <Icon className="w-6 h-6 text-orange-500" />
                                        </div>
                                        <h3 className="category-title text-lg font-bold text-blue-900 line-clamp-2">
                                            {category.name}
                                        </h3>
                                    </div>
                                    <p className="category-desc text-gray-600 text-sm flex-grow line-clamp-2">
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

                {/* No Results Message */}
                <div id="noResults" className="text-center py-16 hidden">
                    <p className="text-gray-500 text-xl">No categories found matching your search.</p>
                </div>
            </div>
        </div>
    );
}