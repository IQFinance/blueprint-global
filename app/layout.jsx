import { DM_Sans, Prata, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const prata = Prata({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-prata',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Blueprint Global | Global Wealth & Residency Strategy',
    template: '%s | Blueprint Global',
  },
  description: 'International structures for entrepreneurs, investors, and mobile families. CPA-led coordination for tax residency, asset protection, second citizenship, and global banking.',
  metadataBase: new URL('https://blueprintglobal.io'),
  openGraph: {
    title: 'Blueprint Global | Global Wealth & Residency Strategy',
    description: 'International structures for entrepreneurs, investors, and mobile families.',
    url: 'https://blueprintglobal.io',
    siteName: 'Blueprint Global',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blueprint Global',
    description: 'International structures for entrepreneurs, investors, and mobile families.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${prata.variable} ${ibmPlexMono.variable}`}>
      <body className="bg-porcelain text-ink font-sans selection:bg-bronze selection:text-white relative overflow-x-hidden">
        {/* SVG Noise Texture Overlay */}
        <svg className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
        {children}
      </body>
    </html>
  );
}
