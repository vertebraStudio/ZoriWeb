import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";

export const metadata = {
  title: "Zoraida | Psicóloga en Granada | Infantil, Adolescentes y Adultos",
  description: "Psicóloga en Granada especializada en terapia infantil, adolescentes y adultos en la zona de Ronda. Consulta profesional para ansiedad, depresión y gestión emocional. ¡Pide tu cita hoy!",
  keywords: ["psicóloga Granada", "psicología infantil Granada", "psicólogo adolescentes Granada", "terapia adultos Granada", "Zoraida psicóloga"],
  openGraph: {
    title: "Zoraida | Psicóloga en Granada",
    description: "Terapia profesional para todas las etapas de la vida en el corazón de Granada.",
    url: "https://zoriweb.es", // Placeholder
    siteName: "Zoraida Psicóloga",
    locale: "es_ES",
    type: "website",
  },
  icons: {
    icon: "/media/FavIcon.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PsychiatricService",
    "name": "Zoraida Psicóloga",
    "image": "https://zoriweb.es/logo.png", // Placeholder
    "@id": "https://zoriweb.es",
    "url": "https://zoriweb.es",
    "telephone": "+34 692 64 22 52",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Clínica VIDICO, C. Félix Rodríguez de la Fuente, 27, Local 3",
      "addressLocality": "Granada",
      "postalCode": "18006",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.1698,
      "longitude": -3.6068
    },
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
