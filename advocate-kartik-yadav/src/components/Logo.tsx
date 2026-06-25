import React from "react";

interface LogoProps {
  className?: string;
  size?: number; // Standard bounding box size (default 64)
  withGlow?: boolean;
  withText?: boolean;
  watermarkMode?: boolean; // If true, renders super large, ultra-thin, low-opacity
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = 64,
  withGlow = true,
  withText = false,
  watermarkMode = false,
}) => {
  // Determine opacity and colors based on mode
  const strokeColor = watermarkMode ? "rgba(178, 144, 125, 0.12)" : "url(#gold-metallic-grad)";
  const glowColor = watermarkMode ? "transparent" : "rgba(178, 144, 125, 0.4)";
  const textColor = watermarkMode ? "text-camel/10" : "text-camel";
  const labelColor = watermarkMode ? "text-khaki/5" : "text-espresso";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} style={{ width: withText ? "auto" : size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-500 hover:scale-105"
        style={{
          filter: withGlow && !watermarkMode ? "drop-shadow(0 0 8px rgba(178, 144, 125, 0.35))" : "none",
        }}
      >
        <defs>
          {/* Rich multi-stop gold gradient */}
          <linearGradient id="gold-metallic-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7D5A44" /> {/* Cocoa shadow */}
            <stop offset="30%" stopColor="#B2907D" /> {/* Camel mid */}
            <stop offset="50%" stopColor="#F5F1EA" /> {/* Linen highlight */}
            <stop offset="70%" stopColor="#D7C9B8" /> {/* Khaki luster */}
            <stop offset="100%" stopColor="#B2907D" /> {/* Camel gold */}
          </linearGradient>

          {/* Soft backglow for luxury styling */}
          <radialGradient id="soft-backglow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(215, 201, 184, 0.25)" />
            <stop offset="100%" stopColor="rgba(245, 241, 234, 0)" />
          </radialGradient>
        </defs>

        {/* Soft background radial glow */}
        {withGlow && !watermarkMode && (
          <circle cx="60" cy="60" r="50" fill="url(#soft-backglow)" />
        )}

        {/* Outer Circular Ring (Thin, Luxury style) */}
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke={strokeColor}
          strokeWidth="1"
          strokeDasharray={watermarkMode ? "4 4" : "none"}
          className="opacity-80"
        />
        
        {/* Decorative inner circular dots or ring */}
        <circle
          cx="60"
          cy="60"
          r="50"
          stroke={strokeColor}
          strokeWidth="0.5"
          strokeOpacity="0.4"
        />

        {/* ================= MONOGRAM LETTERS (K & Y) ================= */}
        <g className="font-serif" style={{ transformOrigin: "60px 60px" }}>
          {/* Letter 'K' on the left side */}
          <text
            x="32"
            y="76"
            fill={strokeColor}
            fontSize="32"
            fontWeight="300"
            fontFamily="'Playfair Display', Georgia, serif"
            letterSpacing="-0.05em"
            opacity={watermarkMode ? "0.15" : "0.75"}
            textAnchor="middle"
          >
            K
          </text>

          {/* Letter 'Y' on the right side */}
          <text
            x="88"
            y="76"
            fill={strokeColor}
            fontSize="32"
            fontWeight="300"
            fontFamily="'Playfair Display', Georgia, serif"
            letterSpacing="-0.05em"
            opacity={watermarkMode ? "0.15" : "0.75"}
            textAnchor="middle"
          >
            Y
          </text>
        </g>

        {/* ================= THE SCALES OF JUSTICE (Center Vector) ================= */}
        <g stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Main Vertical Pillar */}
          <line x1="60" y1="28" x2="60" y2="92" strokeWidth="1.5" />
          
          {/* Pillar Base (Elegant layered pedestal steps) */}
          <line x1="44" y1="92" x2="76" y2="92" strokeWidth="2.5" />
          <line x1="50" y1="88" x2="70" y2="88" strokeWidth="1.5" />
          <line x1="55" y1="84" x2="65" y2="84" strokeWidth="1" />

          {/* Pillar Crown/Cap */}
          <path d="M56 28 L60 21 L64 28 Z" fill={watermarkMode ? "none" : strokeColor} strokeWidth="1" />
          <circle cx="60" cy="18" r="2" fill={watermarkMode ? "none" : strokeColor} />

          {/* Horizontal Balance Beam (Slightly tapered, organic look) */}
          <path d="M28 42 Q60 36 92 42" strokeWidth="1.8" fill="none" />
          
          {/* Central Pivot Ring */}
          <circle cx="60" cy="39" r="3.5" fill="#F5F1EA" strokeWidth="1.5" />

          {/* Left Scale Hanging Chains (Dynamic angle for realism) */}
          <line x1="28" y1="42" x2="20" y2="68" strokeWidth="0.8" opacity="0.8" />
          <line x1="28" y1="42" x2="36" y2="68" strokeWidth="0.8" opacity="0.8" />
          {/* Left Plate/Pan (Sleek minimalist arc and platform) */}
          <path d="M16 68 H40" strokeWidth="1.5" />
          <path d="M18 68 C18 78, 38 78, 38 68" strokeWidth="1.2" fill="none" opacity="0.9" />

          {/* Right Scale Hanging Chains */}
          <line x1="92" y1="42" x2="84" y2="68" strokeWidth="0.8" opacity="0.8" />
          <line x1="92" y1="42" x2="100" y2="68" strokeWidth="0.8" opacity="0.8" />
          {/* Right Plate/Pan */}
          <path d="M80 68 H104" strokeWidth="1.5" />
          <path d="M82 68 C82 78, 102 78, 102 68" strokeWidth="1.2" fill="none" opacity="0.9" />
        </g>
      </svg>

      {withText && (
        <div className="flex flex-col select-none justify-center">
          <div className="font-serif text-lg tracking-[0.25em] font-semibold leading-tight text-espresso transition-colors duration-300">
            KARTIK YADAV
          </div>
          <div className="text-[9px] font-sans tracking-[0.3em] font-medium uppercase text-camel">
            Advocate & Legal Consultant
          </div>
        </div>
      )}
    </div>
  );
};
