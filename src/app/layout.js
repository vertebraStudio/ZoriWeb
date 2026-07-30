import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";
import StyledJsxRegistry from "./registry";
import { SITE_URL, CONTACT, CLINIC } from "@/lib/site";

// El nombre lleva sufijo de versión a propósito: WhatsApp y Facebook cachean la
// previsualización por URL, así que cambiar el fichero en su sitio no bastaría.
const OG_IMAGE = {
  url: "/og-image-v2.jpg",
  width: 1200,
  height: 630,
  alt: "Zoraida García, psicóloga infantojuvenil y de adultos en Granada",
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Psicóloga en Granada | Zoraida García | Infantil y Adultos",
  description:
    "Psicóloga en Granada especializada en terapia infantil, adolescentes y adultos. Consulta en el Zaidín y sesiones online. Pide tu cita.",
  keywords: [
    "psicóloga Granada",
    "psicología infantil Granada",
    "psicólogo adolescentes Granada",
    "terapia adultos Granada",
    "psicóloga Zaidín",
    "Zoraida García psicóloga",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zoraida García | Psicóloga en Granada",
    description:
      "Terapia infantil, de adolescentes y de adultos en Granada. Consulta en el Zaidín y sesiones online.",
    url: "/",
    siteName: "Zoraida García | Psicóloga en Granada",
    locale: "es_ES",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoraida García | Psicóloga en Granada",
    description:
      "Terapia infantil, de adolescentes y de adultos en Granada. Consulta en el Zaidín y sesiones online.",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/media/FavIcon.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    "name": "Zoraida García | Psicóloga en Granada",
    "image": `${SITE_URL}${OG_IMAGE.url}`,
    "@id": SITE_URL,
    "url": SITE_URL,
    "telephone": CONTACT.phone,
    "email": CONTACT.email,
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${CLINIC.name}, ${CLINIC.street}`,
      "addressLocality": CLINIC.city,
      "addressRegion": "Granada",
      "postalCode": CLINIC.postalCode,
      "addressCountry": CLINIC.country
    },
    "areaServed": {
      "@type": "City",
      "name": "Granada"
    },
    "availableLanguage": "es",
    "sameAs": [CONTACT.instagram],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "15:00",
      "closes": "21:00"
    }
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Envuelve todo el body, no solo {children}: el botón de WhatsApp,
            el de volver arriba y el banner de cookies también usan style jsx. */}
        <StyledJsxRegistry>
          <ScrollReveal />
          {children}
          <WhatsAppButton />
          <ScrollToTop />
          <CookieBanner />
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
