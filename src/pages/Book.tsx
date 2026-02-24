import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles, Eye, Target, Zap, Star, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import GlobalCTA from "@/components/GlobalCTA";
import bookHero from "@/assets/book-hero.jpg";
import bookPreview1 from "@/assets/book-preview-1.jpg";
import bookPreview2 from "@/assets/book-preview-2.jpg";
import bookPreview3 from "@/assets/book-preview-3.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const pillars = [
  {
    icon: Eye,
    title: "Clarity",
    subtitle: "See with precision",
    description:
      "Cut through the noise to understand who you are, what you value, and where you're headed. Clarity transforms every decision from a gamble into a conscious choice.",
    chapters: ["The Fog of Success", "Mapping Your True North", "Daily Clarity Rituals", "Leading with Vision"],
  },
  {
    icon: Target,
    title: "Congruence",
    subtitle: "Align action with truth",
    description:
      "Bridge the gap between what you say matters and how you actually live. Congruence is the practice of radical honesty with yourself — and the key to authentic leadership.",
    chapters: ["The Incongruence Trap", "Values Audit Framework", "Micro-Alignments", "The Trust Multiplier"],
  },
  {
    icon: Zap,
    title: "Catalysis",
    subtitle: "Ignite momentum",
    description:
      "When clarity and congruence converge, growth becomes inevitable. Catalysis isn't about pushing harder — it's about removing friction so transformation happens naturally.",
    chapters: ["The Catalyst Principle", "Small Shifts, Big Change", "Designing for Momentum", "Sustaining the Fire"],
  },
];

const testimonials = [
  { quote: "This book changed how I lead. I finally understand why effort alone was never enough.", author: "Sarah K.", role: "CEO, TechForward" },
  { quote: "Success369 gave me language for what I always felt but couldn't articulate. Deeply practical.", author: "James O.", role: "Executive Coach" },
  { quote: "I've read hundreds of leadership books. This one actually shifted something.", author: "Dr. Amira L.", role: "Organisational Psychologist" },
];

const faqs = [
  { q: "Who is this book for?", a: "Success369 is for leaders, founders, coaches, and anyone seeking sustainable growth — not through hustle, but through alignment. If you sense a gap between where you are and who you could be, this book meets you there." },
  { q: "Is this a self-help book?", a: "It's a leadership and transformation framework. While deeply personal, it's grounded in organisational psychology, systems thinking, and real-world case studies — not positive-thinking platitudes." },
  { q: "How is this different from other leadership books?", a: "Most books focus on strategy or mindset alone. Success369 integrates both through three interconnected pillars — Clarity, Congruence, and Catalysis — creating a framework that addresses the whole person, not just the professional." },
  { q: "Can I use this with my team?", a: "Absolutely. Many leaders use Success369 as a shared language across their organisations. The book includes reflection exercises designed for both individual and team use." },
  { q: "Is there a digital version available?", a: "Yes — the book is available in hardcover, paperback, and e-book formats. All editions include access to bonus digital resources and reflection worksheets." },
  { q: "What are the Success369 Journeys?", a: "Journeys are guided transformation programmes built on the book's framework. They go deeper with coaching, community, and structured experiences. The book is the foundation; the Journeys are the application." },
];

const Book = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={bookHero} alt="Success369 Book" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-primary/8 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32 w-full">
          <div className="max-w-2xl">
            <motion.div initial="hidden" animate="visible">
              <motion.span
                custom={0}
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8 text-xs font-medium text-primary tracking-wide uppercase"
              >
                <BookOpen size={14} />
                The Book
              </motion.span>

              <motion.h1
                custom={1}
                variants={fadeUp}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] mb-6"
              >
                The blueprint for
                <br />
                <span className="text-glow text-primary">sustainable success</span>
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-10 max-w-lg"
              >
                Discover the three-pillar framework that's transforming how leaders, teams, and organisations build success that lasts.
              </motion.p>

              <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-4">
                <CTAButton
                  href="#"
                  size="md"
                  variant="shimmer"
                >
                  Buy the Book
                </CTAButton>
                <CTAButton
                  href="#pillars"
                  size="md"
                  variant="outline"
                  icon={null as any}
                >
                  Explore What's Inside
                </CTAButton>
              </motion.div>

              <motion.div custom={4} variants={fadeUp} className="flex items-center gap-4 mt-10">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">
                  Rated 4.9/5 by <span className="text-foreground font-medium">2,400+ readers</span>
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Promise */}
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
              The Core Promise
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-8">
              Success isn't about doing more.
              <br />
              <span className="text-muted-foreground">It's about becoming aligned.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Most people chase success through effort, strategy, and willpower. But the leaders who create lasting impact understand something different: sustainable success comes from alignment — between who you are, what you do, and how you grow. This book shows you how.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Inside — Three Pillars */}
      <section id="pillars" className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">What's Inside</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Three pillars. One framework.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative p-8 rounded-3xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_50px_-15px_hsl(var(--primary)/0.15)]"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">{pillar.title}</h3>
                <p className="text-primary text-sm font-medium mb-4">{pillar.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{pillar.description}</p>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Key Chapters</p>
                  {pillar.chapters.map((ch) => (
                    <div key={ch} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary/60" />
                      {ch}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Images */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/10 via-background to-card/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">Inside the Pages</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              A book designed for depth
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {[bookPreview1, bookPreview2, bookPreview3].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative rounded-2xl overflow-hidden aspect-square"
              >
                <img
                  src={img}
                  alt={`Book preview ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-card/10 to-background" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">Reader Voices</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              What leaders are saying
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground/85 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">{t.author}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA
        title={
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6 text-white uppercase tracking-wider">
            Ready to build success
            <br />
            <span className="text-primary italic">that actually lasts?</span>
          </h2>
        }
        description="Start with the book. Go deeper with the Journeys. Either way, the first step is clarity."
        ctaText="Buy the Book"
        ctaHref="#"
        showPillars={false}
      />

      {/* FAQ */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            {/* Left heading - sticky */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">FAQ</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-[1.15] mb-4">
                Questions about
                <br />
                the book
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Everything you need to know before diving in.
              </p>
            </motion.div>

            {/* Right accordion */}
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left p-5 rounded-2xl bg-card/30 border border-border/30 hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                        {faq.q}
                      </h3>
                      <ChevronDown
                        size={18}
                        className={`text-muted-foreground shrink-0 transition-transform duration-300 ${
                          openFaq === i ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </div>
                    {openFaq === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-muted-foreground text-sm leading-relaxed mt-3 pr-8"
                      >
                        {faq.a}
                      </motion.p>
                    )}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Book;