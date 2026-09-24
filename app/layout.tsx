import type { Metadata } from "next";
import { Abril_Fatface, Poppins, Nunito } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const abrilFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abril",
  display: "swap",
});

const poppins = Poppins({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const nunito = Nunito({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "dadada design · Productos digitales y webs que funcionan | Madrid",
  description: "Diseñadora web freelance en Madrid. Diseño y construyo webs y herramientas interactivas —calculadoras, simuladores, configuradores— para negocios y creadoras que necesitan algo que funcione, no sólo una web bonita.",
  keywords: ["diseño web Madrid", "diseñadora web freelance Madrid", "producto digital", "herramientas interactivas", "calculadoras y simuladores web", "diseño UX Madrid", "desarrollo web freelance", "design thinking"],
  authors: [{ name: "Magdalena - dadada design" }],
  creator: "dadada design",
  publisher: "dadada design",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "dadada design · Productos digitales y webs que funcionan",
    description: "Diseño y construyo webs y herramientas interactivas para negocios y creadoras. Madrid.",
    url: "https://dadadadesign.com",
    siteName: "dadada design",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // TODO: Add Google Search Console verification
  },
  other: {
    'p:domain_verify': '51f51572d11f530e34e15117ae5417ed',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="es" className={`${abrilFatface.variable} ${poppins.variable} ${nunito.variable}`}>
      <body>
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
