import { withPayload } from "@payloadcms/next/withPayload";
import createMDX from '@next/mdx'
import dotenv from 'dotenv';

// Load environment variables from `.env.production` in production mode
if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env.production' });
} else {
  dotenv.config({ path: '.env.local' });
}

/** @type {import('next').NextConfig} */
  const nextConfig = {
    // output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: './dist', // Changes the build output directory to `./dist/`.
    images: { unoptimized: true },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    env: { 
      NEXT_PUBLIC_REACT_APP_SUPABASE_KEY: process.env.NEXT_PUBLIC_REACT_APP_SUPABASE_KEY,
    }
  }

  const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  
  })
  
export default withPayload(withMDX(nextConfig))
