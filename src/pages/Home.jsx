import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from "../components/SmoothScroll";
import ScrollSequence from "../components/ScrollSequence";
import HeroContent from "../components/HeroContent";
import AboutContent from "../components/AboutContent";
import Navbar from "../components/Navbar";
import StatsSection from "../components/StatsSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // Land on the section immediately, then re-land after every ScrollTrigger
    // refresh: the pinned hero/about sequences insert pin spacers that shift
    // everything below them, so a single scroll would end up at the wrong spot.
    // Stop re-landing once the user scrolls on their own.
    let cancelled = false;
    const scrollToHash = () => {
      if (cancelled) return;
      const el = document.querySelector(hash);
      if (!el) return;
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -60, immediate: true });
      } else {
        el.scrollIntoView();
      }
    };

    const cancel = () => {
      cancelled = true;
      ScrollTrigger.removeEventListener("refresh", scrollToHash);
    };

    scrollToHash();
    ScrollTrigger.addEventListener("refresh", scrollToHash);
    window.addEventListener("wheel", cancel, { passive: true, once: true });
    window.addEventListener("touchstart", cancel, { passive: true, once: true });

    return () => {
      ScrollTrigger.removeEventListener("refresh", scrollToHash);
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
    };
  }, [hash]);

  return (
    <SmoothScroll>
      <div className="relative bg-white text-zinc-900 dark:bg-black dark:text-white selection:bg-cyan-400 selection:text-black">
        {/* Navigation Bar */}
        <Navbar />

        {/* 1. Hero Canvas Sequence */}
        <div id="hero" className="relative">
          <ScrollSequence name="hero" frameCount={144} scrollLength={4000}>
            {(progress) => <HeroContent progress={progress} />}
          </ScrollSequence>
        </div>

        {/* 2. Key Metrics & Impact */}
        <StatsSection />

        {/* 3. Work Experience & Leadership */}
        <ExperienceSection />

        {/* 4. About Canvas Sequence (Moved after Work Experience) */}
        <div id="about" className="relative">
          <ScrollSequence name="about" frameCount={96} scrollLength={3500}>
            {(progress) => <AboutContent progress={progress} />}
          </ScrollSequence>
        </div>

        {/* 5. Technical Stack & Skills */}
        <SkillsSection />

        {/* 6. Featured Projects */}
        <ProjectsSection/>
        
        {/* 7. Solutions & Services */}
        <ServicesSection />

        {/* 8. Contact & Inquiry */}
        <ContactSection />

        {/* 9. Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
