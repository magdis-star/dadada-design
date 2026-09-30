/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // La app «Comidas de casa» vive en public/comidas/ (se copia con
  // new-project/familia-comidas/publicar-en-web.sh, que le pone <base href="/comidas/">
  // para que encuentre sus archivos aunque se abra sin la barra final).
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      { source: "/comidas", destination: "/comidas/index.html" },
      { source: "/comidas/", destination: "/comidas/index.html" },
    ];
  },
};

export default nextConfig;
