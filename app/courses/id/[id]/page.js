export default async function CoursePage({ params }) {
    // In Next.js 15, params is a Promise – we need to await it
    const unwrappedParams = await params;
    const { id } = unwrappedParams;

    return (
        <div className="p-10 text-center">
            <h1 className="text-2xl font-bold">Test Page</h1>
            <p className="mt-4">The ID from the URL is: <code className="bg-gray-100 px-2 py-1 rounded">{id}</code></p>
            <p className="mt-2">If you see this page with your ID, the dynamic route is working.</p>
        </div>
    );
}