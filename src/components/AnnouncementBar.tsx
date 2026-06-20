import { motion } from "framer-motion";
import { Sparkles, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface AnnouncementBarProps {
  onClose: () => void;
}

export const AnnouncementBar = ({ onClose }: AnnouncementBarProps) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        document.documentElement.style.setProperty(
          "--announcement-height",
          `${entry.contentRect.height}px`
        );
      }
    });

    observer.observe(ref);
    return () => {
      observer.disconnect();
      document.documentElement.style.setProperty("--announcement-height", "0px");
    };
  }, [ref]);

  return (
    <motion.div
      ref={setRef}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-[60] w-full border-b border-white/10 bg-gradient-to-r from-primary/90 via-accent/90 to-primary/90 backdrop-blur-md overflow-hidden shadow-sm"
    >
      <div id="announcement-bar-inner" className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3 text-center">
          <div className="hidden sm:flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
            <Sparkles size={12} className="text-white animate-pulse" />
          </div>
          <p className="text-[11px] font-medium tracking-wide text-white/95 sm:text-sm">
            <span className="font-bold">SHAKTHI:</span> First Cohort Begins May 30th. Limited seats available.
            <Link
              to="/shakti-unfiltered-voice"
              className="ml-2 inline-flex items-center gap-1 font-bold text-white underline underline-offset-4 decoration-white/40 transition-all hover:decoration-white"
            >
              Register now
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </p>
        </div>
        
        <button
          onClick={onClose}
          className="relative ml-4 rounded-full p-1.5 text-white/70 hover:bg-white/20 hover:text-white transition-all duration-200"
          aria-label="Close announcement"
        >
          <X size={14} />
        </button>
      </div>
    </motion.div>
  );
};

export default AnnouncementBar;
