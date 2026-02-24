import { motion } from "framer-motion";
import { 
  ArrowRight, BookOpen, Sparkles, Eye, Target, Zap, 
  Star, ChevronDown, Check, CreditCard, ShoppingCart, 
  Package, FileText, ShieldCheck, Bookmark, MoveDown, Quote
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import GlobalCTA from "@/components/GlobalCTA";
import { loadStripe } from "@stripe/stripe-js";
import bookVideo from "@/assets/Book.mp4";

// Note: Replace with actual Publishable Key from Stripe Dashboard
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "pk_test_placeholder");

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const pillars = [
  {
    icon: Eye,
    title: "Clarity",
    subtitle: "See with precision",
    description: "Cut through the noise to understand who you are, what you value, and where you're headed.",
    chapters: ["The Fog of Success", "Mapping Your True North", "Daily Clarity Rituals"],
  },
  {
    icon: Target,
    title: "Congruence",
    subtitle: "Align action with truth",
    description: "Radical honesty with yourself — the key to authentic and sustainable leadership.",
    chapters: ["The Incongruence Trap", "Values Audit Framework", "Micro-Alignments"],
  },
  {
    icon: Zap,
    title: "Catalysis",
    subtitle: "Ignite momentum",
    description: "When clarity and congruence converge, growth becomes natural and inevitable.",
    chapters: ["The Catalyst Principle", "Small Shifts, Big Change", "Designing for Momentum"],
  },
];

const bookFormats = [
  {
    id: "hardcover",
    title: "Hardcover Edition",
    price: "$29.00",
    description: "Premium cloth-bound edition for your library. Includes digital resources.",
    icon: BookOpen,
    priceId: import.meta.env.VITE_PRICE_ID_HARDCOVER || "price_placeholder_hardcover",
    features: ["High-quality print", "Bonus Worksheets", "Author's Signature (Ltd)"]
  },
  {
    id: "digital",
    title: "Digital Ecosystem",
    price: "$19.00",
    description: "Instant access to E-book, Audiobook, and Interactive Journal.",
    icon: FileText,
    priceId: import.meta.env.VITE_PRICE_ID_DIGITAL || "price_placeholder_digital",
    features: ["Kindle & PDF Formats", "Audiobook Included", "Interactive Journal"]
  }
];

