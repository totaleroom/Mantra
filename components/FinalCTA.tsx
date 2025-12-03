/*
============================================================================
FINAL CTA - MANTRA (Neon Noir Edition)
============================================================================
*/

"use client"

import { motion } from "framer-motion"
import { MessageCircle, ArrowRight, Zap, Shield, Clock, Rocket } from "lucide-react"

export const FinalCTA = () => {
  /*
  ============================================================================
  DAFTAR BENEFIT
  return (
    <section className="w-full py-24 px-6 lg:px-8 bg-[#FF4F00] flex items-center justify-center border-b border-[#1A1A1A]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[0.9]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            SIAP PECAT <br/> ADMIN LAMA?
          </h2>
              <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-black font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                <MessageCircle className="w-5 h-5 mr-2 text-purple-400" />
                Jadwalkan Konsultasi Gratis
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </a>
          </div>

          {/* Benefit Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
  {benefits.map((benefit, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300"
    >
      <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center border border-purple-500/30">
        <benefit.icon className="w-5 h-5 text-purple-400" />
      </div>
      <span className="text-sm text-gray-300 text-center font-medium" style={{ fontFamily: "Figtree" }}>
        {benefit.text}
      </span>
    </motion.div>
  ))}
</div>
        </motion.div >
      </div >
    </section >
  )
}
