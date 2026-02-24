import { motion } from "framer-motion";
import { Headphones, Mic, Play, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import GlobalCTA from "@/components/GlobalCTA";
const podcastCover1 = "https://images.unsplash.com/photo-1478737270239-2fccd27ee086?auto=format&fit=crop&q=80&w=800";
const podcastCover2 = "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const podcasts = [
  {
    title: "The Success369 Podcast",
    host: "with the Success369 Team",
    image: podcastCover1,
    description:
      "The Success369 Podcast brings together thought leaders, coaches, and visionaries to explore powerful ideas in personal growth, clarity, and sustainable success.",
    longDescription:
      "Join us every week as we unpack transformational frameworks, share real stories of aligned growth, and challenge the conventional narratives around success. This podcast is your weekly companion for building a life of clarity, congruence, and catalysis.",
    platforms: [
      { label: "Apple Podcasts", href: "#" },
      { label: "Spotify", href: "#" },
      { label: "Google Podcasts", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  },
  {
    title: "Aligned Leaders",
    host: "with Success369 Coaches",
    image: podcastCover2,
    description:
      "Plug into the minds of leaders who are rewriting the rules of high performance at work—through alignment, not force.",
    longDescription:
      "Aligned Leaders explores how organisations and teams can create cultures of sustainable growth. Each episode features deep conversations with founders, executives, and coaches who lead with clarity and purpose.",
    platforms: [
      { label: "Apple Podcasts", href: "#" },
      { label: "Spotify", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  },
];

const featuredEpisodes = [
  {
    title: "Why Clarity Comes Before Action",
    podcast: "The Success369 Podcast",
    duration: "42 min",
    description: "Exploring the GITA framework and why most people skip the most important step in their growth journey.",
  },
  {
    title: "Breaking Free from Unconscious Patterns",
    podcast: "The Success369 Podcast",
    duration: "38 min",
    description: "A deep dive into MAYA and how hidden beliefs silently shape our decisions and outcomes.",
  },
  {
    title: "Building Teams That Don't Burn Out",
    podcast: "Aligned Leaders",
    duration: "45 min",
    description: "How aligned leadership creates sustainable high performance without sacrificing wellbeing.",
  },
  {
    title: "The Architecture of Sustainable Success",
    podcast: "The Success369 Podcast",
    duration: "51 min",
    description: "Understanding the SARVAM journey and why complete transformation requires a complete architecture.",
  },
  {
    title: "Purpose-Driven Performance",
    podcast: "Aligned Leaders",
    duration: "36 min",
    description: "Why organisations anchored in purpose consistently outperform those driven by metrics alone.",
  },
  {
    title: "From Momentum to Alignment",
    podcast: "The Success369 Podcast",
    duration: "40 min",
    description: "The shift from chasing goals to building a life where success flows from who you are.",
  },
];

const Podcast = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
              <Headphones size={14} />
              Podcast
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-6"
          >
            Personal Growth At{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
              Your Fingertips
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Use Success369 Podcasts to gain clarity, build alignment, and elevate your personal and professional growth in every area of life.
          </motion.p>
        </div>
      </section>

      {/* Podcast Shows */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20">
          {podcasts.map((podcast, idx) => (
            <motion.div
              key={podcast.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className={`flex flex-col ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 items-center`}
            >
              {/* Cover */}
              <div className="w-full max-w-[320px] shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-br from-primary/30 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={podcast.image}
                    alt={podcast.title}
                    className="relative w-full aspect-square rounded-2xl object-cover border border-border/30 shadow-2xl"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 space-y-5">
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold mb-1">
                    {podcast.title}
                  </h2>
                  <p className="text-muted-foreground font-medium">{podcast.host}</p>
                </div>

                <p className="text-foreground/90 leading-relaxed">{podcast.description}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {podcast.longDescription}
                </p>

                <div>
                  <p className="text-muted-foreground text-sm font-medium mb-3">
                    Listen here:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {podcast.platforms.map((platform) => (
                      <a
                        key={platform.label}
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-all duration-300 group"
                      >
                        <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                        {platform.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Episodes */}
      <section className="py-16 sm:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.03] to-background" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Featured Episodes
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Start with these powerful conversations that capture the essence of the Success369 philosophy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredEpisodes.map((ep, i) => (
              <motion.div
                key={ep.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                className="group bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Play size={16} className="text-primary ml-0.5" />
                  </div>
                  <div>
                    <p className="text-xs text-primary font-medium">{ep.podcast}</p>
                    <p className="text-xs text-muted-foreground">{ep.duration}</p>
                  </div>
                </div>

                <h3 className="font-display font-semibold text-foreground mb-2 leading-snug">
                  {ep.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {ep.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA
        title={
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-white uppercase tracking-wider">
            Never Miss <span className="text-primary italic">an Episode</span>
          </h2>
        }
        description="Subscribe to our podcasts and get weekly insights on clarity, alignment, and sustainable success delivered straight to your ears."
        ctaText="Take a Free Session"
        ctaHref="/free-session"
        showPillars={false}
      />

      <Footer />
    </div>
  );
};

export default Podcast;