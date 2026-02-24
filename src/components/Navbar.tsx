import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Book, Users, Star, Newspaper, Shield, Target, Globe, Eye, Layers, Zap, Sun } from "lucide-react";
import logo from "@/assets/logo.png";
import CTAButton from "@/components/CTAButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Foundation", href: "#", hasDropdown: true },
  { label: "Programs", href: "/programs", hasDropdown: true },
  { label: "The Book", href: "/book" },
  { label: "Events", href: "/events" },
  { label: "Resources", href: "/resources", hasDropdown: true },
  { label: "Contact", href: "/contact" },
];

const foundationSections = [
  {
    title: "The Philosophy",
    links: [
      { label: "Success 369", description: "Our Core Architecture", icon: Target, href: "#hero" },
      { label: "Who is this for?", description: "Redefining Modern Success", icon: Shield, href: "#journey" },
      { label: "The Success369 Programs", description: "Our Footprint & Purpose", icon: Globe, href: "/programs" },
    ],
  },
  {
    title: "The Humans",
    links: [
      { label: "Our Stewards", description: "The Founders' Vision", icon: Star, href: "#trainers" },
    ],
  },
  {
    title: "The Library",
    links: [
      { label: "Testimonials", description: "Voices of Transformation", icon: Globe, href: "#testimonials" },
      { label: "FAQ", description: "Deep Methodological Shifts", icon: Newspaper, href: "#faq" },
      { label: "Subscribe", description: "Press Kits & Brand Guides", icon: Star, href: "#newsletter" },
    ],
  },
];

const resourceSections = [
  { label: "Blog", description: "Insights & Articles", icon: Newspaper, href: "/blog" },
  { label: "Podcast", description: "The Audio Experience", icon: Globe, href: "/podcast" },
];

