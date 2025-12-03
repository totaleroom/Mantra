/*
============================================================================
FAQ SECTION - Pertanyaan yang Sering Ditanyakan
============================================================================
File ini menampilkan daftar FAQ dalam format accordion (klik untuk expand).

PANDUAN EDIT:
- Untuk edit pertanyaan/jawaban: edit di array "faqs"
- Untuk tambah FAQ baru: copy-paste format yang ada
- Untuk hapus FAQ: hapus satu object { question: "...", answer: "..." }
============================================================================
*/

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

type FAQItem = {
  question: string
  answer: string
}

/*
============================================================================
DAFTAR FAQ (AMAN DIEDIT)
============================================================================
Edit pertanyaan dan jawaban di bawah ini.

STRUKTUR:
- question: Pertanyaan yang ditampilkan
- answer: Jawaban yang muncul saat di-klik

CARA TAMBAH FAQ BARU:
1. Copy satu object { question: "...", answer: "..." }
2. Paste di posisi yang diinginkan (jangan lupa koma di akhir)
3. Ganti question dan answer

CONTOH:
{
  question: "Pertanyaan baru Anda?",
  answer: "Jawaban untuk pertanyaan tersebut...",
},
============================================================================
*/
const faqs: FAQItem[] = [
  {
    // FAQ 1
    question: "Saya gak ngerti teknologi, bisa pakai gak?", // <-- EDIT pertanyaan
    answer:
      "Bisa banget! Anda gak perlu ngerti teknisnya sama sekali. Saya yang handle semua setup dan konfigurasi. Setelah jadi, Anda tinggal pakai seperti pakai WhatsApp biasa. Kalau ada yang bingung, langsung tanya via WhatsApp.", // <-- EDIT jawaban
  },
  {
    // FAQ 2
    question: "Berapa lama proses setupnya?",
    answer:
      "Untuk paket Starter: 1-2 minggu. Untuk paket Growth: 2-3 minggu. Untuk Enterprise: 3-4 minggu tergantung kompleksitas. Anda bisa mulai lihat hasilnya di minggu pertama untuk fitur basic.",
  },
  {
    // FAQ 3
    question: "Kalau ada masalah atau error, gimana?",
    answer:
      "Support via WhatsApp langsung ke saya. Response time < 24 jam di hari kerja. Untuk paket Growth dan Enterprise, ada prioritas support yang lebih cepat. Sistem juga ada monitoring otomatis, jadi biasanya saya tau duluan kalau ada masalah.",
  },
  {
    // FAQ 4
    question: "Apakah cocok untuk bisnis saya?",
    answer:
      "Cocok kalau Anda: (1) Punya toko online di marketplace atau Instagram, (2) Dapat 10+ chat/hari dari customer, (3) Jualan di 2+ platform, (4) Merasa kewalahan dengan kerjaan admin. Kalau belum yakin, kita bisa ngobrol dulu di konsultasi gratis.",
  },
  {
    // FAQ 5
    question: "Bedanya dengan hire admin tambahan?",
    answer:
      "Admin: Rp 4-5 juta/bulan, perlu training, bisa resign, cuti, sakit, dan cuma bisa kerja 8 jam. Automation: Sekali setup, jalan 24/7, gak cuti, gak resign, dan konsisten. Untuk kerjaan repetitif, automation jauh lebih efisien.",
  },
  {
    // FAQ 6
    question: "Data saya aman gak?",
    answer:
      "Aman. Semua data tersimpan di akun Anda sendiri (Google Sheets, Airtable, atau database pilihan Anda). Saya tidak menyimpan data customer Anda. Credential API juga tersimpan secure di sistem automation, bukan di tempat lain.",
  },
  {
    // FAQ 7
    question: "Bisa di-custom sesuai kebutuhan bisnis saya?",
    answer:
      "Bisa! Justru itu bedanya dengan software template. Semua automation dibuat custom sesuai workflow dan kebutuhan spesifik bisnis Anda. Di fase konsultasi, kita akan mapping detail apa yang perlu diotomasi.",
  },
  {
    // FAQ 8
    question: "Gimana kalau saya mau berhenti?",
    answer:
      "Tidak ada lock-in contract. Kalau mau berhenti, tinggal bilang aja. Semua workflow dan data tetap milik Anda. Saya juga akan kasih dokumentasi lengkap kalau Anda mau lanjut sendiri atau pakai orang lain.",
  },
]

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="w-full py-20 px-6 lg:px-8 bg-[#f8f9fa]">
      <div className="max-w-4xl mx-auto">
        {/* 
        ============================================================================
        HEADER FAQ (AMAN DIEDIT)
        ============================================================================
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* EDIT JUDUL FAQ */}
          <h2
            className="text-3xl md:text-4xl lg:text-[40px] leading-tight font-medium text-[#202020] tracking-tight mb-4"
            style={{ fontFamily: "Figtree" }}
          >
            Pertanyaan yang Sering Ditanyakan
          </h2>
          {/* EDIT DESKRIPSI FAQ */}
          <p className="text-lg text-[#666666]" style={{ fontFamily: "Figtree" }}>
            Belum ketemu jawabannya? Langsung tanya via WhatsApp.
          </p>
        </motion.div>

        {/* Daftar FAQ - Otomatis dari array faqs di atas */}
        <div className="bg-white rounded-3xl border border-[#e5e5e5] overflow-hidden">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-b border-[#e5e5e5] last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left group hover:bg-[#f8f9fa] transition-colors duration-150"
                aria-expanded={openIndex === index}
              >
                <span
                  className="text-base lg:text-lg text-[#202020] pr-8 leading-relaxed"
                  style={{ fontFamily: "Figtree", fontWeight: "500" }}
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="flex-shrink-0"
                >
                  <Plus className="w-5 h-5 text-[#156d95]" strokeWidth={2} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-base text-[#666666] leading-relaxed" style={{ fontFamily: "Figtree" }}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
