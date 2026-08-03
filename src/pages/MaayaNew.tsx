import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Sparkles,
  Fingerprint,
  Compass,
  Scale,
  Flame,
  ArrowRight,
  Quote,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalCTA from "@/components/GlobalCTA";
import CTAButton from "@/components/CTAButton";
import { fadeUp } from "@/lib/animations";

/* ─────────────────────────────────────────────  DATA  ───────────────────────────────────────────── */

const transformation = [
  { icon: Fingerprint, num: "01", title: "Identity", desc: "Beyond your title — who are you? Interests, strengths, values and context become a clear identity and purpose statement." },
  { icon: Compass, num: "02", title: "Aspiration", desc: "You define what success must mean across life, work, relationships, health, contribution and legacy." },
  { icon: Scale, num: "03", title: "Alignment", desc: "Actions, calendar, behaviour, values and perception are examined against the future you want to build." },
  { icon: Flame, num: "04", title: "Catalysis", desc: "The specific skill sets are identified — communication, brand, networking, credibility, influence — based on your roadmap." },
];

const steps = [
  { n: "01", title: "Beyond My Title", desc: "The starting point is identity. You examine interests, strengths, values and context to understand what is authentic, repeatable and worth building around." },
  { n: "02", title: "The Wheel of Life", desc: "You score 13 dimensions of life — current reality against your aspirational target. The gap between the two becomes your growth map." },
  { n: "03", title: "The Alignment Gap", desc: "Maaya examines whether your present life is structurally supporting your desired future — across aspiration, action, values and perception." },
  { n: "04", title: "Blocker Scan", desc: "The gap is diagnosed. The reason may not be ambition — it may be time structure, visibility, confidence, skill depth, environment or overcommitment." },
  { n: "05", title: "Focused Catalysis", desc: "Only after clarity and alignment does Maaya prescribe skill development — making the plan personal, relevant and measurable." },
  { n: "06", title: "Personal Blueprint", desc: "You leave with a practical blueprint for the next chapter: identity, aspiration, life priorities, alignment gaps, capability focus and a 369-day roadmap." },
];

const questions = [
  { b: "Aspiration ↔ Action", s: "Does my calendar honour my future?" },
  { b: "Potential ↔ Reality", s: "Am I living at the level I am capable of?" },
  { b: "Values ↔ Visibility", s: "Are my values visible in my behaviour?" },
  { b: "Identity ↔ Perception", s: "Does the world experience me as I intend?" },
];

const miles = [
  { hrs: "HRS 1–4", ms: "Orientation" },
  { hrs: "HRS 5–10", ms: "Clarity" },
  { hrs: "HRS 11–14", ms: "Wheel of Life" },
  { hrs: "HRS 15–18", ms: "Congruence" },
  { hrs: "HRS 19–20", ms: "Blockers" },
  { hrs: "HRS 21–22", ms: "Catalysis" },
  { hrs: "HRS 23–24", ms: "Blueprint" },
];

const outputs = [
  { num: "OUTPUT 01", title: "Identity Statement", desc: "Who you are beyond your title — your strengths, values, and the contribution only you can make." },
  { num: "OUTPUT 02", title: "Life Blueprint", desc: "A scored Wheel of Life across 13 dimensions — current reality mapped against aspirational targets." },
  { num: "OUTPUT 03", title: "Catalysis Roadmap", desc: "A focused capability plan across the 3 forces most critical to your next chapter — not all nine." },
];

const voices = [
  { m: "PN", quote: "Before Maaya I thought I was already clear about myself. Now I know my core strength — and exactly where to focus.", name: "Praveen Gopinathan Nair", role: "Business" },
  { m: "PR", quote: "Success, for me, doesn't have to mean relentlessly working toward something ‘extraordinary’ at the cost of everything else.", name: "Pooja Radhakrishnan", role: "Orthodontist" },
  { m: "MV", quote: "A good way to discover yourself — and to identify the areas where your progress has stalled.", name: "Murtuza Viramgamwala", role: "Director, Europe" },
  { m: "BR", quote: "I stopped trying to control everything — focusing only on what's within my control, and going with the flow for the rest.", name: "Bharath Radhakrishnan", role: "Startup Co-Founder" },
  { m: "SS", quote: "Even if you walk away with just one useful idea to reach your ambition — that's already a win.", name: "Sankaranarayanan S", role: "Independent Consultant (Retd.)" },
];

