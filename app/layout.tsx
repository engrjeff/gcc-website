import "@/styles/globals.css"

import { Metadata, Viewport } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import SiteFooter from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className="h-full">
        <head />
        <body
          className={cn(
            "min-h-full bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <div className="relative flex min-h-full flex-col">
            <SiteHeader />
            <main className="h-full flex-1 p-2 lg:p-5">
              <div className="min-h-full bg-[#f2f2f2]">{children}</div>
            </main>
            <SiteFooter />
          </div>
          <TailwindIndicator />
        </body>
      </html>
    </>
  )
}