const programSections = [
  { label: "Phase 1: GITA", description: "Clarity Before Action", icon: Eye, href: "/program-gita" },
  { label: "Phase 2: MAYA", description: "Realigning Unseen Patterns", icon: Layers, href: "/program-maya" },
  { label: "Phase 3: SARVAM", description: "Architecting Sustainable Success", icon: Zap, href: "/program-sarvam" },
  { label: "Phase 4: SHAKTI", description: "Activating Aligned Momentum", icon: Sun, href: "/program-shakti" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [foundationOpen, setFoundationOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "#") return false;
    if (href === "/" && location.pathname !== "/") return false;
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  const isDropdownActive = (label: string) => {
    if (label === "Programs") return location.pathname.includes("/program");
    if (label === "Resources") return location.pathname === "/blog" || location.pathname === "/podcast" || location.pathname.startsWith("/blog/");
    if (label === "Foundation") {
      return foundationSections.some(s => s.links.some(l => l.href !== "#" && isActive(l.href)));
    }
    return false;
  };

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
          <Link to="/" className="flex items-center gap-2 group drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            <div className="h-[72px] flex items-center justify-center transition-all duration-300">
              <img src={logo} alt="Success369" className="h-full object-contain" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = link.hasDropdown ? isDropdownActive(link.label) : isActive(link.href);
              
              return link.hasDropdown ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger className="outline-none group">
                    <div
                      className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 flex items-center gap-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] ${
                        active 
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
                          active ? "w-6" : "w-0 group-hover:w-6"
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
                                {subLink.href.startsWith('/') ? (
                                  <Link 
                                    to={subLink.href}
                                    className="flex items-start gap-3 w-full"
                                  >
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                      <subLink.icon size={16} />
                                    </div>
                                    <div className="flex flex-col">
                                      <span className="text-sm font-semibold group-hover:text-primary transition-colors">{subLink.label}</span>
                                      <span className="text-[10px] text-muted-foreground leading-tight">{subLink.description}</span>
                                    </div>
                                  </Link>
                                ) : (
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
                                )}
                              </DropdownMenuItem>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : link.label === "Programs" ? (
                      <div className="flex flex-col gap-1">
                        {programSections.map((subLink) => (
                          <DropdownMenuItem 
                            key={subLink.label} 
                            className="px-0 py-2 focus:bg-transparent group cursor-pointer"
                          >
                            <Link 
                              to={subLink.href}
                              className="flex items-start gap-3 w-full"
                            >
                              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <subLink.icon size={16} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-semibold group-hover:text-primary transition-colors">{subLink.label}</span>
                                <span className="text-[10px] text-muted-foreground leading-tight">{subLink.description}</span>
                              </div>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-1">
                        {resourceSections.map((subLink) => (
                          <DropdownMenuItem 
                            key={subLink.label} 
                            className="px-0 py-2 focus:bg-transparent group cursor-pointer"
                          >
                            <Link 
                              to={subLink.href} 
                              className="flex items-start gap-3 w-full"
                            >
                              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <subLink.icon size={16} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-semibold group-hover:text-primary transition-colors">{subLink.label}</span>
                                <span className="text-[10px] text-muted-foreground leading-tight">{subLink.description}</span>
                              </div>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 group drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] ${
                    active 
                      ? "text-primary" 
                      : scrolled 
                        ? "text-muted-foreground hover:text-foreground" 
                        : "text-foreground/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                      active ? "w-6" : "w-0 group-hover:w-6"
                    }`}
                  />
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 group drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] ${
                    active 
                      ? "text-primary" 
                      : scrolled 
                        ? "text-muted-foreground hover:text-foreground" 
                        : "text-foreground/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                      active ? "w-6" : "w-0 group-hover:w-6"
                    }`}
                  />
                </a>
              );
            })}
          </nav>


          <div className="hidden lg:flex items-center gap-3">
            <CTAButton
              href="/#newsletter"
              size="sm"
              variant="shimmer"
            >
              Register Now
            </CTAButton>
            <CTAButton
              href="/#journey"
              size="sm"
              variant="outline"
              icon={null as any}
            >
              Explore the Journeys
            </CTAButton>
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
              {navLinks.map((link, i) => {
                const active = link.hasDropdown ? isDropdownActive(link.label) : isActive(link.href);

                return (
                  <div key={link.label}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`flex items-center justify-between text-2xl font-display font-semibold py-3 border-b border-border/30 ${
                        active ? "text-primary" : "text-foreground"
                      }`}
                      onClick={(e) => {
                        if (link.label === "Foundation") {
                          setFoundationOpen(!foundationOpen);
                        } else if (link.label === "Programs") {
                          setProgramsOpen(!programsOpen);
                        } else if (link.label === "Resources") {
                          setResourcesOpen(!resourcesOpen);
                        } else {
                          if (link.href.startsWith('/')) {
                            // Link handles this via wrapping
                          } else if (link.href.startsWith('#')) {
                            scrollToSection(e as any, link.href);
                          }
                          setMobileOpen(false);
                        }
                      }}
                    >
                      {link.hasDropdown ? (
                        <>
                          <span>{link.label}</span>
                          <ChevronDown className={`transition-transform duration-300 ${(link.label === "Foundation" ? foundationOpen : link.label === "Programs" ? programsOpen : resourcesOpen) ? "rotate-180" : ""}`} />
                        </>
                      ) : link.href.startsWith('/') ? (
                        <Link to={link.href} className="w-full" onClick={() => setMobileOpen(false)}>
                          {link.label}
                        </Link>
                      ) : (
                        <a href={link.href} className="w-full" onClick={(e) => scrollToSection(e, link.href)}>
                          {link.label}
                        </a>
                      )}
                    </motion.div>
                    
                    {link.label === "Programs" && programsOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="flex flex-col gap-2 py-4 pl-4"
                      >
                        {programSections.map((subLink) => (
                          <Link 
                            key={subLink.label} 
                            to={subLink.href} 
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 py-1"
                          >
                            <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                              <subLink.icon size={14} />
                            </div>
                            <span className="text-sm font-medium">{subLink.label}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                    
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
                                subLink.href.startsWith('/') ? (
                                  <Link 
                                    key={subLink.label} 
                                    to={subLink.href} 
                                    onClick={() => {
                                      setMobileOpen(false);
                                    }}
                                    className="flex items-center gap-3 py-1"
                                  >
                                    <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                                      <subLink.icon size={14} />
                                    </div>
                                    <span className="text-sm font-medium">{subLink.label}</span>
                                  </Link>
                                ) : (
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
                                )
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
                          <Link 
                            key={subLink.label} 
                            to={subLink.href} 
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 py-1"
                          >
                            <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                              <subLink.icon size={14} />
                            </div>
                            <span className="text-sm font-medium">{subLink.label}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </nav>
            <div className="flex flex-col gap-3 pb-12">
              <CTAButton
                href="/#newsletter"
                size="md"
                variant="shimmer"
                className="w-full"
              >
                Register
              </CTAButton>
              <CTAButton
                href="/#journey"
                size="md"
                variant="outline"
                className="w-full"
                icon={null as any}
              >
                Explore the Journeys
              </CTAButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

