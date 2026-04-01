export default function Courses() {
    return (
        <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">

            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-orange-600 bg-clip-text text-transparent mb-4">
                    Our Certification Programs
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
                <p className="text-gray-600 mt-4">Choose your path to professional excellence</p>
            </div>

            {/* Courses Grid - 3x2 Layout (6 boxes) */}
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* OSHA Box */}
                    <a href="/courses/osha" className="group">
                        <div className="bg-white rounded-2xl shadow-lg p-12 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100 min-h-[320px]">
                            <img src="/osha.jpg" alt="OSHA" className="w-36 h-36 object-contain mb-6 group-hover:scale-110 transition duration-300" />
                        </div>
                        <div className="text-center mt-5">
                            <h3 className="text-xl font-bold text-blue-900 mb-2">OSHA</h3>
                            <p className="text-gray-600">Occupational Safety and Health Administration certifications</p>
                        </div>
                    </a>

                    {/* OTHM Box */}
                    <a href="/courses/othm" className="group">
                        <div className="bg-white rounded-2xl shadow-lg p-12 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100 min-h-[320px]">
                            <img src="/otha.png" alt="OTHM" className="w-36 h-36 object-contain mb-6 group-hover:scale-110 transition duration-300" />
                        </div>
                        <div className="text-center mt-5">
                            <h3 className="text-xl font-bold text-blue-900 mb-2">OTHM</h3>
                            <p className="text-gray-600">Professional diploma programs for career advancement</p>
                        </div>
                    </a>

                    {/* HiQual Box */}
                    <a href="/courses/hiqual" className="group">
                        <div className="bg-white rounded-2xl shadow-lg p-12 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100 min-h-[320px]">
                            <img src="/hiqual.png" alt="HiQual" className="w-36 h-36 object-contain mb-6 group-hover:scale-110 transition duration-300" />
                        </div>
                        <div className="text-center mt-5">
                            <h3 className="text-xl font-bold text-blue-900 mb-2">HiQual</h3>
                            <p className="text-gray-600">QA/QC, ISO standards, and technical certifications</p>
                        </div>
                    </a>

                    {/* IOSH Box */}
                    <a href="/courses/iosh" className="group">
                        <div className="bg-white rounded-2xl shadow-lg p-12 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100 min-h-[320px]">
                            <img src="/iosh.png" alt="IOSH" className="w-36 h-36 object-contain mb-6 group-hover:scale-110 transition duration-300" />
                        </div>
                        <div className="text-center mt-5">
                            <h3 className="text-xl font-bold text-blue-900 mb-2">IOSH</h3>
                            <p className="text-gray-600">Managing safely and working safely certifications</p>
                        </div>
                    </a>

                    {/* Other Courses Box - NEW */}
                    <a href="/courses/other" className="group">
                        <div className="bg-white rounded-2xl shadow-lg p-12 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100 min-h-[320px]">
                            <div className="w-36 h-36 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center group-hover:scale-110 transition duration-300">
                                <span className="text-5xl">📚</span>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <h3 className="text-xl font-bold text-blue-900 mb-2">Other Courses</h3>
                            <p className="text-gray-600">Specialized professional courses and certifications</p>
                        </div>
                    </a>

                    {/* Placeholder for future expansion (optional) */}
                    <div className="opacity-0 invisible lg:visible lg:opacity-100">
                        {/* This is a spacer to maintain layout symmetry */}
                    </div>

                </div>
            </div>

        </div>
    )
}