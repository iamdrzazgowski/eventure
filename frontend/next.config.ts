import type { NextConfig } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
    /* config options here */
    turbopack: {
        root: __dirname,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
