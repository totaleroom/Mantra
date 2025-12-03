/*
============================================================================
FINAL CTA - Call To Action Terakhir Sebelum Footer
============================================================================
File ini menampilkan CTA besar untuk mendorong pengunjung mengambil action.
Posisinya tepat sebelum footer.

PANDUAN EDIT:
- Edit headline dan deskripsi
- Edit benefit yang ditampilkan
- Edit nomor WhatsApp
============================================================================
*/

"use client"

import { motion } from "framer-motion"
import { MessageCircle, ArrowRight, Clock, Wallet, Calendar, Check } from "lucide-react"

export const FinalCTA = () => {
  /*
  ============================================================================
  DAFTAR BENEFIT (AMAN DIEDIT)
  ============================================================================
  Edit benefit yang ditampilkan di bawah tombol CTA.
  - icon: Ikon yang digunakan (pilihan: Wallet, Clock, Calendar, Check)
  - text: Text benefit
  ============================================================================
  */
  const benefits = [
    { icon: Wallet, text: "Investasi mulai dari Rp 3 juta" }, // <-- EDIT
    { icon: Clock, text: "ROI rata-rata 3-5x dalam 30 hari" }, // <-- EDIT
    { icon: Calendar, text: "Setup dalam 1-2 minggu" }, // <-- EDIT
    { icon: Check, text: "Dibuat khusus untuk bisnis Indonesia" }, // <-- EDIT
  ]

  return (
    <section id="contact" className="w-full py-20 px-6 lg:px-8 bg-[#156d95]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* EDIT HEADLINE UTAMA */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl leading-tight font-medium text-white mb-6 tracking-tight"
            style={{ fontFamily: "Figtree" }}
          >
            Siap Hemat 3-4 Jam Setiap Hari?
          </h2>

          {/* EDIT DESKRIPSI */}
          <p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed"
            style={{ fontFamily: "Figtree" }}
          >
            Mulai dengan konsultasi gratis 15 menit. Kita ngobrol tentang bisnis Anda dan saya tunjukin apa yang bisa
            diotomasi.
          </p>

          {/* EDIT TEXT TAMBAHAN */}
          <p className="text-base text-white/60 mb-10" style={{ fontFamily: "Figtree" }}>
            No pressure. No commitment. Cuma ngobrol dan lihat potensialnya.
          </p>

          {/* 
          ============================================================================
          TOMBOL CTA UTAMA
          ============================================================================
          EDIT NOMOR WHATSAPP: Ganti 6281311099023 dengan nomor Anda
          ============================================================================
          */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              // EDIT NOMOR WHATSAPP DI SINI
              href="https://wa.me/6281311099023?text=Halo,%20saya%20mau%20jadwalkan%20konsultasi%20gratis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-[#156d95] px-8 py-4 rounded-full text-lg font-medium hover:bg-white/90 transition-all duration-200 hover:shadow-xl group"
              style={{ fontFamily: "Figtree" }}
            >
              <MessageCircle className="w-5 h-5" />
              {/* EDIT TEXT TOMBOL */}
              Jadwalkan Konsultasi Gratis
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Benefit Cards - Otomatis dari array benefits di atas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-2xl"
              >
                <benefit.icon className="w-5 h-5 text-white/80" />
                <span className="text-sm text-white/80 text-center" style={{ fontFamily: "Figtree" }}>
                  {benefit.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
