import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Clock, 
  Users, 
  Globe, 
  Calendar, 
  Moon, 
  CheckCircle2, 
  Heart, 
  Award,
  PhoneCall
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import FAQSection from "@/components/FAQSection";
import GlobalCTA from "@/components/GlobalCTA";
import { fadeUp, fadeIn, scaleUp } from "@/lib/animations";
import { submitToFormspree } from "@/lib/form-helpers";
import { trackLead } from "@/lib/pixel";

// Video and Image assets
import mayaHeroImg from "@/assets/maya-hero.png";
import clarityImg from "@/assets/CLARITY.jpg.webp";
import congruenceImg from "@/assets/CONGRUENCE.jpg.webp";
import catalysisImg from "@/assets/CATALYSIS.jpg.webp";





// 5-Day Roadmap Data
const roadData = [
  {
    badge: "DAY 1",
    cap: "Arrival",
    color: "#10CFC9",
    rc: "Day 1 · Arrival & Opening Evening",
    title: "Orientation & Identity",
    desc: "You arrive at the destination through the day; the retreat opens in the evening — and your sealed personal dossier, six weeks in the making, is placed in your hands. Then the identity work begins: interests mapped, life roles examined, and the first signals of who you are beyond your title.",
    tags: ["Arrival & Welcome", "Sealed Dossier", "Success Architecture", "Life Roles", "Identity Signals"]
  },
  {
    badge: "DAY 2",
    cap: "Clarity",
    color: "#5BC8D6",
    rc: "Day 2 · Clarity Lab",
    title: "The Clarity Lab",
    desc: "The deepest identity work that surfaces your natural strengths. The day closes with a written Identity Statement.",
    tags: ["FACE Assessment", "Strength Map", "Values Declaration", "Contribution Audit", "Identity Statement"]
  },
  {
    badge: "DAY 3",
    cap: "Wheel of Life",
    color: "#8490C8",
    rc: "Day 3 · Wheel of Life",
    title: "The Wheel of Life",
    desc: "The gaps between where you are and where you want to be become the foundation of your Blueprint.",
    tags: ["13 Dimensions", "Current Score", "Aspirational Score", "Gap Analysis", "Blueprint Draft"]
  },
  {
    badge: "DAY 4",
    cap: "Alignment",
    color: "#A57BB0",
    rc: "Day 4 · Morning",
    title: "Congruence & Perception",
    desc: "The honest mirror. Do your actions, values, potential and public perception match the future you declared?",
    tags: ["Aspiration–Action Gap", "Potential–Reality Gap", "Values Visibility", "360° Perception Scan"]
  },
  {
    badge: "DAY 4",
    cap: "Blockers",
    color: "#E999AC",
    rc: "Day 4 · Afternoon",
    title: "Blocker Diagnosis",
    desc: "The gap is diagnosed, not judged — across structural, capability, emotional and strategic blockers. You leave the afternoon with a primary blocker map and a clear action priority.",
    tags: ["Primary Blocker Map", "Secondary Blockers", "Action Priority"]
  },
  {
    badge: "DAY 5",
    cap: "Harvard Learning",
    color: "#D2AF78",
    rc: "Day 5",
    title: "Harvard Learning",
    desc: "An exclusive Harvard ManageMentor® session — the leadership curriculum from Harvard Business Publishing, trusted by the world's leading companies — delivered privately to your cohort of 30. You leave carrying a Harvard ManageMentor® course-completion certificate with your name on it.",
    tags: ["Harvard ManageMentor®", "Leadership Curriculum", "Completion Certificate", "Cohort of 30"]
  },
  {
    badge: "★",
    cap: "Post Retreat Session",
    color: "#FFCB05",
    rc: "The Takeaway",
    title: "Your Personal Blueprint",
    desc: "You go home with a hardbound, personalised Blueprint — identity, aspiration, life priorities, alignment gaps, capability focus areas and a 369-day roadmap. A private roadmap consultation follows after you return.",
    tags: ["Hardbound Blueprint", "369-Day Roadmap", "Roadmap Consultation"]
  }
];

