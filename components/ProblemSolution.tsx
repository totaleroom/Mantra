"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"

export const ProblemSolution = () => {
    return (
        <section id="masalah" className="w-full py-20 px-6 lg:px-8 bg-white border-b border-[#1A1A1A]">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

                    {/* CARA LAMA */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#E5E5E5] p-8 lg:p-12 border border-[#1A1A1A] relative"
                    >
                        <div className="absolute top-0 left-0 bg-[#1A1A1A] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                            CARA LAMA
                        </div>
                        <h3 className="text-3xl font-bold mt-8 mb-8 text-[#1A1A1A]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                            Manual & <br /> Melelahkan
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Balas chat satu-satu sampai jempol keriting",
                                "Lupa catat stok, customer marah-marah",
                                "Rekapan order manual, sering selisih",
                                "Admin resign, operasional lumpuh"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[#1A1A1A]/70">
                                    <X className="w-6 h-6 flex-shrink-0" />
                                    <span className="text-lg" style={{ fontFamily: "var(--font-space-grotesk)" }}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* CARA MANTRA */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#F5F5F0] p-8 lg:p-12 border-2 border-[#FF4F00] relative shadow-[8px_8px_0px_0px_#FF4F00]"
                    >
                        <div className="absolute top-0 left-0 bg-[#FF4F00] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                            CARA MANTRA
                        </div>
                        <h3 className="text-3xl font-bold mt-8 mb-8 text-[#1A1A1A]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                            Otomatis & <br /> Presisi
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Auto-Reply Cerdas 24/7 (Bukan Template Kaku)",
                                "Inventory Sync Real-time Semua Marketplace",
                                "Order Masuk = Notif WA + Auto Rekap",
                                "Sistem Tidak Pernah Resign & Anti-Drama"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[#1A1A1A]">
                                    <div className="bg-[#FF4F00] text-white rounded-full p-0.5">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <span className="text-lg font-medium" style={{ fontFamily: "var(--font-space-grotesk)" }}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
