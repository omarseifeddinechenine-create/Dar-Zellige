import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Outfit } from "next/font/google"
import { Providers } from "@/components/providers"
import { site } from "@/lib/data/site"
import "./globals.css"

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
})

const body = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://azulcaffe.pt"),
  title: {
    default: "Azul Caffé & Brunch's Dz | Restaurante & Brunch Argelino em Lisboa",
    template: "%s | Azul Caffé & Brunch's Dz Lisboa",
  },
  description:
    "Azul Caffé & Brunch's Dz traz o autêntico brunch e gastronomia tradicional da Argélia para Lisboa. Couscous real no vapor, tajines aromáticos, mahjouba folhada, msemen artesanal e doçaria tradicional no coração do Bairro Alto. Reserve a sua mesa ou encomende via WhatsApp.",
  keywords: [
    "Azul Caffé",
    "Azul Caffe & Brunch's Dz",
    "Brunch's Dz",
    "restaurante argelino Lisboa",
    "Algerian brunch Lisbon",
    "brunch halal Lisboa",
    "restaurant algérien Lisbonne",
    "أزول كافيه",
    "couscous Lisboa",
    "tajine Lisbon",
    "mahjouba",
    "msemen",
    "Bairro Alto brunch",
    "North African food Lisbon",
  ],
  openGraph: {
    title: "Azul Caffé & Brunch's Dz — Brunch & Cozinha Argelina em Lisboa",
    description: "Autêntico brunch argelino, couscous real no vapor de alfa, tajines de barro cozido, doces de amêndoa e mel e cerimonial de chá de hortelã no Bairro Alto.",
    locale: "pt_PT",
    type: "website",
    url: "https://azulcaffe.pt",
  },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#c25438",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  alternateName: "أزول كافيه & برانش دزاد",
  servesCuisine: ["Algerian", "North African", "Halal", "Brunch"],
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postal,
    addressCountry: "PT",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  telephone: site.phone,
  email: site.email,
  url: "https://azulcaffe.pt",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "12:00",
      closes: "15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "19:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "12:00",
      closes: "23:30",
    },
  ],
  acceptsReservations: true,
  hasMenu: "https://azulcaffe.pt/menu",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Providers>{children}</Providers>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
