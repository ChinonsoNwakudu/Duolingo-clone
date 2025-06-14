/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone', 
    compress: true,
    productionBrowserSourceMaps: false,
    async headers() {
        return [
            {
                source: "/api/(.*)",
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        // for development to everyone
                        value: "*"
                    },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET, POST, PUT, DELETE, OPTIONS"
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "Content-Type, Authorization"
                    },
                    {
                        key: "Content-Range",
                        value: "bytes : 0-9/*"
                    },
                ],
            },
        ];
    },
};

export default nextConfig;