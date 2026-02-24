import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Users, Eye, Target, Clock, Shield } from "lucide-react";
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

const phases = [
  {
    icon: Eye,
    title: "Clarity",
    subtitle: "See with precision",
    description: "Dissolve the fog. Understand who you truly are beneath the roles, titles, and expectations. Map the gap between your current operating system and your deepest values.",
  },
  {
    icon: Target,
    title: "Congruence",
    subtitle: "Align action with truth",
    description: "Bridge the distance between what you say matters and how you actually live. Build radical honesty as a daily practice — with yourself, your team, and your organisation.",
  },
  {
    icon: Zap,
    title: "Catalysis",
    subtitle: "Ignite sustainable momentum",
    description: "When clarity and congruence converge, transformation becomes inevitable. Remove friction so growth happens naturally — not through force, but through alignment.",
  },
];

const contentSections = [
  {
    icon: Zap,
    title: "Overview",
    content: "SARVAM is the complete architecture for sustainable success — a deep, extended journey through all three pillars of the Success369 framework. It's not a programme you attend. It's a transformation you undertake. SARVAM integrates clarity, congruence, and catalysis into a unified experience that restructures how you lead, relate, and grow.",
  },
  {
    icon: Users,
    title: "Who It's For",
    content: "Senior leaders, founders, and high-impact professionals who are done with incremental improvement. People who've done the inner work before and are ready for the complete architecture. Organisations ready to invest in the deepest level of leadership transformation for their key people.",
  },
  {
    icon: Clock,
    title: "Duration & Format",
    content: "SARVAM unfolds over an extended period — typically 6 to 12 months — with a combination of intensive sessions, reflection periods, integration practices, and ongoing stewardship. The format is bespoke, adapting to your pace, your context, and your depth of readiness.",
  },
  {
    icon: Shield,
    title: "Stewardship & Responsibility",
    content: "SARVAM is a significant commitment — for both participant and guide. Entry is by application, not purchase. We take responsibility for ensuring readiness, and we steward the process with the seriousness it deserves. This is not a product. It's a partnership in transformation.",
  },
];

const ProgramSarvam = () => {
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
              <Zap size={14} />
              Success369 — SARVAM
            </motion.span>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6"
            >
              The Complete Architecture for
              <br />
              <span className="text-glow text-primary">Sustainable Success</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              The deepest journey in the Success369 ecosystem. SARVAM integrates clarity, congruence, and catalysis into a complete transformation experience.
            </motion.p>

            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton
                href="/#newsletter"
                size="md"
                variant="shimmer"
              >
                Apply for SARVAM
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

      {/* Overview & Who it's for */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
          {contentSections.slice(0, 2).map((section, i) => (
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

      {/* Three Phases */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-card/10 via-background to-card/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">How the Journey Unfolds</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Three phases. One transformation.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative p-8 rounded-3xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_50px_-15px_hsl(var(--primary)/0.15)]"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <phase.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-1">{phase.title}</h3>
                <p className="text-primary text-sm font-medium mb-4">{phase.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Duration & Stewardship */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-card/10 to-background" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
          {contentSections.slice(2).map((section, i) => (
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
            Ready for the complete
            <br />
            <span className="text-primary italic">transformation?</span>
          </h2>
        }
        description="SARVAM is by application only. Speak with us to explore if this is the right time."
        ctaText="Apply for SARVAM"
        ctaHref="/#newsletter"
        showPillars={false}
      />

      <Footer />
    </div>
  );
};

export default ProgramSarvam;