/*
============================================================================
SUCCESS STORIES - Cerita Sukses Klien
============================================================================
File ini menampilkan case study dari klien yang sudah menggunakan layanan Anda.
Ditampilkan dalam format carousel yang bisa di-swipe.

PANDUAN EDIT:
- Edit cerita klien di array "stories"
- Setiap story memiliki data before/after dan metrics
- Ganti dengan cerita klien nyata Anda (atau buat yang realistis)
============================================================================
*/

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight, Clock, TrendingUp, Users } from "lucide-react"

/*
============================================================================
DAFTAR CERITA SUKSES KLIEN (AMAN DIEDIT)
============================================================================
Edit data klien di bawah ini.

STRUKTUR SETIAP STORY:
- id: Nomor urut (harus unik)
- business: Jenis bisnis klien
- segment: Skala bisnis (misal: "50-100 order/hari")
- owner: Nama pemilik
- location: Kota
- image: Path ke foto (taruh di folder /public)
- quote: Testimoni langsung dari klien
- before: Data sebelum pakai automation
  - hours: Waktu yang dihabiskan per hari
  - issues: Array masalah-masalah yang dialami
- after: Data sesudah pakai automation
  - hours: Waktu yang dihabiskan per hari
  - results: Array hasil yang didapat
- metrics: Angka-angka hasil
  - timeSaved: Waktu yang dihemat
  - efficiency: Peningkatan efisiensi
  - Metric ketiga bisa bervariasi (salesIncrease, errorReduction, dll)
============================================================================
*/
const stories = [
  {
    id: 1,
    business: "Toko Fashion Online", // <-- EDIT jenis bisnis
    segment: "50-100 order/hari", // <-- EDIT skala bisnis
    owner: "Rina", // <-- EDIT nama klien
    location: "Jakarta", // <-- EDIT lokasi
    image: "/indonesian-woman-entrepreneur-fashion.jpg", // <-- EDIT foto
    quote:
      "Gamechange banget pakai automation ini. Bisnis makin gede tapi gak nambah admin. Sekarang bisa fokus ke produk dan marketing.", // <-- EDIT testimoni
    before: {
      hours: "5 jam/hari", // <-- EDIT waktu sebelum
      issues: [
        // <-- EDIT masalah-masalah
        "Bales chat & update stok manual",
        "Sering overselling karena stok gak sync",
        "Admin kewalahan, overtime tiap hari",
      ],
    },
    after: {
      hours: "1.5 jam/hari", // <-- EDIT waktu sesudah
      results: [
        // <-- EDIT hasil-hasil
        "Bot handle 70% pertanyaan customer",
        "Stok sync otomatis Tokopedia-Shopee",
        "Admin fokus packing & CS kompleks",
      ],
    },
    metrics: {
      timeSaved: "3.5 jam/hari", // <-- EDIT metric 1
      efficiency: "+70%", // <-- EDIT metric 2
      salesIncrease: "+25%", // <-- EDIT metric 3
    },
  },
  {
    id: 2,
    business: "Distributor Snack",
    segment: "200+ reseller",
    owner: "Pak Hendra",
    location: "Surabaya",
    image: "/indonesian-man-business-owner.jpg",
    quote:
      "Dulu tiap pagi harus rekap order dari 200 reseller satu-satu. Sekarang tinggal cek summary di WhatsApp. Hemat waktu banget!",
    before: {
      hours: "4 jam/hari",
      issues: [
        "Rekap order manual dari 200+ reseller",
        "Sering salah input jumlah",
        "Pengiriman suka telat karena proses lambat",
      ],
    },
    after: {
      hours: "30 menit/hari",
      results: ["Order masuk otomatis tercatat", "Summary harian di WhatsApp", "Proses pengiriman lebih cepat"],
    },
    metrics: {
      timeSaved: "3.5 jam/hari",
      efficiency: "+85%",
      errorReduction: "-90%",
    },
  },
  {
    id: 3,
    business: "Klinik Kecantikan",
    segment: "3 cabang",
    owner: "Dr. Maya",
    location: "Bandung",
    image: "/indonesian-woman-doctor-professional.jpg",
    quote:
      "Appointment reminder otomatis ngurangin no-show sampai 60%. Customer juga lebih happy karena diingatkan H-1.",
  },
]

