import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Calendar, ArrowRight, X, Bookmark, Share2, Check } from "lucide-react";
import { LEGAL_INSIGHTS } from "../data";
import { LegalInsight } from "../types";

export const Insights: React.FC = () => {
  const [selectedInsight, setSelectedInsight] = useState<LegalInsight | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShare = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    // Simple mock copy-to-clipboard sharing
    navigator.clipboard.writeText(`${window.location.origin}/#insights/${id}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {LEGAL_INSIGHTS.map((insight, idx) => (
          <motion.article
            key={insight.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            onClick={() => setSelectedInsight(insight)}
            className="group cursor-pointer flex flex-col justify-between border-b border-khaki/30 pb-8 transition-all hover:border-camel"
          >
            <div>
              {/* Luxury Magazine Thumbnail Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm bg-espresso mb-6">
                <img
                  src={insight.imageUrl}
                  alt={insight.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale sepia-[15%] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                {/* Vintage vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent opacity-80" />
                
                {/* Floating category banner */}
                <div className="absolute top-4 left-4 bg-linen border border-khaki/30 px-3 py-1 text-[9px] font-sans tracking-[0.2em] font-bold uppercase text-espresso">
                  {insight.category}
                </div>
              </div>

              {/* Meta details */}
              <div className="flex items-center gap-4 text-cocoa/70 font-mono text-[10px] tracking-wider mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={11} className="text-camel" />
                  <span>{insight.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={11} className="text-camel" />
                  <span>{insight.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl md:text-2xl font-bold text-espresso tracking-wide mb-3 group-hover:text-camel transition-colors duration-300">
                {insight.title}
              </h3>

              {/* Excerpt */}
              <p className="font-sans text-xs md:text-sm text-cocoa/80 leading-relaxed font-light mb-6">
                {insight.excerpt}
              </p>
            </div>

            {/* Read action footer */}
            <div className="flex items-center justify-between mt-auto pt-2">
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-bold text-espresso group-hover:text-camel transition-all duration-300 flex items-center gap-2">
                Read Article
                <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
              </span>

              {/* Share micro-interaction */}
              <button
                onClick={(e) => handleShare(insight.id, e)}
                className="p-2 rounded-full hover:bg-espresso/5 text-cocoa/70 hover:text-espresso transition-all"
                title="Copy shareable link"
              >
                {copiedId === insight.id ? <Check size={13} className="text-camel" /> : <Share2 size={13} />}
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Immersive Reading Modal */}
      <AnimatePresence>
        {selectedInsight && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark glass backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInsight(null)}
              className="absolute inset-0 bg-espresso/90 backdrop-blur-md"
            />

            {/* Full height scrollable paper-sheet reader */}
            <motion.div
              initial={{ scale: 0.98, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 28, stiffness: 200 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-[#F9F7F3] border border-khaki/30 shadow-2xl rounded-sm z-10 flex flex-col overflow-hidden"
            >
              {/* Header static strip */}
              <div className="flex items-center justify-between px-8 py-5 border-b border-khaki/20 bg-linen">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-[9px] tracking-[0.3em] uppercase font-extrabold text-camel bg-espresso/5 px-2.5 py-1">
                    {selectedInsight.category}
                  </span>
                  <span className="font-mono text-[9px] text-cocoa/60">{selectedInsight.readTime}</span>
                </div>
                <button
                  onClick={() => setSelectedInsight(null)}
                  className="p-2 rounded-full hover:bg-espresso/5 text-espresso transition-colors"
                  aria-label="Close article"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Scrollable Editorial Article Content */}
              <div className="overflow-y-auto p-8 md:p-12 scrollbar-thin">
                {/* Header elements */}
                <div className="max-w-2xl mx-auto text-center mb-10">
                  <h1 className="font-serif text-3xl md:text-4.5xl font-bold leading-tight text-espresso tracking-wide mb-4">
                    {selectedInsight.title}
                  </h1>
                  <div className="flex items-center justify-center gap-4 text-cocoa/50 font-mono text-[10px] tracking-widest uppercase">
                    <span>By Advocate Kartik Yadav</span>
                    <span>•</span>
                    <span>{selectedInsight.date}</span>
                  </div>
                </div>

                {/* Hero full-width image */}
                <div className="w-full aspect-[21/9] rounded-sm overflow-hidden mb-10 bg-espresso">
                  <img
                    src={selectedInsight.imageUrl}
                    alt={selectedInsight.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter grayscale contrast-115 sepia-[10%]"
                  />
                </div>

                {/* Body Content with real high-end editorial styling (drop caps) */}
                <div className="max-w-2xl mx-auto">
                  <p className="font-serif text-base md:text-lg text-espresso/90 leading-relaxed font-light mb-6 first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-camel">
                    {selectedInsight.content}
                  </p>
                  
                  <p className="font-sans text-xs md:text-sm text-cocoa/80 leading-relaxed font-light mb-8">
                    In the current legal framework of India, legal decisions represent substantial capital and reputational weights. Individuals and corporations are highly advised to consult a specialized legal consultant before taking structural steps under partition, arrest, or merger procedures. Advocate Kartik Yadav provides comprehensive forensic counseling services to secure and preserve client outcomes.
                  </p>

                  {/* Editorial signature divider */}
                  <div className="flex items-center justify-center gap-4 py-8 border-y border-khaki/20 my-10">
                    <div className="w-6 h-[1px] bg-camel" />
                    <span className="font-serif text-sm italic tracking-widest text-camel font-medium">Advocate Kartik Yadav</span>
                    <div className="w-6 h-[1px] bg-camel" />
                  </div>

                  <div className="bg-espresso text-linen rounded-sm p-6 text-center shadow-lg box-gold-glow">
                    <h4 className="font-serif text-lg font-bold mb-1 tracking-wide">
                      Need Counsel Regarding This Topic?
                    </h4>
                    <p className="font-sans text-[11px] text-khaki/80 mb-4 tracking-wide">
                      Connect with Kartik Yadav's private legal chambers for a high-level consult.
                    </p>
                    <a
                      href="tel:+919319265406"
                      className="inline-flex items-center gap-2 bg-camel text-espresso px-5 py-2.5 rounded-sm font-sans text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-linen transition-all duration-300"
                    >
                      Call +91 9319265406
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
