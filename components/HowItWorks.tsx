"use client"

import { motion } from "framer-motion"
import { MessageCircle, Settings, Rocket, ArrowRight } from "lucide-react"

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Konsultasi Gratis",
      duration: "15 menit",
      description:
        "Kita ngobrol tentang bisnis Anda. Identifikasi proses mana yang paling makan waktu dan bisa diotomasi.",
      details: [
        "Analisis workflow bisnis Anda",
        "Identifikasi bottleneck operasional",
        "Rekomendasi solusi yang tepat",
      ],
    },
    {
      number: "02",
      icon: Settings,
      title: "Setup & Training",
      duration: "1-2 minggu",
      description:
        "Saya bangun sistemnya sesuai kebutuhan bisnis Anda. Anda tinggal pakai, gak perlu ngerti teknisnya.",
      details: ["Development automation custom", "Integrasi dengan tools yang ada", "Training tim Anda (2 sesi)"],
    },
    {
      number: "03",
      icon: Rocket,
      title: "Hemat Waktu, Grow Bisnis",
      duration: "Ongoing",
      description:
        "Fokus ke customer dan produk. Bukan ke kerjaan admin yang repetitif. Support via WhatsApp kapanpun butuh bantuan.",
      details: ["Monitoring sistem 24/7", "Support via WhatsApp", "Update & maintenance berkala"],
    },
  ]

  return (
    <section id="cara-kerja" className="w-full py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-[40px] leading-tight font-medium text-[#202020] mb-4 tracking-tight"
            style={{ fontFamily: "Figtree" }}
          >
            Cara Kerja yang Simple
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto" style={{ fontFamily: "Figtree" }}>
            Dari konsultasi sampai go-live, prosesnya gak ribet. Anda gak perlu ngerti teknologi sama sekali.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-[2px] bg-gradient-to-r from-[#156d95]/30 to-transparent -translate-x-4 z-0" />
              )}

              <div className="bg-[#f8f9fa] rounded-3xl p-8 h-full relative z-10">
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="text-5xl font-bold text-[#156d95]/20"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#156d95] flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Title & Duration */}
                <div className="mb-4">
                  <h3 className="text-xl font-medium text-[#202020] mb-1" style={{ fontFamily: "Figtree" }}>
                    {step.title}
                  </h3>
                  <span
                    className="text-sm text-[#156d95] bg-[#156d95]/10 px-3 py-1 rounded-full"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {step.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#666666] text-base leading-relaxed mb-6" style={{ fontFamily: "Figtree" }}>
                  {step.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-center gap-2 text-sm text-[#404040]"
                      style={{ fontFamily: "Figtree" }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#156d95]" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20mau%20mulai%20konsultasi%20gratis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#156d95] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#156d95]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#156d95]/20 group"
            style={{ fontFamily: "Figtree" }}
          >
            Mulai dari Step 1
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
