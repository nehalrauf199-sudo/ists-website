export default function About() {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-orange-600 text-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        About Institute of Safety & Technical Studies
                    </h1>
                    <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Your trusted partner in professional safety, HSE, and quality control training since 2015
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Story</h2>
                            <div className="w-16 h-1 bg-orange-500 mb-6"></div>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                The Institute of Safety & Technical Studies (ISTS) was established with a vision to provide
                                world-class safety and technical education to professionals across Pakistan and beyond.
                            </p>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                With a focus on practical knowledge and international standards, we have trained thousands
                                of professionals who now work in leading organizations in the Gulf countries, Europe, and
                                around the world.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Our commitment to excellence and student success has made us one of the most trusted
                                training institutes in the region for OSHA, IOSH, OTHM, and HiQual certifications.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8 text-center">
                            <div className="text-6xl mb-4">🏆</div>
                            <h3 className="text-2xl font-bold text-blue-900 mb-2">10+ Years of Excellence</h3>
                            <p className="text-gray-700">Trusted by thousands of professionals worldwide</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-16 px-4 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission & Vision</h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Mission Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300">
                            <div className="text-5xl mb-4">🎯</div>
                            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To provide accessible, high-quality safety and technical education that empowers
                                professionals to excel in their careers and create safer workplaces globally.
                            </p>
                        </div>
                        {/* Vision Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300">
                            <div className="text-5xl mb-4">👁️</div>
                            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To become the leading institute for safety and technical training in the region,
                                recognized globally for excellence in professional education and student success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Core Values</h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
                        <p className="text-gray-600 mt-4">The principles that guide everything we do</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center p-4">
                            <div className="text-4xl mb-3">⭐</div>
                            <h4 className="font-bold text-blue-800 mb-2">Excellence</h4>
                            <p className="text-gray-600 text-sm">Striving for the highest quality in everything we do</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-4xl mb-3">🤝</div>
                            <h4 className="font-bold text-blue-800 mb-2">Integrity</h4>
                            <p className="text-gray-600 text-sm">Honest and transparent in all our dealings</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-4xl mb-3">💡</div>
                            <h4 className="font-bold text-blue-800 mb-2">Innovation</h4>
                            <p className="text-gray-600 text-sm">Embracing new teaching methods and technologies</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-4xl mb-3">🌍</div>
                            <h4 className="font-bold text-blue-800 mb-2">Global Mindset</h4>
                            <p className="text-gray-600 text-sm">Preparing students for international careers</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose ISTS - Key Features */}
            <section className="py-16 px-4 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose ISTS?</h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
                        <p className="text-gray-600 mt-4">What makes us different from other institutes</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
                            <div className="text-4xl mb-3">🌍</div>
                            <h3 className="text-xl font-bold text-blue-800 mb-2">International Recognition</h3>
                            <p className="text-gray-600">Certifications accepted worldwide, opening doors to global careers</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
                            <div className="text-4xl mb-3">👨‍🏫</div>
                            <h3 className="text-xl font-bold text-blue-800 mb-2">Expert Trainers</h3>
                            <p className="text-gray-600">Learn from industry professionals with real-world experience</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
                            <div className="text-4xl mb-3">📚</div>
                            <h3 className="text-xl font-bold text-blue-800 mb-2">Flexible Learning</h3>
                            <p className="text-gray-600">Online, classroom, and blended learning options available</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
                            <div className="text-4xl mb-3">🛠️</div>
                            <h3 className="text-xl font-bold text-blue-800 mb-2">Practical Training</h3>
                            <p className="text-gray-600">Hands-on training with real-world scenarios and case studies</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
                            <div className="text-4xl mb-3">💼</div>
                            <h3 className="text-xl font-bold text-blue-800 mb-2">Career Support</h3>
                            <p className="text-gray-600">Job placement assistance and career guidance for all students</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
                            <div className="text-4xl mb-3">💰</div>
                            <h3 className="text-xl font-bold text-blue-800 mb-2">Affordable Fees</h3>
                            <p className="text-gray-600">Quality education at competitive prices with installment options</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Partners & Accreditations */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Partners & Accreditations</h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
                        <p className="text-gray-600 mt-4">Proudly associated with leading certification bodies worldwide</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                        <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
                            <img src="/osha.jpg" alt="OSHA" className="w-20 h-20 mx-auto mb-3" />
                            <p className="font-semibold text-blue-800">OSHA</p>
                            <p className="text-xs text-gray-500">Official Partner</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
                            <img src="/otha.png" alt="OTHM" className="w-20 h-20 mx-auto mb-3" />
                            <p className="font-semibold text-blue-800">OTHM</p>
                            <p className="text-xs text-gray-500">Approved Center</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
                            <img src="/hiqual.png" alt="HiQual" className="w-20 h-20 mx-auto mb-3" />
                            <p className="font-semibold text-blue-800">HiQual</p>
                            <p className="text-xs text-gray-500">Authorized Partner</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
                            <img src="/iosh.png" alt="IOSH" className="w-20 h-20 mx-auto mb-3" />
                            <p className="font-semibold text-blue-800">IOSH</p>
                            <p className="text-xs text-gray-500">Accredited Provider</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
                            <p className="text-blue-200">Students Trained</p>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                            <p className="text-blue-200">Certified Courses</p>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
                            <p className="text-blue-200">Expert Trainers</p>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                            <p className="text-blue-200">Placement Assistance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 px-4 bg-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-gray-700 text-lg mb-8">
                        Join thousands of successful professionals who have advanced their careers with ISTS
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a href="/register" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg">
                            Register Now →
                        </a>
                        <a href="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}