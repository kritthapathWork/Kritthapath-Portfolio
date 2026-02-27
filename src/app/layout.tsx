import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Kritthapath Thipakaew | Full-Stack Developer',
  description: 'Programmer & Full-Stack Developer — React, Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB. ปัจจุบันทำงานที่ T.Logical Resolution',
  keywords: ['Full-Stack Developer', 'Programmer', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'MongoDB', 'Portfolio', 'Kritthapath'],
  authors: [{ name: 'Kritthapath Thipakaew' }],
  metadataBase: new URL('https://kritthapath.vercel.app'),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Kritthapath Thipakaew | Full-Stack Developer',
    description: 'Programmer & Full-Stack Developer — React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB.',
    type: 'website',
    locale: 'th_TH',
    siteName: 'Kritthapath Portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
