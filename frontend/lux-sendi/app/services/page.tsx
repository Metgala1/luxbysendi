import Hero from "@/components/packages/HeroSection";
import Intro from "@/components/packages/IntroSection";
import PackageCards from "@/components/packages/PackagesCard";
import PackageSection from "@/components/packages/PackageSection";
import AddOns from "@/components/packages/AddOns";
import FAQ from "@/components/packages/FAQ";
import CTA from "@/components/packages/CTA";
import { packages } from "@/lib/data/packages";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services"
}

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <Intro />
      <PackageCards />

      {packages.map((pkg, index) => (
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