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
    before: {
      hours: "3 jam/hari",
      issues: ["Reminder appointment manual via WA", "Banyak customer no-show", "Jadwal dokter sering bentrok"],
    },
    after: {
      hours: "45 menit/hari",
      results: ["Reminder otomatis H-1 dan H-3 jam", "No-show turun 60%", "Scheduling terintegrasi 3 cabang"],
    },
    metrics: {
      timeSaved: "2+ jam/hari",
      noShowReduction: "-60%",
      satisfaction: "+40%",
    },
  },
]

export const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length)
  }

  const currentStory = stories[currentIndex]

  return (
    <section id="hasil" className="w-full py-20 px-6 lg:px-8 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto">
        {/* 
        ============================================================================
        HEADER SECTION (AMAN DIEDIT)
        ============================================================================
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* EDIT JUDUL */}
          <h2
            className="text-3xl md:text-4xl lg:text-[40px] leading-tight font-medium text-[#202020] mb-4 tracking-tight"
            style={{ fontFamily: "Figtree" }}
          >
            Hasil Nyata dari Klien Kami
          </h2>
          {/* EDIT DESKRIPSI */}
          <p className="text-lg text-[#666666] max-w-2xl mx-auto" style={{ fontFamily: "Figtree" }}>
            Bukan teori. Ini hasil nyata dari bisnis yang sudah pakai automation.
          </p>
        </motion.div>

        {/* Carousel - Otomatis dari array stories di atas */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#e5e5e5]"
            >
              <div className="grid lg:grid-cols-2">
                {/* Kiri: Quote & Profile */}
                <div className="p-8 lg:p-12 flex flex-col">
                  <div className="flex-1">
                    <Quote className="w-10 h-10 text-[#156d95]/20 mb-4" />
                    <p
                      className="text-xl lg:text-2xl text-[#202020] leading-relaxed mb-8"
                      style={{ fontFamily: "Figtree", fontWeight: "400" }}
                    >
                      "{currentStory.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#e9e9e9] overflow-hidden">
                      <img
                        src={currentStory.image || "/placeholder.svg"}
                        alt={currentStory.owner}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-[#202020]" style={{ fontFamily: "Figtree" }}>
                        {currentStory.owner}
                      </p>
                      <p className="text-base text-[#666666]" style={{ fontFamily: "Figtree" }}>
                        {currentStory.business}, {currentStory.location}
                      </p>
                      <p className="text-sm text-[#156d95]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                        {currentStory.segment}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Kanan: Before/After */}
                <div className="bg-[#f8f9fa] p-8 lg:p-12">
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {/* Before */}
                    <div>
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
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows & Dots */}
          <div className="flex items-center justify-center gap-4 mt-8">
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
          </div>
        </div>
      </div>
    </section>
  )
}
