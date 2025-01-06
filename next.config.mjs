import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
  const nextConfig = {
    output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: './dist', // Changes the build output directory to `./dist/`.
    images: { unoptimized: true },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  }

  const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  
  })

  
  export default withMDX(nextConfig)