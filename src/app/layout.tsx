import type { Metadata } from "next";
import { Newsreader, Manrope, Space_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-heading",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sri Dental Clinic",
  description: "Thoughtful dental care in Bengaluru, with a calm, patient-first experience. Book an appointment today.",
  openGraph: {
    title: "Sri Dental Clinic",
    description: "Bright Smiles Rooted in Tradition. Thoughtful dental care in Bengaluru.",
    url: "https://sridentalclinic.in",
    siteName: "Sri Dental Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${newsreader.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
