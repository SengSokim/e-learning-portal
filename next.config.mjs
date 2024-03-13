/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
    images:{
        domains: ['media.graphassets.com']
    }
};

export default nextConfig;
