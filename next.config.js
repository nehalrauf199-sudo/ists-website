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
    // ✅ Unlimited file upload size
    experimental: {
        serverActions: {
            bodySizeLimit: false, // Unlimited
        },
    },
};

module.exports = nextConfig;