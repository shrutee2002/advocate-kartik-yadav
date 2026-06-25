import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, Clock, Calendar, ShieldCheck, MapPin, Check } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    matter: "Corporate Law",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const matters = [
    "Corporate Law",
    "Civil Litigation",
    "Criminal Law",
    "Property & Real Estate Law",
    "Family Law",
    "Intellectual Property",
    "Consumer Protection",
    "Legal Documentation",
    "Other Consultation"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Set success state
    setSubmitted(true);
    
    // Automatically trigger dialer after brief period for dual compliance!
    setTimeout(() => {
      window.location.href = "tel:+919319265406";
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
      {/* Left Column: Direct Chamber Handles (5 Cols) */}
      <div className="lg:col-span-5 bg-espresso text-linen rounded-sm p-8 md:p-12 flex flex-col justify-between relative overflow-hidden shadow-xl box-gold-glow">
        {/* Soft background ambient radial gold spot */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-camel/15 blur-3xl pointer-events-none" />

        <div>
          {/* Section subtitle */}
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-camel mb-3 block">
            Official Chambers
          </span>

          <h3 className="font-serif text-3xl md:text-4xl font-bold tracking-wide mb-8">
            Connect for Counsel
          </h3>

          <p className="font-sans text-xs md:text-sm text-khaki/80 leading-relaxed font-light mb-10">
            Private consultation inquiries are handled with absolute confidentiality and immediate priority. Reach our desk via secure email, direct dial, or the brief consultation portal.
          </p>

          {/* Contact Details List */}
          <div className="flex flex-col gap-6">
            {/* Direct Line */}
            <a
              href="tel:+919319265406"
              className="group flex items-start gap-4 hover:text-camel transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-full border border-linen/10 bg-linen/5 flex items-center justify-center shrink-0 transition-colors group-hover:bg-camel group-hover:border-camel">
                <Phone size={16} className="text-camel group-hover:text-espresso" />
              </div>
              <div>
                <span className="font-sans text-[9px] tracking-widest text-khaki/60 uppercase block mb-0.5">
                  Direct Chambers Dial
                </span>
                <span className="font-serif text-lg font-medium tracking-wide">
                  +91 9319265406
                </span>
              </div>
            </a>

            {/* Secure Email */}
            <a
              href="mailto:contact@kartikyadavlaw.com"
              className="group flex items-start gap-4 hover:text-camel transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-full border border-linen/10 bg-linen/5 flex items-center justify-center shrink-0 transition-colors group-hover:bg-camel group-hover:border-camel">
                <Mail size={16} className="text-camel group-hover:text-espresso" />
              </div>
              <div>
                <span className="font-sans text-[9px] tracking-widest text-khaki/60 uppercase block mb-0.5">
                  Secure Electronic Mail
                </span>
                <span className="font-serif text-lg font-medium tracking-wide break-all">
                  contact@kartikyadavlaw.com
                </span>
              </div>
            </a>

            {/* Operating Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-linen/10 bg-linen/5 flex items-center justify-center shrink-0">
                <Clock size={16} className="text-camel" />
              </div>
              <div>
                <span className="font-sans text-[9px] tracking-widest text-khaki/60 uppercase block mb-0.5">
                  Chambers Hours
                </span>
                <span className="font-serif text-base font-medium tracking-wide block">
                  Monday – Saturday
                </span>
                <span className="font-sans text-xs text-khaki/80 font-light">
                  09:00 AM – 07:00 PM IST
                </span>
              </div>
            </div>

            {/* Office Location */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-linen/10 bg-linen/5 flex items-center justify-center shrink-0">
                <MapPin size={16} className="text-camel" />
              </div>
              <div>
                <span className="font-sans text-[9px] tracking-widest text-khaki/60 uppercase block mb-0.5">
                  Chambers Jurisdiction
                </span>
                <span className="font-serif text-base font-medium tracking-wide block">
                  New Delhi, India
                </span>
                <span className="font-sans text-xs text-khaki/80 font-light">
                  Serving National & International Clients
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* NDA Assurance label */}
        <div className="pt-8 border-t border-linen/10 mt-12 flex items-center gap-3 text-[10px] tracking-wider font-mono text-khaki/50 uppercase">
          <ShieldCheck size={14} className="text-camel shrink-0" />
          <span>Confidentiality Safeguarded under IBA Ethics</span>
        </div>
      </div>

      {/* Right Column: Dynamic Form Stage (7 Cols) */}
      <div className="lg:col-span-7 bg-linen/50 border border-khaki/20 backdrop-blur-md rounded-sm p-8 md:p-12 box-gold-glow flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-6"
            >
              {/* Form header */}
              <div className="mb-2">
                <h4 className="font-serif text-xl md:text-2xl font-bold text-espresso tracking-wide mb-1">
                  Schedule Private Consultation
                </h4>
                <p className="font-sans text-xs text-cocoa/70 font-light">
                  Please furnish brief specifics to prioritize your case review.
                </p>
              </div>

              {/* Grid: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name-input" className="font-sans text-[9px] tracking-[0.2em] font-semibold text-cocoa/80 uppercase">
                    Your Full Name *
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikramaditya Oberoi"
                    className="w-full bg-linen border border-khaki/40 focus:border-camel focus:outline-none px-4 py-3 rounded-sm font-sans text-xs text-espresso transition-colors placeholder:text-cocoa/40"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email-input" className="font-sans text-[9px] tracking-[0.2em] font-semibold text-cocoa/80 uppercase">
                    Secure Email *
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. contact@domain.com"
                    className="w-full bg-linen border border-khaki/40 focus:border-camel focus:outline-none px-4 py-3 rounded-sm font-sans text-xs text-espresso transition-colors placeholder:text-cocoa/40"
                  />
                </div>
              </div>

              {/* Grid: Phone & Matter Selector */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone-input" className="font-sans text-[9px] tracking-[0.2em] font-semibold text-cocoa/80 uppercase">
                    Contact Number *
                  </label>
                  <input
                    id="phone-input"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 93192 65406"
                    className="w-full bg-linen border border-khaki/40 focus:border-camel focus:outline-none px-4 py-3 rounded-sm font-sans text-xs text-espresso transition-colors placeholder:text-cocoa/40"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="matter-select" className="font-sans text-[9px] tracking-[0.2em] font-semibold text-cocoa/80 uppercase">
                    Primary Legal Matter
                  </label>
                  <select
                    id="matter-select"
                    value={formData.matter}
                    onChange={(e) => setFormData({ ...formData, matter: e.target.value })}
                    className="w-full bg-linen border border-khaki/40 focus:border-camel focus:outline-none px-4 py-3 rounded-sm font-sans text-xs text-espresso transition-colors appearance-none cursor-pointer"
                  >
                    {matters.map((m) => (
                      <option key={m} value={m} className="bg-linen">
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message-input" className="font-sans text-[9px] tracking-[0.2em] font-semibold text-cocoa/80 uppercase">
                  Matter Summary & Briefing Details
                </label>
                <textarea
                  id="message-input"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your legal requirements or questions..."
                  className="w-full bg-linen border border-khaki/40 focus:border-camel focus:outline-none px-4 py-3 rounded-sm font-sans text-xs text-espresso transition-colors resize-none placeholder:text-cocoa/40"
                />
              </div>

              {/* Action Buttons: Trigger direct tel callback */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <button
                  type="submit"
                  id="submit-consultation-btn"
                  className="flex items-center justify-center gap-2 bg-espresso hover:bg-cocoa text-linen py-4 rounded-sm font-sans text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300 shadow-md box-gold-glow"
                >
                  Schedule Consultation
                </button>
                <a
                  href="tel:+919319265406"
                  id="call-now-btn"
                  className="flex items-center justify-center gap-2 border border-espresso hover:bg-espresso/5 text-espresso py-4 rounded-sm font-sans text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300"
                >
                  <Phone size={12} className="animate-pulse" />
                  Call Now
                </a>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success-container"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="text-center py-10 px-4 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-camel/10 flex items-center justify-center text-camel mb-6 shadow-md">
                <Check size={28} className="stroke-[3]" />
              </div>
              
              <h4 className="font-serif text-2xl md:text-3.5xl font-bold text-espresso tracking-wide mb-3">
                Appointment Received
              </h4>
              
              <p className="font-sans text-sm text-cocoa/90 max-w-md leading-relaxed font-light mb-8">
                Thank you, <strong className="font-semibold">{formData.name}</strong>. Your inquiry regarding <strong className="font-semibold">{formData.matter}</strong> has been secured. Our clerk is analyzing the details and will contact you shortly.
              </p>

              {/* Action notice */}
              <div className="border border-camel/20 rounded-sm bg-camel/5 p-6 max-w-sm w-full">
                <span className="font-mono text-[9px] tracking-widest text-camel uppercase block mb-2 font-bold">
                  Direct Line Action
                </span>
                <p className="font-sans text-xs text-espresso/80 leading-normal mb-4">
                  For immediate attention, call Advocate Kartik Yadav's private desk now:
                </p>
                <a
                  href="tel:+919319265406"
                  className="flex items-center justify-center gap-2 bg-espresso hover:bg-cocoa text-linen py-3.5 rounded-sm font-sans text-xs tracking-[0.15em] uppercase font-semibold transition-all shadow-md"
                >
                  <Phone size={12} className="animate-pulse" />
                  +91 9319265406
                </a>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 font-sans text-[10px] tracking-widest uppercase font-semibold text-cocoa/60 hover:text-espresso underline underline-offset-4"
              >
                Submit another request
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
