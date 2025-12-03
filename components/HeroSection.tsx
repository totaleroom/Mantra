/*
============================================================================
HERO SECTION - MANTRA (Neon Noir Edition)
============================================================================
*/

"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, ArrowRight, MessageCircle, Cpu, Wand2 } from "lucide-react"

export const HeroSection = () => {
  /*
  ============================================================================
  PAIN POINTS - Masalah Lama (Manual Work)
  ============================================================================
  */
  const painPoints = [
    "4 jam/hari habis untuk balas chat repetitif",
    "Stok berantakan, sering selisih hitung",
    "Data order tercecer di banyak Excel",
    "Bisnis stuck, owner jadi admin seumur hidup",
  ]

  /*
  ============================================================================
  SOLUTIONS - MANTRA (Digital Sorcery)
  ============================================================================
  */
  const solutions = [
    "Mantra Chat: Balas ribuan chat dalam detik",
    "Mantra Flow: Stok sync otomatis bak sihir",
    "Mantra Data: Laporan real-time tanpa input",
    "Owner bebas, bisnis jalan Auto-Pilot",
  ]

  return (
    <section id="home" className="w-full px-6 lg:px-8 pt-32 pb-20 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <section id="home" className="w-full min-h-screen pt-32 pb-20 px-6 lg:px-8 bg-[#F5F5F0] flex items-center">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT COLUMN: TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#1A1A1A] mb-8 bg-white">
                <div className="w-2 h-2 bg-[#FF4F00]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  AI Automation Agency
                </span>
              </div>

              {/* Headline */}
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight text-[#1A1A1A] mb-8"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                PECAT <br />
                ADMINMU. <br />
                <span className="text-[#FF4F00]">REKRUT MANTRA.</span>
              </h1>

              {/* Subheadline */}
              <p
                className="text-lg md:text-xl text-[#1A1A1A]/80 max-w-lg mb-10 leading-relaxed"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Admin manusia butuh tidur dan gaji bulanan. Admin AI Mantra kerja 24 jam non-stop, biaya setara uang jajan.
                <br /><br />
                <span className="font-bold">Otomatisasi bisnis nyata, bukan sihir.</span>
              </p>
              <motion.li
                key={index}
                className="flex items-start gap-4 text-gray-200"
              >
                <span className="text-cyan-400 mt-1 shadow-[0_0_10px_rgba(34,211,238,0.5)]">✓</span>
                <span className="text-lg font-medium" style={{ fontFamily: "Figtree" }}>{point}</span>
              </motion.li>
                ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* 
        ============================================================================
        TOMBOL CTA (Call To Action)
        ============================================================================
        */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <a
          href="https://wa.me/6281311099023?text=Halo,%20saya%20tertarik%20untuk%20menggunakan%20Mantra"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex group"
        >
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-black font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
            <MessageCircle className="w-5 h-5 mr-2 text-purple-400" />
            Panggil Mantra
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </a>

        <a
          href="#cara-kerja"
          className="flex items-center gap-2 text-gray-400 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:bg-white/5 border border-transparent hover:border-white/10"
          style={{ fontFamily: "Figtree" }}
        >
          <Cpu className="w-5 h-5" />
          Lihat Cara Kerja
        </a>
      </motion.div>

      {/* 
        ============================================================================
        TRUST INDICATORS
        ============================================================================
        */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-8 mt-16 text-sm text-gray-500"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-500" />
          <span>100% AUTOMATED</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-500" />
          <span>NO HUMAN ERROR</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-500" />
          <span>24/7 ACTIVE</span>
        </div>
      </motion.div>
    </div>
    </section >
  )
}
