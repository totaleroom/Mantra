"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

type CTABannerProps = {
  title?: string
  subtitle?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

export function CTABanner({
  title = "Ready to transform your team's communication?",
  subtitle = "Join 1,000+ organizations already using Auralink to build stronger, more aligned teams.",
  primaryButtonText = "Start Free Trial",
  primaryButtonHref = "#",
  secondaryButtonText = "Schedule Demo",
  secondaryButtonHref = "#",
}: CTABannerProps) {
  return (
    <section className="w-full py-24 px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-5xl mx-auto"
      >
        <div
          className="relative overflow-hidden rounded-[32px] p-12 md:p-16"
          style={{
            background: "linear-gradient(135deg, #156d95 0%, #1a8ac4 50%, #0d5a7a 100%)",
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-8 right-12 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center"
          >
            <Sparkles className="w-8 h-8 text-white/80" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-8 left-12 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm hidden md:flex items-center justify-center"
          >
            <div className="w-4 h-4 rounded-full bg-white/60" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <h2
              className="text-3xl md:text-[44px] leading-tight font-medium text-white mb-4 text-balance"
              style={{ fontFamily: "var(--font-figtree), Figtree" }}
            >
              {title}
            </h2>
            <p
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
              style={{ fontFamily: "var(--font-figtree), Figtree" }}
            >
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href={primaryButtonHref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-white text-[#156d95] px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-white/20 group"
                style={{ fontFamily: "var(--font-figtree), Figtree" }}
              >
                {primaryButtonText}
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href={secondaryButtonHref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:bg-white/10 hover:border-white/50"
                style={{ fontFamily: "var(--font-figtree), Figtree" }}
              >
                {secondaryButtonText}
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-white/20">
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  14-day free trial
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
