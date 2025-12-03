"use client"

import { motion } from "framer-motion"
import { MessageSquare, Database, Share2, ArrowUpRight } from "lucide-react"

export const HowItWorks = () => {
  return (
    <section id="fitur" className="w-full py-24 px-6 lg:px-8 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            THE MANTRA <br /> ECOSYSTEM
          </h2>
          <p className="text-xl text-[#1A1A1A]/60 max-w-2xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Tiga pilar otomasi untuk menggantikan departemen operasional Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

          {/* CARD 1: PENJAGA (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#C0C0C0] p-8 border border-[#1A1A1A] relative group overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-4 right-4 p-2 bg-[#1A1A1A] text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-6 h-6" />
            </div>

            <div className="w-16 h-16 bg-[#1A1A1A] flex items-center justify-center mb-6">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                PENJAGA
              </h3>
              <p className="text-[#1A1A1A]/80 text-lg mb-4" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                AI Chatbot & Customer Service
              </p>
              <p className="text-[#1A1A1A] text-xl max-w-md leading-relaxed">
                "Penjaga toko digital yang tidak pernah tidur. Menjawab pertanyaan, memproses order, dan follow-up customer 24/7."
              </p>
            </div>
          </motion.div>

          {/* CARD 2: INGATAN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 border border-[#1A1A1A] relative group hover:shadow-[4px_4px_0px_0px_#FF4F00] transition-shadow"
          >
            <div className="w-12 h-12 bg-[#F5F5F0] border border-[#1A1A1A] flex items-center justify-center mb-6">
              <Database className="w-6 h-6 text-[#1A1A1A]" />
            </div>

            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              INGATAN
            </h3>
            <p className="text-[#1A1A1A]/60 text-sm mb-4" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              CRM & Database
            </p>
            <p className="text-[#1A1A1A]">
              Mencatat setiap pembeli, riwayat order, dan preferensi. Anti lupa, anti data hilang.
            </p>
          </motion.div>

          {/* CARD 3: SUARA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#1A1A1A] p-8 border border-[#1A1A1A] relative group text-[#F5F5F0]"
          >
            <div className="w-12 h-12 bg-[#333] flex items-center justify-center mb-6">
              <Share2 className="w-6 h-6 text-[#FF4F00]" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              SUARA
            </h3>
            <p className="text-white/60 text-sm mb-4" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              Content Automation
            </p>
            <p className="text-white/80">
              Terus posting di sosmed, generate caption, dan schedule konten tanpa Anda perlu pegang HP.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
