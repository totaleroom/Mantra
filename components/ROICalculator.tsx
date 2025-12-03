"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Calculator, Clock, Wallet, TrendingUp, ArrowRight } from "lucide-react"

export const ROICalculator = () => {
  const [chatHours, setChatHours] = useState(2)
  const [stockHours, setStockHours] = useState(1)
  const [orderHours, setOrderHours] = useState(1)

  const calculations = useMemo(() => {
    const totalDailyHours = chatHours + stockHours + orderHours
    const monthlyHours = totalDailyHours * 26 // 26 working days
    const hourlyRate = 25000 // Rp 25,000 per hour (approx admin salary)
    const monthlyValue = monthlyHours * hourlyRate
    const savedHours = Math.round(totalDailyHours * 0.75) // 75% time saved
    const savedMonthlyHours = savedHours * 26
    const savedValue = savedMonthlyHours * hourlyRate
    const investmentMin = 3000000 // Rp 3 juta minimum
    const roi = savedValue > 0 ? (savedValue / investmentMin).toFixed(1) : 0

    return {
      totalDailyHours,
      monthlyHours,
      monthlyValue,
      savedHours,
      savedMonthlyHours,
      savedValue,
      roi,
    }
  }, [chatHours, stockHours, orderHours])

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num)
  }

  return (
    <section id="layanan" className="w-full py-20 px-6 lg:px-8 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#156d95]/10 text-[#156d95] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            <span style={{ fontFamily: "Figtree" }}>Kalkulator ROI</span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-[40px] leading-tight font-medium text-[#202020] mb-4 tracking-tight"
            style={{ fontFamily: "Figtree" }}
          >
            Berapa Waktu yang Bisa Anda Hemat?
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto" style={{ fontFamily: "Figtree" }}>
            Hitung potensi penghematan waktu dan biaya dengan automation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5e5e5]"
          >
            <h3 className="text-xl font-medium text-[#202020] mb-6" style={{ fontFamily: "Figtree" }}>
              Berapa jam/hari Anda habiskan untuk:
            </h3>

            <div className="space-y-6">
              {/* Chat Hours Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-base text-[#404040]" style={{ fontFamily: "Figtree" }}>
                    Bales chat customer
                  </label>
                  <span
                    className="text-lg font-medium text-[#156d95] bg-[#156d95]/10 px-3 py-1 rounded-full"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {chatHours} jam
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="8"
                  step="0.5"
                  value={chatHours}
                  onChange={(e) => setChatHours(Number.parseFloat(e.target.value))}
                  className="w-full h-2 bg-[#e5e5e5] rounded-full appearance-none cursor-pointer accent-[#156d95]"
                />
              </div>

              {/* Stock Hours Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-base text-[#404040]" style={{ fontFamily: "Figtree" }}>
                    Update stok manual
                  </label>
                  <span
                    className="text-lg font-medium text-[#156d95] bg-[#156d95]/10 px-3 py-1 rounded-full"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {stockHours} jam
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="0.5"
                  value={stockHours}
                  onChange={(e) => setStockHours(Number.parseFloat(e.target.value))}
                  className="w-full h-2 bg-[#e5e5e5] rounded-full appearance-none cursor-pointer accent-[#156d95]"
                />
              </div>

              {/* Order Hours Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-base text-[#404040]" style={{ fontFamily: "Figtree" }}>
                    Input & tracking order
                  </label>
                  <span
                    className="text-lg font-medium text-[#156d95] bg-[#156d95]/10 px-3 py-1 rounded-full"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {orderHours} jam
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="0.5"
                  value={orderHours}
                  onChange={(e) => setOrderHours(Number.parseFloat(e.target.value))}
                  className="w-full h-2 bg-[#e5e5e5] rounded-full appearance-none cursor-pointer accent-[#156d95]"
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#e5e5e5]">
              <div className="flex justify-between items-center">
                <span className="text-base text-[#666666]" style={{ fontFamily: "Figtree" }}>
                  Total waktu manual/hari:
                </span>
                <span className="text-2xl font-medium text-[#202020]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                  {calculations.totalDailyHours} jam
                </span>
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#156d95] rounded-3xl p-8 text-white"
          >
            <h3 className="text-xl font-medium mb-6" style={{ fontFamily: "Figtree" }}>
              Dengan Automation:
            </h3>

            <div className="space-y-6">
              {/* Time Saved */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/70 text-sm" style={{ fontFamily: "Figtree" }}>
                    Waktu yang dihemat/bulan
                  </p>
                  <p className="text-3xl font-medium" style={{ fontFamily: "var(--font-geist-mono)" }}>
                    {calculations.savedMonthlyHours} jam
                  </p>
                </div>
              </div>

              {/* Money Saved */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Wallet className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/70 text-sm" style={{ fontFamily: "Figtree" }}>
                    Nilai waktu yang dihemat/bulan
                  </p>
                  <p className="text-3xl font-medium" style={{ fontFamily: "var(--font-geist-mono)" }}>
                    {formatRupiah(calculations.savedValue)}
                  </p>
                </div>
              </div>

              {/* ROI */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/70 text-sm" style={{ fontFamily: "Figtree" }}>
                    ROI dalam 30 hari pertama
                  </p>
                  <p className="text-3xl font-medium" style={{ fontFamily: "var(--font-geist-mono)" }}>
                    {calculations.roi}x
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <a
                href="https://wa.me/6281234567890?text=Halo,%20saya%20mau%20konsultasi%20automation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-white text-[#156d95] px-6 py-4 rounded-full text-lg font-medium hover:bg-white/90 transition-all duration-200 group"
                style={{ fontFamily: "Figtree" }}
              >
                Mulai Hemat Waktu Sekarang
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
