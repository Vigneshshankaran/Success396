import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  ArrowRight, Compass, Users, Building2, Sparkles,
  Eye, Layers, Zap, Sun, ChevronRight, Target, Shield, Pause, Quote, Heart, Coffee, MoveDown
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import GlobalCTA from "@/components/GlobalCTA";
import journeyVideo from "@/assets/Journey op 1.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const pathwaySteps = [
  { icon: Pause, label: "Pause", description: "Phase 1: GITA", color: "bg-primary/20" },
  { icon: Target, label: "Align", description: "Phase 2: MAYA", color: "bg-primary/20" },
  { icon: Building2, label: "Build", description: "Phase 3: SARVAM", color: "bg-primary/20" },
  { icon: Zap, label: "Activate", description: "Phase 4: SHAKTI", color: "bg-primary/20" },
];

const programCards = [
  {
    icon: Eye,
    title: "GITA",
    subtitle: "Clarity Before Action",
    description: "For decision points where perspective matters. Witness your direction before moving forward.",
    href: "/program-gita",
    outcome: "Clear direction and confident next steps.",
    cta: "Begin Your Clarity",
    phase: "Phase 1"
  },
  {
    icon: Layers,
    title: "MAYA",
    subtitle: "Realigning Unseen Patterns",
    description: "For those progressing outwardly but feeling inner friction. Dissolve invisible cycles.",
    href: "/program-maya",
    outcome: "Coherence, focus, and grounded momentum.",
    cta: "Explore the Unseen",
    phase: "Phase 2"
  },
  {
    icon: Shield,
    title: "SARVAM",
    subtitle: "Architecting Sustainable Success",
    description: "For individuals ready to build long-term value. Integrate identity, work, and legacy.",
    href: "/program-sarvam",
    outcome: "A stable success architecture that endures.",
    cta: "Begin the Architecture",
    phase: "Phase 3"
  },
  {
    icon: Sun,
    title: "SHAKTI",
    subtitle: "Activating Aligned Momentum",
    description: "For leaders and teams ready to execute. Translate alignment into real-world strength.",
    href: "/program-shakti",
    outcome: "Sharper execution without losing alignment.",
    cta: "Activate Momentum",
    phase: "Phase 4"
  },
];

