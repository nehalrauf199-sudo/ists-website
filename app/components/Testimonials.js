'use client';
import { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm';
import Avatar from './Avatar';

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const response = await fetch('/api/reviews');
            const data = await response.json();
            setReviews(data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        } finally {
            setLoading(false);
        }
    };

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    if (loading) {
        return (
            <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
                <div className="text-center">
                    <div className="text-4xl mb-4">⏳</div>
                    <p className="text-gray-500">Loading reviews...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                        What Our Students Say
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Real reviews from our successful graduates
                    </p>
                </div>

                {reviews.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                        <div className="text-4xl mb-4">⭐</div>
                        <p className="text-gray-500">No reviews yet. Be the first to share your experience!</p>
                    </div>
                ) : (
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                            >
                                {reviews.map((review) => (
                                    <div key={review._id} className="w-full flex-shrink-0 px-4">
                                        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
                                            <div className="flex flex-col md:flex-row items-center gap-6">
                                                <div className="flex-shrink-0">
                                                    <Avatar
                                                        name={review.name}
                                                        email={review.email}
                                                        size="w-24 h-24"
                                                    />
                                                </div>
                                                <div className="flex-1 text-center md:text-left">
                                                    <div className="text-4xl text-orange-500 mb-2">"</div>
                                                    <p className="text-gray-700 italic mb-4">{review.comment}</p>
                                                    <div className="mt-2">
                                                        <h4 className="font-bold text-blue-900 text-lg">{review.name}</h4>
                                                        <p className="text-sm text-gray-500">Course: {review.course}</p>
                                                        <div className="flex justify-center md:justify-start mt-2">
                                                            {[...Array(5)].map((_, i) => (
                                                                <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} viewBox="0 0 20 20">
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {reviews.length > 1 && (
                            <>
                                <button
                                    onClick={prevTestimonial}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition text-sm md:text-base"
                                >
                                    ◀
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition text-sm md:text-base"
                                >
                                    ▶
                                </button>
                            </>
                        )}

                        {/* DOTS - FIXED FOR MOBILE (smaller and better looking) */}
                        <div className="flex justify-center gap-1.5 md:gap-2 mt-6">
                            {reviews.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`rounded-full transition-all duration-300 ${activeIndex === idx
                                        ? 'w-4 md:w-6 h-1.5 md:h-2 bg-orange-500'
                                        : 'w-1.5 md:w-2 h-1.5 md:h-2 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-900">500+</div>
                        <p className="text-sm text-gray-600">Students Trained</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-900">98%</div>
                        <p className="text-sm text-gray-600">Pass Rate</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-900">50+</div>
                        <p className="text-sm text-gray-600">Courses Offered</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-900">10+</div>
                        <p className="text-sm text-gray-600">Expert Trainers</p>
                    </div>
                </div>

                {/* Review Form Button */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg transition"
                    >
                        {showForm ? 'Hide Review Form' : 'Write a Review'}
                    </button>
                </div>

                {showForm && (
                    <div className="mt-8">
                        <ReviewForm />
                    </div>
                )}
            </div>
        </section>
    );
}