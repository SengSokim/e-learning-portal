/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
    images:{
        domains: ['media.graphassets.com','ap-northeast-1.graphassets.com']
    }
};

export default nextConfig;
