import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Briefcase, Scale, Shield, Home, HeartHandshake, Award, FileCheck, FileText, 
  ArrowRight, X, Phone, Calendar, CheckCircle2 
} from "lucide-react";
import { PracticeArea } from "../types";

// Dynamic Lucide mapping helper
const IconMap: { [key: string]: React.ComponentType<any> } = {
  Briefcase,
  Scale,
  Shield,
  Home,
  HeartHandshake,
  Award,
  FileCheck,
  FileText,
};

interface PracticeCardProps {
  area: PracticeArea;
}

export const PracticeCard: React.FC<PracticeCardProps> = ({ area }) => {
  const [isOpen, setIsOpen] = useState(false);
  const IconComponent = IconMap[area.iconName] || Scale;

  const getSubBulletPoints = (id: string): string[] => {
    switch (id) {
      case "corporate-law":
        return ["Mergers & Acquisitions Structuring", "MCA & RBI Regulatory Compliance", "Shareholder & Venture Capital Covenants", "Vetting Global Trade Covenants"];
      case "civil-litigation":
        return ["High-stakes Appellate Advocacy", "Breach of Contract Representation", "Interlocutory & Permanent Injunctions", "Sovereign Debt Recovery Suits"];
      case "criminal-law":
        return ["White-Collar Anti-Fraud Advocacy", "Transit & Anticipatory Bail Applications", "Cyber Forensics & Prosecution Defense", "Constitutional Habeas Corpus Writs"];
      case "property-law":
        return ["30-Year Forensic Title Audits", "RERA Regulatory Compliance Appeals", "Partition & Possession Litigation", "High-Value Commercial Lease Structuring"];
      case "family-law":
        return ["Matrimonial Settlement Negotiations", "Confidential Mutual Divorce Filings", "Child Guardianship & Custody Litigation", "Trust Formation & Wills Drafting"];
      case "intellectual-property":
        return ["Trademark & Copyright Registrations", "Patents Infringement Prosecution", "Data Localization Licensing Covenants", "Brand Spoofing & Passing-Off Redressal"];
      case "consumer-protection":
        return ["NCDRC State & National Appeals", "High-Value Product Liability Disputes", "Banking Negligence Class-Actions", "Insurance Claim Refusal Arbitrations"];
      case "legal-documentation":
        return ["Custom Bulletproof Corporate Charters", "Special Power of Attorney (SPOA)", "Covenants of Non-Disclosure (NDA)", "Landmark Legal Demands & Notices"];
      default:
        return ["Strategic Case Auditing", "Zealous Precedent Analysis", "Drafting Exhaustive Legal Pleading"];
    }
  };

  return (
    <>
      {/* Primary Grid Card */}
      <motion.div
        layout
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="relative group h-full rounded-sm border border-khaki/20 bg-linen/50 backdrop-blur-md p-8 flex flex-col justify-between transition-all duration-300 box-gold-glow hover:border-camel/40"
      >
        {/* Soft elegant linear background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-khaki/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm pointer-events-none" />

        <div>
          {/* Elegant Icon with Gold Radial Halo */}
          <div className="relative w-14 h-14 rounded-full bg-espresso flex items-center justify-center mb-6 shadow-md transition-all duration-500 group-hover:bg-camel">
            <IconComponent className="w-6 h-6 text-linen transition-colors duration-300 group-hover:text-espresso" />
            <div className="absolute inset-0 rounded-full border border-camel/30 scale-110 group-hover:scale-125 transition-transform duration-500 opacity-50" />
          </div>

          <h3 className="font-serif text-xl font-semibold text-espresso mb-3 tracking-wide group-hover:text-camel transition-colors duration-300">
            {area.title}
          </h3>
          <p className="font-sans text-xs text-cocoa/80 leading-relaxed mb-6 font-light">
            {area.description}
          </p>
        </div>

        {/* Learn More Trigger */}
        <button
          onClick={() => setIsOpen(true)}
          className="self-start flex items-center gap-2 font-sans text-[11px] tracking-[0.25em] uppercase font-semibold text-espresso hover:text-camel transition-colors duration-300 group/btn mt-auto"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      {/* Premium Detail Drawer / Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark glass backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-espresso/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative w-full max-w-2xl bg-linen border border-khaki/40 shadow-2xl rounded-sm p-8 md:p-10 z-10 overflow-hidden"
            >
              {/* Gold watermark design inside modal */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-camel/5 blur-[100px] pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-khaki/20 text-espresso transition-colors duration-300"
                aria-label="Close details"
              >
                <X size={18} />
              </button>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-espresso/5 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-camel" />
                    </div>
                    <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-camel">
                      Specialist Practice Area
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-3xl font-bold text-espresso mb-4 tracking-wide">
                    {area.title}
                  </h2>

                  {/* High quality explanation divider line */}
                  <div className="w-20 h-[2px] bg-camel mb-6" />

                  {/* Detailed Description */}
                  <p className="font-sans text-sm text-espresso/90 leading-relaxed font-light mb-6">
                    {area.longDescription}
                  </p>

                  {/* Sub advisory items */}
                  <div className="mb-8">
                    <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-cocoa/70 mb-4">
                      Core Legal Deliverables:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {getSubBulletPoints(area.id).map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-camel shrink-0 mt-0.5" />
                          <span className="font-sans text-xs text-espresso/80 leading-tight font-medium">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-khaki/30 mt-6">
                  <a
                    href="tel:+919319265406"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-espresso hover:bg-cocoa text-linen px-6 py-3 rounded-sm font-sans text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300 shadow-md box-gold-glow"
                  >
                    <Phone size={13} className="text-khaki animate-pulse" />
                    <span>Call Now for Counsel</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full sm:w-auto text-center border border-espresso/30 hover:border-espresso text-espresso hover:bg-espresso/5 px-6 py-3 rounded-sm font-sans text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300"
                  >
                    Schedule Online
                  </a>
                  <p className="hidden md:block text-[10px] font-mono text-cocoa/50 tracking-wider ml-auto">
                    +91 9319265406
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
