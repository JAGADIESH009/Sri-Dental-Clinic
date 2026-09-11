import type { Metadata } from "next";
import { Newsreader, Manrope } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-heading",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Unity Dental Clinics",
  description: "Thoughtful dental care in Vijayawada, with a calm, patient-first experience. Book an appointment today.",
  openGraph: {
    title: "Unity Dental Clinics",
    description: "Precision dentistry meets uncommon comfort. Thoughtful dental care in Vijayawada.",
    url: "https://unitydentalclinics.in",
    siteName: "Unity Dental Clinics",
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
      className={`${manrope.variable} ${newsreader.variable} antialiased scroll-smooth`}
    >
      <body className="font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
