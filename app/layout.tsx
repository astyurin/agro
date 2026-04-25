import type { Metadata, Viewport } from 'next';
import { DM_Mono, DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const siteUrl = 'https://agro.remeta.com.br';
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-dm-sans' });
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-dm-mono' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700', '800', '900'], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Buy Fishmeal 62–68% Protein — Remeta Agro | Commodity Trading Brazil',
  description:
    'Fishmeal 62–68% protein — confirmed buyers in Asia. India, China, Vietnam, Indonesia. Send your offer today. 48h response. Remeta Agro, Brazil.',
  keywords: [
    'fishmeal buyer',
    'buy fishmeal 68 protein',
    'fishmeal buyer India',
    'fishmeal buyer Pakistan',
    'fishmeal buyer Mauritania',
    'fishmeal buyer Morocco',
    'fishmeal buyer South Africa',
    'fish meal 68 protein buyer China',
    'fishmeal trading company Brazil',
    'agro commodity Brazil Asia'
  ],
  authors: [{ name: 'Remeta Agro — Roman Manshin' }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'We Buy Fishmeal 62–68% Protein | Remeta Agro',
    description:
      'We buy fishmeal 62–68% protein from producers in India, Pakistan, Mauritania, Morocco, South Africa. GACC certified preferred. Confirmed Asian buyers. 48h response.',
    siteName: 'Remeta Agro',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary',
    title: 'We Buy Fishmeal 62–68% Protein | Remeta Agro',
    description: 'Confirmed buyers in Asia. 100K MT/year demand. Any origin. 48h response.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  verification: {
    google: 'google3218b7bcaab66167'
  },
  other: {
    'geo.region': 'IN, PK, MR, MA, ZA, CN',
    'geo.placename': 'Mangalore, Karachi, Nouadhibou, Casablanca, Cape Town'
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='15' fill='rgba(10,191,184,0.15)' stroke='%230ABFB8' stroke-width='1'/%3E%3Cpath d='M8 10 C8 10 16 6 24 12 C28 15 26 21 22 23 C18 25 12 22 10 18 C8 14 12 8 16 8 C20 8 24 14 22 20' stroke='%230ABFB8' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E",
    apple:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Ccircle cx='90' cy='90' r='85' fill='%230ABFB8'/%3E%3Ccircle cx='90' cy='90' r='80' fill='rgba(255,255,255,0.1)' stroke='white' stroke-width='2'/%3E%3Cpath d='M45 55 C45 55 90 35 135 68 C158 85 147 118 124 130 C101 142 68 125 56 102 C45 79 68 45 90 45 C112 45 135 79 124 112' stroke='white' stroke-width='12' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmMono.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
