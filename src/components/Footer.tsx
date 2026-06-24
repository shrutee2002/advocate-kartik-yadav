import React from "react";
import { Logo } from "./Logo";
import { Phone, Mail, Clock, ShieldAlert, Linkedin, Twitter, Instagram, Globe, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="footer" className="bg-espresso text-linen pt-20 pb-10 relative overflow-hidden">
      {/* Huge, semi-transparent subtle background Scales watermark */}
      <div className="absolute right-[-10%] bottom-[-10%] opacity-[0.03] pointer-events-none select-none">
        <Logo size={420} watermarkMode={true} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Segment: Brand logo & Scroll up */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-linen/10 pb-12 mb-12 gap-6">
          <div className="flex items-center">
            {/* Custom Logo */}
            <Logo size={54} withText={true} withGlow={true} className="brightness-110" />
          </div>

          {/* Scroll up trigger */}
          <button
            onClick={handleScrollTop}
            className="group flex items-center gap-3 font-sans text-[10px] tracking-[0.25em] uppercase font-bold text-khaki hover:text-linen transition-colors duration-300"
          >
            <span>Scroll to Top</span>
            <div className="w-8 h-8 rounded-full border border-khaki/30 flex items-center justify-center transition-all duration-300 group-hover:bg-linen group-hover:border-linen">
              <ArrowUp size={13} className="text-camel group-hover:text-espresso transition-colors" />
            </div>
          </button>
        </div>

        {/* Middle Segment: Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Col 1: About chambers (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h4 className="font-serif text-lg font-bold text-linen tracking-wide">
              Chambers of Advocate Kartik Yadav
            </h4>
            <p className="font-sans text-xs text-khaki/70 leading-relaxed font-light">
              Providing strategic legal representation and elite consultancy across national and corporate jurisdictions. Driven by trust, absolute professional confidentiality, and an unyielding commitment to legal excellence.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {[
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Globe, href: "https://google.com", label: "Website" },
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-linen/10 bg-linen/5 flex items-center justify-center hover:bg-camel hover:border-camel text-khaki hover:text-espresso transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent size={13} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links (2.5 Cols) */}
          <div className="lg:col-span-2.5 flex flex-col gap-5">
            <h5 className="font-serif text-base font-bold text-linen tracking-wide">
              Quick Links
            </h5>
            <ul className="flex flex-col gap-3 font-sans text-xs text-khaki/80 font-light">
              <li>
                <a href="#home" className="hover:text-camel transition-colors">
                  Home Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-camel transition-colors">
                  Chambers Bio
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-camel transition-colors">
                  Practice Areas
                </a>
              </li>
              <li>
                <a href="#success" className="hover:text-camel transition-colors">
                  Case Successes
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-camel transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-camel transition-colors">
                  Legal Insights
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-camel transition-colors">
                  Book Counsel
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Practice Area shortcuts (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h5 className="font-serif text-base font-bold text-linen tracking-wide">
              Practice Disciplines
            </h5>
            <ul className="flex flex-col gap-3 font-sans text-xs text-khaki/80 font-light">
              <li>
                <a href="#practice" className="hover:text-camel transition-colors">
                  Corporate Advisory & M&A
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-camel transition-colors">
                  High-Stakes Civil Litigation
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-camel transition-colors">
                  White-Collar Criminal Defense
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-camel transition-colors">
                  Property Title & Real Estate
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-camel transition-colors">
                  Matrimonial & Family Trusts
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-camel transition-colors">
                  Intellectual Property Licensing
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Contact (2.5 Cols) */}
          <div className="lg:col-span-2.5 flex flex-col gap-5">
            <h5 className="font-serif text-base font-bold text-linen tracking-wide">
              Immediate Desk
            </h5>
            <div className="flex flex-col gap-4 font-sans text-xs text-khaki/80 font-light">
              <a href="tel:+919319265406" className="flex items-center gap-2 hover:text-camel transition-colors">
                <Phone size={12} className="text-camel shrink-0" />
                <span>+91 9319265406</span>
              </a>
              <a href="mailto:contact@kartikyadavlaw.com" className="flex items-center gap-2 hover:text-camel transition-colors break-all">
                <Mail size={12} className="text-camel shrink-0" />
                <span>contact@kartikyadavlaw.com</span>
              </a>
              <div className="flex items-start gap-2">
                <Clock size={12} className="text-camel shrink-0 mt-0.5" />
                <span>Mon – Sat: 9 AM – 7 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Base Segment: Copyright & Disclaimer */}
        <div className="border-t border-linen/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-sans text-[10px] text-khaki/50 tracking-wider">
            © {currentYear} Advocate Kartik Yadav. All Rights Reserved. Created under elite legal standards.
          </div>

          {/* Disclaimer text compliant with Bar Council rules */}
          <div className="flex items-center gap-2 max-w-md text-right text-[9px] font-sans text-khaki/40 leading-normal">
            <ShieldAlert size={12} className="text-camel/50 shrink-0 hidden sm:block" />
            <span>
              Disclaimer: As per the Bar Council of India regulations, legal practitioners are prohibited from advertising. This portfolio serves purely informational purposes upon client request.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
