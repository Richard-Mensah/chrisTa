import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import GridProvider from "@/components/features/grid/GridProvider";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { KEYWORDS, SITE } from "@/constants/site";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], axes: ["opsz"], variable: "--font-fraunces", display: "swap" });
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.formalName} | Electrical Engineer, Ghana`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  keywords: KEYWORDS,
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "profile",
    siteName: SITE.name,
    locale: "en_GB",
    title: SITE.formalName,
    description: SITE.description,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#060e1f" },
  ],
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en-GB" className={cn(fraunces.variable, plexSans.variable, plexMono.variable)}>
      <body>
        <a
          href="#main"
          className="absolute -top-16 left-3 z-50 rounded-full bg-brand-teal px-4 py-2 font-semibold text-navy-950 focus:top-3"
        >
          Skip to content
        </a>
        <GridProvider>
          <Navbar />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
        </GridProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }} />
      </body>
    </html>
  );
}