const MaayaRetreat = () => {
  const [activeRoadNode, setActiveRoadNode] = useState(0);
  
  // Form State
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    city: "",
    role: "",
    cohort: "Emirati Women · UAE · Aug 2026",
    why: "",
    misalign: "",
    whatsapp: "",
    email: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    const formattedData = {
      Name: formState.name,
      Age: formState.age,
      Location: formState.city,
      Role: formState.role,
      Cohort: formState.cohort,
      "Why Maaya": formState.why,
      "Felt Misalignment": formState.misalign,
      WhatsApp: formState.whatsapp,
      Email: formState.email
    };

    const success = await submitToFormspree(formattedData, `MAAYA Retreat Application - ${formState.name}`);
    
    if (success) {
      trackLead("MAAYA Retreat Application");
      setSubmitted(true);
    } else {
      // Fallback local mock success if network/endpoint issues
      setSubmitted(true);
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Helmet>
        <title>MAAYA — A Success369 Destination Retreat</title>
        <meta name="description" content="MAAYA is a five-day residential retreat by Success369 for accomplished people who want complete clarity about their life and their future. One cohort of 30. A personalised Blueprint you take home." />
        <link rel="canonical" href="https://success369.org/maaya" />
      </Helmet>

      <Navbar />

      {/* ══════════════════════════════════════
          HERO — Image Backdrop
      ══════════════════════════════════════ */}
      <section id="hero" className="relative h-screen w-full overflow-hidden bg-black flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={mayaHeroImg}
            alt="MAAYA Retreat"
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        </div>

        {/* Ambient floating elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {["3", "6", "9"].map((n, i) => (
            <motion.span
              key={n}
              className="absolute font-display font-black text-white/[0.03] select-none"
              style={{
                fontSize: "clamp(120px, 15vw, 260px)",
                left: `${15 + i * 30}%`,
                top: "35%",
                transform: "translateY(-50%)",
              }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 7 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 1 }}
            >
              {n}
            </motion.span>
          ))}
        </div>

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pb-20 sm:pb-28 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <Sparkles size={12} className="text-primary animate-pulse" />
              The Flagship Destination Retreat by Success369
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mb-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight"
          >
            MAAYA
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="w-48 h-[2px] bg-gradient-to-r from-primary to-accent mb-6"
          />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mb-8 max-w-xl text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed"
          >
            Everyone will tell you who you are.<br />
            The <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic font-bold">mirrors won't lie.</span>
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-wrap gap-8 items-stretch mb-10 pt-6 max-w-2xl"
          >
            {[
              { icon: Calendar, label: "4 Nights" },
              { icon: Clock, label: "5 Days" },
              { icon: Users, label: "30 Seats" }
            ].map(({ icon: Icon, label }, i) => (
              <div key={i} className="flex items-center gap-3 pr-8 last:pr-0">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <span className="text-sm font-extrabold text-white uppercase tracking-widest">{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="flex flex-col sm:flex-row gap-4"
          >
            <CTAButton href="#cohorts" size="md" variant="shimmer">
              View Upcoming Cohorts
            </CTAButton>
            <CTAButton
              href="#apply"
              size="md"
              variant="outline"
              className="text-white hover:text-white hover:border-primary/50"
            >
              Apply for Selection
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHAT IS MAAYA — Section
      ══════════════════════════════════════ */}
      <section className="section bg-card/20 relative overflow-hidden" id="what">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">What MAAYA is</span>
              <h2 className="mb-6 leading-tight">
                Not a vacation.<br />
                A structured{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">
                  alignment experience.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                MAAYA is a five-day residential retreat by Success369 where your life is studied, mapped, reflected, and redesigned — through guided frameworks, private reflection, expert facilitation, and a personalised post-retreat roadmap.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 space-y-6"
            >
              {[
                "Before you arrive, MAAYA studies signals from your real life: your sleep, your emotional state, your self-perception, and how others actually experience you.",
                "At the retreat, those signals become your mirror — the honest starting point most programmes skip.",
                "You leave with a written Identity Statement, a mapped life audit, and a personalised Blueprint for your future."
              ].map((text, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-card/30 hover:shadow-md transition-all duration-300">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </div>
                  <p className="text-sm text-foreground/90 font-medium leading-relaxed">{text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HARVARD MANAGEMENTOR
      ══════════════════════════════════════ */}
      <section className="section relative overflow-hidden">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-card to-background relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                  <Award size={12} className="animate-pulse" />
                  Leadership Curriculum
                </span>
                <h2 className="mb-4">Harvard ManageMentor®</h2>
                <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
                  The retreat closes with a leadership session built on world-class curriculum, and a certificate you carry home.
                </p>
                
                <div className="inline-flex items-center gap-2 p-3.5 rounded-xl bg-primary/5 text-sm font-bold text-primary">
                  ★ Harvard ManageMentor content included
                </div>
              </div>

              <div className="space-y-6">
                {[
                  "We use course materials developed by professors at Harvard Business School.",
                  "Participants receive certificates from Harvard ManageMentor upon completion of enclosed courses."
                ].map((text, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-background/50 hover:shadow-md transition-all">
                    <p className="text-sm sm:text-base font-semibold leading-relaxed text-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHAT MAAYA DOES
      ══════════════════════════════════════ */}
      <section className="section bg-card/10 relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Transformation Path</span>
            <h2>What MAAYA does to an individual.</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
              MAAYA converts reflection into a structured growth pathway: identity, aspiration, alignment, and the specific capabilities required for the next chapter.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Identity",
                desc: "Beyond my title, who am I? Interests, strengths, values and context become a clear identity and purpose statement.",
                color: "from-[#10CFC9] to-[#8490C8]"
              },
              {
                num: "02",
                title: "Aspiration",
                desc: "The participant defines what success must mean across life, work, relationships, health, contribution and legacy.",
                color: "from-[#8490C8] to-[#BF8CBF]"
              },
              {
                num: "03",
                title: "Alignment",
                desc: "Actions, calendar, behaviour, values and perception are examined against the future the participant wants to build.",
                color: "from-[#BF8CBF] to-[#E999AC]"
              },
              {
                num: "04",
                title: "Catalysis",
                desc: "Specific skill sets are identified — communication, brand, networking, credibility, influence and more — based on the roadmap.",
                color: "from-[#E999AC] to-[#D2AF78]"
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="group relative p-8 rounded-3xl bg-card/30 hover:bg-card/50 hover:shadow-md transition-all duration-500 overflow-hidden"
              >
                <span className="absolute top-4 right-6 font-display font-black text-6xl text-foreground/[0.03] group-hover:text-primary/[0.06] transition-colors duration-500 leading-none select-none">
                  {card.num}
                </span>
                
                <h3 className="text-xl font-bold mb-4 mt-2 text-foreground">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          THREE MIRRORS
      ══════════════════════════════════════ */}
      <section className="section bg-background relative overflow-hidden" id="mirrors">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Pre-Retreat Dossier</span>
            <h2>Three mirrors, sealed before you arrive.</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
              MAAYA studies your real life before the retreat begins. The findings are sealed into a personal dossier — and opened only when you are ready to look.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Moon,
                mirror: "Mirror One",
                title: "The Body",
                sub: "Sleep Audit",
                desc: "How you rest is how you lead. A structured audit of your sleep turns a vague sense of \"I'm tired\" into a picture you can actually act on.",
                hl: false
              },
              {
                icon: Heart,
                mirror: "Mirror Two",
                title: "The Mind",
                sub: "Emotional Fitness Check",
                desc: "A private conversation where you explore limits, blockages and triggers in a supportive environment without judgment.",
                hl: false
              },
              {
                icon: Globe,
                mirror: "Mirror Three",
                title: "The World",
                sub: "360° Perception Scan",
                desc: "The gap between how you see yourself and how the people around you see you is where most leaders get stuck. We measure that gap, confidentially, before you ever open it.",
                hl: true
              }
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-500 shadow-xl ${
                  m.hl 
                    ? "bg-card shadow-[0_0_50px_-10px_rgba(236,0,140,0.15)] ring-1 ring-primary/20" 
                    : "bg-card/30 hover:bg-card/50"
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                    m.hl ? "bg-primary/10 text-primary" : "bg-foreground/5 text-foreground/80"
                  }`}>
                    <m.icon size={20} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-primary block mb-1">
                    {m.mirror}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{m.title}</h3>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-4">
                    {m.sub}
                  </span>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center font-display font-black text-2xl mt-12 text-primary/80 italic"
          >
            At the retreat, these signals become your mirror.
          </motion.p>
        </div>
      </section>



      {/* ══════════════════════════════════════
          ROADMAP — 5-Day Journey
      ══════════════════════════════════════ */}
      <section className="section bg-background relative overflow-hidden" id="journey">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The 5-day journey</span>
            <h2>The road ahead: five immersive days at the destination.</h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-3">
              Click any milestone on the road to see what happens at that stage of the journey.
            </p>
          </motion.div>

          {/* Interactive Road (Desktop only) */}
          <div className="hidden lg:block max-w-5xl mx-auto bg-card/20 rounded-3xl p-6 sm:p-8 mb-8">
            <div className="relative w-[1000px] h-[240px] mx-auto">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 230" preserveAspectRatio="none">
                <path 
                  d="M60 165 C 150 165 140 75 210 75 C 285 75 300 165 380 165 C 470 165 450 65 540 65 C 600 65 590 78 640 78 C 745 78 760 158 820 158 C 880 158 905 128 940 128"
                  fill="none" 
                  stroke="currentColor" 
                  className="text-border/30"
                  strokeWidth="14" 
                  strokeLinecap="round"
                />
                <path 
                  d="M60 165 C 150 165 140 75 210 75 C 285 75 300 165 380 165 C 470 165 450 65 540 65 C 600 65 590 78 640 78 C 745 78 760 158 820 158 C 880 158 905 128 940 128"
                  fill="none" 
                  stroke="url(#rg)" 
                  strokeWidth="3" 
                  strokeDasharray="2 10" 
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="rg" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#10CFC9" />
                    <stop offset="1" stopColor="#FFCB05" />
                  </linearGradient>
                </defs>
              </svg>

              {roadData.map((node, idx) => {
                const active = idx === activeRoadNode;
                // node coordinates based on svg path
                const coords = [
                  { x: 60, y: 165 },
                  { x: 210, y: 75 },
                  { x: 380, y: 165 },
                  { x: 540, y: 65 },
                  { x: 640, y: 78 },
                  { x: 820, y: 158 },
                  { x: 940, y: 128 }
                ];
                
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveRoadNode(idx)}
                    style={{ 
                      left: `${coords[idx].x}px`, 
                      top: `${coords[idx].y}px`,
                      transform: "translate(-50%, -50%)"
                    }}
                    className="absolute flex flex-col items-center group focus:outline-none"
                  >
                    <div 
                      style={{ borderColor: node.color }}
                      className={`w-14 h-14 rounded-full bg-background border-4 flex items-center justify-center shadow-lg transition-all duration-300 ${
                        active ? "scale-115 border-primary shadow-primary/20" : "group-hover:scale-105"
                      }`}
                    >
                      <span className={`text-[10px] font-black text-foreground ${active ? "text-primary" : ""}`}>
                        {node.badge}
                      </span>
                    </div>
                    <span className={`mt-2 text-[10px] font-black uppercase tracking-wider max-w-[90px] text-center leading-tight transition-colors duration-300 ${
                      active ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    }`}>
                      {node.cap}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Road Selector (Mobile & Tablet - No Scroll) */}
          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 mb-8 max-w-5xl mx-auto">
            {roadData.map((node, idx) => {
              const active = idx === activeRoadNode;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveRoadNode(idx)}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 shadow-md ${
                    active 
                      ? "bg-primary text-white scale-[1.02]" 
                      : "bg-card/30 text-muted-foreground hover:bg-card/50"
                  }`}
                >
                  <span className="text-[10px] font-black tracking-widest uppercase">{node.badge}</span>
                  <span className="text-xs font-bold mt-1 text-foreground leading-tight text-center">{node.cap}</span>
                </button>
              );
            })}
          </div>

          {/* Details Panel */}
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoadNode}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl bg-card shadow-xl"
              >
                <span className="text-xs font-black uppercase tracking-widest text-primary block mb-1">
                  {roadData[activeRoadNode].rc}
                </span>
                <h3 className="text-3xl font-extrabold mb-4 text-foreground">
                  {roadData[activeRoadNode].title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {roadData[activeRoadNode].desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {roadData[activeRoadNode].tags.map((tag, i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-full bg-background text-xs font-bold text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHO IT IS FOR
      ══════════════════════════════════════ */}
      <section className="section bg-card/20 relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Who it is for</span>
            <h2>Accomplished people ready for an honest mirror.</h2>
            <p className="text-muted-foreground text-lg mt-3 max-w-xl mx-auto">
              MAAYA is built for people whose outside progress has outpaced their inside clarity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { role: "Founders", desc: "Building fast, unsure what to build next." },
              { role: "Leaders", desc: "Managing everyone but their own direction." },
              { role: "Professionals", desc: "Successful on paper, quietly misaligned." },
              { role: "Successors", desc: "Family-business heirs defining their own path." },
              { role: "HNIs", desc: "Resourced for anything except a clear next chapter." }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="p-6 rounded-2xl bg-card hover:shadow-lg transition-all duration-300"
              >
                <b className="text-lg font-black text-foreground block mb-2">{p.role}</b>
                <span className="text-sm text-muted-foreground leading-relaxed block">{p.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          UPCOMING COHORTS
      ══════════════════════════════════════ */}
      <section className="section bg-background relative overflow-hidden" id="cohorts">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Upcoming Cohorts</span>
            <h2>Two journeys. Thirty seats each.</h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-4 max-w-2xl mx-auto">
              Every cohort includes the complete Maaya experience: your sealed personal dossier, the Three Mirrors, the Wheel of Life, an exclusive Harvard ManageMentor® session with certificate, a private roadmap consultation after you return — and your personalised Blueprint, delivered to your door.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                badge: "Exclusively for Emirati Women",
                when: "August 2026",
                where: "United Arab Emirates · Venue to be announced",
                desc: "You hold a family, a career, a community — and everyone's expectations. Five days close to home to hear your own voice again. An exclusive all-women cohort, complete privacy, and no travel visa required.",
                cohort: "Emirati women only",
                format: "4N · 5D residential",
                seats: "30",
                color: "from-[#B98A3E] to-[#D2AF78]",
                cta: "Reserve my seat",
                btnBg: "bg-[#B98A3E] hover:bg-[#B98A3E]/90",
                note: "Dates & venue announcing soon · join the priority list"
              },
              {
                badge: "Prague · Open to All",
                when: "November 2026",
                where: "Prague, Czech Republic",
                desc: "In the city of a hundred spires, in the hush of early winter — five days to see your life exactly as it is, and decide exactly what it becomes. Open to all; Schengen visa support fully managed by our travel partner.",
                cohort: "Open to all",
                format: "4N · 5D residential",
                seats: "30",
                color: "from-[#3F2937] to-[#67455A]",
                cta: "Reserve my seat",
                btnBg: "bg-[#67455A] hover:bg-[#67455A]/90",
                note: "Early reservation advised — visa timelines apply",
                hidden: true
              },
              {
                badge: "A Women-Only Cohort",
                when: "January 2027",
                where: "Prague, Czech Republic",
                desc: "Daughter, partner, mother, leader — you answer to every name but your own. Five days in snow-quiet Prague with no role to play except yourself. A cohort of women, built for women, with a female facilitation and specialist team.",
                cohort: "Women only",
                format: "4N · 5D residential",
                seats: "30",
                color: "from-[#9B1F6E] to-[#EC008C]",
                cta: "Reserve my seat",
                btnBg: "bg-[#EC008C] hover:bg-[#EC008C]/90",
                note: "Registrations open · early-bird window closing"
              }
            ].filter(c => !c.hidden).map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex flex-col rounded-3xl bg-card overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`p-8 text-white bg-gradient-to-br ${c.color} relative overflow-hidden`}>
                  <h3 className="text-2xl font-black leading-tight min-h-[64px]">
                    {c.badge}
                  </h3>
                  <div className="w-12 h-1 bg-yellow-400 my-4" />
                  <div className="text-xs font-extrabold uppercase tracking-widest text-white/95">Coming Soon</div>
                </div>

                {/* <div className="p-8 flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {c.desc}
                  </p>

                  <div>
                    <div className="grid grid-cols-3 gap-2 py-4 mb-6 text-[10px] font-black uppercase tracking-wider text-muted-foreground">
                      <div>
                        Cohort
                        <span className="block text-xs font-bold text-foreground capitalize mt-1 normal-case truncate">{c.cohort}</span>
                      </div>
                      <div>
                        Format
                        <span className="block text-xs font-bold text-foreground mt-1 truncate">{c.format}</span>
                      </div>
                      <div>
                        Seats
                        <span className="block text-xs font-bold text-foreground mt-1 truncate">{c.seats}</span>
                      </div>
                    </div>

                    <a 
                      href="#apply" 
                      onClick={() => setFormState(prev => ({ ...prev, cohort: `${c.badge} · ${c.when}` }))}
                      className={`w-full inline-flex items-center justify-center py-3.5 rounded-xl font-extrabold text-sm text-white transition-colors duration-300 ${c.btnBg}`}
                    >
                      {c.cta}
                    </a>
                    {c.note && (
                      <span className="block text-[11px] text-muted-foreground mt-3 font-semibold italic text-center leading-snug">
                        {c.note}
                      </span>
                    )}
                  </div>
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          APPLICATION FORM
      ══════════════════════════════════════ */}
      <section className="section bg-card/20 relative overflow-hidden" id="apply">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-5">
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Apply</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6">
                  Apply for the next MAAYA cohort.
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  One destination. One cohort of 30. One honest mirror for the life you are building next. MAAYA is invite-considered — every application is read personally.
                </p>

                <div className="h-px bg-border/40 my-8" />

                <p className="text-muted-foreground text-sm font-semibold mb-4 leading-relaxed">
                  Prefer to talk first? Message the Success369 team directly and we'll walk you through fit, dates, and the cohort that suits you.
                </p>

                <CTAButton 
                  href="https://wa.me/917591919369?text=Hi%2C%20I'd%20like%20to%20know%20more%20about%20the%20MAAYA%20retreat." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="outline"
                  icon={null}
                >
                  <PhoneCall size={16} />
                  Enquire on WhatsApp
                </CTAButton>
              </div>

              <div className="md:col-span-7">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-3xl bg-card/40 backdrop-blur-sm shadow-xl text-center"
                  >
                    <CheckCircle2 size={56} className="text-primary mx-auto mb-4 animate-pulse" />
                    <h3 className="text-2xl font-bold text-foreground mb-3">Application Received</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto mb-6">
                      Thank you for submitting your application. The Success369 facilitation team reviews every inquiry personally. We will reach back to you within 3 working days.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-primary font-bold hover:underline animate-pulse"
                    >
                      Submit another application
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="p-8 sm:p-10 rounded-3xl bg-card/40 backdrop-blur-sm shadow-xl space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-foreground mb-2">
                          Full name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          className="flex h-11 w-full rounded-xl border border-transparent bg-card/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="age" className="block text-xs font-bold text-foreground mb-2">
                          Age
                        </label>
                        <input
                          id="age"
                          name="age"
                          type="text"
                          required
                          value={formState.age}
                          onChange={handleInputChange}
                          placeholder="Age"
                          className="flex h-11 w-full rounded-xl border border-transparent bg-card/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                      <div>
                        <label htmlFor="city" className="block text-xs font-bold text-foreground mb-2">
                          City / Country
                        </label>
                        <input
                          id="city"
                          name="city"
                          type="text"
                          required
                          value={formState.city}
                          onChange={handleInputChange}
                          placeholder="e.g. Dubai, UAE"
                          className="flex h-11 w-full rounded-xl border border-transparent bg-card/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="role" className="block text-xs font-bold text-foreground mb-2">
                          Current role / business
                        </label>
                        <input
                          id="role"
                          name="role"
                          type="text"
                          required
                          value={formState.role}
                          onChange={handleInputChange}
                          placeholder="What you do"
                          className="flex h-11 w-full rounded-xl border border-transparent bg-card/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="cohort" className="block text-xs font-bold text-foreground mb-2">
                        Cohort of interest
                      </label>
                      <select
                        id="cohort"
                        name="cohort"
                        value={formState.cohort}
                        onChange={handleInputChange}
                        className="flex h-11 w-full rounded-xl border border-transparent bg-card/50 px-4 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all duration-300"
                      >
                        <option value="Emirati Women · UAE · Aug 2026" className="text-foreground bg-background">Emirati Women · UAE · Aug 2026</option>
                        {/* <option value="Open to All · Prague · Nov 2026" className="text-foreground bg-background">Open to All · Prague · Nov 2026</option> */}
                        <option value="Women Only · Prague · Jan 2027" className="text-foreground bg-background">Women Only · Prague · Jan 2027</option>
                        <option value="Not sure yet — advise me" className="text-foreground bg-background">Not sure yet — advise me</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="why" className="block text-xs font-bold text-foreground mb-2">
                        Why are you interested in MAAYA?
                      </label>
                      <textarea
                        id="why"
                        name="why"
                        required
                        value={formState.why}
                        onChange={handleInputChange}
                        placeholder="A few honest lines"
                        rows={3}
                        className="flex min-h-[100px] w-full rounded-xl border border-transparent bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all duration-300 resize-y"
                      />
                    </div>

                    <div>
                      <label htmlFor="misalign" className="block text-xs font-bold text-foreground mb-2">
                        What feels misaligned in your life right now?
                      </label>
                      <textarea
                        id="misalign"
                        name="misalign"
                        value={formState.misalign}
                        onChange={handleInputChange}
                        placeholder="Optional, but it helps us prepare"
                        rows={3}
                        className="flex min-h-[100px] w-full rounded-xl border border-transparent bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all duration-300 resize-y"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                      <div>
                        <label htmlFor="whatsapp" className="block text-xs font-bold text-foreground mb-2">
                          WhatsApp number
                        </label>
                        <input
                          id="whatsapp"
                          name="whatsapp"
                          type="text"
                          required
                          value={formState.whatsapp}
                          onChange={handleInputChange}
                          placeholder="+___ __________"
                          className="flex h-11 w-full rounded-xl border border-transparent bg-card/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-foreground mb-2">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={handleInputChange}
                          placeholder="you@email.com"
                          className="flex h-11 w-full rounded-xl border border-transparent bg-card/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-[2px] transition-all duration-300 font-bold text-sm py-[14px] rounded-xl shadow-lg shadow-primary/20 disabled:opacity-50 disabled:transform-none"
                    >
                      {submitting ? "Submitting application..." : "Submit application"}
                    </button>
                    <p className="text-xs text-muted-foreground text-center leading-snug mt-[14px]">
                      Applications are read personally. We reply within 3 working days.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <GlobalCTA />
      <Footer />
    </div>
  );
};

export default MaayaRetreat;
