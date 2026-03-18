"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ServicesSection } from "@/components/sections/services"
import { WhyUsSection } from "@/components/sections/why-us"
import { ProjectsSection } from "@/components/sections/projects"
import { TeamSection } from "@/components/sections/team"
import { ClientsSection } from "@/components/sections/clients"
import { ContactSection } from "@/components/sections/contact"
import { LanguagesSection } from "@/components/sections/language"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LanguagesSection/>
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <ProjectsSection />
      <TeamSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
