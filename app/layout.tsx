import type {Metadata} from 'next';
import { Noto_Serif, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; // Global styles

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'For Kalindi | A Celebration of Love',
  description: 'A beautiful birthday landing page for Kalindi.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${notoSerif.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed-variant">
        {children}
      </body>
    </html>
  );
}
