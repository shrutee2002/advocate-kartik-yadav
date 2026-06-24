import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate premium loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 800); // Wait for transition out
          }, 600);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-espresso"
        >
          {/* Subtle noise pattern overlay for organic luxury feel */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-linen via-espresso to-espresso bg-[size:200px_200px]" />

          {/* Golden linear ambient back-glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-camel/10 blur-[120px]" />

          <div className="relative z-10 flex flex-col items-center max-w-xs text-center">
            {/* Animated Logo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-8"
            >
              <Logo size={140} withGlow={true} />
            </motion.div>

            {/* Typography brand display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col gap-2"
            >
              <h1 className="font-serif text-2xl font-semibold tracking-[0.3em] text-linen">
                KARTIK YADAV
              </h1>
              <p className="font-sans text-[10px] tracking-[0.4em] font-light text-khaki uppercase">
                Advocate & Legal Consultant
              </p>
            </motion.div>

            {/* Custom Luxury Loading Bar */}
            <div className="relative w-48 h-[1.5px] bg-linen/10 rounded-full overflow-hidden mt-10">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-camel to-linen"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            {/* Loading Status label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              className="font-mono text-[9px] tracking-[0.25em] text-khaki uppercase mt-3"
            >
              Establishing Counsel {progress}%
            </motion.div>
          </div>

          {/* Editorial quote at the bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="absolute bottom-10 font-serif text-xs italic tracking-widest text-linen/70"
          >
            "Justice is the constant and perpetual will to allot to every man his due."
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
