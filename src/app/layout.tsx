import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { GridProvider } from "@/components/grid/GridProvider";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { site } from "@/content/site";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-plex-sans",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.formalName} | Electrical Engineer, Ghana`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    "Christabel Fremah Owusu",
    "electrical engineer Ghana",
    "power systems",
    "solar PV operations and maintenance",
    "testing and commissioning",
    "engineering project management",
    "Women in Engineering",
    "EGA Mentorship International mentor",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    siteName: site.name,
    locale: "en_GB",
    title: site.formalName,
    description: site.description,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B1626" },
    { media: "(prefers-color-scheme: dark)", color: "#060D17" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  honorificPrefix: "Ing.",
  jobTitle: "Electrical and Electronics Engineer",
  url: site.url,
  image: `${site.url}/images/portrait-outdoor.jpg`,
  address: { "@type": "PostalAddress", addressCountry: "GH" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Energy and Natural Resources" },
  memberOf: { "@type": "Organization", name: "Ghana Institution of Engineering" },
  knowsAbout: [
    "Power systems",
    "Distribution transformers",
    "Solar photovoltaic plant operations and maintenance",
    "Testing and commissioning",
    "Engineering project delivery",
    "IEC 61850",
    "Mentorship",
  ],
  knowsLanguage: ["English", "French", "Twi"],
  ...(site.linkedin ? { sameAs: [site.linkedin] } : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <GridProvider>
          <Header />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </GridProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
