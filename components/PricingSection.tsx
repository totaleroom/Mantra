/*
============================================================================
PRICING SECTION - Halaman Harga / Paket Layanan
============================================================================
File ini menampilkan daftar paket harga dan fitur-fiturnya.

PANDUAN EDIT:
- Untuk ganti harga: edit setupPrice dan monthlyPrice di array "plans"
- Untuk ganti fitur: edit array "features" di masing-masing paket
- Untuk ganti nama paket: edit "name" dan "level"
- Untuk mengubah paket yang populer: tambahkan popular: true
============================================================================
*/

"use client"

import * as React from "react"
import { CheckIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { MessageCircle, ArrowRight } from "lucide-react"

type PlanLevel = "starter" | "growth" | "enterprise"

interface PricingPlan {
  name: string
  level: PlanLevel
  setupPrice: string
  monthlyPrice: string
  description: string
  popular?: boolean
  features: string[]
  targetRevenue: string
}

/*
============================================================================
DAFTAR PAKET HARGA (AMAN DIEDIT)
============================================================================
Edit informasi paket di bawah ini.

STRUKTUR SETIAP PAKET:
- name: Nama paket yang ditampilkan
- level: ID internal (jangan diubah kecuali paham)
- setupPrice: Harga setup (sekali bayar)
- monthlyPrice: Harga bulanan
- description: Deskripsi singkat paket
- popular: true/false - Apakah paket ini ditandai "Paling Populer"
- features: Array daftar fitur (bisa tambah/kurang)
- targetRevenue: Target customer yang cocok

CARA EDIT FITUR:
- Untuk tambah fitur: tambah "Fitur baru", di dalam array features
- Untuk hapus fitur: hapus baris beserta koma-nya
============================================================================
*/
const plans: PricingPlan[] = [
  {
    name: "Starter", // <-- EDIT: Nama paket
    level: "starter", // <-- JANGAN DIUBAH
    setupPrice: "Rp 3.000.000", // <-- EDIT: Harga setup
    monthlyPrice: "Rp 500.000", // <-- EDIT: Harga bulanan
    description: "Mulai dari yang essential", // <-- EDIT: Deskripsi
    // popular: true,                       // <-- Uncomment untuk jadikan populer
    features: [
      // <-- EDIT: Daftar fitur
      "WhatsApp Auto-Reply Bot",
      "Order Notification System",
      "Basic Training (1 sesi)",
      "14 hari support",
      "Dokumentasi lengkap",
    ],
    targetRevenue: "Omzet 10-50 juta/bulan", // <-- EDIT: Target customer
  },
  {
    name: "Growth", // <-- EDIT: Nama paket
    level: "growth", // <-- JANGAN DIUBAH
    setupPrice: "Rp 8.000.000", // <-- EDIT: Harga setup
    monthlyPrice: "Rp 1.500.000", // <-- EDIT: Harga bulanan
    description: "Untuk bisnis yang mulai scale", // <-- EDIT: Deskripsi
    popular: true, // <-- Paket ini ditandai POPULER
    features: [
      // <-- EDIT: Daftar fitur
      "Semua fitur Starter",
      "Multi-Marketplace Sync (Tokopedia + Shopee)",
      "AI Customer Service Bot",
      "Inventory Alert System",
      "Training (2 sesi)",
      "30 hari support",
    ],
    targetRevenue: "Omzet 50-500 juta/bulan", // <-- EDIT: Target customer
  },
  {
    name: "Enterprise", // <-- EDIT: Nama paket
    level: "enterprise", // <-- JANGAN DIUBAH
    setupPrice: "Custom", // <-- EDIT: Harga setup
    monthlyPrice: "Rp 3.500.000+", // <-- EDIT: Harga bulanan
    description: "Full automation suite", // <-- EDIT: Deskripsi
    features: [
      // <-- EDIT: Daftar fitur
      "Semua fitur Growth",
      "Inventory Management System",
      "Analytics Dashboard",
      "Multi-branch Support",
      "Custom Integration",
      "Dedicated Support",
      "SLA Guarantee",
    ],
    targetRevenue: "Omzet 500 juta+/bulan", // <-- EDIT: Target customer
  },
]

export function PricingSection() {
  const [selectedPlan, setSelectedPlan] = React.useState<PlanLevel>("growth")

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* 
        ============================================================================
        HEADER SECTION PRICING (AMAN DIEDIT)
        ============================================================================
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          {/* EDIT JUDUL SECTION */}
          <h2
            className="text-3xl md:text-4xl lg:text-[40px] font-medium leading-tight mb-4 tracking-tight text-[#202020]"
            style={{ fontFamily: "Figtree" }}
          >
            Investasi yang Masuk Akal
          </h2>
          {/* EDIT DESKRIPSI SECTION */}
          <p className="text-lg text-[#666666] max-w-2xl mx-auto" style={{ fontFamily: "Figtree" }}>
            Transparent pricing. Tidak ada biaya tersembunyi. ROI rata-rata 3-5x dalam 30 hari pertama.
          </p>
        </motion.div>

        {/* Kartu-kartu Pricing - Otomatis dari array plans di atas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedPlan(plan.level)}
              className={cn(
                "relative p-8 rounded-3xl cursor-pointer transition-all border-2",
                selectedPlan === plan.level
                  ? "border-[#156d95] bg-[#156d95]/5"
                  : "border-[#e5e5e5] hover:border-[#156d95]/50 bg-white",
              )}
            >
              {/* Badge "Paling Populer" - Muncul otomatis kalau popular: true */}
              {plan.popular && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#156d95] text-white px-4 py-1 rounded-full text-sm font-medium"
                  style={{ fontFamily: "Figtree" }}
                >
                  Paling Populer
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-medium text-[#202020] mb-1" style={{ fontFamily: "Figtree" }}>
                  {plan.name}
                </h3>
                <p className="text-base text-[#666666]" style={{ fontFamily: "Figtree" }}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className="text-3xl font-medium text-[#202020]"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {plan.setupPrice}
                  </span>
                  <span className="text-base text-[#666666]" style={{ fontFamily: "Figtree" }}>
                    setup
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg text-[#666666]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                    + {plan.monthlyPrice}
                  </span>
                  <span className="text-sm text-[#666666]" style={{ fontFamily: "Figtree" }}>
                    /bulan
                  </span>
                </div>
              </div>

              {/* Daftar Fitur - Otomatis dari array features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#156d95]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-3 h-3 text-[#156d95]" />
                    </div>
                    <span className="text-base text-[#404040]" style={{ fontFamily: "Figtree" }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#e5e5e5]">
                <p className="text-sm text-[#156d95] font-medium" style={{ fontFamily: "Figtree" }}>
                  Cocok untuk: {plan.targetRevenue}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 
        ============================================================================
        TOMBOL CTA PRICING
        ============================================================================
        EDIT NOMOR WHATSAPP: Ganti 6281311099023 dengan nomor Anda
        ============================================================================
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            // EDIT NOMOR WHATSAPP DI SINI
            href={`https://wa.me/6281311099023?text=Halo,%20saya%20tertarik%20dengan%20paket%20${plans.find((p) => p.level === selectedPlan)?.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#156d95] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#156d95]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#156d95]/20 group"
            style={{ fontFamily: "Figtree" }}
          >
            <MessageCircle className="w-5 h-5" />
            Konsultasi Paket {plans.find((p) => p.level === selectedPlan)?.name}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          {/* EDIT TEXT DI BAWAH TOMBOL */}
          <p className="text-sm text-[#666666] mt-4" style={{ fontFamily: "Figtree" }}>
            Konsultasi gratis. Gak ada commitment.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
