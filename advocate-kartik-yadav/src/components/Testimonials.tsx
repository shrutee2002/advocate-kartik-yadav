import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "../data";

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="w-full relative py-4">
      {/* Testimonials Frame */}
      <div className="max-w-4xl mx-auto relative">
        {/* Giant golden quotes background decoration */}
        <div className="absolute -top-12 -left-8 text-camel/15 pointer-events-none select-none">
          <Quote size={140} strokeWidth={0.5} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-sm border border-khaki/20 bg-linen/60 backdrop-blur-md p-8 md:p-14 shadow-md box-gold-glow relative z-10"
          >
            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  size={15}
                  className="fill-camel text-camel drop-shadow-[0_0_4px_rgba(178,144,125,0.4)]"
                />
              ))}
            </div>

            {/* Quote body text */}
            <p className="font-serif text-lg md:text-2xl text-espresso/90 leading-relaxed italic mb-8 font-light tracking-wide">
              "{TESTIMONIALS[activeIndex].review}"
            </p>

            {/* Author Profile */}
            <div className="flex items-center gap-4 pt-6 border-t border-khaki/30">
              {/* Monochromatic Premium Client Portrait */}
              <div className="relative shrink-0">
                <img
                  src={`https://picsum.photos/seed/${TESTIMONIALS[activeIndex].avatarSeed}/120/120`}
                  alt={TESTIMONIALS[activeIndex].clientName}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover filter grayscale contrast-125 sepia-[20%] border border-camel"
                />
                <div className="absolute inset-0 rounded-full bg-camel/10 mix-blend-color" />
              </div>

              <div>
                <h4 className="font-serif text-base md:text-lg font-bold text-espresso tracking-wide leading-tight">
                  {TESTIMONIALS[activeIndex].clientName}
                </h4>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-[10px] md:text-xs font-sans tracking-wider text-cocoa/80 font-medium">
                  <span>{TESTIMONIALS[activeIndex].role}</span>
                  <span className="hidden sm:inline text-camel font-semibold">•</span>
                  <span className="text-camel font-semibold uppercase tracking-[0.15em]">
                    {TESTIMONIALS[activeIndex].location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots & Chevron Arrows */}
        <div className="flex items-center justify-between mt-8 relative z-10 px-4">
          {/* Active indicator dots */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "w-6 bg-espresso" : "w-1.5 bg-khaki hover:bg-camel"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Navigation Chevron Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-khaki/60 hover:border-espresso hover:bg-espresso/5 text-espresso transition-all duration-300 shadow-sm"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-khaki/60 hover:border-espresso hover:bg-espresso/5 text-espresso transition-all duration-300 shadow-sm"
              aria-label="Next testimonial"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
