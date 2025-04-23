// apps/client/app/layout.tsx

import '../styles/globals.css'
import { ThemeProvider } from '../components/theme/ThemeProvider'
import { NextSeo } from 'next-seo'
import seoConfig from '../next-seo.config'
import PlausibleProvider from 'next-plausible'
import { DarkModeSwitch } from '../components/DarkModeSwitch'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NextSeo {...seoConfig} />
      {/* Move all bg/text utilities into the body tag */}
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <PlausibleProvider domain="novapulse.media">
          <ThemeProvider>
            <header className="border-b p-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold">NovaPulse</h1>
              <DarkModeSwitch />
            </header>
            <main className="container mx-auto p-4">{children}</main>
            <footer className="border-t p-4 text-center text-sm">
              © {new Date().getFullYear()} NovaPulse Media
            </footer>
          </ThemeProvider>
        </PlausibleProvider>
      </body>
    </html>
  )
}
