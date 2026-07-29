import { SITE_URL } from "@/lib/site";

// Requerido por output: 'export' — sitemap.xml es un route handler.
export const dynamic = "force-static";

// Las rutas llevan barra final porque next.config.js usa trailingSlash: true,
// que es como GitHub Pages las sirve realmente.
const routes = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/contacto/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/terapias/infantil/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/terapias/adolescentes/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/terapias/adultos/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/aviso-legal/", changeFrequency: "yearly", priority: 0.2 },
  { path: "/politica-privacidad/", changeFrequency: "yearly", priority: 0.2 },
  { path: "/politica-cookies/", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
