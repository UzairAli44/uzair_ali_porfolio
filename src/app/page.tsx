import BottomNav from "@/components/BottomNav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Projects from "@/components/Projects";
import HowIWork from "@/components/HowIWork";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealProvider from "@/components/RevealProvider";

export default function Home() {
  return (
    <RevealProvider>
      <main className="pb-24">
        <Hero />
        <Stats />
        <Skills />
        <About />
        <WhatIDo />
        <Projects />
        <HowIWork />
        <Experience />
        <Contact />
      </main>
      <BottomNav />
      <Footer />
    </RevealProvider>
  );
}
