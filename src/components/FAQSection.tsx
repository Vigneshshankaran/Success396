import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "I feel unclear about my direction ?",
    answer:
      "Success369 is a holistic coaching framework that combines clarity, alignment, and strategic direction to help individuals and organisations achieve meaningful success. We work through personalised sessions tailored to your unique goals.",
  },
  {
    question: "I know what I want, but I’m not living it consistently ?",
    answer:
      "It's designed for driven individuals, professionals navigating transitions, founders seeking sustainable growth, and organisations wanting to align performance with purpose.",
  },
  {
    question: " I’m ready to build long-term, sustainable success ?",
    answer:
      "Engagements vary based on your needs. Individual coaching typically runs 3–6 months, while organisational programmes can extend to 12 months for deep cultural transformation.",
  },
  {
    question: "I’m aligned, but need stronger execution and momentum ?",
    answer:
      "We focus on coherence over hustle. Our approach integrates clarity, balance, and long-term vision rather than quick fixes—ensuring your success is sustainable and aligned with who you are.",
  },
  {
    question: "I’m not sure yet — I’d like to talk it through ?",
    answer:
      "Absolutely. We encourage a free discovery call so we can understand your goals, answer your questions, and determine if Success369 is the right fit for your journey.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
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
              Got Questions?
            </p>
            <span className="h-[1px] w-8 bg-primary/60" />
          </div>
          <h2 className="mb-8">
         Which Journey Is Right for You?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
Use the guide below to identify where you are—and which Success369 Journey fits this moment.          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className={`rounded-2xl border transition-all duration-500 ${
                    openIndex === index
                      ? "border-primary/30 bg-primary/5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
                      : "border-border/50 bg-card/30 backdrop-blur-xl hover:border-primary/20 hover:bg-card/50"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left gap-4"
                  >
                    <span className="text-base sm:text-lg md:text-xl font-semibold text-foreground leading-tight">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-500 ${
                        openIndex === index ? "border-primary/50 bg-primary/10" : "border-border"
                      }`}
                    >
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-primary" />
                      ) : (
                        <Plus className="w-5 h-5 text-muted-foreground" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                          <div className="h-px w-full bg-border/30 mb-6" />
                          <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
