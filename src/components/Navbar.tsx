import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Practice Areas", href: "#practice", id: "practice" },
    { name: "Success Stories", href: "#success", id: "success" },
    { name: "Testimonials", href: "#testimonials", id: "testimonials" },
    { name: "Insights", href: "#insights", id: "insights" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple intersection observer behavior
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.header
        id="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-linen/80 backdrop-blur-xl border-b border-khaki/30 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo with Text */}
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center">
            <Logo size={42} withText={true} withGlow={!isScrolled} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative font-sans text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300 py-2 hover:text-camel ${
                  activeSection === item.id ? "text-espresso font-semibold" : "text-cocoa/70"
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-camel"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Call-to-Action Premium Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919319265406"
              className="flex items-center gap-2 bg-espresso hover:bg-cocoa text-linen px-5 py-2.5 rounded-sm font-sans text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 shadow-md box-gold-glow"
            >
              <Phone size={12} className="text-khaki fill-khaki/20" />
              <span>+91 9319265406</span>
            </a>
          </div>

          {/* Mobile Menu Action Trigger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-espresso focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Slide-in Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-linen flex flex-col pt-28 px-8 pb-10 shadow-2xl lg:hidden"
          >
            {/* Ambient Background Glow in mobile drawer */}
            <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-khaki/25 blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-camel/15 blur-3xl pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10">
              {navItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`font-serif text-2xl font-medium tracking-wider transition-colors hover:text-camel ${
                    activeSection === item.id ? "text-camel pl-3 border-l-2 border-camel" : "text-espresso"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto relative z-10 pt-8 border-t border-khaki/30 flex flex-col gap-4">
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-cocoa/60 font-semibold">
                Direct Consultation Line
              </p>
              <a
                href="tel:+919319265406"
                className="flex items-center gap-3 bg-espresso text-linen p-4 rounded-sm text-center justify-center font-sans tracking-[0.15em] text-sm uppercase font-medium hover:bg-cocoa transition-all shadow-lg"
              >
                <Phone size={14} className="text-khaki animate-pulse" />
                +91 9319265406
              </a>
              <div className="text-center font-serif text-[11px] italic text-cocoa/50 mt-2">
                Advocate Kartik Yadav • Integrity • Excellence • Justice
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
