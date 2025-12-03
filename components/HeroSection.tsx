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
        {/* 
        ============================================================================
        SOCIAL PROOF BADGE
        ============================================================================
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]"></span>
            <span style={{ fontFamily: "var(--font-geist-mono)" }}>THE MODERN ALCHEMIST FOR SMEs</span>
          </div>
        </motion.div>

        {/* 
        ============================================================================
        HEADLINE UTAMA
        ============================================================================
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-white max-w-5xl mx-auto mb-8 font-bold"
            style={{ fontFamily: "Figtree" }}
          >
            Bisnis Otomatis. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 animate-gradient bg-300%">
              Semudah Mantra.
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Figtree" }}
          >
            <span className="text-purple-400 font-semibold">Digital Sorcery for Real Business.</span> <br />
            Ubah keruwetan operasional menjadi keteraturan otomatis.
          </p>
        </motion.div>

        {/* 
        ============================================================================
        KARTU PERBANDINGAN (GLITCH STYLE)
        ============================================================================
        */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto mb-16">
          {/* Kartu SEBELUM - The Chaos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0a0a0a] border border-red-900/30 rounded-3xl p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-red-900/5 group-hover:bg-red-900/10 transition-colors duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-red-900/20 flex items-center justify-center border border-red-900/50">
                  <Zap className="w-5 h-5 text-red-500" />
                </div>
                <span
                  className="text-sm font-bold text-red-500 uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  The Hard Work (Kuno)
                </span>
              </div>
              <ul className="space-y-5">
                {painPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-4 text-gray-400"
                  >
                    <span className="text-red-500 mt-1">✕</span>
                    <span className="text-lg" style={{ fontFamily: "Figtree" }}>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Kartu SESUDAH - The Magic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#0f0518] border border-purple-500/30 rounded-3xl p-8 relative overflow-hidden group shadow-[0_0_50px_-20px_rgba(191,0,255,0.3)]"
          >
            {/* Animated Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-50"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/50 shadow-[0_0_15px_rgba(191,0,255,0.5)]">
                  <Wand2 className="w-5 h-5 text-purple-400" />
                </div>
                <span
                  className="text-sm font-bold text-purple-400 uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  The Mantra (Modern)
                </span>
              </div>
              <ul className="space-y-5">
                {solutions.map((point, index) => (
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
    </section>
  )
}
