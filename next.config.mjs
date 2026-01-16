/** @type {import('next').NextConfig} */
const nextConfig = {
  // This tells Next.js to export static HTML, which Cloudflare LOVES.
  // It makes the site incredibly fast and free to host.
  output: 'export',
  
  // We need this for the images to work in static mode
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
