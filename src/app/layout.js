import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";
import { SITE_URL, CONTACT, CLINIC } from "@/lib/site";

const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Zoraida García, psicóloga, en su consulta de Granada",
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
        <ScrollReveal />
        {children}
        <WhatsAppButton />
        <ScrollToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
