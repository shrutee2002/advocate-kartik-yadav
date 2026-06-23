import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Sparkles, Trophy, Compass, ShieldAlert, ArrowRight, ArrowLeft } from "lucide-react";
import { CASE_STUDIES } from "../data";

export const SuccessStories: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCase = CASE_STUDIES[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  };

  return (
    <div className="w-full relative py-4">
      {/* Editorial Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {CASE_STUDIES.map((study, idx) => (
          <button
            key={study.id}
            onClick={() => setActiveIndex(idx)}
            className={`px-5 py-3 rounded-sm font-sans text-[11px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 border ${
              activeIndex === idx
                ? "bg-espresso text-linen border-espresso shadow-md"
                : "bg-linen/50 text-cocoa hover:text-espresso border-khaki/30 hover:border-camel/50"
            }`}
          >
            Case Study 0{idx + 1}
          </button>
        ))}
      </div>

      {/* Main Interactive Presentation Stage */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCase.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Left Column: Case Narrative (8 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-sm border border-khaki/20 bg-linen/50 backdrop-blur-md p-8 md:p-12 box-gold-glow">
            <div>
              {/* Category tag */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-camel animate-pulse" />
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-bold text-camel">
                  {activeCase.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl md:text-3.5xl font-bold text-espresso mb-8 leading-tight tracking-wide">
                {activeCase.title}
              </h3>

              {/* Grid: Challenge vs Strategy */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-khaki/20 pb-8">
                {/* Challenge Block */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-cocoa/80">
                    <ShieldAlert className="w-4 h-4 text-camel shrink-0" />
                    <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold">
                      The Challenge
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-espresso/80 leading-relaxed font-light">
                    {activeCase.challenge}
                  </p>
                </div>

                {/* Strategy Block */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-cocoa/80">
                    <Compass className="w-4 h-4 text-camel shrink-0" />
                    <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold">
                      Legal Strategy
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-espresso/80 leading-relaxed font-light">
                    {activeCase.strategy}
                  </p>
                </div>
              </div>

              {/* Outcome Highlight (Luxury Callout) */}
              <div className="bg-espresso/5 rounded-sm p-6 border-l-2 border-camel">
                <div className="flex items-center gap-2.5 mb-2 text-espresso">
                  <Trophy className="w-4 h-4 text-camel shrink-0" />
                  <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold">
                    Ultimate Outcome
                  </h4>
                </div>
                <p className="font-serif text-sm md:text-base text-espresso leading-relaxed italic font-medium">
                  {activeCase.outcome}
                </p>
              </div>
            </div>

            {/* Slider Navigation Controls inside card */}
            <div className="flex items-center gap-4 mt-10 pt-6 border-t border-khaki/20">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full border border-khaki hover:border-espresso hover:bg-espresso/5 text-espresso transition-all duration-300"
                aria-label="Previous case study"
              >
                <ArrowLeft size={16} />
              </button>
              <div className="font-mono text-xs text-cocoa">
                <span className="font-bold text-espresso">0{activeIndex + 1}</span> / 0{CASE_STUDIES.length}
              </div>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full border border-khaki hover:border-espresso hover:bg-espresso/5 text-espresso transition-all duration-300"
                aria-label="Next case study"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Client Feedback & Quotation (5 Cols) */}
          <div className="lg:col-span-5 bg-espresso text-linen rounded-sm p-8 md:p-12 flex flex-col justify-between relative overflow-hidden shadow-xl box-gold-glow">
            {/* Ambient gold glow in top corner */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-camel/15 blur-3xl pointer-events-none" />

            {/* Huge elegant double quotation mark in background */}
            <div className="absolute top-8 right-8 text-camel opacity-10 pointer-events-none select-none">
              <Quote size={120} strokeWidth={1} />
            </div>

            <div className="relative z-10">
              <Quote className="w-10 h-10 text-camel mb-8 fill-camel/10" />
              
              <p className="font-serif text-base md:text-lg text-linen/90 leading-relaxed italic mb-8 font-light tracking-wide">
                "{activeCase.feedback}"
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-linen/10">
              <h5 className="font-serif text-lg font-bold text-linen tracking-wide mb-1">
                {activeCase.clientName}
              </h5>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-khaki font-medium">
                Client Testimonial Outcome
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
