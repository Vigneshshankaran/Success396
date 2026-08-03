import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, Sparkles, Zap, Search, Route, Users, Target, Clock, Globe, Shield } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import GlobalCTA from "@/components/GlobalCTA";
import FAQSection from "@/components/FAQSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import shaktiVideo from "@/assets/shakti.mp4";
import shakti1 from "@/assets/Shakti/1.webp";
import shakti2 from "@/assets/Shakti/2.webp";
import { fadeUp } from "@/lib/animations";

// fadeUp imported from @/lib/animations



const ProgramShakti = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Leadership Development Courses Online — SHAKTI by Success369</title>
        <meta name="description" content="SHAKTI is Success369's leadership development program — focused activation modules for leaders and teams ready to turn alignment into sharper execution and stronger influence. Available online and in-person." />
      </Helmet>
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={shaktiVideo} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 hero-overlay" />

        {/* Hero content — left-aligned, bottom-anchored */}
        <div className="absolute inset-0 flex items-end z-10">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pb-28 sm:pb-32">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                <Sparkles size={12} />
                Success369: ACTIVATE
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]"
            >
              Leadership Development Courses Online —{" "}
              <span className="text-primary text-glow italic">SHAKTI by Success369</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mb-8 sm:mb-10 max-w-xl text-lg sm:text-xl text-white/90 font-light"
            >
              SHAKTI is the leadership development training module of Success369, which involves people who are prepared to go ahead and are in alignment. SHAKTI Leadership Development Program, unlike traditional leadership development courses online, does not involve teaching of leadership skills. Instead, SHAKTI unlocks the innate leadership that is within us through removal of the blocks that prevent its expression.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <CTAButton to="/shakti-unfiltered-voice" size="md" variant="shimmer">
                Begin the SHAKTI Journey
              </CTAButton>
            </motion.div>
          </div>
        </div>
      </section>


      {/* --- WHAT YOU GAIN --- */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">What You Gain from SHAKTI</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto italic">"Movement becomes clean and confident — not forced."</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Sharper Execution", desc: "Translate your clarity into precise action.", icon: Target },
              { title: "Stronger Influence", desc: "Build credibility through alignment and presence.", icon: Sparkles },
              { title: "Team Alignment", desc: "Create execution rhythm without corporate jargon.", icon: Users },
              { title: "Usable Tools", desc: "Practical, immediately applicable activation frameworks.", icon: Shield }
            ].map((gain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-card/40 border border-border/30 hover:border-primary/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500 group-hover:text-white">
                  <gain.icon size={20} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="mb-3">{gain.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{gain.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center mt-14"
          >
            Most leadership development courses online and communication skills for leaders programs concentrate on frameworks and knowledge transfer. SHAKTI is different. It focuses on activation, translating what you already know into consistent, confident execution. The shift is not in what you learn, but in how you move.
          </motion.p>
        </div>
      </section>

      {/* --- WHO IT'S FOR (Foundation Style) --- */}
      <section className="section bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none -translate-x-1/2" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none translate-x-1/4 -translate-y-1/4" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14 md:mb-20 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-primary/60" />
              <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">
                Translation to Impact
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </div>
            <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Who Is This Leadership Development Program For?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              SHAKTI is for those who already have clarity and alignment — and are ready to move. This is an accelerator, not a starting point.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start pb-20">
            {[
              {
                image: shakti1,
                title: "Leaders & Teams in Motion",
                alt: "Leadership development for teams and organisations — SHAKTI by Success369",
                description: "Leaders strengthening presence and communication, and teams seeking alignment and execution rhythm. Translating purpose into performance.",
                step: "01",
              },
              {
                image: shakti2,
                title: "Journey Integration",
                alt: "Online leadership development for individuals emerging from MAYA, GITA or SARVAM",
                description: "Individuals and organisations emerging from MAYA, GITA, or SARVAM who need to translate their insights into real-world capability.",
                step: "02",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ marginTop: (index % 2 === 1) ? "100px" : "0px" }}
                className="group relative"
              >
                <span className="absolute -top-16 -right-8 font-display text-[10rem] md:text-[14rem] font-black text-foreground/[0.05] dark:text-foreground/[0.03] select-none pointer-events-none transition-all duration-1000 group-hover:text-primary/[0.08] group-hover:-translate-y-8 group-hover:-translate-x-4">
                  {card.step}
                </span>

                <div className="relative rounded-[2.5rem] border border-border/40 bg-card/30 backdrop-blur-2xl overflow-hidden transition-all duration-700 hover:border-primary/40 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
                  <div className="relative h-64 sm:h-80 md:h-[400px] overflow-hidden">
                    <motion.img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                  </div>

                  <div className="p-10 md:p-12">
                    <motion.div className="w-16 h-1 bg-primary/20 mb-8 overflow-hidden rounded-full">
                      <motion.div className="h-full bg-primary" initial={{ x: "-100%" }} whileInView={{ x: "0%" }} transition={{ duration: 1 }} />
                    </motion.div>
                    <h3 className="mb-4 text-2xl font-bold text-foreground tracking-tight">{card.title}</h3>
                    <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-3">
              For anyone from a personal leader seeking specific activation to a team needing leadership development, SHAKTI is available in ways that can work virtually, face-to-face, or both.
            </p>
            <p className="text-foreground font-semibold mb-6">Not sure which program fits where you are right now?</p>
            <CTAButton to="/programs" size="md" variant="outline">
              Compare all Success369 journeys
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* --- WHAT IS SHAKTI? (Process) --- */}
      <section className="section relative bg-card/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Activation Journey</span>
              <h2 className="mb-8">
                How does the <span className="text-primary italic">SHAKTI work on You?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-xl">
                SHAKTI is a focused activation journey rooted in the Catalysis pillar of Success369. It is not about working harder—it is about directing energy where it matters most.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                With 3–6 hour focused modules available online or in-person, SHAKTI fits into the schedule of working professionals and organisations without the commitment of a long-term leadership skills training online program or traditional leadership development course online.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Clock, label: "3–6 hours per module" },
                  { icon: Users, label: "Individual or Team" },
                  { icon: Globe, label: "Online or in-person" },
                  { icon: Zap, label: "Catalysis Rooted" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <span className="text-foreground/90 font-medium text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200"
                  alt="SHAKTI leadership development sessions — online and in-person"
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 p-6 rounded-2xl bg-card border border-primary/20 backdrop-blur-xl shadow-xl max-w-[200px]">
                <p className="text-primary font-display text-3xl font-bold mb-1">SHAKTI</p>
                <p className="text-muted-foreground text-xs leading-tight font-medium">Converting intention into outcomes through catalysis.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection
        title="Frequently Asked Questions About SHAKTI Leadership Development Program"
        description="How SHAKTI compares to other leadership development courses online — and who it's for."
        items={[
          {
            question: "What makes SHAKTI different from other leadership development courses?",
            answer: "Most leadership development courses online and leadership communication training courses teach leadership as a set of skills and models. SHAKTI starts from a different assumption. You already have what it takes. The program focuses on removing what blocks your existing capability from becoming consistent output.",
            cta: { text: "Explore the full Success369 framework", href: "/success-369" }
          },
          {
            question: "Is SHAKTI available as an online leadership development course?",
            answer: "Yes. SHAKTI modules can be accessed in both online and offline modes, which have been specifically designed to accommodate the time frame of professionals. Each module lasts 3 to 6 hours and is conducted by a certified Success369 Facilitator."
          },
          {
            question: "Who should join the SHAKTI leadership development course online?",
            answer: "SHAKTI is designed for individuals who already have clarity and alignment and are ready to move. This includes leaders strengthening presence and execution, teams seeking alignment and rhythm, and organizations emerging from other Success369 journeys who need to translate insights into real-world capability."
          },
          {
            question: "How is SHAKTI different from other leadership development programs?",
            answer: "Most leadership development courses online are built on the assumption that leaders need more knowledge. SHAKTI is built on a different premise, that aligned leaders need activation, not more information. The result is sharper execution, stronger influence, and momentum that feels sustainable rather than forced."
          }
        ]}
      />
      
      <GlobalCTA
        title={
          <h2 className="text-white">
            Begin Your Leadership Development Journey with{" "}
            <span className="text-primary italic">SHAKTI</span>
          </h2>
        }
        description="Take a session to explore how SHAKTI can accelerate impact for you, your team, or your organisation."
        ctaText="Begin the SHAKTI Journey"
        ctaHref="/shakti-unfiltered-voice"
        showPillars={false}
      />

      <Footer />
    </div>
  );
};

export default ProgramShakti;
