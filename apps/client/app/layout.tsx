// apps/client/app/layout.tsx

"use client";

import '../styles/globals.css';
import { ThemeProvider } from '../components/theme/ThemeProvider';
import { NextSeo } from 'next-seo';
import seoConfig from '../next-seo.config';
import PlausibleProvider from 'next-plausible';
import { Header } from '../components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <NextSeo {...seoConfig} />
      </head>
      <body className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <PlausibleProvider domain="novapulse.media">
          <ThemeProvider>
            <Header />

            <main className="container mx-auto p-4">
              {children}
            </main>

            <footer className="border-t p-4 text-center text-sm">
              © {new Date().getFullYear()} NovaPulse Media
            </footer>
          </ThemeProvider>
        </PlausibleProvider>
      </body>
    </html>
  );
}
