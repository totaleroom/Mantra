/*
============================================================================
FOOTER - MANTRA (Neon Noir Edition)
============================================================================
*/

"use client"

import { MessageCircle, Instagram, Linkedin, Mail, ArrowUpRight, Zap } from "lucide-react"
import { motion } from "framer-motion"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  /*
  ============================================================================
  LINK NAVIGASI FOOTER
  ============================================================================
  */
  const links = {
    layanan: [
      { label: "Mantra Chat", href: "#layanan" },
      { label: "Mantra Flow", href: "#layanan" },
      { label: "Mantra Data", href: "#layanan" },
      { label: "Custom Sorcery", href: "#contact" },
    ],
    resources: [
      { label: "Cara Kerja", href: "#cara-kerja" },
      { label: "Hasil Nyata", href: "#hasil" },
      { label: "Harga", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  }

  return (
    <footer className="w-full bg-black border-t border-purple-900/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* 
          ============================================================================
          KOLOM BRAND & KONTAK
          ============================================================================
          */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:col-span-2"
          >
            <div className="mb-6">
              {/* BRAND */}
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2" style={{ fontFamily: "Figtree" }}>
                <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" fill="currentColor" />
                </div>
                MANTRA
              </h3>
              {/* TAGLINE */}
              <p className="text-base text-gray-400 max-w-sm leading-relaxed" style={{ fontFamily: "Figtree" }}>
                Digital Sorcery for Real Business. Ubah keruwetan operasional menjadi keteraturan otomatis.
              </p>
            </div>

            {/* INFORMASI KONTAK */}
            <div className="space-y-3 mt-8">
              <a
                href="https://wa.me/6281311099023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>+62 813-1109-9023</span>
              </a>
              <a
                href="mailto:hello@mantra-ai.id"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                <Mail className="w-5 h-5" />
                <span>hello@mantra-ai.id</span>
              </a>
            </div>

            {/* LINK SOCIAL MEDIA */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-purple-400 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                style={{ fontFamily: "Figtree" }}
              >
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="text-sm text-gray-500 hover:text-purple-400 transition-colors duration-150 inline-flex items-center gap-1"
                style={{ fontFamily: "Figtree" }}
              >
                Back to top
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
        </div>
      </motion.div>
    </div>
    </footer >
  )
}
