import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { HeroSection } from "./components/HeroSection"
import { AboutSection } from "./components/AboutSection"
import { WorkingWithMeSection } from "./components/WorkingWithMeSection"
import { MethodologySection } from "./components/MethodologySection"
import { SimpleStrengthsSection } from "./components/SimpleStrengthsSection"
import { AITinkeringSection } from "./components/AITinkeringSection"
import { ConnectSection } from "./components/ConnectSection"
import { Footer } from "./components/Footer"
import { MobileNav } from "./components/MobileNav"
import { StickyCTA } from "./components/StickyCTA"

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-surface">
      <MobileNav isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} />
      <StickyCTA isMobileNavOpen={isMobileNavOpen} />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="methodology">
        <MethodologySection />
      </div>
      <div id="strengths">
        <SimpleStrengthsSection />
      </div>
      <div id="working-with-me">
        <WorkingWithMeSection />
      </div>
      <div id="ai-tinkering">
        <AITinkeringSection />
      </div>
      <ConnectSection />
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
