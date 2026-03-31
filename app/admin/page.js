'use client';
import { useState, useEffect } from 'react';
import Avatar from '@/app/components/Avatar';

export default function AdminDashboard() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showForgot, setShowForgot] = useState(false);
    const [resetEmail, setResetEmail] = useState('');
    const [resetMessage, setResetMessage] = useState('');
    const [activeTab, setActiveTab] = useState('registrations');
    const [registrations, setRegistrations] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [settings, setSettings] = useState(null);
    const [courses, setCourses] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingCourse, setEditingCourse] = useState(null);
    const [showCourseForm, setShowCourseForm] = useState(false);
    const [courseSearch, setCourseSearch] = useState('');
    const [regSearch, setRegSearch] = useState('');
    const [contactSearch, setContactSearch] = useState('');
    const [reviewSearch, setReviewSearch] = useState('');
    const [courseForm, setCourseForm] = useState({
        name: '',
        category: '',
        hours: '',
        description: '',
        content: [],
        outcomes: [],
        eligibility: '',
        modules: [],
        learningObjectives: []
    });
    const [saveMessage, setSaveMessage] = useState('');

    const ADMIN_PASSWORD = 'arshan2002';

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Incorrect password');
        }
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setResetMessage('Sending...');
        try {
            const response = await fetch('/api/admin/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: resetEmail })
            });
            const data = await response.json();
            if (response.ok) {
                setResetMessage('✅ Password reset link sent to your email!');
                setTimeout(() => {
                    setShowForgot(false);
                    setResetMessage('');
                    setResetEmail('');
                }, 3000);
            } else {
                setResetMessage('❌ ' + data.error);
            }
        } catch (error) {
            setResetMessage('❌ Failed to send reset email. Please try again.');
        }
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const [regRes, contactRes, settingsRes, coursesRes, reviewsRes] = await Promise.all([
                fetch('/api/admin/registrations'),
                fetch('/api/admin/contacts'),
                fetch('/api/admin/settings'),
                fetch('/api/manage/courses'),
                fetch('/api/admin/reviews')
            ]);
            const regData = await regRes.json();
            const contactData = await contactRes.json();
            const settingsData = await settingsRes.json();
            const coursesData = await coursesRes.json();
            const reviewsData = await reviewsRes.json();
            setRegistrations(Array.isArray(regData) ? regData : []);
            setContacts(Array.isArray(contactData) ? contactData : []);
            setSettings(settingsData);
            setCourses(Array.isArray(coursesData) ? coursesData : []);
            setReviews(Array.isArray(reviewsData) ? reviewsData : []);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const saveSettings = async () => {
        setSaveMessage('Saving...');
        try {
            const response = await fetch('/api/admin/settings', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(settings)
            });
            if (response.ok) {
                setSaveMessage('✅ Settings saved successfully!');
                setTimeout(() => setSaveMessage(''), 3000);
                alert('Settings updated successfully!');
            } else {
                setSaveMessage('❌ Failed to save settings');
                alert('Failed to update settings');
            }
        } catch (error) {
            console.error('Error updating settings:', error);
            setSaveMessage('❌ Error saving settings');
            alert('Failed to update settings');
        }
    };

    const handleSettingsChange = (e) => {
        setSettings({ ...settings, [e.target.name]: e.target.value });
    };

    const handleCourseInputChange = (e) => {
        setCourseForm({ ...courseForm, [e.target.name]: e.target.value });
    };

    const handleArrayInput = (field, value) => {
        const items = value.split('\n').filter(item => item.trim());
        setCourseForm({ ...courseForm, [field]: items });
    };

    const saveCourse = async () => {
        try {
            const method = editingCourse ? 'PUT' : 'POST';
            const body = editingCourse ? { ...courseForm, id: editingCourse._id } : courseForm;
            const response = await fetch('/api/manage/courses', {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            if (response.ok) {
                alert(editingCourse ? 'Course updated!' : 'Course added!');
                setShowCourseForm(false);
                setEditingCourse(null);
                setCourseForm({
                    name: '',
                    category: '',
                    hours: '',
                    description: '',
                    content: [],
                    outcomes: [],
                    eligibility: '',
                    modules: [],
                    learningObjectives: []
                });
                fetchData();
            } else {
                alert('Failed to save course');
            }
        } catch (error) {
            console.error('Error saving course:', error);
            alert('Failed to save course');
        }
    };

    const deleteCourse = async (id) => {
        if (confirm('Are you sure you want to delete this course?')) {
            try {
                const response = await fetch(`/api/manage/courses?id=${id}`, { method: 'DELETE' });
                if (response.ok) {
                    alert('Course deleted!');
                    fetchData();
                } else {
                    alert('Failed to delete course');
                }
            } catch (error) {
                console.error('Error deleting course:', error);
                alert('Failed to delete course');
            }
        }
    };

    const editCourse = (course) => {
        setEditingCourse(course);
        setCourseForm({
            name: course.name || '',
            category: course.category || '',
            hours: course.hours || '',
            description: course.description || '',
            content: course.content || [],
            outcomes: course.outcomes || [],
            eligibility: course.eligibility || '',
            modules: course.modules || [],
            learningObjectives: course.learningObjectives || []
        });
        setShowCourseForm(true);
    };

    const updateReviewStatus = async (id, action) => {
        try {
            const response = await fetch('/api/admin/reviews', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, action })
            });
            if (response.ok) {
                alert(`Review ${action === 'approve' ? 'approved' : 'rejected'}!`);
                fetchData();
            } else {
                alert('Failed to update review');
            }
        } catch (error) {
            console.error('Error updating review:', error);
            alert('Failed to update review');
        }
    };

    const deleteReview = async (id) => {
        if (confirm('Are you sure you want to delete this review?')) {
            try {
                const response = await fetch(`/api/admin/reviews?id=${id}`, { method: 'DELETE' });
                if (response.ok) {
                    alert('Review deleted!');
                    fetchData();
                }
            } catch (error) {
                console.error('Error deleting review:', error);
                alert('Failed to delete review');
            }
        }
    };

    const issueCertificate = async (reg) => {
        const completionDate = prompt('Enter completion date (YYYY-MM-DD):', new Date().toISOString().split('T')[0]);
        if (!completionDate) return;
        if (!confirm(`Issue certificate for ${reg.name} for course: ${reg.course}?`)) return;
        try {
            const response = await fetch('/api/certificate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    registrationId: reg._id,
                    studentName: reg.name,
                    courseName: reg.course,
                    completionDate: completionDate,
                    studentEmail: reg.email
                })
            });
            const result = await response.json();
            if (response.ok) {
                alert(`✅ Certificate issued successfully!\nCertificate ID: ${result.certificateId}\nEmail sent to: ${reg.email}`);
            } else {
                alert('❌ Failed to issue certificate: ' + (result.error || 'Unknown error'));
            }
        } catch (error) {
            console.error('Error issuing certificate:', error);
            alert('❌ Failed to issue certificate');
        }
    };

    // FIXED: Signature upload function
    const handleSignatureUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Validate file type
        if (!file.type.includes('image/png') && !file.type.includes('image/jpeg')) {
            alert('Please upload PNG or JPG image');
            return;
        }

        // Validate file size (max 2MB)
        if (file.size > 2 * 1024 * 1024) {
            alert('File size too large. Max 2MB');
            return;
        }

        const formData = new FormData();
        formData.append('signature', file);

        try {
            const response = await fetch('/api/admin/settings', {
                method: 'PUT',
                body: formData
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSettings(result.data);
                alert('Signature uploaded successfully!');
            } else {
                alert('Failed to upload signature: ' + (result.error || 'Unknown error'));
            }
        } catch (error) {
            console.error('Error uploading signature:', error);
            alert('Failed to upload signature');
        }
    };

    const filteredCourses = courses.filter(course =>
        course.name?.toLowerCase().includes(courseSearch.toLowerCase()) ||
        course.category?.toLowerCase().includes(courseSearch.toLowerCase()) ||
        course.hours?.toLowerCase().includes(courseSearch.toLowerCase())
    );

    const filteredRegistrations = registrations.filter(reg =>
        reg.name?.toLowerCase().includes(regSearch.toLowerCase()) ||
        reg.email?.toLowerCase().includes(regSearch.toLowerCase()) ||
        reg.phone?.toLowerCase().includes(regSearch.toLowerCase()) ||
        reg.course?.toLowerCase().includes(regSearch.toLowerCase())
    );

    const filteredContacts = contacts.filter(contact =>
        contact.name?.toLowerCase().includes(contactSearch.toLowerCase()) ||
        contact.email?.toLowerCase().includes(contactSearch.toLowerCase()) ||
        contact.phone?.toLowerCase().includes(contactSearch.toLowerCase()) ||
        contact.message?.toLowerCase().includes(contactSearch.toLowerCase())
    );

    const filteredReviews = reviews.filter(review =>
        review.name?.toLowerCase().includes(reviewSearch.toLowerCase()) ||
        review.course?.toLowerCase().includes(reviewSearch.toLowerCase()) ||
        review.comment?.toLowerCase().includes(reviewSearch.toLowerCase()) ||
        review.status?.toLowerCase().includes(reviewSearch.toLowerCase())
    );

    useEffect(() => {
        if (isLoggedIn) {
            fetchData();
        }
    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-20 px-4">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
                    <div className="text-center mb-8">
                        <div className="text-5xl mb-4">🔐</div>
                        <h1 className="text-2xl font-bold text-blue-900">Admin Login</h1>
                        <p className="text-gray-600 mt-2">Enter password to access dashboard</p>
                    </div>
                    {!showForgot ? (
                        <form onSubmit={handleLogin}>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter admin password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4" />
                            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                            <button type="submit" className="w-full bg-gradient-to-r from-blue-900 to-orange-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition">Login</button>
                            <div className="text-center mt-4">
                                <button type="button" onClick={() => setShowForgot(true)} className="text-sm text-blue-600 hover:text-blue-800 transition">Forgot Password?</button>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleForgotPassword}>
                            <p className="text-gray-600 text-sm mb-4">Enter your email address and we'll send you instructions to reset your password.</p>
                            <input type="email" value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} placeholder="admin@ists.com" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4" />
                            {resetMessage && <p className={`text-sm mb-4 ${resetMessage.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>{resetMessage}</p>}
                            <button type="submit" className="w-full bg-gradient-to-r from-blue-900 to-orange-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition mb-3">Send Reset Link</button>
                            <button type="button" onClick={() => { setShowForgot(false); setResetMessage(''); setResetEmail(''); }} className="w-full text-gray-500 hover:text-gray-700 text-sm">Back to Login</button>
                        </form>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-gradient-to-r from-blue-900 to-orange-600 text-white px-6 py-4 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-4">
                    <div>
                        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                        <p className="text-blue-100 text-sm">Manage registrations, courses, reviews, and site settings</p>
                    </div>
                    <button onClick={() => setIsLoggedIn(false)} className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">Logout</button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex gap-2 mb-6 border-b flex-wrap">
                    <button onClick={() => setActiveTab('registrations')} className={`px-6 py-3 font-semibold transition ${activeTab === 'registrations' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500 hover:text-blue-900'}`}>📋 Registrations ({registrations.length})</button>
                    <button onClick={() => setActiveTab('contacts')} className={`px-6 py-3 font-semibold transition ${activeTab === 'contacts' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500 hover:text-blue-900'}`}>💬 Contacts ({contacts.length})</button>
                    <button onClick={() => setActiveTab('courses')} className={`px-6 py-3 font-semibold transition ${activeTab === 'courses' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500 hover:text-blue-900'}`}>📚 Courses ({courses.length})</button>
                    <button onClick={() => setActiveTab('reviews')} className={`px-6 py-3 font-semibold transition ${activeTab === 'reviews' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500 hover:text-blue-900'}`}>⭐ Reviews ({reviews.filter(r => r.status === 'pending').length} pending)</button>
                    <button onClick={() => setActiveTab('settings')} className={`px-6 py-3 font-semibold transition ${activeTab === 'settings' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500 hover:text-blue-900'}`}>⚙️ Site Settings</button>
                </div>

                {loading ? (
                    <div className="text-center py-12 bg-white rounded-xl shadow-lg"><div className="text-4xl mb-4">⏳</div><p className="text-gray-500">Loading data...</p></div>
                ) : (
                    <>
                        {/* Registrations Tab */}
                        {activeTab === 'registrations' && (
                            <div>
                                <div className="mb-4">
                                    <div className="relative">
                                        <input type="text" placeholder="Search registrations by name, email, phone, or course..." value={regSearch} onChange={(e) => setRegSearch(e.target.value)} className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                        <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                                        {regSearch && <button onClick={() => setRegSearch('')} className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">✕</button>}
                                    </div>
                                    {regSearch && <p className="text-sm text-gray-500 mt-1">Found {filteredRegistrations.length} registration(s) matching "{regSearch}"</p>}
                                </div>
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                    {filteredRegistrations.length === 0 ? <div className="text-center py-12"><div className="text-4xl mb-4">📭</div><p className="text-gray-500">{regSearch ? `No registrations matching "${regSearch}"` : 'No registrations yet'}</p></div> :
                                        <div className="overflow-x-auto">
                                            <table className="w-full">
                                                <thead className="bg-gray-100">
                                                    <th className="p-4 text-left">Date</th><th className="p-4 text-left">Name</th><th className="p-4 text-left">Email</th><th className="p-4 text-left">Phone</th><th className="p-4 text-left">Course</th><th className="p-4 text-left">CV</th><th className="p-4 text-left">Certificate</th>
                                                </thead>
                                                <tbody>
                                                    {filteredRegistrations.map((reg, index) => (
                                                        <tr key={index} className="border-b hover:bg-gray-50">
                                                            <td className="p-4 text-sm">{new Date(reg.registeredAt).toLocaleDateString()}  </td>
                                                            <td className="p-4 font-medium">{reg.name}</td>
                                                            <td className="p-4 text-sm text-blue-600">{reg.email}</td>
                                                            <td className="p-4 text-sm">{reg.phone}</td>
                                                            <td className="p-4 text-sm max-w-xs truncate">{reg.course}</td>
                                                            <td className="p-4">{reg.cvFileName ? <a href={`/api/download/cv?file=${reg.cvFileName}`} target="_blank" rel="noopener noreferrer" className="text-orange-600 text-sm hover:underline">📄 Download CV</a> : <span className="text-gray-400 text-sm">No CV</span>}</td>
                                                            <td className="p-4"><button onClick={() => issueCertificate(reg)} className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded text-xs font-semibold transition">🎓 Issue Certificate</button></td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    }
                                </div>
                            </div>
                        )}

                        {/* Contacts Tab */}
                        {activeTab === 'contacts' && (
                            <div>
                                <div className="mb-4">
                                    <div className="relative">
                                        <input type="text" placeholder="Search contacts by name, email, phone, or message..." value={contactSearch} onChange={(e) => setContactSearch(e.target.value)} className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                        <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                                        {contactSearch && <button onClick={() => setContactSearch('')} className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">✕</button>}
                                    </div>
                                    {contactSearch && <p className="text-sm text-gray-500 mt-1">Found {filteredContacts.length} contact(s) matching "{contactSearch}"</p>}
                                </div>
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                    {filteredContacts.length === 0 ? <div className="text-center py-12"><div className="text-4xl mb-4">📭</div><p className="text-gray-500">{contactSearch ? `No contacts matching "${contactSearch}"` : 'No contact messages yet'}</p></div> :
                                        <div className="overflow-x-auto">
                                            <table className="w-full">
                                                <thead className="bg-gray-100">
                                                    <th className="p-4 text-left">Date</th><th className="p-4 text-left">Name</th><th className="p-4 text-left">Email</th><th className="p-4 text-left">Phone</th><th className="p-4 text-left">Message</th>
                                                </thead>
                                                <tbody>
                                                    {filteredContacts.map((contact, index) => (
                                                        <tr key={index} className="border-b hover:bg-gray-50">
                                                            <td className="p-4 text-sm">{new Date(contact.submittedAt).toLocaleDateString()}</td>
                                                            <td className="p-4 font-medium">{contact.name}</td>
                                                            <td className="p-4 text-sm text-blue-600">{contact.email}</td>
                                                            <td className="p-4 text-sm">{contact.phone}</td>
                                                            <td className="p-4 text-sm max-w-md">{contact.message}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    }
                                </div>
                            </div>
                        )}

                        {/* Courses Tab */}
                        {activeTab === 'courses' && (
                            <div>
                                <button onClick={() => { setEditingCourse(null); setCourseForm({ name: '', category: '', hours: '', description: '', content: [], outcomes: [], eligibility: '', modules: [], learningObjectives: [] }); setShowCourseForm(true); }} className="mb-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg">+ Add New Course</button>
                                <div className="mb-4">
                                    <div className="relative">
                                        <input type="text" placeholder="Search courses by name, category, or hours..." value={courseSearch} onChange={(e) => setCourseSearch(e.target.value)} className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                        <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                                        {courseSearch && <button onClick={() => setCourseSearch('')} className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">✕</button>}
                                    </div>
                                    {courseSearch && <p className="text-sm text-gray-500 mt-1">Found {filteredCourses.length} course(s) matching "{courseSearch}"</p>}
                                </div>
                                {showCourseForm && (
                                    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                                        <h3 className="text-xl font-bold text-blue-900 mb-4">{editingCourse ? 'Edit Course' : 'Add New Course'}</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <input type="text" name="name" placeholder="Course Name" value={courseForm.name} onChange={handleCourseInputChange} className="p-2 border rounded" />
                                            <select name="category" value={courseForm.category} onChange={handleCourseInputChange} className="p-2 border rounded">
                                                <option value="">Select Category</option>
                                                <option value="OSHA">OSHA</option>
                                                <option value="OTHM">OTHM</option>
                                                <option value="HiQual">HiQual</option>
                                                <option value="IOSH">IOSH</option>
                                            </select>
                                            <input type="text" name="hours" placeholder="Credit Hours" value={courseForm.hours} onChange={handleCourseInputChange} className="p-2 border rounded" />
                                            <textarea name="description" placeholder="Description" value={courseForm.description} onChange={handleCourseInputChange} className="p-2 border rounded col-span-2" rows="2" />
                                            <textarea placeholder="Content (one per line)" value={courseForm.content.join('\n')} onChange={(e) => handleArrayInput('content', e.target.value)} className="p-2 border rounded" rows="3" />
                                            <textarea placeholder="Outcomes (one per line)" value={courseForm.outcomes.join('\n')} onChange={(e) => handleArrayInput('outcomes', e.target.value)} className="p-2 border rounded" rows="3" />
                                            <textarea name="eligibility" placeholder="Eligibility Criteria" value={courseForm.eligibility} onChange={handleCourseInputChange} className="p-2 border rounded col-span-2" rows="2" />
                                            <textarea placeholder="Modules (one per line)" value={courseForm.modules.join('\n')} onChange={(e) => handleArrayInput('modules', e.target.value)} className="p-2 border rounded col-span-2" rows="4" />
                                            <textarea placeholder="Learning Objectives (one per line)" value={courseForm.learningObjectives.join('\n')} onChange={(e) => handleArrayInput('learningObjectives', e.target.value)} className="p-2 border rounded col-span-2" rows="4" />
                                        </div>
                                        <div className="flex gap-2 mt-4">
                                            <button onClick={saveCourse} className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
                                            <button onClick={() => setShowCourseForm(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                                        </div>
                                    </div>
                                )}
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                    {filteredCourses.length === 0 ? <div className="text-center py-12"><div className="text-4xl mb-4">📭</div><p className="text-gray-500">{courseSearch ? `No courses matching "${courseSearch}"` : 'No courses added yet'}</p></div> :
                                        <div className="overflow-x-auto">
                                            <table className="w-full">
                                                <thead className="bg-gray-100">
                                                    <th className="p-4 text-left">Name</th><th className="p-4 text-left">Category</th><th className="p-4 text-left">Hours</th><th className="p-4 text-left">Actions</th>
                                                </thead>
                                                <tbody>
                                                    {filteredCourses.map((course, index) => (
                                                        <tr key={index} className="border-b hover:bg-gray-50">
                                                            <td className="p-4">{course.name}</td>
                                                            <td className="p-4">
                                                                <span className={`px-2 py-1 rounded text-xs font-semibold ${course.category === 'OSHA' ? 'bg-blue-100 text-blue-800' : course.category === 'OTHM' ? 'bg-green-100 text-green-800' : course.category === 'HiQual' ? 'bg-purple-100 text-purple-800' : course.category === 'IOSH' ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-800'}`}>{course.category}</span>
                                                            </td>
                                                            <td className="p-4">{course.hours}</td>
                                                            <td className="p-4">
                                                                <button onClick={() => editCourse(course)} className="text-blue-600 mr-3 hover:text-blue-800">✏️ Edit</button>
                                                                <button onClick={() => deleteCourse(course._id)} className="text-red-600 hover:text-red-800">🗑️ Delete</button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    }
                                </div>
                            </div>
                        )}

                        {/* Reviews Tab */}
                        {activeTab === 'reviews' && (
                            <div>
                                <div className="mb-4">
                                    <div className="relative">
                                        <input type="text" placeholder="Search reviews by name, course, comment, or status..." value={reviewSearch} onChange={(e) => setReviewSearch(e.target.value)} className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                        <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                                        {reviewSearch && <button onClick={() => setReviewSearch('')} className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">✕</button>}
                                    </div>
                                    {reviewSearch && <p className="text-sm text-gray-500 mt-1">Found {filteredReviews.length} review(s) matching "{reviewSearch}"</p>}
                                </div>
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                    {filteredReviews.length === 0 ? <div className="text-center py-12"><div className="text-4xl mb-4">📭</div><p className="text-gray-500">{reviewSearch ? `No reviews matching "${reviewSearch}"` : 'No reviews yet'}</p></div> :
                                        <div className="overflow-x-auto">
                                            <table className="w-full">
                                                <thead className="bg-gray-100">
                                                    <th className="p-4 text-left">Date</th><th className="p-4 text-left">Student</th><th className="p-4 text-left">Course</th><th className="p-4 text-left">Rating</th><th className="p-4 text-left">Review</th><th className="p-4 text-left">Status</th><th className="p-4 text-left">Actions</th>
                                                </thead>
                                                <tbody>
                                                    {filteredReviews.map((review, index) => (
                                                        <tr key={index} className="border-b hover:bg-gray-50">
                                                            <td className="p-4 text-sm">{new Date(review.createdAt).toLocaleDateString()}</td>
                                                            <td className="p-4"><div className="flex items-center gap-3"><Avatar name={review.name} email={review.email} size="w-10 h-10" /><span className="font-medium">{review.name}</span></div></td>
                                                            <td className="p-4 text-sm">{review.course}</td>
                                                            <td className="p-4"><div className="flex gap-1">{[...Array(5)].map((_, i) => (<span key={i} className={`text-lg ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>))}</div></td>
                                                            <td className="p-4 text-sm max-w-xs truncate">{review.comment}</td>
                                                            <td className="p-4"><span className={`px-2 py-1 rounded text-xs font-semibold ${review.status === 'approved' ? 'bg-green-100 text-green-800' : review.status === 'rejected' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>{review.status}</span></td>
                                                            <td className="p-4">
                                                                {review.status === 'pending' && (
                                                                    <>
                                                                        <button onClick={() => updateReviewStatus(review._id, 'approve')} className="bg-green-500 text-white px-2 py-1 rounded text-xs mr-1 hover:bg-green-600">✅ Approve</button>
                                                                        <button onClick={() => updateReviewStatus(review._id, 'reject')} className="bg-red-500 text-white px-2 py-1 rounded text-xs mr-1 hover:bg-red-600">❌ Reject</button>
                                                                    </>
                                                                )}
                                                                <button onClick={() => deleteReview(review._id)} className="bg-gray-500 text-white px-2 py-1 rounded text-xs hover:bg-gray-600">🗑️ Delete</button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    }
                                </div>
                            </div>
                        )}

                        {/* Settings Tab */}
                        {activeTab === 'settings' && settings && (
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <h3 className="text-xl font-bold text-blue-900 mb-4">Site Settings</h3>
                                <div className="space-y-4">
                                    <div><label className="block text-gray-700 font-medium mb-1">Phone Number</label><input type="text" name="phone" value={settings.phone || ''} onChange={handleSettingsChange} className="w-full p-2 border rounded" /></div>
                                    <div><label className="block text-gray-700 font-medium mb-1">Email Address</label><input type="email" name="email" value={settings.email || ''} onChange={handleSettingsChange} className="w-full p-2 border rounded" /></div>
                                    <div><label className="block text-gray-700 font-medium mb-1">Office Hours</label><input type="text" name="officeHours" value={settings.officeHours || ''} onChange={handleSettingsChange} className="w-full p-2 border rounded" /></div>
                                    <div><label className="block text-gray-700 font-medium mb-1">Director Name</label><input type="text" name="directorName" value={settings.directorName || 'Arshan Rauf'} onChange={handleSettingsChange} className="w-full p-2 border rounded" /></div>
                                    <div><label className="block text-gray-700 font-medium mb-1">Director Title</label><input type="text" name="directorTitle" value={settings.directorTitle || 'Director'} onChange={handleSettingsChange} className="w-full p-2 border rounded" /></div>
                                    <div><label className="block text-gray-700 font-medium mb-1">Academic Director Name</label><input type="text" name="academicDirectorName" value={settings.academicDirectorName || 'Dr. Sarah Khan'} onChange={handleSettingsChange} className="w-full p-2 border rounded" /></div>
                                    <div><label className="block text-gray-700 font-medium mb-1">Academic Director Title</label><input type="text" name="academicDirectorTitle" value={settings.academicDirectorTitle || 'Academic Director'} onChange={handleSettingsChange} className="w-full p-2 border rounded" /></div>
                                    <div><label className="block text-gray-700 font-medium mb-1">Director Signature</label>
                                        <input type="file" accept="image/png,image/jpeg" onChange={handleSignatureUpload} className="w-full p-2 border rounded" />
                                        {settings.signatureData && (
                                            <div className="mt-2">
                                                <p className="text-sm text-green-600 mb-1">Current Signature:</p>
                                                <img src={`data:image/png;base64,${settings.signatureData}`} alt="Signature" className="h-16 border rounded p-1 bg-white" />
                                            </div>
                                        )}
                                    </div>
                                    <div><label className="block text-gray-700 font-medium mb-1">Facebook URL</label><input type="text" name="facebook" value={settings.facebook || ''} onChange={handleSettingsChange} className="w-full p-2 border rounded" /></div>
                                    <div><label className="block text-gray-700 font-medium mb-1">Instagram URL</label><input type="text" name="instagram" value={settings.instagram || ''} onChange={handleSettingsChange} className="w-full p-2 border rounded" /></div>
                                    <div><label className="block text-gray-700 font-medium mb-1">WhatsApp URL</label><input type="text" name="whatsapp" value={settings.whatsapp || ''} onChange={handleSettingsChange} className="w-full p-2 border rounded" /></div>
                                    <div><label className="block text-gray-700 font-medium mb-1">Footer Text</label><input type="text" name="footerText" value={settings.footerText || ''} onChange={handleSettingsChange} className="w-full p-2 border rounded" /></div>
                                    <div><label className="block text-gray-700 font-medium mb-1">Address</label><input type="text" name="address" value={settings.address || ''} onChange={handleSettingsChange} className="w-full p-2 border rounded" /></div>
                                    {saveMessage && <div className={`p-2 rounded text-center ${saveMessage.includes('✅') ? 'bg-green-100 text-green-700' : saveMessage.includes('❌') ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>{saveMessage}</div>}
                                    <button onClick={saveSettings} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition">Save Settings</button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}