import { SITE_URL } from "@/lib/site";

// Requerido por output: 'export' — robots.txt es un route handler.
export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
