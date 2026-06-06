import Testimonials from './components/Testimonials';

export default function Home() {
    return (
        <div className="bg-white">

            {/* HERO SECTION */}
            <section className="relative text-white text-center py-32 px-4">
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('/hero-bg.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-orange-600/70 z-0"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Institute of Safety & Technical Studies
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-100">
                        Professional training institute offering Safety, HSE, and Quality Control certifications.
                    </p>
                    <a href="/courses" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 inline-block">
                        Explore Courses
                    </a>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose ISTS?</h2>
                            <div className="w-20 h-1 bg-orange-500 mb-6"></div>
                            <p className="text-gray-700 text-lg mb-4">
                                We provide internationally recognized certifications with expert trainers and flexible learning options.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold text-xl">✓</span><span className="text-gray-700"><strong>Internationally recognized</strong> diplomas and certifications</span></li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold text-xl">✓</span><span className="text-gray-700"><strong>Specialized training</strong> in HSE and workplace safety</span></li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold text-xl">✓</span><span className="text-gray-700"><strong>Practical, industry-focused</strong> learning approach</span></li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold text-xl">✓</span><span className="text-gray-700"><strong>Experienced trainers</strong> and professional guidance</span></li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold text-xl">✓</span><span className="text-gray-700"><strong>Flexible learning</strong> opportunities for students and professionals</span></li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold text-xl">✓</span><span className="text-gray-700"><strong>Career-oriented programs</strong> to improve employability</span></li>
                            </ul>
                            <p className="text-gray-600 italic">
                                Join thousands of professionals who have advanced their careers with our industry-focused training programs.
                            </p>
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <img src="/training-image.jpg" alt="Professional Safety Training" className="w-full h-auto object-cover hover:scale-105 transition duration-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY FEATURES WITH VERY LARGE IMAGES */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

                    {/* Global Recognition */}
                    <div className="p-6 hover:shadow-xl transition duration-300 rounded-lg group">
                        <div className="w-64 h-64 mx-auto mb-4 overflow-hidden group-hover:scale-110 transition duration-300 rounded-full bg-gray-50 flex items-center justify-center">
                            <img
                                src="/images/global-recognition.jpeg"
                                alt="Global partnership and international recognition"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-blue-800 mb-2">Global Recognition</h3>
                        <p className="text-gray-600">Internationally accepted certifications</p>
                    </div>

                    {/* Expert Trainers */}
                    <div className="p-6 hover:shadow-xl transition duration-300 rounded-lg group">
                        <div className="w-64 h-64 mx-auto mb-4 overflow-hidden group-hover:scale-110 transition duration-300 rounded-full bg-gray-50 flex items-center justify-center">
                            <img
                                src="/images/expert-trainers.jpeg"
                                alt="Experienced instructors and expert trainers"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-blue-800 mb-2">Expert Trainers</h3>
                        <p className="text-gray-600">Learn from industry professionals</p>
                    </div>

                    {/* Flexible Learning */}
                    <div className="p-6 hover:shadow-xl transition duration-300 rounded-lg group">
                        <div className="w-64 h-64 mx-auto mb-4 overflow-hidden group-hover:scale-110 transition duration-300 rounded-full bg-gray-50 flex items-center justify-center">
                            <img
                                src="/images/flexible-learning.jpeg"
                                alt="Online and flexible learning options"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-blue-800 mb-2">Flexible Learning</h3>
                        <p className="text-gray-600">Online and classroom options available</p>
                    </div>

                </div>
            </section>

            <Testimonials />

            <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
                    <p className="mb-6 text-blue-100">Get certified and advance your career in safety and quality management</p>
                    <a href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block transform hover:scale-105">
                        Contact Us
                    </a>
                </div>
            </section>

        </div>
    );
}