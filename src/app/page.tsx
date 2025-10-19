"use client";
import Hero_Section from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
export default function Home() {
  return (
    <>
      <main>
        <Hero_Section />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
