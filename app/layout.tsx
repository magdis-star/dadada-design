import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans, Bricolage_Grotesque, Caveat } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

// Titulares
const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

// Texto
const instrumentSans = Instrument_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Sólo el logo, hasta que se dibuje en vectores
const bricolage = Bricolage_Grotesque({
  weight: ["800"],
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
});

// Notas a mano: provisional, hasta tener las de su letra
const caveat = Caveat({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-mano",
  display: "swap",
});

export const metadata: Metadata = {
  title: "dadada design · Magdalena, diseñadora web en Madrid",
  description: "Soy Magdalena. Primero entiendo, después diseño. Webs y herramientas a medida para quien tiene una idea, sabe lo que necesita o quiere mejorar lo que ya tiene. En Madrid y fuera.",
  keywords: ["diseño web Madrid", "diseñadora web freelance Madrid", "design thinking", "diseño UX Madrid", "herramientas web a medida", "rediseño web"],
  authors: [{ name: "Magdalena - dadada design" }],
  creator: "dadada design",
  publisher: "dadada design",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "dadada design · Primero entiendo, después diseño",
    description: "Webs y herramientas a medida. Magdalena, diseñadora en Madrid.",
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
    <html lang="es" className={`${instrumentSerif.variable} ${instrumentSans.variable} ${bricolage.variable} ${caveat.variable}`}>
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
