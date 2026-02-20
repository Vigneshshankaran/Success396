import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Check, Zap, Heart, Target } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";


const pillars = [
  { icon: Zap, label: "Clarity" },
  { icon: Heart, label: "Congruence" },
  { icon: Target, label: "Catalysis" },
];

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="newsletter" className="relative py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
      </div>

      {/* Animated floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Pillar icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-6 sm:gap-8 mb-10"
        >
          {pillars.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center backdrop-blur-sm">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <span className="text-[10px] sm:text-xs font-display uppercase tracking-widest text-primary/70">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 max-w-4xl mx-auto"
        >
        
          <h2 className="mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Stay Connected
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
            Meaningful insights delivered without noise or pressure.
          </p>
        </motion.div>

        {/* CTA form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-lg mx-auto"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 bg-card/50 backdrop-blur-md border border-border/60 rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)] transition-all duration-300"
                  />
                  <motion.button
                    type="submit"
                    disabled={!agreed}
                    whileHover={agreed ? { scale: 1.03, boxShadow: "0 0 30px -5px hsl(32 95% 55% / 0.4)" } : {}}
                    whileTap={agreed ? { scale: 0.97 } : {}}
                    className={`px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-display text-sm font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shrink-0 ${
                      !agreed ? "opacity-50 cursor-not-allowed grayscale" : ""
                    }`}
                  >
                    Subscribe
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
                <div className="flex items-center justify-center gap-2 pt-2">
                  <Checkbox 
                    id="terms" 
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    className="border-muted-foreground/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <Label 
                    htmlFor="terms" 
                    className="text-muted-foreground/70 text-[11px] sm:text-xs font-normal cursor-pointer hover:text-muted-foreground transition-colors"
                  >
                    I agree to receive communication and accept Terms & Privacy Policy.
                  </Label>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-center rounded-2xl bg-card/50 backdrop-blur-md border border-primary/30 p-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className="h-14 w-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-4"
                >
                  <Check className="h-7 w-7 text-primary" />
                </motion.div>
                <h3 className="mb-2">
                  Welcome to the Journey
                </h3>
                <p className="text-muted-foreground text-sm">
                  Check your inbox — your first insight is on its way.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};


export default NewsletterCTA;
