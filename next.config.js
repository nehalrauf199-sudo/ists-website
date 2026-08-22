/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/courses/iosh-managing-safely-version-5.0',
                destination: '/courses/id/6a1eb863423312e3b7fc046d',
                permanent: true,
            },
        ];
    },
    // No need for bodySizeLimit since files go to Blob
};

module.exports = nextConfig;