const Programs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground/90 selection:bg-primary/30 overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-end pt-20 overflow-hidden bg-background/90">
        {/* Cinematic Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            src={journeyVideo}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
          {/* Hero Overlay System (matched to home page) */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20 z-10" />
        </div>

        <motion.div 
          style={{ scale: heroScale }}
          className="relative max-w-7xl mx-auto w-full text-left px-4 sm:px-6 pb-28 sm:pb-32 z-10"
        >
          <motion.div initial="hidden" animate="visible">
            <motion.div
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-xl mb-8"
            >
              <Sparkles size={12} className="text-primary" />
              <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">Building Success for the Meaning Economy</span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight text-white"
            >
              Build Success <br />
              <span className="italic text-primary text-glow">That Is Aligned.</span>
            </motion.h1>

            <motion.div custom={2} variants={fadeUp} className="max-w-2xl mb-12 space-y-6 text-left">
              <p className="text-lg sm:text-xl leading-relaxed font-light text-muted-foreground/90">
                In a world driven by speed and performance, many people are <span className="text-white font-medium">successful — but not fulfilled.</span>
                <br />
                Others are <span className="text-white font-medium">capable — but unclear.</span>
              </p>
              <p className="text-base sm:text-lg leading-relaxed font-light text-muted-foreground/70 italic">
                Success369 Journeys are designed to align who you are, what you value, and how you act — so success grows with clarity, confidence, and meaning.
              </p>
            </motion.div>

            <motion.div custom={3} variants={fadeUp} className="flex flex-col sm:flex-row justify-start items-center gap-6 mb-16">
              <CTAButton href="#journeys-intro" size="lg" variant="shimmer" className="px-10">
                Begin Your Journey
              </CTAButton>
              <CTAButton to="/free-session" size="lg" variant="outline" icon={null as any} className="px-10 border-white/10 hover:border-primary/50">
                Take a Free Session
              </CTAButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="flex justify-center text-primary/20"
            >
              <MoveDown className="animate-bounce" size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- WHAT ARE SUCCESS369 JOURNEYS? --- */}
      <section id="journeys-intro" className="py-24 sm:py-32 relative bg-black/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-primary/60" />
                <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">
                  Ready to Transition?
                </p>
                <span className="h-[1px] w-8 bg-primary/60" />
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-8 leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                What Are <br />
                <span className="italic">Success369 Journeys?</span>
              </h2>
            </motion.div>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  Structured, guided growth experiences that support real decisions and real transitions — across life, career, leadership, and enterprise.
                </p>
                <div className="flex flex-col gap-4 pt-4">
                  {["From uncertainty to clarity", "From misalignment to coherence", "From effort to meaningful momentum"].map((t, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shadow-[0_0_10px_rgba(197,160,89,0.5)]" />
                      <span className="text-white/70 group-hover:text-white transition-colors text-base">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl relative"
            >
              <Quote size={50} className="text-primary/10 absolute -top-8 -left-8" />
              <div className="space-y-6 relative z-10">
                <p className="font-display text-2xl sm:text-3xl italic font-light leading-snug text-white/90">
                  "These are not courses. They are journeys designed around readiness and responsibility."
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="h-[1px] w-12 bg-primary/30" />
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest opacity-60">The Success369 Methodology</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/[0.01] rounded-[3rem] -z-10 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- THE PATHWAY --- */}
      <section className="relative py-24 sm:py-40 overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-primary/60" />
              <p className="font-display text-xs uppercase tracking-[0.4em] text-primary font-bold">
                The Architectural Flow
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 leading-tight">The Success369 Pathway</h2>
            <div className="h-[1px] w-32 bg-primary/30 mx-auto mb-8" />
            <p className="text-primary/70 text-lg sm:text-xl font-light tracking-[0.2em] uppercase flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
              <span>Pause</span> 
              <ChevronRight size={16} className="opacity-20" /> 
              <span>Align</span> 
              <ChevronRight size={16} className="opacity-20" /> 
              <span>Build</span> 
              <ChevronRight size={16} className="opacity-20" /> 
              <span>Activate</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {pathwaySteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="relative text-center group"
              >
                {/* Background Number Pattern */}
                <span className="absolute top-0 left-12 font-display text-7xl font-black text-foreground/[0.03] select-none pointer-events-none transition-all duration-1000 group-hover:text-primary/[0.07] group-hover:-translate-y-4">
                  0{i + 1}
                </span>

                <div className="relative w-24 h-24 mx-auto rounded-3xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-8 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500 z-10">
                  <step.icon size={32} className="text-primary/60 group-hover:text-primary transition-all duration-500" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-white uppercase tracking-wider group-hover:text-primary transition-colors relative z-10">{step.label}</h3>
                <p className="text-primary/40 text-[9px] font-bold tracking-[0.3em] uppercase group-hover:opacity-100 transition-opacity relative z-10">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE JOURNEYS CARDS --- */}
      <section className="relative py-24 sm:py-40 bg-black/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-20">
             <h2 className="font-display text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">Explore the <span className="italic font-normal">Journeys</span></h2>
             <div className="h-[1px] w-24 bg-primary/20 mx-auto" />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="h-full"
              >
                <Link
                  to={card.href}
                  className="group flex flex-col h-full p-8 rounded-[2.5rem] bg-background border border-white/5 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl relative overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                      <card.icon size={24} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[9px] font-bold text-primary/20 group-hover:text-primary transition-colors tracking-[0.3em] uppercase">{card.phase}</span>
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold mb-2 text-white tracking-tight">{card.title}</h3>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6 opacity-60">{card.subtitle}</p>
                  
                  <p className="text-muted-foreground/80 text-sm leading-relaxed mb-8 flex-grow font-light group-hover:text-white/80 transition-colors">{card.description}</p>
                  
                  <div className="pt-6 border-t border-white/5 mt-auto">
                    <p className="text-white text-sm font-medium mb-10 leading-relaxed italic group-hover:text-primary transition-colors">"{card.outcome}"</p>
                    
                    <div className="flex items-center gap-3 text-xs font-bold text-white group-hover:text-primary transition-all duration-500">
                      <span className="tracking-widest uppercase">{card.cta}</span>
                      <ArrowRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHO IT'S FOR --- */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-end mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-primary/60" />
                <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">
                  Ready for Relevance?
                </p>
                <span className="h-[1px] w-8 bg-primary/60" />
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">Who It’s <span className="italic font-normal">For</span></h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
            >
               <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
                 You don’t need everything figured out. The journey meets you exactly where you are.
               </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Individuals", desc: "Seeking clarity and personal meaning.", icon: Heart },
              { label: "Professionals & Leaders", desc: "Navigating growth and responsibility.", icon: Users },
              { label: "Entrepreneurs", desc: "Building long-term value and legacy.", icon: Compass },
              { label: "Organisations", desc: "Aligning purpose and performance.", icon: Building2 }
            ].map((audience, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:border-primary/20 hover:bg-white/[0.03] transition-all duration-500 group"
              >
                <audience.icon size={24} className="text-primary/30 group-hover:text-primary mb-6 transition-all duration-500 group-hover:scale-110" />
                <h4 className="text-white text-lg font-bold mb-2 tracking-tight uppercase group-hover:text-primary transition-colors">{audience.label}</h4>
                <p className="text-sm text-muted-foreground font-light leading-relaxed group-hover:text-white/70 transition-colors">{audience.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CONVERSION --- */}
      <GlobalCTA
        title={
          <h2 className="font-display text-4xl sm:text-6xl font-bold mb-10 leading-[1.1] text-white">
            Begin Your <br /><span className="italic text-primary text-glow">Journey.</span>
          </h2>
        }
        description="If you’re unsure where to start, begin with a conversation. Understand your context. See your options clearly. Decide with confidence."
        ctaText="Take a Free Session"
        ctaHref="/free-session"
        showPillars={false}
      />

      <Footer />
    </div>
  );
};

export default Programs;