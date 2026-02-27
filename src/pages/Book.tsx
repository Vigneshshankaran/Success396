import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  BookOpen, Eye, Target, Zap,
  Check, CreditCard, ShieldCheck,
  Package, ShoppingCart, FileText, Quote
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import GlobalCTA from "@/components/GlobalCTA";
import { useRazorpay, type RazorpayResponse } from "@/hooks/useRazorpay";
import bookVideo from "@/assets/Book.mp4";
import { fadeUp } from "@/lib/animations";

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
    price: "₹2,000",
    amountInPaise: 200000, // ₹2000 in paise
    description: "Premium cloth-bound edition for your library. Includes digital resources.",
    icon: BookOpen,
    features: ["High-quality print", "Bonus Worksheets", "Author's Signature (Ltd)"]
  },
  {
    id: "digital",
    title: "Digital Ecosystem",
    price: "₹2,500",
    amountInPaise: 250000, // ₹2500 in paise
    description: "Instant access to E-book, Audiobook, and Interactive Journal.",
    icon: FileText,
    features: ["Kindle & PDF Formats", "Audiobook Included", "Interactive Journal"]
  }
];

interface ShippingInfo {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
}

const emptyShipping: ShippingInfo = {
  fullName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  pincode: "",
};

const Book = () => {
  const [loading, setLoading] = useState<string | null>(null);
  const [lastPayment, setLastPayment] = useState<RazorpayResponse | null>(null);
  const [lastShipping, setLastShipping] = useState<ShippingInfo | null>(null);
  const [checkoutFormat, setCheckoutFormat] = useState<typeof bookFormats[0] | null>(null);
  const [shipping, setShipping] = useState<ShippingInfo>(emptyShipping);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ShippingInfo, string>>>({});
  const { openCheckout } = useRazorpay();

  const validateShipping = (): boolean => {
    const errors: Partial<Record<keyof ShippingInfo, string>> = {};
    if (!shipping.fullName.trim()) errors.fullName = "Name is required";
    if (!shipping.email.trim() || !/\S+@\S+\.\S+/.test(shipping.email)) errors.email = "Valid email is required";
    if (!shipping.phone.trim() || shipping.phone.trim().length < 10) errors.phone = "Valid phone number is required";
    if (!shipping.addressLine1.trim()) errors.addressLine1 = "Address is required";
    if (!shipping.city.trim()) errors.city = "City is required";
    if (!shipping.state.trim()) errors.state = "State is required";
    if (!shipping.pincode.trim() || shipping.pincode.trim().length < 5) errors.pincode = "Valid pincode is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleBuyClick = (format: typeof bookFormats[0]) => {
    setCheckoutFormat(format);
    setShipping(emptyShipping);
    setFormErrors({});
  };

  const handleProceedToPay = () => {
    if (!validateShipping() || !checkoutFormat) return;

    setLoading(checkoutFormat.id);
    setCheckoutFormat(null); // Close modal

    openCheckout({
      amount: checkoutFormat.amountInPaise,
      currency: "INR",
      name: "Success369",
      description: `${checkoutFormat.title} — Blueprint for Sustainable Success`,
      prefill: {
        name: shipping.fullName,
        email: shipping.email,
        contact: shipping.phone,
      },
      notes: {
        product: checkoutFormat.title,
        shipping_name: shipping.fullName,
        shipping_email: shipping.email,
        shipping_phone: shipping.phone,
        shipping_address: `${shipping.addressLine1}${shipping.addressLine2 ? ", " + shipping.addressLine2 : ""}`,
        shipping_city: shipping.city,
        shipping_state: shipping.state,
        shipping_pincode: shipping.pincode,
      },
      theme: {
        color: "#c5a059",
      },
      onSuccess: (response) => {
        setLastPayment(response);
        setLastShipping({ ...shipping });
        setLoading(null);
        toast.success(
          `Payment successful! ID: ${response.razorpay_payment_id}`,
          { duration: 8000 }
        );
        console.log("📦 Shipping Info:", shipping);
      },
      onFailure: (error) => {
        setLoading(null);
        if (error?.reason === "dismissed") return;
        toast.error(
          error?.description || "Payment failed. Please try again.",
          { duration: 5000 }
        );
      },
    });
  };

  const updateField = (field: keyof ShippingInfo, value: string) => {
    setShipping(prev => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground/90 selection:bg-primary/30 overflow-x-hidden">
      <Helmet>
        <title>The Book — Blueprint for Sustainable Success | Success369</title>
        <meta name="description" content="Discover the three-pillar framework that's transforming how leaders and entrepreneurs build impact that lasts — without the burnout." />
      </Helmet>
      <Navbar />

      {/* --- SHIPPING ADDRESS MODAL --- */}
      {checkoutFormat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setCheckoutFormat(null)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-background border border-border/50 rounded-3xl p-8 shadow-2xl"
          >
            <button
              onClick={() => setCheckoutFormat(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-2xl leading-none"
            >
              ×
            </button>

            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-2">Shipping Details</p>
              <h3 className="text-foreground text-xl font-bold">{checkoutFormat.title}</h3>
              <p className="text-muted-foreground text-sm">{checkoutFormat.price} — One Time Purchase</p>
            </div>

            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">Full Name *</label>
                <input
                  type="text"
                  value={shipping.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                />
                {formErrors.fullName && <p className="text-red-400 text-xs mt-1">{formErrors.fullName}</p>}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">Email *</label>
                  <input
                    type="email"
                    value={shipping.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="john@email.com"
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  {formErrors.email && <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>}
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">Phone *</label>
                  <input
                    type="tel"
                    value={shipping.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  {formErrors.phone && <p className="text-red-400 text-xs mt-1">{formErrors.phone}</p>}
                </div>
              </div>

              {/* Address Line 1 */}
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">Address Line 1 *</label>
                <input
                  type="text"
                  value={shipping.addressLine1}
                  onChange={(e) => updateField("addressLine1", e.target.value)}
                  placeholder="123 Main St, Apt 4B"
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                />
                {formErrors.addressLine1 && <p className="text-red-400 text-xs mt-1">{formErrors.addressLine1}</p>}
              </div>

              {/* Address Line 2 */}
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">Address Line 2</label>
                <input
                  type="text"
                  value={shipping.addressLine2}
                  onChange={(e) => updateField("addressLine2", e.target.value)}
                  placeholder="Landmark, Area (optional)"
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              {/* City, State, Pincode */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">City *</label>
                  <input
                    type="text"
                    value={shipping.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    placeholder="Mumbai"
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  {formErrors.city && <p className="text-red-400 text-xs mt-1">{formErrors.city}</p>}
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">State *</label>
                  <input
                    type="text"
                    value={shipping.state}
                    onChange={(e) => updateField("state", e.target.value)}
                    placeholder="Maharashtra"
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  {formErrors.state && <p className="text-red-400 text-xs mt-1">{formErrors.state}</p>}
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">Pincode *</label>
                  <input
                    type="text"
                    value={shipping.pincode}
                    onChange={(e) => updateField("pincode", e.target.value)}
                    placeholder="400001"
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  {formErrors.pincode && <p className="text-red-400 text-xs mt-1">{formErrors.pincode}</p>}
                </div>
              </div>
            </div>

            <button
              onClick={handleProceedToPay}
              className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-white font-bold uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center gap-3"
            >
              <CreditCard size={18} />
              Proceed to Pay {checkoutFormat.price}
            </button>

            <p className="text-center text-muted-foreground/40 text-xs mt-4">
              You'll be redirected to Razorpay's secure payment page
            </p>
          </motion.div>
        </div>
      )}

      {/* --- PREMIUM HERO --- */}
      <section className="relative min-h-[90vh] flex items-end pt-20 overflow-hidden bg-black/90">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 z-10" />
        </div>

        <div className="relative container-custom w-full pb-28 sm:pb-32 z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
              <motion.div
                custom={0}
                variants={fadeUp}
                className="mb-3 sm:mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white"
              >
                The Definitive Guide to Alignment
              </motion.div>

              <motion.h1
                custom={1}
                variants={fadeUp}
                className="mb-4 sm:mb-6 text-glow text-white"
              >
                The Blueprint for <br />
                <span className="italic text-primary text-glow font-light">Sustainable Success</span>
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                className="mb-8 sm:mb-10 max-w-lg text-lg sm:text-xl text-white/90 font-light"
              >
                Discover the three-pillar framework that's transforming how leaders and entrepreneurs build impact that lasts — without the burnout.
              </motion.p>

              <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-6">
                <CTAButton href="#pricing" size="lg" variant="shimmer" className="px-10">
                  Secure Your Copy
                </CTAButton>
                <CTAButton href="#pillars" size="lg" variant="outline" className="px-10 border-white/10 text-white hover:text-white hover:border-primary/50">
                  Explore What's Inside
                </CTAButton>
              </motion.div>

            </motion.div>
        </div>
      </section>

      {/* --- THE CORE PROMISE --- */}
      <section className="section bg-card/60 backdrop-blur-md relative overflow-hidden border-y border-border/30">
        <div className="container-custom text-center">
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
              <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
      <section id="pillars" className="section-lg relative overflow-hidden bg-background">
        <div className="container-custom">
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
                className="group relative p-12 rounded-[3rem] bg-secondary/30 border border-border/50 hover:border-primary/40 hover:bg-secondary/50 transition-all duration-700 overflow-hidden"
              >
                {/* Background Number Pattern */}
                <span className="absolute top-8 right-8 font-display text-8xl font-black text-foreground/[0.03] select-none pointer-events-none transition-all duration-1000 group-hover:text-primary/[0.07] group-hover:-translate-y-4">
                  0{i + 1}
                </span>

                <div className="relative w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-700 z-10">
                  <pillar.icon size={28} className="text-primary group-hover:text-white" />
                </div>
                <h3 className="text-foreground mb-2 uppercase tracking-wide relative z-10">{pillar.title}</h3>
                <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8 opacity-60 relative z-10">{pillar.subtitle}</p>
                <p className="text-muted-foreground/80 leading-relaxed text-lg font-light mb-12 relative z-10">{pillar.description}</p>

                <div className="relative space-y-4 pt-10 border-t border-border/50 z-10">
                   <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/40 mb-4">Key Insights</p>
                   {pillar.chapters.map(ch => (
                     <div key={ch} className="flex items-center gap-4 text-sm font-light text-muted-foreground transition-colors group-hover:text-foreground">
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
      <section id="pricing" className="section-lg relative bg-secondary/10 border-y border-border/30">
         {/* Internal depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05)_0%,transparent_70%)]" />

        <div className="container-custom relative z-10 text-center">
          <div className="mb-24">
            <div className="inline-flex items-center gap-3 mb-8 justify-center w-full">
              <span className="h-[1px] w-8 bg-primary/60" />
              <p className="font-display text-xs uppercase tracking-[0.5em] text-primary font-bold">
                Ready to Start
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </div>
            <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Secure Your <span className="italic font-normal">Blueprint.</span></h2>
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
                className="relative p-12 sm:p-16 rounded-[4rem] bg-gradient-to-br from-foreground/[0.03] to-transparent border border-border/50 backdrop-blur-2xl text-left flex flex-col group hover:border-primary/50 transition-all duration-700"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-700">
                    <format.icon size={28} className="text-primary group-hover:text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-foreground">{format.price}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">One Time Purchase</p>
                  </div>
                </div>

                <h3 className="text-foreground mb-4 tracking-tight">{format.title}</h3>
                <p className="text-muted-foreground font-light mb-10 text-lg leading-relaxed">{format.description}</p>

                <div className="space-y-4 mb-14 flex-grow">
                   {format.features.map(f => (
                     <div key={f} className="flex items-center gap-4 text-sm font-light text-muted-foreground">
                        <Check size={16} className="text-primary" />
                        {f}
                     </div>
                   ))}
                </div>

                <button
                  disabled={loading === format.id}
                  onClick={() => handleBuyClick(format)}
                  className="w-full py-6 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-white font-bold uppercase tracking-[0.2em] relative overflow-hidden group/btn hover:shadow-[0_0_40px_rgba(197,160,89,0.4)] transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-50"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-101%] group-hover/btn:translate-x-[101%] transition-transform duration-1000" />
                  {loading === format.id ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <CreditCard size={18} />
                      Buy Now
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 mt-8 opacity-40">
                  <ShieldCheck size={14} className="text-primary" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-foreground">Secure Checkout by Razorpay</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Payment success confirmation */}
          {lastPayment && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16 max-w-xl mx-auto p-8 rounded-3xl bg-green-500/10 border border-green-500/30 text-left"
            >
              <h4 className="text-green-500 font-bold text-lg mb-4 flex items-center gap-2">
                <Check size={20} />
                Payment Successful!
              </h4>
              <div className="space-y-2 text-sm font-mono">
                <p className="text-foreground/80">
                  <span className="text-green-500/80">Payment ID:</span>{" "}
                  {lastPayment.razorpay_payment_id}
                </p>
                {lastPayment.razorpay_order_id && (
                  <p className="text-foreground/80">
                    <span className="text-green-500/80">Order ID:</span>{" "}
                    {lastPayment.razorpay_order_id}
                  </p>
                )}
                {lastPayment.razorpay_signature && (
                  <p className="text-foreground/80">
                    <span className="text-green-500/80">Signature:</span>{" "}
                    {lastPayment.razorpay_signature}
                  </p>
                )}
              </div>

              {/* Shipping Address Display */}
              {lastShipping && (
                <div className="mt-6 pt-6 border-t border-green-500/20">
                  <p className="text-green-500/80 text-xs font-bold uppercase tracking-wider mb-3">📦 Shipping To</p>
                  <div className="space-y-1 text-sm text-foreground/70">
                    <p className="font-semibold text-foreground/90">{lastShipping.fullName}</p>
                    <p>{lastShipping.addressLine1}{lastShipping.addressLine2 ? `, ${lastShipping.addressLine2}` : ""}</p>
                    <p>{lastShipping.city}, {lastShipping.state} — {lastShipping.pincode}</p>
                    <p className="text-muted-foreground">{lastShipping.email} • {lastShipping.phone}</p>
                  </div>
                </div>
              )}

              <p className="text-muted-foreground text-xs mt-4">
                ⓘ This is a test mode payment. No real charges were made.
              </p>
            </motion.div>
          )}

          {/* Razorpay test card info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 max-w-md mx-auto p-6 rounded-2xl bg-secondary/30 border border-border/50 text-left"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary/60 font-bold mb-3">Test Card Details</p>
            <div className="space-y-1.5 text-xs text-muted-foreground font-mono">
              <p>Card: <span className="text-foreground/80">4111 1111 1111 1111</span></p>
              <p>Expiry: <span className="text-foreground/80">Any future date</span></p>
              <p>CVV: <span className="text-foreground/80">Any 3 digits</span></p>
              <p>OTP: <span className="text-foreground/80">Enter any OTP to complete</span></p>
            </div>
          </motion.div>

          <div className="mt-24 flex items-center justify-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
             <Package size={40} className="text-foreground" />
             <ShoppingCart size={40} className="text-foreground" />
             <CreditCard size={40} className="text-foreground" />
          </div>
        </div>
      </section>

      {/* Social Proof Voices */}
      <section className="section bg-background overflow-hidden">
        <div className="container-custom relative z-10">
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
                  className="p-10 rounded-[3rem] bg-secondary/30 border border-border/50 hover:border-primary/20 transition-all duration-700 group"
                >
                   <Quote size={40} className="text-primary/10 mb-8" />
                   <p className="text-xl text-foreground/90 font-light leading-relaxed mb-10 italic">"{item.quote}"</p>
                   <div className="flex items-center gap-4">
                      <div className="h-[1px] w-8 bg-primary/40" />
                      <div>
                        <p className="text-foreground font-bold tracking-tight">{item.author}</p>
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