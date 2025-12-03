/*
============================================================================
PRICING SECTION - MANTRA (Neon Noir Edition)
============================================================================
*/

"use client"

import * as React from "react"
import { CheckIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { MessageCircle, ArrowRight, Zap, Crown, Rocket } from "lucide-react"

type PlanLevel = "starter" | "growth" | "enterprise"
import { Check } from "lucide-react"

export const PricingSection = () => {
  const plans = [
    {
      name: "STARTER",
      price: "Rp 3.000.000",
      monthly: "Rp 500rb/bln",
      description: "Untuk bisnis yang baru mulai merapikan sistem.",
      features: [
        "WhatsApp Auto-Reply Bot",
        "Order Notification System",
        "Basic Training (1 sesi)",
        "Support 14 Hari"
      ],
      cta: "PILIH STARTER",
      highlight: false
    },
    {
      name: "GROWTH",
      price: "Rp 8.000.000",
      monthly: "Rp 1.5jt/bln",
      description: "Untuk bisnis yang siap scale-up tanpa pusing.",
      features: [
        "Semua fitur Starter",
        "Multi-Marketplace Sync",
        "AI Customer Service Bot",
        "Inventory Alert System",
        "Training (2 sesi)",
        "Support 30 Hari"
      ],
      cta: "PILIH GROWTH",
      highlight: true
    },
    {
      name: "ENTERPRISE",
      price: "CUSTOM",
      monthly: "Call Us",
      description: "Full automation suite untuk operasional kompleks.",
      features: [
        "Semua fitur Growth",
        "Custom Integration (ERP/POS)",
        "Dedicated Account Manager",
        "Priority Support 24/7",
        "On-site Training"
      ],
      cta: "HUBUNGI KAMI",
      highlight: false
    }
  ]

  return (
    <section id="pricing" className="w-full py-24 px-6 lg:px-8 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            INVESTASI <br /> MASA DEPAN
          </h2>
          <p className="text-xl text-[#1A1A1A]/60 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Biaya satu kali makan siang tim Anda, untuk efisiensi selamanya.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border border-[#1A1A1A] bg-white relative ${plan.highlight ? "shadow-[8px_8px_0px_0px_#FF4F00] -translate-y-4" : "shadow-[4px_4px_0px_0px_#1A1A1A]"}`}
            >
              {/* Header */}
              <div className={`p-6 border-b border-[#1A1A1A] ${plan.highlight ? "bg-[#FF4F00] text-white" : "bg-[#C0C0C0] text-[#1A1A1A]"}`}>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlight ? "text-white/90" : "text-[#1A1A1A]/70"}`} style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  {plan.description}
                </p>
              </div>

              <span className="text-sm text-gray-300" style={{ fontFamily: "Figtree" }}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div className="pt-6 border-t border-white/10">
          <p className="text-xs text-center text-gray-500 font-medium uppercase tracking-wider" style={{ fontFamily: "var(--font-geist-mono)" }}>
            Cocok untuk: <br /> <span className="text-purple-400">{plan.targetRevenue}</span>
          </p>
        </div>
      </motion.div>
          ))}
    </div>

        {/* TOMBOL CTA PRICING */ }
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="text-center"
  >
    <a
      href={`https://wa.me/6281311099023?text=Halo,%20saya%20tertarik%20dengan%20paket%20${plans.find((p) => p.level === selectedPlan)?.name}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-200 transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] group"
      style={{ fontFamily: "Figtree" }}
    >
      <MessageCircle className="w-5 h-5" />
      Pilih {plans.find((p) => p.level === selectedPlan)?.name}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </a>
    <p className="text-sm text-gray-500 mt-6" style={{ fontFamily: "Figtree" }}>
      Konsultasi gratis. Gak ada commitment.
    </p>
  </motion.div>
      </div >
    </section >
  )
}
