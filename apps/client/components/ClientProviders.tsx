// apps/client/components/ClientProviders.tsx
"use client"

import { ReactNode } from "react"
import PlausibleProvider from "next-plausible"
import { ThemeProvider } from "./theme/ThemeProvider"
import { DarkModeSwitch } from "./DarkModeSwitch"

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <PlausibleProvider domain="novapulse.media">
      <ThemeProvider>
        <div className="border-b p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">NovaPulse</h1>
          <DarkModeSwitch />
        </div>
        {children}
      </ThemeProvider>
    </PlausibleProvider>
  )
}
