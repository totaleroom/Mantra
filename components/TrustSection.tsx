/*
============================================================================
TRUST SECTION - Bagian "Tentang Saya" & Nilai-Nilai Bisnis
============================================================================
File ini menampilkan cerita Anda sebagai founder dan nilai-nilai bisnis.
Bagian ini penting untuk membangun kepercayaan calon customer.

PANDUAN EDIT:
- Edit cerita/story di bagian kiri
- Edit nilai-nilai bisnis di array "values"
- Edit statistik di bagian bawah kanan
============================================================================
*/

"use client"

import { motion } from "framer-motion"
import { Target, Heart, Zap, ArrowRight, MessageCircle } from "lucide-react"

export const TrustSection = () => {
  /*
  ============================================================================
  NILAI-NILAI BISNIS (AMAN DIEDIT)
  ============================================================================
  Edit nilai-nilai yang ditampilkan di kartu sebelah kanan.
  
  STRUKTUR:
  - icon: Ikon yang digunakan (pilihan: Heart, Zap, Target, atau import yang lain)
  - title: Judul nilai
  - description: Deskripsi singkat
  ============================================================================
  */
  const values = [
    {
      icon: Heart,
      title: "Human-Centered", // <-- EDIT judul nilai 1
      description: "Solusi yang dibuat untuk manusia, bukan sebaliknya. Simple dan mudah dipakai.", // <-- EDIT deskripsi
    },
    {
      icon: Zap,
      title: "Hasil Nyata", // <-- EDIT judul nilai 2
      description: "Fokus ke ROI yang bisa diukur. Waktu yang dihemat = uang yang dihemat.",
    },
    {
      icon: Target,
      title: "Lokal & Personal", // <-- EDIT judul nilai 3
      description: "Dibuat khusus untuk kebutuhan bisnis Indonesia. Support langsung via WhatsApp.",
    },
  ]

  return (
    <section className="w-full py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 
          ============================================================================
          BAGIAN KIRI: CERITA ANDA (AMAN DIEDIT)
          ============================================================================
          Edit semua text di bagian ini untuk menceritakan kisah Anda.
          ============================================================================
          */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 bg-[#156d95]/10 text-[#156d95] px-4 py-2 rounded-full text-sm font-medium mb-6">
              {/* EDIT TEXT BADGE */}
              <span style={{ fontFamily: "Figtree" }}>Tentang Saya</span>
            </div>

            {/* EDIT JUDUL SECTION */}
            <h2
              className="text-3xl md:text-4xl leading-tight font-medium text-[#202020] mb-6 tracking-tight"
              style={{ fontFamily: "Figtree" }}
            >
              Kenapa Saya Memulai Ini?
            </h2>

            {/* 
            ============================================================================
            CERITA/STORY ANDA (EDIT SEMUA TEXT DI BAWAH)
            ============================================================================
            Ini adalah bagian cerita personal Anda. Ganti dengan kisah nyata Anda.
            Setiap <p>...</p> adalah satu paragraf.
            ============================================================================
            */}
            <div className="space-y-4 text-lg text-[#404040] leading-relaxed" style={{ fontFamily: "Figtree" }}>
              <p>
                Saya lihat banyak pemilik bisnis UMKM yang kerja 12+ jam sehari, tapi sebagian besar waktunya habis
                untuk kerjaan manual yang repetitif.
              </p>
              <p>Padahal sebenarnya bisa diotomasi.</p>
              <p>
                Sebagai AI engineer yang baru memulai karir, misi saya adalah membuat automation{" "}
                <span className="font-medium text-[#202020]">accessible untuk UMKM Indonesia</span>.
              </p>
              <p>
                Bukan software mahal yang ribet. Bukan tim IT yang harus di-hire. Tapi solusi simple yang langsung bisa
                Anda pakai.
              </p>
            </div>

            {/* TARGET TAHUN INI */}
            <div className="mt-8 p-6 bg-[#f8f9fa] rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-[#156d95]" />
                {/* EDIT LABEL TARGET */}
                <span
                  className="text-sm font-medium text-[#156d95] uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  Target Tahun Ini
                </span>
              </div>
              {/* EDIT TARGET ANDA */}
              <p className="text-xl font-medium text-[#202020]" style={{ fontFamily: "Figtree" }}>
                Bantu 100 UMKM hemat 300+ jam/bulan
              </p>
            </div>

            {/* TOMBOL CTA */}
            <div className="mt-8">
              <a
                // EDIT NOMOR WHATSAPP DI SINI
                href="https://wa.me/6281311099023?text=Halo,%20saya%20tertarik%20untuk%20ngobrol%20tentang%20automation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#156d95] text-white px-6 py-4 rounded-full text-lg font-medium hover:bg-[#156d95]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#156d95]/20 group"
                style={{ fontFamily: "Figtree" }}
              >
                <MessageCircle className="w-5 h-5" />
                {/* EDIT TEXT TOMBOL */}
                Mari Ngobrol
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* BAGIAN KANAN: NILAI-NILAI & STATISTIK */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Kartu Nilai-Nilai - Otomatis dari array values di atas */}
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex gap-5 p-6 bg-[#f8f9fa] rounded-2xl hover:bg-[#156d95]/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#156d95]/10 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-[#156d95]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#202020] mb-1" style={{ fontFamily: "Figtree" }}>
                    {value.title}
                  </h3>
                  <p className="text-base text-[#666666]" style={{ fontFamily: "Figtree" }}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* 
            ============================================================================
            STATISTIK (AMAN DIEDIT)
            ============================================================================
            Edit angka-angka statistik di bawah ini.
            ============================================================================
            */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-[#f8f9fa] rounded-2xl">
                {/* EDIT ANGKA STATISTIK 1 */}
                <p className="text-2xl font-medium text-[#156d95]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                  50+
                </p>
                {/* EDIT LABEL STATISTIK 1 */}
                <p className="text-sm text-[#666666]" style={{ fontFamily: "Figtree" }}>
                  UMKM Terbantu
                </p>
              </div>
              <div className="text-center p-4 bg-[#f8f9fa] rounded-2xl">
                {/* EDIT ANGKA STATISTIK 2 */}
                <p className="text-2xl font-medium text-[#156d95]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                  1500+
                </p>
                {/* EDIT LABEL STATISTIK 2 */}
                <p className="text-sm text-[#666666]" style={{ fontFamily: "Figtree" }}>
                  Jam Dihemat
                </p>
              </div>
              <div className="text-center p-4 bg-[#f8f9fa] rounded-2xl">
                {/* EDIT ANGKA STATISTIK 3 */}
                <p className="text-2xl font-medium text-[#156d95]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                  4.9/5
                </p>
                {/* EDIT LABEL STATISTIK 3 */}
                <p className="text-sm text-[#666666]" style={{ fontFamily: "Figtree" }}>
                  Rating Klien
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
