import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Rentals from "@/components/Rentals";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/Contacts";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <Services />
      <Packages />
      <Testimonials />
      <FAQ />
      <ContactCTA />
     
    </main>
  );
}