import clientPromise from '@/app/lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function DebugCoursePage({ params }) {
    const { id } = params;
    let course = null;
    let error = null;
    let allCoursesCount = 0;

    try {
        const client = await clientPromise;
        const db = client.db('ists');

        console.log('Looking for ID:', id);

        if (ObjectId.isValid(id)) {
            course = await db.collection('courses').findOne({ _id: new ObjectId(id) });
            console.log('Course found?', course ? 'Yes' : 'No');
        } else {
            console.log('ID is not a valid ObjectId');
        }

        allCoursesCount = await db.collection('courses').countDocuments();
        console.log('Total courses:', allCoursesCount);
    } catch (err) {
        error = err.message;
        console.error('Error:', err);
    }

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Debug Information</h1>
            <div className="bg-white p-4 rounded shadow mb-4">
                <p><strong>URL ID received:</strong> <code>{id}</code></p>
                <p><strong>Is valid ObjectId?</strong> {ObjectId.isValid(id) ? 'Yes' : 'No'}</p>
                <p><strong>Total courses in database:</strong> {allCoursesCount}</p>
                <p><strong>Error (if any):</strong> {error || 'None'}</p>
            </div>

            {course ? (
                <div className="bg-green-100 p-4 rounded">
                    <h2 className="text-xl font-bold">✅ Course Found!</h2>
                    <p><strong>Name:</strong> {course.name}</p>
                    <p><strong>Category:</strong> {course.category}</p>
                    <p><strong>Hours:</strong> {course.hours}</p>
                    <p><strong>ID:</strong> {course._id.toString()}</p>
                </div>
            ) : (
                <div className="bg-red-100 p-4 rounded">
                    <h2 className="text-xl font-bold text-red-700">❌ Course Not Found</h2>
                    <p>No course with ID <code>{id}</code> was found.</p>
                    <p className="mt-2">Possible reasons:</p>
                    <ul className="list-disc ml-6">
                        <li>The ID is incorrect – copy it from the admin panel's Edit URL.</li>
                        <li>The database connection is failing (check total courses count above).</li>
                        <li>The `courses` collection is empty (if count = 0).</li>
                    </ul>
                </div>
            )}

            <div className="mt-6">
                <p><strong>How to get a real course ID:</strong></p>
                <ol className="list-decimal ml-6">
                    <li>Go to your admin panel → Courses tab.</li>
                    <li>Click the "Edit" button (✏️) of any course.</li>
                    <li>Look at the browser URL – it will contain <code>?id=...</code> (e.g., <code>?id=67b2c3d4e5f67890abcd1234</code>).</li>
                    <li>Copy that long hex string and paste it into the URL: <code>/courses/id/YOUR_COPY</code></li>
                </ol>
            </div>
        </div>
    );
}