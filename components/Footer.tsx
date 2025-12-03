/*
============================================================================
FOOTER - Bagian Bawah Website
============================================================================
File ini menampilkan footer dengan informasi kontak, link navigasi, dan copyright.

PANDUAN EDIT:
- Edit informasi kontak (WA, email)
- Edit link social media
- Edit link navigasi
============================================================================
*/

"use client"

import { MessageCircle, Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  /*
  ============================================================================
  LINK NAVIGASI FOOTER (AMAN DIEDIT)
  ============================================================================
  Edit daftar link di footer.
  - label: Text yang ditampilkan
  - href: Link tujuan (untuk internal gunakan #id-section)
  ============================================================================
  */
  const links = {
    layanan: [
      { label: "WhatsApp Automation", href: "#layanan" }, // <-- EDIT
      { label: "Marketplace Sync", href: "#layanan" },
      { label: "AI Customer Service", href: "#layanan" },
      { label: "Custom Integration", href: "#contact" },
    ],
    resources: [
      { label: "Cara Kerja", href: "#cara-kerja" }, // <-- EDIT
      { label: "Hasil Nyata", href: "#hasil" },
      { label: "Harga", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  }

  return (
    <footer className="w-full bg-[#fafafa] border-t border-[#e5e5e5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* 
          ============================================================================
          KOLOM BRAND & KONTAK (AMAN DIEDIT)
          ============================================================================
          */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:col-span-2"
          >
            <div className="mb-4">
              {/* EDIT NAMA BRAND */}
              <h3 className="text-2xl font-bold text-[#202020] mb-3" style={{ fontFamily: "Figtree" }}>
                <span className="text-[#156d95]">Auto</span>mate.id
              </h3>
              {/* EDIT TAGLINE */}
              <p className="text-base text-[#666666] max-w-sm leading-relaxed" style={{ fontFamily: "Figtree" }}>
                Solusi automation untuk UMKM Indonesia. Hemat waktu, grow bisnis. Setup mudah, hasil nyata.
              </p>
            </div>

            {/* 
            ============================================================================
            INFORMASI KONTAK (PENTING - GANTI DENGAN DATA ANDA)
            ============================================================================
            */}
            <div className="space-y-3 mt-6">
              <a
                // EDIT NOMOR WHATSAPP DI SINI
                href="https://wa.me/6281311099023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#666666] hover:text-[#156d95] transition-colors"
                style={{ fontFamily: "Figtree" }}
              >
                <MessageCircle className="w-5 h-5" />
                {/* EDIT NOMOR YANG DITAMPILKAN */}
                <span>+62 813-1109-9023</span>
              </a>
              <a
                // EDIT EMAIL DI SINI
                href="mailto:hello@automate.id"
                className="flex items-center gap-3 text-[#666666] hover:text-[#156d95] transition-colors"
                style={{ fontFamily: "Figtree" }}
              >
                <Mail className="w-5 h-5" />
                {/* EDIT EMAIL YANG DITAMPILKAN */}
                <span>hello@automate.id</span>
              </a>
            </div>

            {/* 
            ============================================================================
            LINK SOCIAL MEDIA (GANTI DENGAN AKUN ANDA)
            ============================================================================
            */}
            <div className="flex items-center gap-3 mt-6">
              <a
                // EDIT LINK INSTAGRAM
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#e5e5e5] text-[#666666] hover:text-[#156d95] hover:border-[#156d95] transition-colors duration-150"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                // EDIT LINK LINKEDIN
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#e5e5e5] text-[#666666] hover:text-[#156d95] hover:border-[#156d95] transition-colors duration-150"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Kolom Link Layanan - Otomatis dari links.layanan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <h4
              className="text-sm font-medium text-[#202020] mb-4 uppercase tracking-wide"
              style={{ fontFamily: "Figtree" }}
            >
              Layanan
            </h4>
            <ul className="space-y-3">
              {links.layanan.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-base text-[#666666] hover:text-[#156d95] transition-colors duration-150"
                    style={{ fontFamily: "Figtree" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kolom Link Resources - Otomatis dari links.resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <h4
              className="text-sm font-medium text-[#202020] mb-4 uppercase tracking-wide"
              style={{ fontFamily: "Figtree" }}
            >
              Resources
            </h4>
            <ul className="space-y-3">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-base text-[#666666] hover:text-[#156d95] transition-colors duration-150"
                    style={{ fontFamily: "Figtree" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 
        ============================================================================
        COPYRIGHT BAR (AMAN DIEDIT)
        ============================================================================
        */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-[#e5e5e5]"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* EDIT COPYRIGHT TEXT */}
            <p className="text-sm text-[#666666]" style={{ fontFamily: "Figtree" }}>
              © {currentYear} Automate.id. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#privacy"
                className="text-sm text-[#666666] hover:text-[#156d95] transition-colors duration-150"
                style={{ fontFamily: "Figtree" }}
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-sm text-[#666666] hover:text-[#156d95] transition-colors duration-150"
                style={{ fontFamily: "Figtree" }}
              >
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="text-sm text-[#666666] hover:text-[#156d95] transition-colors duration-150 inline-flex items-center gap-1"
                style={{ fontFamily: "Figtree" }}
              >
                Back to top
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
