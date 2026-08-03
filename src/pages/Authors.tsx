import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Sparkles, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import CTAButton from "@/components/CTAButton";
import { fadeUp } from "@/lib/animations";
import trainer1 from "@/assets/trainer-1.webp";
import trainer2 from "@/assets/trainer-2.webp";

/* ─────────────────────────────────────────────  DATA (from the content brief only)  ───────────────────────────────────────────── */

const authors = [
  {
    image: trainer1,
    name: "Dr. Ajayya Kumar",
    role: "Author, Management Thinker, TEDx Speaker",
    alt: "Dr. Ajayya Kumar author of Success369 book",
    bio: "Dr. Ajayya Kumar is a management thinker, ethical investor, mentor, business advisor, and art curator based in the UAE and currently serving as the COO at Emircom, an ICT integrator based in the GCC region. In addition to his business endeavors, he has actively participated in the field of arts as Founder and Chief Curator of Sarvamangala Arts Initiative and Sarvamangala Trust. His contributions have been greatly acknowledged through numerous awards such as the Global Asian of the Year 2021-22 award by Asia One Magazine, the position as one of the World's Best Emerging Leaders 2022 in the Author category as per WCRC International, as well as being ranked one of the Most Influential Authors to Watch out for in 2023; he has also been titled “The Most Influential Management Thinker” by CIO Today magazine. With more than one million views as of 2021, he has become one of the most viewed TEDx speakers in the world, ranking 35th. As an author, he has authored six books, two of which made it to the Amazon bestseller list, including his latest book “Business Gita 2.0”. He has also co-authored “Lessons from 21 Films for the 21st Century Entrepreneurs”, “Formula-G” (Amazon #1 bestseller), and “Mindful Parenting”. The Ajayya Kumar book, Success 369, marks his first work that directly guides readers through a structured personal transformation, moving beyond management theory into an applied 369-day framework.",
  },
  {
    image: trainer2,
    name: "Praveen Parameswar",
    role: "Author, Lifologist, TEDx Speaker & CEO of Lifology",
    alt: "Praveen Parameswar — author of Success369 and CEO of Lifology",
    bio: "Praveen Parameswar is an Organization Development Strategist, “lifologist,” and researcher in human behavior located in Kerala, India. He works with Thoughts Academy, an organization whose focus is on developing training programs, consultations, and conducting research in organization development for MNC's, non-governmental organizations, and major government projects. He is also one of the founders of Lifology, a world record holder in the Guinness Book of Records for a career ecosystem for parents in India that helps them assist their children in making career decisions and has been recognized by Forbes India and Fortune India. Praveen holds a Strategic Management degree from the London School of Economics, an MBA in HR at a rank-holder position from Cardiff University (UK), an M.A. in International Business Law from ICFAI Hyderabad, a law degree from University of Kerala and has won the Sir Julian Hodge prize in the UK for his contribution in the field of human resource management. Apart from being a corporate entrepreneur, he is a renowned TEDx speaker, a policy-maker in career planning and author of a book called 'Thinking Beyond the Paradigms' that breaks down the popular myths in life to make better decision-making possible. The Praveen Parameswar book, Success 369, is where his work in career ecosystems and human development moves beyond theory and into a structured, day-by-day path anyone can follow.",
  },
];

const faqItems = [
  {
    question: "What is Success 369 about?",
    answer: "Success 369 is a self-development book that offers its readers a systematic guide in terms of 369 days for their own development by integrating goal setting, strength/weakness analysis, and daily habits into the system.",
    cta: { text: "Learn about the Success369 method", href: "/success-369" },
  },
  {
    question: "Is Success 369 a workbook or a regular self-help book?",
    answer: "The Ajayya Kumar book and the Praveen Parameswar book come together here as a dual-format resource, part framework and part workbook, built from a combined lifetime of expertise in management thinking and human development.",
  },
  {
    question: "For Whom Success 369 is written?",
    answer: "The book is written for those who wish to grow either professionally or personally, with a structured method on how to develop discipline and attain long-term objectives, by aligning to their inner self.",
  },
  {
    question: "What makes success 369 different from other self-help methods?",
    answer: "What makes the system unique is that it integrates structured planning on a day-to-day basis along with the achievement of certain milestones and has been used in combination with an AI success model.",
  },
];

/* ─────────────────────────────────────────────  PAGE  ───────────────────────────────────────────── */

