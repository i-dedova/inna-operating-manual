import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FaLinkedin } from "react-icons/fa";

interface StickyCTAProps {
  isMobileNavOpen?: boolean;
}

export const StickyCTA = ({ isMobileNavOpen = false }: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after user has scrolled past hero section
      const heroHeight = window.innerHeight;
      const connectSection = document.getElementById("connect");

      if (connectSection) {
        const connectTop = connectSection.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;

        // Show only after hero but before reaching connect section
        setIsVisible(window.scrollY > heroHeight && scrollPosition < connectTop + 100);
      } else {
        setIsVisible(window.scrollY > heroHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Disable sticky CTA completely on mobile and tablet
  return null;

  // Hide sticky CTA if not visible or if mobile nav is open
  if (!isVisible || isMobileNavOpen) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 lg:hidden portrait:block landscape:hidden">
      <Button
        size="lg"
        className="bg-gradient-accent text-accent-foreground hover:opacity-90 transition-opacity shadow-glow px-6 py-3 rounded-full font-semibold"
        asChild
      >
        <a href="https://www.linkedin.com/in/innadedova/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-5 h-5 mr-2" />
          Connect on LinkedIn
        </a>
      </Button>
    </div>
  );
};