import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sri Dental Clinic | Dentist in Yapral, Hyderabad",
  description: "Thoughtful dental care in Yapral, with a calm, patient-first experience. Book an appointment today.",
  openGraph: {
    title: "Sri Dental Clinic | Dentist in Yapral",
    description: "Bright Smiles Rooted in Tradition. Thoughtful dental care in Yapral.",
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
      className={`${geistSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
