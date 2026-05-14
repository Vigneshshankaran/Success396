import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Home, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const ThankYou = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.21, 0.45, 0.32, 0.9],
      },
    }),
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Thank You — Success369</title>
      </Helmet>
      
      <Navbar />
      
      <main 
        className="flex-1 flex items-center justify-center px-6 pb-20"
        style={{ paddingTop: 'var(--total-header-height)' }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl md:text-6xl font-bold mb-6 text-glow"
          >
            Thank You.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-xl text-muted-foreground mb-12 font-light leading-relaxed"
          >
            Your registration for <span className="text-white font-medium italic">Shakthi: The Unfiltered Voice</span> is complete. 
            We have sent the confirmation details to your email.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <Link 
              to="/" 
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
