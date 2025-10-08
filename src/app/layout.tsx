import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import GA from "@/components/GA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ceylon Serendib Tours – Sri Lanka Tour Packages",
    template: "%s | Ceylon Serendib Tours",
  },
  description:
    "Sri Lanka tours with licensed chauffeur-guides. Customizable 7/10/14-day itineraries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {process.env.NEXT_PUBLIC_GA_ID ? (
        <>
          {/* GA4 loader (send_page_view disabled; we’ll send manually on route changes) */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: false });
            `}
          </Script>
        </>
        ) : null}

        <GA />
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  );
}
