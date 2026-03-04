"use client"

import { I18nProvider } from "@/lib/i18n"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </I18nProvider>
  )
}
