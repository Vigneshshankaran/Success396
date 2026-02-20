import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Linkedin, Youtube, ArrowRight, Check } from "lucide-react";
import logo from "@/assets/logo.png";

const exploreLinks = [
  "Home", "Success369 Journeys", "The Success369 Model",
  "The Book", "Stories", "Events", "Blog",
];

const connectLinks = [
  { label: "Take a Free session", href: "#" },
  { label: "Stay connected", href: "#" },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "YouTube", href: "#", icon: Youtube },
];

const policyLinks = [
  "Privacy policy", "Terms & conditions", "Refund Policy", "Shipping Policy",
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(300_15%_10%)] to-[hsl(300_20%_8%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <a href="#" className="flex items-center gap-2 group mb-6">
              <div className="h-[80px] w-auto flex items-center justify-center transition-all duration-300">
                <img src={logo} alt="Success369" className="h-full w-auto object-contain" />
              </div>
            </a>
            <p className="text-muted-foreground text-base mb-6">
              Build sustainable success with clarity and alignment.
            </p>

            <div className="mb-8">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="newsletter"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="relative group"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-4 pr-32 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-all duration-300"
                    />
                    <button
                      type="submit"
                      className="absolute right-1 top-1 bottom-1 px-4 rounded-md bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                      <span>Subscribe</span>
                      <ArrowRight size={14} />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-primary text-sm font-medium py-2.5"
                  >
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check size={12} />
                    </div>
                    Success! You're on the list.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <p className="text-muted-foreground/70 text-sm">
              Success369 exists to help individuals, leaders, teams, and organisations build success with clarity, alignment, and purpose—so growth is meaningful and sustainable.
            </p>
          </motion.div>

          {/* Explore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-foreground mb-6 text-sm tracking-wider uppercase">
              Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200 inline-block relative group"
                  >
                    {link}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-foreground mb-6 text-sm tracking-wider uppercase">
              Connect
            </h4>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    {link.icon && <link.icon size={14} className="group-hover:scale-110 transition-transform" />}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Publisher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-foreground mb-6 text-sm tracking-wider uppercase">
              Publisher & Book Details
            </h4>
            <div className="text-muted-foreground text-base space-y-1">
              <p>Success369 —</p>
              <p>Your Companion for</p>
              <p>Sustainable Success</p>
              <p className="mt-4 font-bold text-primary/80">Publisher: Ivory Books Ltd.</p>
              <p className="text-sm font-bold opacity-60">ISBN: 978-1-9193819-2-3</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/60 text-xs">
            © Success369. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {policyLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-muted-foreground/60 text-xs hover:text-primary underline underline-offset-2 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