const Authors = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Meet the Authors — Dr. Ajayya Kumar & Praveen Parameswar | Success369</title>
        <meta
          name="description"
          content="Dr. Ajayya Kumar and Praveen Parameswar are the co-authors of Success 369 — a structured personal development framework built on Clarity, Congruence, and Catalysis."
        />
        <link rel="canonical" href="https://success369.org/authors" />
      </Helmet>

      <Navbar />

      {/* ════════ BANNER ════════ */}
      <section
        className="relative w-full bg-black flex items-center overflow-hidden"
        style={{ paddingTop: "var(--total-header-height)", minHeight: "92vh" }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 50% at 80% 40%, hsl(324 100% 46% / 0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 5% 90%, hsl(11 97% 72% / 0.12) 0%, transparent 60%)",
            }}
          />
        </div>
        <div className="absolute inset-0 hero-overlay z-[1]" />

        <div className="relative z-10 container-custom py-20 md:py-24 w-full">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            {/* copy */}
            <div>
              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-primary backdrop-blur-md">
                  <Sparkles size={12} /> The Authors
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="text-white leading-[1.1] mb-6"
              >
                Success 369 — Book by{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Dr. Ajayya Kumar &amp; Praveen Parameswar
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="max-w-xl text-lg sm:text-xl text-white/85 font-light"
              >
                Two practitioners. One framework. A lifetime of work distilled into 369 days.
              </motion.p>
            </div>

            {/* author photos */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="grid grid-cols-2 gap-4 sm:gap-6"
            >
              {authors.map((a) => (
                <figure key={a.name} className="relative rounded-3xl overflow-hidden border border-white/15 aspect-[3/4] shadow-2xl">
                  <img src={a.image} alt={a.alt} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-bold text-sm sm:text-base leading-tight">{a.name}</p>
                    <p className="text-white/60 text-[11px] sm:text-xs mt-1 leading-snug">{a.role}</p>
                  </figcaption>
                </figure>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════ WHO WROTE THE BOOK ════════ */}
      <section className="section bg-card/30">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase mb-4 block">Introduction</span>
            <h2 className="mb-6">Who Wrote the Success 369 Book?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Success 369 is a book by Dr. Ajayya Kumar and Praveen Parameswar, both practitioners having been involved
              for many years in the area where leadership, personal development, and human alignment intersect. The{" "}
              <strong className="text-foreground">Ajayya Kumar book</strong> brings decades of management philosophy and
              leadership advisory work. The <strong className="text-foreground">Praveen Parameswar book</strong>{" "}
              contributes over 21 years of career design and life education expertise. Together they form one common
              framework for success, built entirely on self-alignment and development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════ AUTHOR PROFILES ════════ */}
      <section className="section">
        <div className="container-custom max-w-5xl mx-auto space-y-16 lg:space-y-20">
          {authors.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-[minmax(0,440px)_1fr] gap-8 md:gap-12 items-start"
            >
              {/* photo */}
              <div className="relative w-full max-w-[440px] mx-auto md:mx-0">
                <div className="relative rounded-[2rem] overflow-hidden border border-primary/20 aspect-[3/4] shadow-2xl">
                  <img src={a.image} alt={a.alt} loading="lazy" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  <div className="absolute top-0 left-0 w-1 h-28 bg-gradient-to-b from-primary to-transparent" />
                  <span className="absolute top-5 right-6 font-display font-black text-6xl text-white/15 leading-none select-none">0{i + 1}</span>
                </div>
              </div>

              {/* bio */}
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Author {i + 1}</span>
                <h2 className="mb-2">{a.name}</h2>
                <p className="text-primary italic text-base sm:text-lg mb-5">{a.role}</p>
                <p className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed">{a.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════ THE BOOK ════════ */}
      <section className="section bg-card/30">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2.5rem] border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-8 sm:p-12"
          >
            <div className="flex items-center gap-2 mb-4 text-primary">
              <BookOpen size={18} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">The Book</span>
            </div>
            <h2 className="mb-6">The Book — Success 369</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Success 369 offers a structured 369-day path through which the reader undergoes a genuine personal
              transformation. Unlike most self-help books that stay at the level of theory, it functions as both a
              framework and a workbook, giving readers practical activities that translate understanding into daily
              discipline, across career goals, personal growth, or both.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              What sets it apart further is its integration with an AI-driven success framework. At the 2025 Sharjah
              International Book Fair, an AI humanoid robot was deployed to present the book's concepts, marking the first
              time such a presentation was organised in the region's history. Dr. Ajayya Kumar described the goal as
              making “personal transformation accessible, structured and measurable” and noted that AI makes this even
              more effective. Reader reviews on Amazon describe it as a systematic roadmap from ground zero to meaningful
              achievement.
            </p>
            <CTAButton to="/book" size="md" variant="shimmer">
              Get Your Copy
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <FAQSection
        title="Frequently Asked Questions About Success 369 & Its Authors"
        description="More about the book, the authors, and the 369-day framework."
        items={faqItems}
      />

      <Footer />
    </div>
  );
};

export default Authors;
