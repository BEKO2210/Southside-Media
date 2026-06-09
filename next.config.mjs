/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statischer Export: lauffähig auf Vercel UND jedem statischen Host
  // (GitHub Pages, eigener Webspace, S3 ...). Für die eigene Domain
  // muss hier später NICHTS geändert werden.
  output: "export",
  images: {
    // Static Export unterstützt keine Next.js-Bildoptimierung
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
