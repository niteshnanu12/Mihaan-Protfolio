import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mihaan | Professional Child Model Portfolio",
  description: "Explore the premium portfolio of Mihaan, a professional child model with natural charm and confidence. Featuring editorial shoots, runway achievements, and contact details for bookings.",
  keywords: [
    "child model",
    "kids model portfolio",
    "Mihaan child model",
    "kids fashion model",
    "professional child model",
    "child talent agency",
    "kids brand ambassador",
    "child modeling portfolio",
    "child model runway",
    "kid model photoshoot"
  ],
  authors: [{ name: "Mihaan Portfolio" }],
  creator: "Mihaan Portfolio",
  publisher: "Mihaan Portfolio",
  openGraph: {
    title: "Mihaan | Professional Child Model Portfolio",
    description: "Explore the premium portfolio of Mihaan, a professional child model. Discover editorials, commercial achievements, and booking inquiries.",
    url: "https://mihaanmodel.com",
    siteName: "Mihaan Model Portfolio",
    images: [
      {
        url: "/images/DSC09643.JPG",
        width: 1200,
        height: 1600,
        alt: "Mihaan - Professional Child Model Portfolio"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihaan | Professional Child Model Portfolio",
    description: "Explore the premium portfolio of Mihaan, a professional child model.",
    images: ["/images/DSC09643.JPG"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  }
};

export const viewport: Viewport = {
  themeColor: "#faf9f6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-gold-muted selection:text-luxury-black">
        {children}
      </body>
    </html>
  );
}
