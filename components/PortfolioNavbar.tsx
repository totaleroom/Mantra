/*
============================================================================
NAVIGATION BAR - Menu Navigasi di Atas Halaman
============================================================================
File ini mengatur menu navigasi yang ada di bagian paling atas website.
Termasuk: Logo, link menu, dan tombol CTA.

PANDUAN EDIT:
- Untuk ganti nama menu: edit di array "navigationLinks"
- Untuk ganti nomor WA: cari "6281311099023" dan ganti dengan nomor Anda
- Untuk ganti nama brand: cari "Auto" dan "mate.id"
============================================================================
*/

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, MessageCircle } from "lucide-react"

/*
============================================================================
NAVIGATION LINKS - Daftar Menu Navigasi (AMAN DIEDIT)
============================================================================
Ini adalah daftar menu yang muncul di navbar.

CARA EDIT:
- name: Text yang ditampilkan di menu
- href: ID section yang dituju (harus sama dengan id di section tersebut)

CARA TAMBAH MENU BARU:
1. Copy satu object { name: "...", href: "..." }
2. Paste di posisi yang diinginkan
3. Pastikan href sesuai dengan id section yang ada

CONTOH:
{
  name: "Tentang Kami",  // <-- Text yang muncul di menu
  href: "#about",        // <-- Harus ada section dengan id="about"
},
============================================================================
*/
const navigationLinks = [
  {
    name: "Layanan", // <-- EDIT: Ganti nama menu 1
    href: "#layanan", // <-- Harus sama dengan id section
  },
  {
    name: "Cara Kerja", // <-- EDIT: Ganti nama menu 2
    href: "#cara-kerja",
  },
  {
    name: "Hasil Nyata", // <-- EDIT: Ganti nama menu 3
    href: "#hasil",
  },
  {
    name: "Harga", // <-- EDIT: Ganti nama menu 4
    href: "#pricing",
  },
  {
    name: "FAQ", // <-- EDIT: Ganti nama menu 5
    href: "#faq",
  },
] as const

export const PortfolioNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleLinkClick = (href: string) => {
    closeMobileMenu()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 
          ============================================================================
          LOGO / BRAND NAME (AMAN DIEDIT)
          ============================================================================
          Ganti nama brand di bawah ini.
          - Text dalam <span className="text-[#156d95]"> akan berwarna BIRU
          - Text di luar span akan berwarna default (hitam)
          ============================================================================
          */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleLinkClick("#home")}
              className="text-2xl font-bold text-foreground hover:text-[#156d95] transition-colors duration-200"
            >
              <span
                style={{
                  fontFamily: "Figtree",
                  fontWeight: "700",
                }}
              >
                {/* EDIT NAMA BRAND DI SINI */}
                <span className="text-[#156d95]">Auto</span>mate.id
              </span>
            </button>
          </div>

          {/* Menu Desktop - Diambil dari navigationLinks di atas */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-foreground hover:text-[#156d95] px-3 py-2 text-base font-medium transition-colors duration-200 relative group"
                  style={{
                    fontFamily: "Figtree, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  <span>{link.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#156d95] transition-all duration-300 group-hover:w-full"></div>
                </button>
              ))}
            </div>
          </div>

          {/* 
          ============================================================================
          TOMBOL CTA DI NAVBAR (AMAN DIEDIT)
          ============================================================================
          EDIT NOMOR WHATSAPP: Ganti 6281311099023 dengan nomor Anda
          ============================================================================
          */}
          <div className="hidden md:flex items-center gap-3">
            <a
              // EDIT NOMOR WHATSAPP DI SINI
              href="https://wa.me/6281311099023"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#156d95] px-4 py-2 text-base font-medium hover:bg-[#156d95]/10 rounded-full transition-all duration-200"
              style={{ fontFamily: "Figtree" }}
            >
              <MessageCircle className="w-4 h-4" />
              {/* EDIT TEXT TOMBOL WA */}
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => handleLinkClick("#contact")}
              className="bg-[#156d95] text-white px-5 py-3 rounded-full text-base font-medium hover:bg-[#156d95]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#156d95]/20"
              style={{ fontFamily: "Figtree", fontWeight: "500" }}
            >
              {/* EDIT TEXT TOMBOL CTA */}
              Konsultasi Gratis
            </button>
          </div>

          {/* Tombol Menu Mobile - Jangan diubah kecuali paham */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-[#156d95] p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile - Otomatis mengikuti navigationLinks di atas */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="px-6 py-6 space-y-4">
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="block w-full text-left text-foreground hover:text-[#156d95] py-3 text-lg font-medium transition-colors duration-200"
                  style={{ fontFamily: "Figtree, sans-serif", fontWeight: "400" }}
                >
                  <span>{link.name}</span>
                </button>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <a
                  // EDIT NOMOR WHATSAPP DI SINI JUGA (untuk menu mobile)
                  href="https://wa.me/6281311099023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full text-[#156d95] border border-[#156d95] px-4 py-3 rounded-full text-base font-medium transition-all duration-200"
                  style={{ fontFamily: "Figtree" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <button
                  onClick={() => handleLinkClick("#contact")}
                  className="w-full bg-[#156d95] text-white px-5 py-3 rounded-full text-base font-medium hover:bg-[#156d95]/90 transition-all duration-200"
                  style={{ fontFamily: "Figtree" }}
                >
                  Konsultasi Gratis
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
