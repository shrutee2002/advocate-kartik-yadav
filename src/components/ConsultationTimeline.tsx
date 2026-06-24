import React from "react";
import { motion } from "motion/react";
import { PROCESS_STEPS } from "../data";
import { Phone, ArrowRight, MessageSquare } from "lucide-react";

export const ConsultationTimeline: React.FC = () => {
  // Translate numbers to Roman numerals
  const toRoman = (num: number): string => {
    const map = ["I", "II", "III", "IV", "V"];
    return map[num - 1] || num.toString();
  };

  return (
    <div className="w-full relative py-8">
      {/* Decorative vertical line in background for desktop */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-camel/30 via-khaki/40 to-camel/10 -translate-x-1/2 hidden lg:block" />

      <div className="flex flex-col gap-12 lg:gap-16 relative">
        {PROCESS_STEPS.map((step, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={step.number}
              className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 relative w-full ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Step Card (5 Cols on Desktop) */}
              <div className="w-full lg:w-[calc(50%-2.5rem)]">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="relative p-8 md:p-10 rounded-sm border border-khaki/20 bg-linen/50 backdrop-blur-md box-gold-glow hover:border-camel/40 transition-all duration-300"
                >
                  {/* Roman Numeral Accent */}
                  <div className="font-serif text-3.5xl md:text-5xl font-extrabold text-camel/20 absolute top-4 right-6 select-none pointer-events-none">
                    {toRoman(step.number)}
                  </div>

                  <div className="relative z-10">
                    {/* Circle Indicator on Mobile (or top banner) */}
                    <div className="w-9 h-9 rounded-full bg-espresso text-linen flex items-center justify-center font-serif text-xs font-semibold mb-4 shadow-sm">
                      {step.number}
                    </div>

                    <h4 className="font-serif text-xl md:text-2xl font-bold text-espresso mb-3 tracking-wide">
                      {step.title}
                    </h4>

                    <p className="font-sans text-xs md:text-sm text-cocoa/80 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Central Timeline Hub Node (Desktop only) */}
              <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center w-10 h-10 rounded-full border border-camel/40 bg-linen z-10 shadow-sm">
                <div className="w-3.5 h-3.5 rounded-full bg-espresso transition-all duration-300 hover:bg-camel" />
              </div>

              {/* Blank side spacer (Desktop only) */}
              <div className="hidden lg:block w-[calc(50%-2.5rem)]" />
            </div>
          );
        })}
      </div>

      {/* Call to action card at the base of process */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 text-center max-w-lg mx-auto bg-espresso text-linen rounded-sm p-8 border border-camel/30 shadow-xl box-gold-glow"
      >
        <h4 className="font-serif text-xl md:text-2.5xl font-bold text-linen mb-3 tracking-wide">
          Ready to Begin Your Consultation?
        </h4>
        <p className="font-sans text-xs text-khaki/80 leading-relaxed mb-6 font-light">
          Advocate Kartik Yadav will evaluate the critical variables of your legal matter and map out an elite custom strategy to resolve it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <a
            href="tel:+919319265406"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-camel hover:bg-linen hover:text-espresso text-espresso px-5 py-3 rounded-sm font-sans text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300"
          >
            <Phone size={12} className="animate-pulse" />
            <span>Call +91 9319265406</span>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-linen/20 hover:border-linen text-linen px-5 py-3 rounded-sm font-sans text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300"
          >
            <MessageSquare size={12} />
            <span>Schedule Online</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};
