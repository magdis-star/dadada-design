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
  title: "dadada design - Diseño Web con Propósito",
  description: "Diseño web freelance para pequeños negocios y emprendedores. Creamos sitios optimizados, fáciles de gestionar y diseñados con empatía para conectar con tus clientes.",
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
