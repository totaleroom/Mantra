import type React from "react"
import type { Metadata, Viewport } from "next"
import { Figtree, Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "MANTRA | Digital Sorcery for Real Business",
  description:
    "Ubah keruwetan operasional menjadi keteraturan otomatis. MANTRA adalah AI Automation Agency yang membantu UMKM bekerja cerdas dengan teknologi.",
  keywords: [
    "MANTRA AI",
    "automation indonesia",
    "AI UMKM",
    "otomasi bisnis",
    "WhatsApp bot",
    "n8n indonesia",
    "digital sorcery",
  ],
  authors: [{ name: "MANTRA AI Indonesia" }],
  creator: "MANTRA AI Indonesia",
  publisher: "MANTRA AI Indonesia",
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