const chips = ["Designed on Curriculum 2030", "University of Helsinki & Lifology", "By invitation"];

/* reusable section header */
const SectionHead = ({ eyebrow, title, sub, center }: { eyebrow: string; title: React.ReactNode; sub?: string; center?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className={`mb-12 md:mb-16 ${center ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}
  >
    <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase mb-4 block">{eyebrow}</span>
    <h2 className="mb-0">{title}</h2>
    {sub && <p className="text-muted-foreground text-lg mt-4">{sub}</p>}
  </motion.div>
);

/* ─────────────────────────────────────────────  PAGE  ───────────────────────────────────────────── */

const MaayaNew = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Self Alignment Coaching | Identity and Purpose Coaching — MAAYA</title>
        <meta
          name="description"
          content="MAAYA is Success369's self alignment coaching journey for individuals who are progressing but feel something is off. Guided 1:1 sessions with a certified Success369 facilitator."
        />
        <link rel="canonical" href="https://success369.org/maaya" />
      </Helmet>

      <Navbar />

      {/* ════════ HERO ════════ */}
      <section
        className="relative w-full bg-black flex items-center overflow-hidden"
        style={{ paddingTop: "var(--total-header-height)", minHeight: "100vh" }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 80% 30%, hsl(324 100% 46% / 0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 5% 85%, hsl(11 97% 72% / 0.12) 0%, transparent 60%)",
            }}
          />
        </div>
        <div className="absolute inset-0 hero-overlay z-[1]" />

        <div className="relative z-10 container-custom py-20 md:py-28 w-full">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="min-w-0">
              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-primary backdrop-blur-md">
                  <Sparkles size={12} /> A Success369 Experience
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="text-white leading-[1.02] mb-6 font-display text-6xl sm:text-7xl md:text-8xl"
              >
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent text-glow">
                  Maaya
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="max-w-md text-xl sm:text-2xl font-semibold text-white leading-snug mb-4"
              >
                Compound your success by pursuing the aspirations you'd long forgotten.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="max-w-xl text-base sm:text-lg text-white/75 font-light mb-8"
              >
                A visually guided transformation experience for ambitious individuals — through structured life design,
                not another generic course.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={4}
                className="flex flex-wrap gap-3 mb-8"
              >
                {chips.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/70 border border-white/15 bg-white/5 px-3.5 py-2 rounded-full"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {c}
                  </span>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={5}
                className="flex flex-wrap items-center gap-3 sm:gap-4"
              >
                <CTAButton href="#journey" variant="shimmer" size="md">
                  Explore the journey
                </CTAButton>
                <CTAButton
                  href="#apply"
                  variant="outline"
                  size="md"
                  icon={null}
                  className="text-white border-white/25 hover:text-white hover:border-primary/60"
                >
                  Request an invitation
                </CTAButton>
              </motion.div>
            </div>

            {/* feature quote */}
            <motion.figure
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="relative min-w-0 rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-6 sm:p-10"
            >
              <Quote size={40} className="text-primary mb-4" />
              <blockquote className="text-xl sm:text-2xl font-semibold text-white leading-snug">
                Success, for me, doesn't have to mean relentlessly working toward something ‘extraordinary’ at the cost
                of everything else.
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-7">
                <span className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent grid place-items-center text-white font-bold">
                  PR
                </span>
                <span>
                  <span className="block text-white font-bold leading-tight">Pooja Radhakrishnan</span>
                  <span className="block text-sm text-white/50">Orthodontist</span>
                </span>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </section>

      {/* ════════ TENSION BAND ════════ */}
      <div className="bg-gradient-to-r from-primary to-accent py-8 px-6 text-center">
        <p className="text-white text-lg md:text-2xl font-display font-bold tracking-wide uppercase">
          Clarity &nbsp;·&nbsp; Congruence &nbsp;·&nbsp; Catalysis
        </p>
      </div>

      {/* ════════ TRANSFORMATION MAP ════════ */}
      <section className="section bg-card/30" id="experience">
        <div className="container-custom">
          <SectionHead
            eyebrow="The transformation map"
            title={<>What Maaya does to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">an individual</span></>}
            sub="Maaya converts reflection into a structured growth pathway — identity, aspiration, alignment, and the specific capabilities your next chapter actually requires."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformation.map((c, i) => (
              <motion.div
                key={c.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-8 rounded-3xl bg-card/60 border border-border/40 hover:border-primary/40 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                  <c.icon size={20} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="font-display font-extrabold text-primary text-sm tracking-[0.1em] mb-2">{c.num}</div>
                <h3 className="text-lg mb-3">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ THE JOURNEY ════════ */}
      <section className="section" id="journey">
        <div className="container-custom">
          <SectionHead
            eyebrow="The journey"
            title={<>Six stages. <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">One blueprint.</span></>}
            sub="Each stage reveals what shifts inside you — and what concrete output you walk away with."
          />
          <div className="grid gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="grid grid-cols-[auto_1fr] gap-5 items-start p-6 sm:p-7 rounded-2xl bg-card/50 border border-border/40 hover:border-primary/30 transition-all"
              >
                <span className="w-12 h-12 rounded-xl bg-primary/10 grid place-items-center font-display font-extrabold text-primary text-lg shrink-0">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-lg mb-1.5">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* alignment questions band */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-8 sm:p-12"
          >
            <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase mb-4 block">The alignment gap</span>
            <h3 className="text-2xl md:text-3xl mb-8 max-w-lg">Four questions most people never stop to ask.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {questions.map((q) => (
                <div key={q.b} className="border-l-2 border-primary/60 pl-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1.5">{q.b}</div>
                  <div className="text-lg font-semibold leading-snug">{q.s}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════ ROADMAP ════════ */}
      <section className="section bg-card/30" id="roadmap">
        <div className="container-custom">
          <SectionHead
            eyebrow="The roadmap"
            title={<>24 hours. <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">12 days.</span></>}
            sub="The road ahead is structured, not rushed — clarity, congruence and catalysis, one stage at a time."
          />
          <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {miles.map((m, i) => (
              <motion.div
                key={m.hrs}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="p-5 rounded-2xl bg-card/50 border border-border/30 text-center"
              >
                <div className="w-4 h-4 rounded-full bg-primary mx-auto mb-4 ring-4 ring-primary/15" />
                <div className="text-xs font-display font-extrabold tracking-wider text-primary">{m.hrs}</div>
                <div className="text-sm font-semibold mt-1 leading-tight">{m.ms}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ OUTCOME ════════ */}
      <section className="section">
        <div className="container-custom">
          <SectionHead
            eyebrow="The outcome"
            title={<>Maaya is not a training programme. It's a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">structured alignment experience.</span></>}
            sub="Most programmes begin with skills. Maaya begins one step earlier — helping you identify which skills are truly worth building for the life, impact and legacy you want. The outcome is not motivation. It's clarity you can act on — starting the very next morning."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outputs.map((o, i) => (
              <motion.div
                key={o.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative p-8 rounded-3xl bg-card/50 border border-border/40"
              >
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3">{o.num}</div>
                <h3 className="text-lg mb-2">{o.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ VOICES ════════ */}
      <section className="section bg-card/30" id="voices">
        <div className="container-custom">
          <SectionHead
            eyebrow="Voices"
            title={<>What participants <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">realised</span></>}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {voices.map((v, i) => (
              <motion.figure
                key={v.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex flex-col gap-4 p-7 rounded-3xl bg-card/50 border border-border/40 hover:border-primary/30 transition-all"
              >
                <blockquote className="text-foreground/90 leading-relaxed">“{v.quote}”</blockquote>
                <figcaption className="flex items-center gap-3 mt-auto">
                  <span className="w-11 h-11 rounded-full bg-gradient-to-r from-primary to-accent grid place-items-center text-white font-bold text-sm">
                    {v.m}
                  </span>
                  <span>
                    <span className="block text-sm font-bold leading-tight">{v.name}</span>
                    <span className="block text-xs text-muted-foreground">{v.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ APPLY / CLOSING CTA ════════ */}
      <GlobalCTA
        kind="button"
        title={<h2 className="text-white">Begin your Maaya.</h2>}
        description="Maaya runs as small, invitation-only cohorts. If clarity is the next thing you need, request an invitation — we'll take it from there."
        ctaText="Request an invitation"
        ctaHref="/contact"
        variant="shimmer"
        showPillars
        id="apply"
      />

      <Footer />
    </div>
  );
};

export default MaayaNew;
