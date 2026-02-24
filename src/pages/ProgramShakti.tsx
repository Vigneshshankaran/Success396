import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, Users, Puzzle, Workflow, MessageCircle, Crown, UsersRound, Flame } from "lucide-react";
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

const contentSections = [
  {
    icon: Sun,
    title: "Overview",
    content: "SHAKTI is the activation layer of the Success369 ecosystem. It's not a journey you enter — it's a force you apply. Modular, practical sessions that translate the insights from GITA, MAYA, or SARVAM into real-world capability. Think of SHAKTI as the bridge between understanding and embodiment.",
  },
  {
    icon: Users,
    title: "Who It's For",
    content: "Leaders who've gained clarity and now need to express it in their daily leadership. Teams that need alignment without corporate jargon. Organisations implementing culture change who need practical, applied activation at every level. Anyone in the Success369 ecosystem who wants to turn insight into action.",
  },
  {
    icon: Puzzle,
    title: "What SHAKTI Strengthens",
    content: "Authentic communication that creates trust instead of compliance. Decision-making rooted in values rather than pressure. Team dynamics that emerge from alignment rather than hierarchy. The ability to lead change without burning out yourself or your people.",
  },
  {
    icon: Workflow,
    title: "How SHAKTI Works",
    content: "SHAKTI is modular and applied — not linear. Sessions can be woven into any journey or delivered standalone. Each module is practical, experiential, and immediately applicable. There's no theory without practice, no insight without integration. SHAKTI adapts to your context, your team, and your real challenges.",
  },
];

const modules = [
  {
    icon: MessageCircle,
    title: "Clarity-Led Communication",
    description: "Express what matters with precision and warmth. Build trust through radical honesty, not performative transparency.",
  },
  {
    icon: Crown,
    title: "Credible Leadership Presence",
    description: "Lead from alignment, not authority. Develop a presence that inspires trust — not because of your title, but because of your congruence.",
  },
  {
    icon: UsersRound,
    title: "Aligned Teams & Trust Networks",
    description: "Build teams that operate from shared values rather than shared pressure. Create trust networks that outlast any individual.",
  },
  {
    icon: Flame,
    title: "Purpose-Driven Performance",
    description: "Connect organisational performance to human purpose. Build systems that sustain momentum without sacrificing meaning.",
  },
];

const ProgramShakti = () => {
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
              <Sun size={14} />
              Success369 — SHAKTI
            </motion.span>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6"
            >
              Activating
              <br />
              <span className="text-glow text-primary">Aligned Momentum</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Insight without application is incomplete. SHAKTI turns your clarity into capability — modular, practical, and immediately applicable.
            </motion.p>

            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton
                href="/#newsletter"
                size="md"
                variant="shimmer"
              >
                Explore SHAKTI
              </CTAButton>
              <CTAButton
                href="/#newsletter"
                size="md"
                variant="outline"
                icon={null as any}
              >
                Request a Session
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content sections */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
          {contentSections.map((section, i) => (
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

      {/* Where SHAKTI Fits */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-card/10 via-background to-card/10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative p-8 sm:p-12 rounded-3xl bg-card/30 backdrop-blur-sm border border-border/30 text-center"
          >
            <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">Ecosystem Position</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">Where SHAKTI Fits</h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              SHAKTI runs alongside every journey in the Success369 ecosystem. Whether you've just completed a GITA clarity session, you're deep in MAYA, or you're building your SARVAM architecture — SHAKTI activates what you've learned into how you lead, communicate, and perform every day.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["GITA", "MAYA", "SARVAM"].map((name) => (
                <span key={name} className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                  {name} + SHAKTI
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Example Modules */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-card/10 to-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">Example Modules</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              What SHAKTI looks like in practice
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-6 rounded-3xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_50px_-15px_hsl(var(--primary)/0.15)]"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <mod.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{mod.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{mod.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA
        title={
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-[1.1] mb-6 text-white uppercase tracking-wider">
            Ready to activate
            <br />
            <span className="text-primary italic">what you've learned?</span>
          </h2>
        }
        description="Request a SHAKTI session tailored to your context — individual, team, or organisation."
        ctaText="Explore SHAKTI"
        ctaHref="/#newsletter"
        showPillars={false}
      />

      <Footer />
    </div>
  );
};

export default ProgramShakti;