"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export const SuccessStories = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Owner, Batik Kencana",
      quote: "Dulu saya harus gaji 3 admin buat bales chat doang. Sekarang pakai Mantra, cuma butuh 1 orang buat handle yang teknis. Hemat 15 juta/bulan.",
    },
    {
      name: "Siti Aminah",
      role: "Founder, Hijab Daily",
      quote: "Stok di Shopee sama gudang sering selisih. Sejak pakai Ingatan-nya Mantra, stok real-time. Gak ada lagi drama cancel order.",
    },
    {
      name: "Hendrawan",
      role: "CEO, Kopi Senja",
      quote: "Saya kira bakal ribet setup-nya. Ternyata tim Mantra yang kerjain semua. Saya tinggal terima beres, sistem langsung jalan.",
    },
  ]

  return (
    <section id="hasil" className="w-full py-24 px-6 lg:px-8 bg-white border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            DIPERCAYA <br /> JURAGAN MODERN
          </h2>
          <p className="text-xl text-[#1A1A1A]/60 max-w-2xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Mereka yang sudah memecat keruwetan dan merekrut ketenangan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <span
                          className="text-sm font-medium text-red-600 uppercase tracking-wide"
                          style={{ fontFamily: "var(--font-geist-mono)" }}
                        >
                          Sebelum
                        </span>
                      </div>
                      <p
                        className="text-2xl font-medium text-[#202020] mb-3"
                        style={{ fontFamily: "var(--font-geist-mono)" }}
                      >
                        {currentStory.before.hours}
                      </p>
                      <ul className="space-y-2">
                        {currentStory.before.issues.map((issue, idx) => (
                          <li key={idx} className="text-sm text-[#666666]" style={{ fontFamily: "Figtree" }}>
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>

        {/* After */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span
              className="text-sm font-medium text-green-700 uppercase tracking-wide"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              Sesudah
            </span>
          </div>
          <p
            className="text-2xl font-medium text-[#202020] mb-3"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {currentStory.after.hours}
          </p>
          <ul className="space-y-2">
            {currentStory.after.results.map((result, idx) => (
              <li key={idx} className="text-sm text-[#404040]" style={{ fontFamily: "Figtree" }}>
                {result}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#e5e5e5]">
        <div className="text-center">
          <Clock className="w-5 h-5 text-[#156d95] mx-auto mb-2" />
          <p
            className="text-lg font-medium text-[#202020]"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {currentStory.metrics.timeSaved}
          </p>
          <p className="text-xs text-[#666666]" style={{ fontFamily: "Figtree" }}>
            Waktu dihemat
          </p>
        </div>
        <div className="text-center">
          <TrendingUp className="w-5 h-5 text-green-500 mx-auto mb-2" />
          <p
            className="text-lg font-medium text-green-600"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {currentStory.metrics.efficiency}
          </p>
          <p className="text-xs text-[#666666]" style={{ fontFamily: "Figtree" }}>
            Efisiensi
          </p>
        </div>
        <div className="text-center">
          <Users className="w-5 h-5 text-[#156d95] mx-auto mb-2" />
          <p
            className="text-lg font-medium text-[#202020]"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {Object.values(currentStory.metrics)[2]}
          </p>
          <p className="text-xs text-[#666666]" style={{ fontFamily: "Figtree" }}>
            Impact
          </p>
        </div>
      </div>
    </div>
              </div >
            </motion.div >
          </AnimatePresence >

  {/* Navigation Arrows & Dots */ }
  < div className = "flex items-center justify-center gap-4 mt-8" >
            <button
              onClick={prevStory}
              className="w-12 h-12 rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center text-[#666666] hover:text-[#156d95] hover:border-[#156d95] transition-colors"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? "bg-[#156d95] w-6" : "bg-[#e5e5e5]"
                  }`}
                  aria-label={`Go to story ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextStory}
              className="w-12 h-12 rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center text-[#666666] hover:text-[#156d95] hover:border-[#156d95] transition-colors"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div >
        </div >
      </div >
    </section >
  )
}
