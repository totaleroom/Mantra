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
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export const PortfolioNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { name: "Masalah", href: "#masalah" },
    { name: "Solusi", href: "#solusi" },
    { name: "Fitur", href: "#fitur" },
    { name: "Harga", href: "#pricing" },
  ]

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#F5F5F0]",
          isScrolled ? "border-b border-[#1A1A1A] py-4" : "py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="text-3xl font-bold tracking-tighter text-[#1A1A1A] uppercase"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              MANTRA
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-[#1A1A1A] hover:text-[#FF4F00] transition-colors uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://wa.me/6281311099023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#1A1A1A] px-4 py-2 text-sm font-bold hover:text-[#FF4F00] transition-colors border border-transparent hover:border-[#1A1A1A]"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="bg-[#FF4F00] text-white px-6 py-3 text-sm font-bold hover:bg-[#FF4F00]/90 transition-all shadow-[4px_4px_0px_0px_#1A1A1A] hover:shadow-[2px_2px_0px_0px_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                MULAI KONSULTASI
              </a>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#1A1A1A]"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#F5F5F0] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-2xl font-bold text-[#1A1A1A] border-b border-[#1A1A1A]/10 pb-4"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/6281311099023"
                className="bg-[#FF4F00] text-white text-center py-4 font-bold shadow-[4px_4px_0px_0px_#1A1A1A]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                MULAI KONSULTASI
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
```
