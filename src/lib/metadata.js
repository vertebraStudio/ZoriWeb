import { SITE_NAME } from "@/lib/site";

// El nombre lleva sufijo de versión a propósito: WhatsApp y Facebook cachean la
// previsualización por URL, así que cambiar el fichero en su sitio no bastaría.
export const OG_IMAGE = {
  url: "/og-image-v2.jpg",
  width: 1200,
  height: 630,
  alt: "Zoraida García, psicóloga infantojuvenil y de adultos en Granada",
};

// Metadata de una página interior. Next no fusiona openGraph ni twitter con
// los del layout, los sustituye enteros: si una página solo define título y
// canonical, al compartirla por WhatsApp o redes sale el título y la URL de la
// home. Por eso cada página los declara completos a través de esta función.
export function pageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "es_ES",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
