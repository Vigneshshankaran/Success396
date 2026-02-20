import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import gitaVideo from "../assets/gita.mp4";
import mayaVideo from "../assets/maya.mp4";
import sarvamVideo from "../assets/sarvam.mp4";
import shaktiVideo from "../assets/shakti.mp4";

interface VideoCard {
  title: string;
  description: string;
  cta: string;
  videoUrl: string;
}

const videoCards: VideoCard[] = [
  {
    title: "GITA-Clarity Before Action",
    description:
      "For moments when decisions matter and clarity is essential.",
    cta: "Begin with Clarity ",
    videoUrl: gitaVideo,
  },
  {
    title: "MAYA-Realigning Unseen Patterns",
    description:
      "For those who are capable and progressing, yet feel misaligned.",
    cta: "Explore Maya",
    videoUrl: mayaVideo,
  },
  {
    title: "SARVAM-The Architecture for Sustainable Success",
    description:
      "For those ready to commit to long-term, holistic success.",
    cta: "Apply for SARVAM",
    videoUrl: sarvamVideo,
  },
  {
    title: "SHAKTI-Activating Aligned Momentum",
    description:
      "For situations where clarity and alignment already exist, but momentum is lacking.",
    cta: "Explore SHAKTI",
    videoUrl: shaktiVideo,
  },
];

const VideoCardsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [activeIndex]);

  const handleCardHover = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const activeCard = videoCards[activeIndex];

  return (
    <section id="showcase" className="relative py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
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
              Immersive
            </p>
            <span className="h-[1px] w-8 bg-primary/60" />
          </div>
          <h2 className="mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
Distinct Journeys. One Shared Philosophy          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
Success369 offers flexible, stand-alone journeys rooted in clarity, alignment, and sustainable success. Choose the path that fits your current needs on your timeline, not someone else’s.          </p>
        </motion.div>

        {/* Video with cards inside */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[16/9] rounded-xl overflow-hidden border border-border"
        >
          {/* Background video */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <video
                ref={videoRef}
                src={activeCard.videoUrl}
                muted
                loop
                playsInline
                autoPlay
                className="h-full w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />

          {/* Text content — bottom left */}
          <div className="absolute bottom-24 sm:bottom-28 md:bottom-32 left-0 p-6 sm:p-8 md:p-10 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-foreground mb-2 sm:mb-4">
                  {activeCard.title}
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mb-6 sm:mb-8 font-light">
                  {activeCard.description}
                </p>
                <button className="group flex items-center gap-2 rounded-lg bg-primary px-5 sm:px-6 py-2.5 sm:py-3 font-display text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-[var(--slider-glow)]">
                  {activeCard.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail cards — bottom row inside the video */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-3 sm:p-4 md:p-6">
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {videoCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onMouseEnter={() => handleCardHover(index)}
                  className={`group relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 backdrop-blur-md ${
                    activeIndex === index
                      ? "border-2 border-primary/70 shadow-[0_0_20px_-4px_hsl(var(--primary)/0.4)] bg-background/40"
                      : "border border-foreground/10 bg-background/20 hover:border-primary/30 hover:bg-background/30"
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3">
                    {/* Mini thumbnail */}
                    <div className="relative h-8 w-12 sm:h-10 sm:w-14 md:h-12 md:w-16 shrink-0 rounded overflow-hidden">
                      <video
                        src={card.videoUrl}
                        muted
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover"
                      />
                      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        activeIndex === index ? "opacity-0" : "opacity-80"
                      }`}>
                        <Play className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-foreground/90 ml-0.5" />
                      </div>
                    </div>
                    {/* Title */}
                    <p className={`font-display text-[10px] sm:text-xs font-semibold leading-tight line-clamp-2 transition-colors duration-300 ${
                      activeIndex === index ? "text-primary" : "text-foreground/80"
                    }`}>
                      {card.title}
                    </p>
                  </div>

                  {/* Active bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoCardsSection;
