import { motion } from "framer-motion";
import { Headphones, Mic, Play, ExternalLink, Youtube, Sparkles, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import GlobalCTA from "@/components/GlobalCTA";
import model369Video from "@/assets/Model 369.mp4";
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
      <section className="relative min-h-[90vh] flex items-end pt-20 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <video 
            src={model369Video}
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
          />
          {/* Hero Overlay System */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 pb-28 sm:pb-32">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-xl mb-6"
            >
              <Headphones size={14} className="text-primary" />
              <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">Success369 Podcast Network</span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              Personal Growth At <br />
              <span className="italic text-primary text-glow font-light">Your Fingertips</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg sm:text-xl leading-relaxed font-light text-muted-foreground/90 mb-10 max-w-2xl"
            >
              Use Success369 Podcasts to gain clarity, build alignment, and elevate your personal and professional growth in every area of life.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-4">
              <CTAButton href="#shows" size="lg" variant="shimmer" className="px-10">
                Explore Shows
              </CTAButton>
              <CTAButton href="#watch" size="lg" variant="outline" className="px-10 border-white/10 hover:border-primary/50">
                Watch on YouTube
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- NEW: YOUTUBE FEATURED SECTION --- */}
      <section id="watch" className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/[0.02]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 justify-center w-full">
              <span className="h-[1px] w-8 bg-primary/60" />
              <p className="font-display text-xs uppercase tracking-[0.4em] text-primary font-bold">
                Watch Latest Episodes
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">Visual <span className="italic font-normal">Transformation.</span></h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group lg:max-w-5xl mx-auto"
          >
            {/* YouTube Embed Container */}
            <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&rel=0" 
                title="Success369 Featured Episode"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Interactive Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[80px] -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-[80px] -z-10 animate-pulse" />
          </motion.div>

          <div className="mt-12 text-center">
             <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-primary font-bold tracking-[0.2em] uppercase text-xs group"
             >
                Subscribe on YouTube <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
        </div>
      </section>

      {/* Podcast Shows */}
      <section id="shows" className="py-16 sm:py-32 relative bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-32">
          {podcasts.map((podcast, idx) => (
            <motion.div
              key={podcast.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className={`relative flex flex-col ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 md:gap-20 items-center group`}
            >
              {/* Background Number Pattern */}
              <span className={`absolute -top-12 ${idx % 2 === 0 ? "-right-8" : "-left-8"} font-display text-[12rem] font-black text-foreground/[0.03] select-none pointer-events-none transition-all duration-1000 group-hover:text-primary/[0.07] group-hover:-translate-y-4`}>
                0{idx + 1}
              </span>
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
              <div className="relative flex-1 space-y-8 z-10">
                <div>
                  <h2 className="font-display text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 uppercase tracking-tight">
                    {podcast.title}
                  </h2>
                  <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] opacity-60 italic">{podcast.host}</p>
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

      {/* --- JOIN AS A GUEST --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-12 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Mic size={32} className="text-primary" />
              </div>
              <h2 className="font-display text-4xl font-bold text-white mb-6">Have a story worth <span className="italic text-primary">sharing?</span></h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
                We're always looking for aligned leaders and visionaries to join our conversations. If you're building something that matters, we want to hear from you.
              </p>
              <CTAButton href="mailto:podcast@success369.com" variant="shimmer" size="lg" className="px-12">
                Apply to be a Guest
              </CTAButton>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          </motion.div>
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