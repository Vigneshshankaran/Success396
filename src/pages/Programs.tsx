import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Compass, Users, Building2, Sparkles,
  Eye, Layers, Zap, Sun, ChevronRight,
} from "lucide-react";
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

const audiences = [
  {
    icon: Compass,
    title: "Individuals",
    description: "Professionals, founders, and seekers who sense a gap between where they are and who they could become. You're ready for depth, not just tips.",
  },
  {
    icon: Users,
    title: "Leaders",
    description: "Those shaping teams and cultures. You want leadership that's rooted in clarity and trust — not just strategy and authority.",
  },
  {
    icon: Building2,
    title: "Organisations",
    description: "Companies seeking sustainable transformation. You're ready to align people, purpose, and performance at every level.",
  },
];

const journeySteps = [
  { label: "Free Session", description: "First contact — low-pressure, high-value", href: "/#newsletter", color: "from-muted-foreground to-muted-foreground" },
  { label: "GITA", description: "A clarity shift before action", href: "/program-gita", color: "from-primary to-primary" },
  { label: "MAYA", description: "Seeing through unconscious momentum", href: "/program-maya", color: "from-primary to-pink-500" },
  { label: "SARVAM", description: "The complete architecture", href: "/program-sarvam", color: "from-pink-500 to-primary" },
];

const programCards = [
  {
    icon: Eye,
    title: "GITA",
    subtitle: "Clarity Shift",
    description: "A single powerful session that cuts through noise and reveals what's actually driving your decisions.",
    href: "/program-gita",
    cta: "Begin with Clarity",
  },
  {
    icon: Layers,
    title: "MAYA",
    subtitle: "Seeing Clearly",
    description: "A guided journey to dissolve the unconscious patterns that keep you stuck in loops you can't name.",
    href: "/program-maya",
    cta: "Explore MAYA",
  },
  {
    icon: Zap,
    title: "SARVAM",
    subtitle: "Complete Architecture",
    description: "The full transformation — from clarity through congruence to catalysis. For those ready for lasting change.",
    href: "/program-sarvam",
    cta: "Apply for SARVAM",
  },
  {
    icon: Sun,
    title: "SHAKTI",
    subtitle: "Activation Layer",
    description: "Modular, applied sessions that activate aligned momentum wherever you are in your journey.",
    href: "/program-shakti",
    cta: "Explore SHAKTI",
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[160px]" />

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible">
            <motion.span
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8 text-xs font-medium text-primary tracking-wide uppercase"
            >
              <Sparkles size={14} />
              Success369 Journeys
            </motion.span>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6"
            >
              Guided Growth,
              <br />
              <span className="text-glow text-primary">Not Forced Momentum</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Success369 Journeys are structured transformation experiences — designed to align who you are with how you lead, live, and grow.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <CTAButton
                href="#which-journey"
                size="md"
                variant="shimmer"
              >
                Find Your Journey
              </CTAButton>
              <CTAButton
                href="/#newsletter"
                size="md"
                variant="outline"
                icon={null as any}
              >
                Take a Free Session
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What are Success369 Journeys */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              <Sparkles size={14} />
              Understanding the Journeys
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8">
              What are Success369 Journeys?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              They are guided transformation experiences — not courses, not coaching, not therapy. Each Journey is a structured space where you confront what's real, dissolve what's unconscious, and build what's aligned.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
              Every Journey is built on the Success369 framework of <span className="text-foreground font-medium">Clarity</span>, <span className="text-foreground font-medium">Congruence</span>, and <span className="text-foreground font-medium">Catalysis</span> — and designed to meet you exactly where you are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-card/10 to-background" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">Our Philosophy</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Alignment before
                <br />
                <span className="text-primary">acceleration</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most growth frameworks push you to go faster. We believe speed without alignment creates burnout, not breakthroughs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Journeys are designed so that every step forward is rooted — in self-awareness, in values, in truth. When alignment comes first, momentum becomes natural.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative p-8 rounded-3xl bg-card/30 backdrop-blur-sm border border-border/30"
            >
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <blockquote className="text-foreground/90 text-lg sm:text-xl font-display leading-relaxed italic">
                "Don't chase success. Align with it — and watch it come to you."
              </blockquote>
              <p className="text-primary text-sm font-medium mt-4">— Success369 Principle</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who the Journeys are For */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">Who It's For</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              The Journeys meet you where you are
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {audiences.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative p-8 rounded-3xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_50px_-15px_hsl(var(--primary)/0.15)]"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <a.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">{a.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Progression */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/10 via-background to-card/10" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[300px] bg-primary/8 rounded-full blur-[150px] -translate-y-1/2" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">The Pathway</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              The Success369 Journey Progression
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Each Journey builds on the last. Begin wherever feels right — every starting point is valid.
            </p>
          </motion.div>

          {/* Desktop horizontal timeline */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-muted-foreground/20 via-primary/40 to-primary/20" />
              <div className="grid grid-cols-4 gap-6">
                {journeySteps.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                  >
                    <Link to={step.href} className="group block text-center">
                      <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] transition-shadow duration-300`}>
                        <span className="text-primary-foreground font-display font-bold text-sm">{i + 1}</span>
                      </div>
                      <h4 className="font-display font-bold text-lg mb-1 group-hover:text-primary transition-colors">{step.label}</h4>
                      <p className="text-muted-foreground text-xs">{step.description}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden space-y-6">
            {journeySteps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={step.href} className="group flex items-center gap-4 p-4 rounded-2xl bg-card/30 border border-border/30 hover:border-primary/30 transition-colors">
                  <div className={`w-12 h-12 shrink-0 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                    <span className="text-primary-foreground font-display font-bold text-sm">{i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-bold group-hover:text-primary transition-colors">{step.label}</h4>
                    <p className="text-muted-foreground text-xs">{step.description}</p>
                  </div>
                  <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SHAKTI Callout */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-card/10 to-background" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative p-8 sm:p-12 rounded-3xl bg-card/30 backdrop-blur-sm border border-border/30 overflow-hidden"
          >
            <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-primary/5 rounded-full blur-[100px]" />

            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sun size={20} className="text-primary" />
                  </div>
                  <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Supporting Layer</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                  SHAKTI — Activating Aligned Momentum
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  SHAKTI isn't a separate journey — it's the activation layer that runs alongside any programme. Modular, applied sessions that strengthen communication, leadership presence, and team alignment wherever you are in the ecosystem.
                </p>
              </div>
              <CTAButton
                to="/program-shakti"
                size="md"
                variant="outline"
                icon={null as any}
                className="whitespace-nowrap"
              >
                Explore SHAKTI
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Which Journey is Right for You */}
      <section id="which-journey" className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">Your Path</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Which Journey is right for you?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Each programme serves a different depth. There's no wrong entry point — only the one that matches where you are right now.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  to={card.href}
                  className="group block h-full p-6 rounded-3xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_50px_-15px_hsl(var(--primary)/0.15)]"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <card.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-1">{card.title}</h3>
                  <p className="text-primary text-xs font-medium mb-3">{card.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{card.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    {card.cta}
                    <ChevronRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA
        title={
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6 text-white uppercase tracking-wider">
            Not sure where to start?
            <br />
            <span className="text-primary italic">Start with a free session.</span>
          </h2>
        }
        description="A free, no-pressure conversation to explore what's alive for you — and which Journey might be right."
        ctaText="Take a Free Session"
        ctaHref="/#newsletter"
        showPillars={false}
      />

      <Footer />
    </div>
  );
};

export default Programs;