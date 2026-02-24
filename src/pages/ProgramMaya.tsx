import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Users, Search, Route, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import GlobalCTA from "@/components/GlobalCTA";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const sections = [
  {
    icon: Layers,
    title: "Overview",
    content: "Most people aren't stuck because they lack strategy. They're stuck because they're running on patterns they can't see. MAYA is the journey that makes the invisible visible — dissolving the unconscious momentum that keeps you looping through the same conflicts, ceilings, and compromises. This isn't about fixing behaviour. It's about seeing the operating system beneath it.",
  },
  {
    icon: Users,
    title: "Who It's For",
    content: "High-achievers who keep hitting the same walls despite changing strategies. Leaders whose teams mirror their own unresolved tensions. Professionals who've done the surface work — goal-setting, productivity systems, mindset hacks — and know something deeper is calling. People who are ready to see what they've been avoiding.",
  },
  {
    icon: Search,
    title: "What You Begin to See",
    content: "The inherited beliefs you've mistaken for your own. The emotional patterns that hijack your leadership. The way your 'strengths' sometimes function as defence mechanisms. The gap between your public confidence and your private doubt. MAYA reveals the architecture beneath your behaviour — not to judge it, but to free you from it.",
  },
  {
    icon: Route,
    title: "How the Journey Unfolds",
    content: "MAYA is a multi-session journey — not a single event. It unfolds over weeks, with guided sessions, reflection periods, and integration practices woven together. Each session builds on the last, progressively deepening your capacity to see clearly and choose consciously. The pace is deliberate — fast enough to maintain momentum, slow enough to integrate what surfaces.",
  },
  {
    icon: Heart,
    title: "Integration & Handholding Period",
    content: "Transformation isn't complete when the session ends — it's complete when the insight becomes embodied. MAYA includes a dedicated integration period with ongoing support, reflection prompts, and check-ins. You're not left alone with your revelations. You're guided through the process of making new awareness into new action.",
  },
];

const ProgramMaya = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/8 rounded-full blur-[140px]" />

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible">
            <motion.span
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8 text-xs font-medium text-primary tracking-wide uppercase"
            >
              <Layers size={14} />
              Success369 — MAYA
            </motion.span>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6"
            >
              Seeing Through
              <br />
              <span className="text-glow text-primary">Unconscious Momentum</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              You're not stuck because you lack ability. You're stuck because you can't see the pattern. MAYA makes the invisible visible.
            </motion.p>

            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton
                href="/#newsletter"
                size="md"
                variant="shimmer"
              >
                Explore MAYA
              </CTAButton>
              <CTAButton
                href="/#newsletter"
                size="md"
                variant="outline"
                icon={null as any}
              >
                Speak with Us
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content sections */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative p-8 rounded-3xl bg-card/30 backdrop-blur-sm border border-border/30"
            >
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <section.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold">{section.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <GlobalCTA
        title={
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-[1.1] mb-6 text-white uppercase tracking-wider">
            Ready to see what's been
            <br />
            <span className="text-primary italic">running the show?</span>
          </h2>
        }
        description="Reach out for a conversation about whether MAYA is the right journey for where you are now."
        ctaText="Explore MAYA"
        ctaHref="/#newsletter"
        showPillars={false}
      />

      <Footer />
    </div>
  );
};

export default ProgramMaya;