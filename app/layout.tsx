import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MANTRA | Otomasi Bisnis untuk UMKM",
  description: "Pecat adminmu, rekrut Mantra. Solusi otomasi bisnis untuk UMKM Indonesia. Hemat biaya, kerja 24 jam.",
  keywords: ["otomasi bisnis", "AI untuk UMKM", "chatbot whatsapp", "inventory management", "MANTRA"],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://mantra-ai.id",
    siteName: "MANTRA AI",
    title: "MANTRA | Digital Sorcery for Real Business",
    description:
      "Ubah keruwetan operasional menjadi keteraturan otomatis. Konsultasi gratis sekarang!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MANTRA AI - Digital Sorcery for Real Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MANTRA | Digital Sorcery for Real Business",
    description: "Bisnis Otomatis. Semudah Mantra.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth dark">
      <body className={`${inter.variable} ${figtree.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground selection:bg-purple-500/30 selection:text-purple-200`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
