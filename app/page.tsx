import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { HeroSection } from "@/components/HeroSection"
import { ProblemSolution } from "@/components/ProblemSolution"
import { HowItWorks } from "@/components/HowItWorks"
import { SuccessStories } from "@/components/SuccessStories"
import { TrustSection } from "@/components/TrustSection"
import { PricingSection } from "@/components/PricingSection"
import { FAQSection } from "@/components/FAQSection"
import { FinalCTA } from "@/components/FinalCTA"
import { Footer } from "@/components/Footer"

export default function Page() {
  return (
    <main className="bg-[#F5F5F0] min-h-screen">
      <PortfolioNavbar />
      <HeroSection />
      <ProblemSolution />
      <HowItWorks />
      <SuccessStories />
      <TrustSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
