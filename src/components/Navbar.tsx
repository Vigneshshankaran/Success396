import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Foundation", href: "#", active: true  },
  { label: "Programs", href: "#"},
  { label: "The Book", href: "#" },
  { label: "Events", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "Contact", href: "#" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-2xl border-b border-border/50 shadow-2xl shadow-black/20"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-[4px]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-5">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            <div className="w-[170px] h-[40px] flex items-center justify-center overflow-hidden transition-all duration-300">
              <img src={logo} alt="Success369" className="w-full h-full object-contain" />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 group drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] ${
                  link.active 
                    ? "text-primary" 
                    : scrolled 
                      ? "text-muted-foreground hover:text-foreground" 
                      : "text-foreground/90 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    link.active ? "w-6" : "w-0 group-hover:w-6"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-6 py-2.5 rounded-full text-sm font-semibold text-primary-foreground overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] group-hover:animate-[shimmer_1.5s_ease-in-out_infinite] transition-all" />
              <span className="relative">Take a Free Session</span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 rounded-full text-sm font-semibold border border-foreground/20 text-foreground hover:border-primary hover:text-primary transition-colors duration-300"
            >
              Explore the Journeys
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`text-2xl font-display font-semibold py-3 border-b border-border/30 ${
                    link.active ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-8">
              <a href="#" className="text-center px-6 py-3 rounded-full text-sm font-semibold text-primary-foreground bg-gradient-to-r from-primary to-accent">
                Take a Free Session
              </a>
              <a href="#" className="text-center px-6 py-3 rounded-full text-sm font-semibold border border-foreground/20 text-foreground">
                Explore the Journeys
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
