import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Book, Users, Star, Newspaper, Shield, Target, Globe } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Foundation", href: "#", active: true, hasDropdown: true },
  { label: "Programs", href: "#" },
  { label: "The Book", href: "#" },
  { label: "Events", href: "#" },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Contact", href: "#" },
];

const foundationSections = [
  {
    title: "The Philosophy",
    links: [
      { label: "The 369 Method", description: "Our Core Architecture", icon: Target, href: "#hero" },
      { label: "Vision & Values", description: "Redefining Modern Success", icon: Shield, href: "#journey" },
      { label: "Global Impact", description: "Our Footprint & Purpose", icon: Globe, href: "#showcase" },
    ],
  },
  {
    title: "The Humans",
    links: [
      { label: "Our Stewards", description: "The Founders' Vision", icon: Star, href: "#trainers" },
      { label: "Expert Trainers", description: "Certified Guidance", icon: Users, href: "#trainers" },
      { label: "Advisory Circle", description: "Strategic Wisdom", icon: Book, href: "#trainers" },
    ],
  },
  {
    title: "The Library",
    links: [
      { label: "Insight Papers", description: "Deep Methodological Shifts", icon: Newspaper, href: "#faq" },
      { label: "Client Stories", description: "Voices of Transformation", icon: Globe, href: "#testimonials" },
      { label: "Media Assets", description: "Press Kits & Brand Guides", icon: Star, href: "#newsletter" },
    ],
  },
];

const resourceSections = [
  { label: "Blog", description: "Insights & Articles", icon: Newspaper, href: "#" },
  { label: "Podcast", description: "The Audio Experience", icon: Globe, href: "#" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [foundationOpen, setFoundationOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#") return;
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-2xl border-b border-border/50 shadow-2xl shadow-black/20"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-[4px]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            <div className="h-[72px] flex items-center justify-center transition-all duration-300">
              <img src={logo} alt="Success369" className="h-full object-contain" />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger className="outline-none group">
                    <div
                      className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 flex items-center gap-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] ${
                        link.active 
                          ? "text-primary" 
                          : scrolled 
                            ? "text-muted-foreground hover:text-foreground" 
                            : "text-foreground/90 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={14} className="opacity-50 group-data-[state=open]:rotate-180 transition-transform duration-200" />
                      <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                          link.active ? "w-6" : "w-0 group-hover:w-6"
                        }`}
                      />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="center" 
                    className={`${link.label === "Foundation" ? "w-[600px] grid grid-cols-3" : "w-[240px] flex flex-col"} p-6 gap-6 bg-background/95 backdrop-blur-2xl border-border/50 shadow-2xl animate-in fade-in zoom-in duration-200`}
                  >
                    {link.label === "Foundation" ? (
                      foundationSections.map((section) => (
                        <div key={section.title} className="flex flex-col gap-3">
                          <DropdownMenuLabel className="px-0 pt-0 text-xs font-bold uppercase tracking-[0.2em] text-primary/80">
                            {section.title}
                          </DropdownMenuLabel>
                          <div className="flex flex-col gap-1">
                            {section.links.map((subLink) => (
                              <DropdownMenuItem 
                                key={subLink.label} 
                                className="px-0 py-2 focus:bg-transparent group cursor-pointer"
                              >
                                <a 
                                  href={subLink.href} 
                                  onClick={(e) => scrollToSection(e, subLink.href)}
                                  className="flex items-start gap-3 w-full"
                                >
                                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <subLink.icon size={16} />
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-sm font-semibold group-hover:text-primary transition-colors">{subLink.label}</span>
                                    <span className="text-[10px] text-muted-foreground leading-tight">{subLink.description}</span>
                                  </div>
                                </a>
                              </DropdownMenuItem>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="flex flex-col gap-1">
                        {resourceSections.map((subLink) => (
                          <DropdownMenuItem 
                            key={subLink.label} 
                            className="px-0 py-2 focus:bg-transparent group cursor-pointer"
                          >
                            <a 
                              href={subLink.href} 
                              onClick={(e) => scrollToSection(e, subLink.href)}
                              className="flex items-start gap-3 w-full"
                            >
                              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <subLink.icon size={16} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-semibold group-hover:text-primary transition-colors">{subLink.label}</span>
                                <span className="text-[10px] text-muted-foreground leading-tight">{subLink.description}</span>
                              </div>
                            </a>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 group drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] ${
                    link.active 
                      ? "text-primary" 
                      : scrolled 
                        ? "text-muted-foreground hover:text-foreground" 
                        : "text-foreground/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                      link.active ? "w-6" : "w-0 group-hover:w-6"
                    }`}
                  />
                </a>
              )
            ))}
          </nav>


          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
                href="#newsletter"
                onClick={(e) => scrollToSection(e, "#newsletter")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-6 py-2.5 rounded-full text-sm font-semibold text-primary-foreground overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] group-hover:animate-[shimmer_1.5s_ease-in-out_infinite] transition-all" />
              <span className="relative">Register Now</span>
            </motion.a>
            <motion.a
                href="#journey"
                onClick={(e) => scrollToSection(e, "#journey")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 rounded-full text-sm font-semibold border border-foreground/20 text-foreground hover:border-primary hover:text-primary transition-colors duration-300"
            >
              Explore the Journeys
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-2 pb-8">
              {navLinks.map((link, i) => (
                <div key={link.label}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`flex items-center justify-between text-2xl font-display font-semibold py-3 border-b border-border/30 ${
                      link.active ? "text-primary" : "text-foreground"
                    }`}
                    onClick={() => {
                      if (link.label === "Foundation") {
                        setFoundationOpen(!foundationOpen);
                      } else if (link.label === "Resources") {
                        setResourcesOpen(!resourcesOpen);
                      } else {
                        setMobileOpen(false);
                      }
                    }}
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && <ChevronDown className={`transition-transform duration-300 ${(link.label === "Foundation" ? foundationOpen : resourcesOpen) ? "rotate-180" : ""}`} />}
                  </motion.div>
                  
                  {link.label === "Foundation" && foundationOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="flex flex-col gap-4 py-4 pl-4"
                    >
                      {foundationSections.map((section) => (
                        <div key={section.title} className="flex flex-col gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">{section.title}</span>
                          <div className="flex flex-col gap-2">
                            {section.links.map((subLink) => (
                              <a 
                                key={subLink.label} 
                                href={subLink.href} 
                                onClick={(e) => scrollToSection(e, subLink.href)}
                                className="flex items-center gap-3 py-1"
                              >
                                <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                                  <subLink.icon size={14} />
                                </div>
                                <span className="text-sm font-medium">{subLink.label}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {link.label === "Resources" && resourcesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="flex flex-col gap-2 py-4 pl-4"
                    >
                      {resourceSections.map((subLink) => (
                        <a 
                          key={subLink.label} 
                          href={subLink.href} 
                          onClick={(e) => scrollToSection(e, subLink.href)}
                          className="flex items-center gap-3 py-1"
                        >
                          <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                            <subLink.icon size={14} />
                          </div>
                          <span className="text-sm font-medium">{subLink.label}</span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pb-12">
              <a 
                href="#newsletter" 
                onClick={(e) => scrollToSection(e, "#newsletter")}
                className="text-center px-6 py-3 rounded-full text-sm font-semibold text-primary-foreground bg-gradient-to-r from-primary to-accent"
              >
                Register
              </a>
              <a 
                href="#journey" 
                onClick={(e) => scrollToSection(e, "#journey")}
                className="text-center px-6 py-3 rounded-full text-sm font-semibold border border-foreground/20 text-foreground"
              >
                Explore the Journeys
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

