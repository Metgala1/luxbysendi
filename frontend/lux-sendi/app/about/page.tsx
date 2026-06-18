import HeroSection from "@/components/about /HeroSection";
import StorySection from "@/components/about /StorySection";
import ValuesSection from "@/components/about /ValueSection";
import FounderSection from "@/components/about /FounderSection";
import StatsSection from "@/components/about /StatsSection";
import TestimonialsSection from "@/components/about /TestimonialsSection";
import CTASection from "@/components/about /CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Lux by sendi about page"
}


export default function AboutPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <FounderSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}