const Book = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (priceId: string) => {
    setLoading(priceId);
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe failed to load");

      // In a real production app, you would call your backend here to create a checkout session.
      // For this implementation, we assume you're using Stripe Checkout redirects.
      // If using Stripe Payment Links, we'd just link directly to them.
      
      console.log(`Redirecting to checkout for: ${priceId}`);
      // Simple link to stripe session (In production, replace with actual session logic)
      window.open(`https://buy.stripe.com/test_${priceId}`, "_blank"); 
    } catch (err) {
      console.error("Checkout error:", err);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground/90 selection:bg-primary/30 overflow-x-hidden">
      <Navbar />

      {/* --- PREMIUM HERO --- */}
      <section className="relative min-h-[90vh] flex items-end pt-20 overflow-hidden bg-background/90">
         {/* Cinematic Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            src={bookVideo}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
          {/* Hero Overlay System (matched to home page) */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20 z-10" />
        </div>

        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 pb-28 sm:pb-32 z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
              <motion.div
                custom={0}
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-xl mb-6"
              >
                <Bookmark size={14} className="text-primary" />
                <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">The Definitive Guide to Alignment</span>
              </motion.div>

              <motion.h1
                custom={1}
                variants={fadeUp}
                className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6"
              >
                The Blueprint for <br />
                <span className="italic text-primary text-glow font-light">Sustainable Success</span>
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                className="text-lg sm:text-xl leading-relaxed font-light text-muted-foreground/90 mb-10 max-w-xl"
              >
                Discover the three-pillar framework that's transforming how leaders and entrepreneurs build impact that lasts — without the burnout.
              </motion.p>

              <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-6">
                <CTAButton href="#pricing" size="lg" variant="shimmer" className="px-10">
                  Secure Your Copy
                </CTAButton>
                <CTAButton href="#pillars" size="lg" variant="outline" className="px-10 border-white/10 hover:border-primary/50">
                  Explore What's Inside
                </CTAButton>
              </motion.div>

              <motion.div custom={4} variants={fadeUp} className="flex items-center gap-6 pt-4 border-t border-white/5 max-w-sm">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-primary fill-primary shadow-glow" />)}
                </div>
                <span className="text-sm font-light text-muted-foreground uppercase tracking-widest">Rated 4.9/5 by 2,400+ Readers</span>
              </motion.div>
            </motion.div>
        </div>
      </section>

      {/* --- THE CORE PROMISE --- */}
      <section className="py-24 sm:py-32 relative bg-black/40 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center gap-3 mb-8 justify-center w-full">
                <span className="h-[1px] w-8 bg-primary/60" />
                <p className="font-display text-xs uppercase tracking-[0.4em] text-primary font-bold">
                  The Core Philosophy
                </p>
                <span className="h-[1px] w-8 bg-primary/60" />
              </div>
              <h2 className="font-display text-4xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-10 leading-[1.1]">
                Success isn't about doing more. <br />
                <span className="italic font-light">It's about becoming aligned.</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
                Most people chase success through strategy and willpower. But the leaders who create lasting impact understand something different: sustainable success comes from alignment — between who you are, what you do, and how you grow.
              </p>
              <div className="h-[1px] w-24 bg-primary/30 mx-auto" />
            </motion.div>
        </div>
      </section>

      {/* --- THREE PILLARS --- */}
      <section id="pillars" className="py-32 sm:py-48 relative overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-28">
            <h2 className="font-display text-5xl sm:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">Three Pillars. <span className="italic font-normal">One Framework.</span></h2>
            <p className="text-muted-foreground text-xl font-light">The foundational architecture for modern transformation.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="group relative p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-700 overflow-hidden"
              >
                {/* Background Number Pattern */}
                <span className="absolute top-8 right-8 font-display text-8xl font-black text-foreground/[0.03] select-none pointer-events-none transition-all duration-1000 group-hover:text-primary/[0.07] group-hover:-translate-y-4">
                  0{i + 1}
                </span>

                <div className="relative w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-700 z-10">
                  <pillar.icon size={28} className="text-primary group-hover:text-white" />
                </div>
                <h3 className="font-display text-3xl font-bold text-white mb-2 uppercase tracking-wide relative z-10">{pillar.title}</h3>
                <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8 opacity-60 relative z-10">{pillar.subtitle}</p>
                <p className="text-muted-foreground/80 leading-relaxed text-lg font-light mb-12 relative z-10">{pillar.description}</p>
                
                <div className="relative space-y-4 pt-10 border-t border-white/5 z-10">
                   <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/40 mb-4">Key Insights</p>
                   {pillar.chapters.map(ch => (
                     <div key={ch} className="flex items-center gap-4 text-sm font-light text-white/50 group-hover:text-white/80 transition-colors">
                        <Check size={14} className="text-primary" />
                        {ch}
                     </div>
                   ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING & BUY NOW --- */}
      <section id="pricing" className="py-32 sm:py-48 relative bg-black/60 border-y border-white/10">
         {/* Internal depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05)_0%,transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="mb-24">
            <div className="inline-flex items-center gap-3 mb-8 justify-center w-full">
              <span className="h-[1px] w-8 bg-primary/60" />
              <p className="font-display text-xs uppercase tracking-[0.5em] text-primary font-bold">
                Ready to Start
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </div>
            <h2 className="font-display text-5xl sm:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-10">Secure Your <span className="italic font-normal">Blueprint.</span></h2>
            <p className="text-muted-foreground text-xl font-light">Choose the format that fits your journey.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {bookFormats.map((format, i) => (
              <motion.div
                key={format.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="relative p-12 sm:p-16 rounded-[4rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-2xl text-left flex flex-col group hover:border-primary/50 transition-all duration-700"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-700">
                    <format.icon size={28} className="text-primary group-hover:text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-white">{format.price}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">One Time Purchase</p>
                  </div>
                </div>

                <h3 className="font-display text-3xl font-bold text-white mb-4 tracking-tight">{format.title}</h3>
                <p className="text-muted-foreground font-light mb-10 text-lg leading-relaxed">{format.description}</p>

                <div className="space-y-4 mb-14 flex-grow">
                   {format.features.map(f => (
                     <div key={f} className="flex items-center gap-4 text-sm font-light text-white/70">
                        <Check size={16} className="text-primary" />
                        {f}
                     </div>
                   ))}
                </div>

                <button
                  disabled={loading === format.priceId}
                  onClick={() => handleCheckout(format.priceId)}
                  className="w-full py-6 rounded-2xl bg-primary text-white font-bold uppercase tracking-[0.2em] relative overflow-hidden group/btn hover:shadow-[0_0_40px_rgba(197,160,89,0.4)] transition-all flex items-center justify-center gap-4 disabled:opacity-50"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-101%] group-hover/btn:translate-x-[101%] transition-transform duration-1000" />
                  {loading === format.priceId ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <CreditCard size={18} />
                      Buy Now
                    </>
                  )}
                </button>
                
                <div className="flex items-center justify-center gap-2 mt-8 opacity-30">
                  <ShieldCheck size={14} className="text-primary" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white">Secure Checkout by Stripe</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 flex items-center justify-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
             <Package size={40} className="text-white" />
             <ShoppingCart size={40} className="text-white" />
             <CreditCard size={40} className="text-white" />
          </div>
        </div>
      </section>

      {/* Social Proof Voices */}
      <section className="py-32 sm:py-48 relative overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
           <div className="text-center mb-24">
              <div className="inline-flex items-center gap-3 mb-8 justify-center w-full">
                <span className="h-[1px] w-8 bg-primary/60" />
                <p className="font-display text-xs uppercase tracking-[0.4em] text-primary font-bold">
                  Reader Testimonials
                </p>
                <span className="h-[1px] w-8 bg-primary/60" />
              </div>
              <h2 className="font-display text-5xl sm:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">What Leaders <span className="italic font-normal">Experience.</span></h2>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
             {[
               { quote: "This book changed how I lead. I finally understand why effort alone was never enough.", author: "Sarah K.", role: "CEO, TechForward" },
               { quote: "Success369 gave me language for what I always felt but couldn't articulate. Deeply practical.", author: "James O.", role: "Executive Coach" },
               { quote: "I've read hundreds of leadership books. This one actually shifted something.", author: "Dr. Amira L.", role: "Organisational Psychologist" },
             ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-[3rem] bg-white/[0.01] border border-white/5 hover:border-primary/20 transition-all duration-700 group"
                >
                   <Quote size={40} className="text-primary/10 mb-8" />
                   <p className="text-xl text-white/90 font-light leading-relaxed mb-10 italic">"{item.quote}"</p>
                   <div className="flex items-center gap-4">
                      <div className="h-[1px] w-8 bg-primary/40" />
                      <div>
                        <p className="text-white font-bold tracking-tight">{item.author}</p>
                        <p className="text-xs uppercase tracking-widest text-primary/60">{item.role}</p>
                      </div>
                   </div>
                </motion.div>
             ))}
           </div>
        </div>
      </section>

      <GlobalCTA
        title={
          <h2 className="font-display text-5xl sm:text-8xl font-bold mb-12 leading-[0.9] text-white">
            Ready to <span className="italic text-primary text-glow">Build?</span>
          </h2>
        }
        description="Start with the book. Go deeper with the Journeys. Either way, the first step is clarity."
        ctaText="Take a Free Session"
        ctaHref="/free-session"
        showPillars={false}
      />

      <Footer />
    </div>
  );
};

export default Book;