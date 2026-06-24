import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Phone, ArrowRight, Gavel, Award, Shield, Users, Sparkles, BookOpen, Clock, 
  MapPin, Calendar, HeartHandshake, CheckCircle2, Star, Briefcase, ChevronRight 
} from "lucide-react";

// Modular Component Imports
import { Logo } from "./components/Logo";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { PracticeCard } from "./components/PracticeCard";
import { SuccessStories } from "./components/SuccessStories";
import { Testimonials } from "./components/Testimonials";
import { ConsultationTimeline } from "./components/ConsultationTimeline";
import { Insights } from "./components/Insights";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

// Data Imports
import { PRACTICE_AREAS } from "./data";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Monitor scroll for custom parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor mouse movement for subtle parallax overlay in Hero
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    // Calculate normalized position from -0.5 to 0.5
    const x = (clientX / width) - 0.5;
    const y = (clientY / height) - 0.5;
    setMousePosition({ x, y });
  };

  const handleBookNowScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Luxury Animated Startup Screen */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      <AnimatePresence>
        {!isLoading && (
          <div 
            className="min-h-screen bg-linen selection:bg-camel selection:text-espresso"
            onMouseMove={handleMouseMove}
          >
            {/* Sticky Navigation Bar */}
            <Navbar onContactClick={handleBookNowScroll} />

            {/* ================= HERO SECTION ================= */}
            <section 
              id="home" 
              className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F5F1EA] to-[#EEE9DE]"
            >
              {/* Premium Luxury Overlay Textures */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[radial-gradient(#4A342A_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Cinematic Ambient Golden Light Ray */}
              <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-camel/15 via-khaki/5 to-transparent blur-[140px] pointer-events-none" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-camel/10 via-linen/5 to-transparent blur-[120px] pointer-events-none" />

              {/* Huge Giant Watermark Scales Logo of Justice - Slight Parallax Translation & Rotation */}
              <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none transition-transform duration-300 ease-out"
                style={{
                  transform: `translate(-50%, -50%) translateY(${scrollY * 0.18}px) rotate(${scrollY * 0.015}deg)`,
                  opacity: Math.max(0.01, 0.08 - scrollY * 0.0001)
                }}
              >
                <Logo size={480} watermarkMode={true} withGlow={false} />
              </div>

              {/* Floating ambient dust/particles (Sunlight on Wood Library effect) */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-camel/40 blur-[1px]"
                    style={{
                      width: `${(i % 3) * 3 + 4}px`,
                      height: `${(i % 3) * 3 + 4}px`,
                      top: `${15 + i * 13}%`,
                      left: `${10 + i * 14}%`,
                    }}
                    animate={{
                      y: [0, -25, 0],
                      x: [0, 15, 0],
                      opacity: [0.15, 0.45, 0.15],
                    }}
                    transition={{
                      duration: 8 + i * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                  {/* Left Column: Brand Statement (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col items-start text-left">
                    {/* Small Category Flag */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1, duration: 0.6 }}
                      className="flex items-center gap-2.5 mb-6"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-camel animate-pulse" />
                      <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] font-bold text-camel uppercase">
                        ADVOCATE & LEGAL CONSULTANT
                      </span>
                    </motion.div>

                    {/* Main Slogan Headings - Large Playfair Serifs */}
                    <div className="font-serif text-5xl md:text-7xl lg:text-7.5xl font-bold text-espresso tracking-tight leading-[1.05] mb-8">
                      <motion.h2 
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                        className="mb-1"
                      >
                        Justice.
                      </motion.h2>
                      <motion.h2 
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
                        className="mb-1"
                      >
                        Integrity.
                      </motion.h2>
                      <motion.h2 
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
                        className="text-camel"
                      >
                        Excellence.
                      </motion.h2>
                    </div>

                    {/* Subheading */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.8, duration: 0.8 }}
                      className="font-sans text-xs md:text-sm text-cocoa/90 max-w-xl leading-relaxed mb-10 font-light"
                    >
                      Advocate Kartik Yadav provides strategic legal representation with professionalism, integrity, and a client-first approach. Delivering trusted legal solutions for individuals and businesses with dedication and excellence.
                    </motion.p>

                    {/* Interactive CTAs */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.0, duration: 0.8 }}
                      className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8"
                    >
                      {/* Primary - Schedule Consultation (tel callback) */}
                      <a
                        href="tel:+919319265406"
                        className="flex items-center justify-center gap-2.5 bg-espresso hover:bg-cocoa text-linen px-8 py-4 rounded-sm font-sans text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-lg box-gold-glow border border-espresso"
                      >
                        <Phone size={13} className="text-khaki animate-pulse" />
                        <span>Schedule Consultation</span>
                      </a>

                      {/* Secondary - Explore Practice Areas (Smooth scroll) */}
                      <a
                        href="#practice"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("practice")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="flex items-center justify-center border border-espresso/30 hover:border-espresso text-espresso hover:bg-espresso/5 px-8 py-4 rounded-sm font-sans text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300"
                      >
                        <span>Explore Practice Areas</span>
                      </a>
                    </motion.div>

                    {/* Telephone direct print */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.8 }}
                      transition={{ delay: 2.2 }}
                      className="flex items-center gap-3 font-serif text-sm md:text-base text-espresso"
                    >
                      <span className="font-sans text-[10px] tracking-widest text-cocoa/60 uppercase font-medium">Direct Line:</span>
                      <a 
                        href="tel:+919319265406" 
                        className="font-bold border-b border-camel text-camel hover:text-espresso hover:border-espresso transition-colors duration-300"
                      >
                        +91 9319265406
                      </a>
                    </motion.div>
                  </div>

                  {/* Right Column: Premium Portrait Frame with 3D Float overlays (5 Cols) */}
                  <div className="lg:col-span-5 relative flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="relative w-full max-w-sm aspect-[3/4] rounded-sm p-3 bg-[#E9E4DC] border border-khaki/40 shadow-2xl transition-all duration-500 hover:shadow-camel/20"
                      style={{
                        transform: `translate(${mousePosition.x * -12}px, ${mousePosition.y * -12}px)`
                      }}
                    >
                      {/* Elegant inner gold framing bevel */}
                      <div className="absolute inset-4 border border-camel/40 rounded-[2px] pointer-events-none z-10" />

                      {/* Portrait Image */}
                      <img
                        src="/src/assets/images/kartik_yadav_portrait_1782241466162.jpg"
                        alt="Advocate Kartik Yadav Portrait"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover rounded-[1px] filter grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                      />

                      {/* Floating Gavel Vector Element (Framer loop) */}
                      <motion.div
                        className="absolute bottom-6 -left-8 bg-espresso text-linen p-3 rounded-full shadow-lg border border-camel/30 z-20 flex items-center justify-center"
                        animate={{
                          y: [0, -8, 0],
                          rotate: [-3, 3, -3]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Gavel size={20} className="text-camel" />
                      </motion.div>

                      {/* Floating 3D Scales Icon (Framer loop) */}
                      <motion.div
                        className="absolute top-10 -right-6 bg-linen text-espresso p-3 rounded-full shadow-lg border border-khaki/40 z-20 flex items-center justify-center"
                        animate={{
                          y: [0, 8, 0],
                          rotate: [3, -3, 3]
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Logo size={22} withGlow={false} />
                      </motion.div>
                    </motion.div>
                  </div>

                </div>
              </div>
            </section>

            {/* ================= ABOUT SECTION ================= */}
            <section 
              id="about" 
              className="py-24 md:py-32 bg-linen relative border-t border-b border-khaki/20"
            >
              {/* Backglow element */}
              <div className="absolute bottom-[-10%] right-[10%] w-80 h-80 rounded-full bg-khaki/10 blur-[100px] pointer-events-none" />

              <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                  
                  {/* Left Column: Biography Copy (6 Cols) */}
                  <div className="lg:col-span-6 flex flex-col items-start text-left">
                    <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-camel mb-3">
                      MEET THE ADVOCATE
                    </span>
                    <h2 className="font-serif text-3.5xl md:text-5xl font-bold text-espresso tracking-tight mb-8">
                      About Advocate Kartik Yadav
                    </h2>
                    <div className="w-16 h-[2px] bg-camel mb-8" />

                    <p className="font-serif text-lg text-cocoa leading-relaxed italic mb-6 font-light">
                      "The pursuit of justice is not merely a practice of law—it is the engineering of truth, the safeguarding of trust, and the unyielding commitment to legal excellence."
                    </p>

                    <p className="font-sans text-xs md:text-sm text-espresso/90 leading-relaxed font-light mb-6">
                      Advocate Kartik Yadav is a highly respected legal advocate who specializes in high-stakes corporate consultations, white-collar defense, and complex civil litigation. Holding counsel across multiple high courts in India, Kartik combines deep precedent forensics with aggressive representation to achieve client-centered resolutions.
                    </p>

                    <p className="font-sans text-xs md:text-sm text-espresso/80 leading-relaxed font-light mb-8">
                      With a distinguished career rooted in rigorous legal research and absolute professional discretion, Kartik advises national fintech startups, real estate empires, and high-profile individuals. His Chambers deliver bespoke strategies that dismantle complex corporate disputes, protect constitutional rights during trial custody, and structure secure joint ventures.
                    </p>

                    {/* Call action to contact */}
                    <button
                      onClick={handleBookNowScroll}
                      className="group flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase font-semibold text-espresso hover:text-camel transition-colors duration-300"
                    >
                      <span>Learn more about my credentials</span>
                      <ChevronRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Right Column: Glassmorphic Cards of Values (6 Cols) */}
                  <div className="lg:col-span-6 grid grid-cols-1 gap-6">
                    {/* Value Card 1: Ethical Foundation */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="p-8 rounded-sm border border-khaki/20 bg-linen/50 backdrop-blur-md shadow-sm box-gold-glow-hover transition-all duration-300 flex gap-5"
                    >
                      <div className="w-12 h-12 rounded-full bg-espresso text-camel flex items-center justify-center shrink-0 shadow-sm">
                        <Shield size={20} className="stroke-[1.5]" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-bold text-espresso mb-2 tracking-wide">
                          Ethical Foundation & Ethics
                        </h4>
                        <p className="font-sans text-xs text-cocoa/80 leading-relaxed font-light">
                          Our legal philosophy is anchored on absolute moral rigor and Bar Council standards. Client records are bound by strict attorney-client privilege, guaranteeing pristine discretion.
                        </p>
                      </div>
                    </motion.div>

                    {/* Value Card 2: Strategic Forensics */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="p-8 rounded-sm border border-khaki/20 bg-linen/50 backdrop-blur-md shadow-sm box-gold-glow-hover transition-all duration-300 flex gap-5"
                    >
                      <div className="w-12 h-12 rounded-full bg-espresso text-camel flex items-center justify-center shrink-0 shadow-sm">
                        <Award size={20} className="stroke-[1.5]" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-bold text-espresso mb-2 tracking-wide">
                          Forensic Precedent Analysis
                        </h4>
                        <p className="font-sans text-xs text-cocoa/80 leading-relaxed font-light">
                          Every case is evaluated with digital forensics and exhaustive research. We leave no regulatory loophole unmapped, designing bulletproof briefs that command judge attention.
                        </p>
                      </div>
                    </motion.div>

                    {/* Value Card 3: Unyielding Resolve */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="p-8 rounded-sm border border-khaki/20 bg-linen/50 backdrop-blur-md shadow-sm box-gold-glow-hover transition-all duration-300 flex gap-5"
                    >
                      <div className="w-12 h-12 rounded-full bg-espresso text-camel flex items-center justify-center shrink-0 shadow-sm">
                        <HeartHandshake size={20} className="stroke-[1.5]" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-bold text-espresso mb-2 tracking-wide">
                          Zealous Corporate Advocacy
                        </h4>
                        <p className="font-sans text-xs text-cocoa/80 leading-relaxed font-light">
                          Whether navigating delicate matrimonial settlements, multi-million real estate partitions, or trial bails, we stand as a decisive wall of protection for our clients.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                </div>
              </div>
            </section>

            {/* ================= PRACTICE AREAS SECTION ================= */}
            <section 
              id="practice" 
              className="py-24 md:py-32 bg-gradient-to-b from-linen via-[#FAF8F5] to-linen relative"
            >
              <div className="absolute top-[20%] left-[-10%] w-72 h-72 rounded-full bg-camel/5 blur-[120px] pointer-events-none" />

              <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-camel mb-3 block">
                    AREAS OF PRACTICE
                  </span>
                  <h2 className="font-serif text-3.5xl md:text-5.5xl font-bold text-espresso tracking-tight mb-4">
                    Specialist Legal Disciplines
                  </h2>
                  <div className="w-16 h-[2px] bg-camel mx-auto mb-6" />
                  <p className="font-sans text-xs md:text-sm text-cocoa/80 leading-relaxed font-light">
                    Advocate Kartik Yadav provides comprehensive, high-tier counseling and representation across a spectrum of legal areas, protecting corporate ventures and personal legacies.
                  </p>
                </div>

                {/* Practice areas grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                  {PRACTICE_AREAS.map((area) => (
                    <PracticeCard key={area.id} area={area} />
                  ))}
                </div>
              </div>
            </section>

            {/* ================= WHY CHOOSE ME SECTION ================= */}
            <section 
              id="why-choose-me" 
              className="py-24 md:py-32 bg-espresso text-linen relative overflow-hidden"
            >
              {/* Backglow elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[30vw] bg-camel/5 rounded-full blur-[140px] pointer-events-none" />

              <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column: Text intro (5 Cols) */}
                  <div className="lg:col-span-5 text-left">
                    <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-camel mb-3 block">
                      DISTINCT CREDIT
                    </span>
                    <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold tracking-tight mb-6 leading-tight">
                      Why Select Kartik Yadav for Counsel
                    </h2>
                    <div className="w-16 h-[2px] bg-camel mb-6" />
                    <p className="font-sans text-xs md:text-sm text-khaki/80 leading-relaxed font-light">
                      Legal disputes are battles of strategic wit. Kartik Yadav is trusted by corporations and private families because of his uncompromising research, accessibility, and high success benchmarks.
                    </p>
                  </div>

                  {/* Right Column: Elegant stats grid (7 Cols) */}
                  <div className="lg:col-span-7 grid grid-cols-2 gap-6 md:gap-8">
                    
                    {/* Stat card 1 */}
                    <motion.div
                      whileInView={{ y: [15, 0], opacity: [0, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="p-6 md:p-8 rounded-sm bg-linen/5 border border-linen/10 text-center flex flex-col items-center justify-center relative shadow-md"
                    >
                      <div className="font-serif text-4xl md:text-5.5xl font-extrabold text-camel mb-2">
                        100+
                      </div>
                      <div className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-khaki mb-1">
                        Cases Handled
                      </div>
                      <p className="font-sans text-[10px] text-linen/60 font-light max-w-[160px]">
                        In Corporate & Litigation levels
                      </p>
                    </motion.div>

                    {/* Stat card 2 */}
                    <motion.div
                      whileInView={{ y: [15, 0], opacity: [0, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="p-6 md:p-8 rounded-sm bg-linen/5 border border-linen/10 text-center flex flex-col items-center justify-center relative shadow-md"
                    >
                      <div className="font-serif text-4xl md:text-5.5xl font-extrabold text-camel mb-2">
                        95%
                      </div>
                      <div className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-khaki mb-1">
                        Satisfaction
                      </div>
                      <p className="font-sans text-[10px] text-linen/60 font-light max-w-[160px]">
                        Trusted client evaluations
                      </p>
                    </motion.div>

                    {/* Stat card 3 */}
                    <motion.div
                      whileInView={{ y: [15, 0], opacity: [0, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="p-6 md:p-8 rounded-sm bg-linen/5 border border-linen/10 text-center flex flex-col items-center justify-center relative shadow-md"
                    >
                      <div className="font-serif text-4xl md:text-5.5xl font-extrabold text-camel mb-2">
                        24/7
                      </div>
                      <div className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-khaki mb-1">
                        Direct Support
                      </div>
                      <p className="font-sans text-[10px] text-linen/60 font-light max-w-[160px]">
                        Private immediate channels
                      </p>
                    </motion.div>

                    {/* Stat card 4 */}
                    <motion.div
                      whileInView={{ y: [15, 0], opacity: [0, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="p-6 md:p-8 rounded-sm bg-linen/5 border border-linen/10 text-center flex flex-col items-center justify-center relative shadow-md"
                    >
                      <div className="font-serif text-3xl md:text-4.5xl font-extrabold text-camel mb-2">
                        Trusted
                      </div>
                      <div className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-khaki mb-1">
                        Legal Guidance
                      </div>
                      <p className="font-sans text-[10px] text-linen/60 font-light max-w-[160px]">
                        Exemplary ethical rigor
                      </p>
                    </motion.div>

                  </div>
                </div>
              </div>
            </section>

            {/* ================= SUCCESS STORIES SECTION ================= */}
            <section 
              id="success" 
              className="py-24 md:py-32 bg-linen relative border-b border-khaki/20"
            >
              <div className="absolute top-[30%] right-[-10%] w-80 h-80 rounded-full bg-khaki/10 blur-[120px] pointer-events-none" />

              <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-camel mb-3 block">
                    LANDMARK SETTLEMENTS & VERDICTS
                  </span>
                  <h2 className="font-serif text-3.5xl md:text-5.5xl font-bold text-espresso tracking-tight mb-4">
                    Case Success Stories
                  </h2>
                  <div className="w-16 h-[2px] bg-camel mx-auto mb-6" />
                  <p className="font-sans text-xs md:text-sm text-cocoa/80 leading-relaxed font-light">
                    Explore detailed analyses of high-value disputes and civil defenses resolved swiftly through the strategic intervention of Kartik Yadav.
                  </p>
                </div>

                {/* Success Stories Presentation Grid / Slider */}
                <SuccessStories />
              </div>
            </section>

            {/* ================= TESTIMONIALS SECTION ================= */}
            <section 
              id="testimonials" 
              className="py-24 md:py-32 bg-gradient-to-b from-linen via-[#FAF8F5] to-linen relative"
            >
              <div className="absolute bottom-[10%] left-[-10%] w-72 h-72 rounded-full bg-camel/5 blur-[120px] pointer-events-none" />

              <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-camel mb-3 block">
                    CLIENT ENCOMIUM
                  </span>
                  <h2 className="font-serif text-3.5xl md:text-5.5xl font-bold text-espresso tracking-tight mb-4">
                    Endorsements of Trust
                  </h2>
                  <div className="w-16 h-[2px] bg-camel mx-auto mb-6" />
                  <p className="font-sans text-xs md:text-sm text-cocoa/80 leading-relaxed font-light">
                    Read unedited accounts from corporate founders, legacy trusts, and high-net-worth clients who retain Kartik Yadav's private legal chambers.
                  </p>
                </div>

                {/* Testimonial slider component */}
                <Testimonials />
              </div>
            </section>

            {/* ================= TIMELINE SECTION ================= */}
            <section 
              id="process" 
              className="py-24 md:py-32 bg-linen relative border-t border-b border-khaki/20"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-camel mb-3 block">
                    ENGAGEMENT STRATEGY
                  </span>
                  <h2 className="font-serif text-3.5xl md:text-5.5xl font-bold text-espresso tracking-tight mb-4">
                    The Consultation Process
                  </h2>
                  <div className="w-16 h-[2px] bg-camel mx-auto mb-6" />
                  <p className="font-sans text-xs md:text-sm text-cocoa/80 leading-relaxed font-light">
                    Every client case is guided through a systematic, multi-tiered framework to isolate leverage points and secure strategic resolutions.
                  </p>
                </div>

                {/* Interactive timeline component */}
                <ConsultationTimeline />
              </div>
            </section>

            {/* ================= LEGAL INSIGHTS ================= */}
            <section 
              id="insights" 
              className="py-24 md:py-32 bg-gradient-to-b from-linen via-[#FAF8F5] to-linen relative"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-camel mb-3 block">
                    CHAMBERS DIARY & MAGAZINE
                  </span>
                  <h2 className="font-serif text-3.5xl md:text-5.5xl font-bold text-espresso tracking-tight mb-4">
                    Legal Insights & Editorials
                  </h2>
                  <div className="w-16 h-[2px] bg-camel mx-auto mb-6" />
                  <p className="font-sans text-xs md:text-sm text-cocoa/80 leading-relaxed font-light">
                    Read editorial briefing cards from Kartik Yadav detailing regulatory changes, due diligence guides, and constitutional protections in India.
                  </p>
                </div>

                {/* Magazine article cards */}
                <Insights />
              </div>
            </section>

            {/* ================= CONTACT SECTION ================= */}
            <section 
              id="contact" 
              className="py-24 md:py-32 bg-linen relative border-t border-khaki/20"
            >
              <div className="absolute top-[10%] right-[-10%] w-80 h-80 rounded-full bg-camel/5 blur-[120px] pointer-events-none" />

              <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-camel mb-3 block">
                    PORTAL OF ENGAGEMENT
                  </span>
                  <h2 className="font-serif text-3.5xl md:text-5.5xl font-bold text-espresso tracking-tight mb-4">
                    Initiate Private Counsel
                  </h2>
                  <div className="w-16 h-[2px] bg-camel mx-auto mb-6" />
                  <p className="font-sans text-xs md:text-sm text-cocoa/80 leading-relaxed font-light">
                    Furnish brief specifications to receive an priority case review. For high-stakes urgencies, please place a telephone call to Advocate Yadav's desk immediately.
                  </p>
                </div>

                {/* Interactive Contact Form with Left column detail handles */}
                <ContactForm />
              </div>
            </section>

            {/* ================= PREMIUM FLOATING CALL ACTION BUTTON ================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="fixed bottom-6 right-6 z-30"
            >
              <a
                href="tel:+919319265406"
                id="floating-call-btn"
                className="group flex items-center gap-2 bg-espresso hover:bg-cocoa text-linen pl-4 pr-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border border-camel/30 backdrop-blur-md relative"
              >
                {/* Pulsing Backglow Ring */}
                <span className="absolute inset-0 rounded-full bg-camel/10 scale-105 animate-ping opacity-60 pointer-events-none" />

                <div className="w-6 h-6 rounded-full bg-camel flex items-center justify-center shadow-md">
                  <Phone size={11} className="text-espresso fill-espresso/20 animate-pulse" />
                </div>
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-bold text-khaki group-hover:text-linen transition-colors">
                  Call Now
                </span>
              </a>
            </motion.div>

            {/* ================= FOOTER ================= */}
            <Footer />

          </div>
        )}
      </AnimatePresence>
    </>
  );
}
