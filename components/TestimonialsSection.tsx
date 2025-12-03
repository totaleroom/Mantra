"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

type Testimonial = {
  id: number
  quote: string
  author: string
  role: string
  company: string
  avatar: string
  companyLogo?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Auralink transformed how we understand team dynamics. The sentiment analysis helped us identify communication gaps we never knew existed, leading to a 40% improvement in cross-team collaboration.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechFlow",
    avatar: "/professional-asian-woman.png",
  },
  {
    id: 2,
    quote:
      "The real-time insights from Auralink have been game-changing for our customer success team. We can now anticipate issues before they escalate and respond with empathy and precision.",
    author: "Marcus Johnson",
    role: "Head of Customer Success",
    company: "ScaleUp Inc",
    avatar: "/professional-black-man.png",
  },
  {
    id: 3,
    quote:
      "As a fully remote company, understanding how our teams communicate was critical. Auralink gave us visibility into collaboration patterns that helped us build a stronger culture.",
    author: "Elena Rodriguez",
    role: "Chief People Officer",
    company: "RemoteFirst",
    avatar: "/hispanic-professional-woman.png",
  },
  {
    id: 4,
    quote:
      "The multilingual analysis capability is incredible. With teams across 12 countries, Auralink helps us maintain consistent communication quality regardless of language.",
    author: "Thomas Weber",
    role: "Global Operations Director",
    company: "GlobalSync",
    avatar: "/professional-man-european.jpg",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextTestimonial = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextTestimonial])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  return (
    <section className="w-full py-24 bg-[#f8f9fa]">
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2
            className="text-[40px] leading-tight font-normal text-[#202020] tracking-tight mb-4"
            style={{
              fontFamily: "var(--font-figtree), Figtree",
              fontWeight: "400",
            }}
          >
            Loved by teams worldwide
          </h2>
          <p
            className="text-lg text-[#666666] max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-figtree), Figtree" }}
          >
            See how leading organizations are using Auralink to transform their communication culture.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-[#e5e5e5] min-h-[320px] flex flex-col justify-center relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote className="w-16 h-16 text-[#156d95]" />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="relative z-10"
              >
                <blockquote
                  className="text-xl md:text-2xl leading-relaxed text-[#202020] mb-8"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                    fontWeight: "400",
                  }}
                >
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#e5e5e5]"
                  />
                  <div>
                    <p
                      className="text-lg font-medium text-[#202020]"
                      style={{ fontFamily: "var(--font-figtree), Figtree" }}
                    >
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-sm text-[#666666]" style={{ fontFamily: "var(--font-figtree), Figtree" }}>
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-[#156d95] w-6" : "bg-[#d1d5db] hover:bg-[#9ca3af]"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-[#e5e5e5] flex items-center justify-center text-[#666666] hover:border-[#156d95] hover:text-[#156d95] transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-[#e5e5e5] flex items-center justify-center text-[#666666] hover:border-[#156d95] hover:text-[#156d95] transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-12 border-t border-[#e5e5e5]"
        >
          <p className="text-center text-sm text-[#999999] uppercase tracking-wider mb-8">
            Trusted by innovative teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
            {["TechFlow", "ScaleUp", "RemoteFirst", "GlobalSync", "DataPro", "CloudBase"].map((company) => (
              <span
                key={company}
                className="text-lg font-medium text-[#666666]"
                style={{ fontFamily: "var(--font-figtree), Figtree" }}
              >
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
