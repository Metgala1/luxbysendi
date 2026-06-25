import HeroSection from "@/components/contact/HeroSection";
import ContactInfo from "@/components/contact/ContactInfo";
import SocialLinks from "@/components/contact/SocialLink";
import ContactForm from "@/components/contact/ContactForm";
import CTA from "@/components/contact/CTA";

export const metadata = {
  title: "Contact Us | Lux by Sendi",
  description:
    "Contact Lux by Sendi for luxury event decorations, weddings, birthdays, surprise setups, picnic experiences, money bouquets, and bespoke celebrations.",
};

export default function ContactPage() {
  return (
    <main>
      <HeroSection />
      <ContactInfo />

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ContactForm />
        </div>
      </section>

      <SocialLinks />
      <CTA />
    </main>
  );
}