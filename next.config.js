/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/courses/iosh-managing-safely-version-5.0',
                destination: '/courses/id/6a1eb863423312e3b7fc046d',
                permanent: true,
            },
            // Add more redirects here for other old slug URLs
        ];
    },
    // ✅ Add this to increase file upload limit
    experimental: {
        serverActions: {
            bodySizeLimit: '10mb',
        },
    },
};

module.exports = nextConfig;