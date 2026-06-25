import Hero from "@/components/services/HeroSection";
import Intro from "@/components/services/IntroSection";
import PackageSection from "@/components/services/PackageSection";
import AddOns from "@/components/services/AddOns";
import FAQ from "@/components/services/FAQ";
import CTA from "@/components/services/CTA";
import { services } from "@/lib/data/services";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services"
}

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <Intro />

      {services.map((pkg, index) => (
        <PackageSection
          key={index}
          title={pkg.name}
          description={pkg.description}
          features={pkg.features}
          reverse={index % 2 === 1}
        />
      ))}

      <AddOns />
      <FAQ />
      <CTA />
    </>
  );
}