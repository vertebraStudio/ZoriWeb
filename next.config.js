/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // El sitio se sirve en la raíz del dominio propio (ver public/CNAME),
  // por lo que no lleva prefijo de ruta. Se mantiene la variable definida
  // para que Next la sustituya en el bundle de cliente.
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
  },
};

module.exports = nextConfig;
