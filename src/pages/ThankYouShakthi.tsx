import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp } from "@/lib/animations";
import { motion as m } from "framer-motion";

const ThankYouShakthi = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Helmet>
        <title>Welcome to Shakthi | Success369</title>
        <meta name="description" content="Your seat for Shakthi — Communication is confirmed. Welcome to the cohort." />
      </Helmet>
      
      <Navbar />

      <main className="flex-1 flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Gradients to match Shakthi V2 */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-black" />
          <div 
            className="absolute inset-0 opacity-40" 
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, hsl(324 100% 46% / 0.15) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 80%, hsl(324 100% 46% / 0.08) 0%, transparent 60%)" }} 
          />
        </div>

        <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-20 text-center">
          <m.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
            className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-primary/30"
          >
            <CheckCircle2 size={40} className="text-primary" />
          </m.div>

          <m.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white text-glow mb-4 leading-tight">
              Welcome to <span className="text-primary italic">Shakthi.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-medium mb-12">
              Your seat is confirmed.
            </p>
          </m.div>

          <m.div 
            variants={fadeUp} 
            initial="hidden" 
            animate="visible" 
            custom={1}
            className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 mb-12 backdrop-blur-md"
          >
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">
              Your seat for <span className="text-white font-semibold">Shakthi — Communication</span> is confirmed. A confirmation email with your session details and pre-work will land in your inbox within 24 hours.
            </p>
            <p className="text-base text-white/50 leading-relaxed mb-10">
              If you haven't received it within a day, check your spam folder or write to <a href="mailto:info@success369.com" className="text-primary hover:underline transition-all">info@success369.com</a>.
            </p>
            <div className="pt-8 border-t border-white/10 text-white/80 font-display italic text-xl">
              See you in session.
              <span className="block not-italic text-sm text-white/40 mt-2">— The Success369 Team</span>
            </div>
          </m.div>

          <m.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Success369</span>
            </Link>
          </m.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYouShakthi;
