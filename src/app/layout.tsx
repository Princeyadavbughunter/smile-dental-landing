import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Smile Dental Hospital,| Best Dentist in Malviya Nagar, Jaipur | Advanced Dental Implants",
  description: "Dr. Sagar Barkade - Certified Implantologist with 15+ years experience. Advanced dental implants, conscious sedation, 3D scanners in Malviya Nagar, Jaipur. Book appointment: +91 9828079898",
  keywords: "dentist Malviya Nagar, dental clinic Jaipur, dr pooja sharma, dental implants, veda dentistry, conscious sedation, 3D scanners, best dentist delhi",
  authors: [{ name: "Dr. Sagar Barkade" }],
  creator: "Smile Dental Hospital",
  publisher: "Smile Dental Hospital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://SmiledentalHospital.com/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Smile Dental Hospital | Best Dentist in Malviya Nagar, Jaipur",
    description: "Certified Implantologist Dr. Sagar Barkade with 15+ years experience. Advanced dental care in Malviya Nagar, Jaipur.",
    url: 'https://SmiledentalHospital.com/',
    siteName: "Smile Dental Hospital",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Smile Dental Hospital",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Smile Dental Hospital",
    description: "Advanced dental care with 15+ years experience in Malviya Nagar, Jaipur ",
    images: ['/og-image.jpg'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
