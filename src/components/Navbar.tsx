import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe, Newspaper } from "lucide-react";
import logo from "@/assets/logo.png";
import CTAButton from "@/components/CTAButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Foundation", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "The Book", href: "/book" },
  { label: "Events", href: "/events" },
  { label: "Resources", hasDropdown: true },
  { label: "Contact", href: "/contact" },
];

const resourceSections = [
  { label: "Blog", description: "Insights & Articles", icon: Newspaper, href: "/blog" },
  { label: "Podcast", description: "The Audio Experience", icon: Globe, href: "/podcast" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setResourcesOpen(false);
  }, [location.pathname]);

  const isActive = (href?: string) => {
    if (!href || href === "#") return false;
    if (href === "/" && location.pathname !== "/") return false;
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  const isResourcesActive = () => {
    return location.pathname === "/blog" || location.pathname === "/podcast" || location.pathname.startsWith("/blog/");
  };

  const isDarkHeroPage = [
    "/",
    "/programs",
    "/book",
    "/events",
    "/podcast",
    "/program-maya",
    "/program-gita",
    "/program-sarvam",
    "/program-shakti",
  ].includes(location.pathname);

  const linkClasses = (active: boolean) =>
    `relative px-3.5 py-2 text-base md:text-[15px] font-semibold transition-all duration-200 ${
      active
        ? "text-primary"
        : scrolled
          ? "text-muted-foreground hover:text-foreground"
          : isDarkHeroPage
          ? "text-white/90 hover:text-white"
          : "text-foreground/90 hover:text-foreground"
    }`;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-2xl border-b border-border/50 shadow-sm"
            : isDarkHeroPage
            ? "bg-gradient-to-b from-black/60 to-transparent"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5">
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <div className="h-[72px] flex items-center justify-center transition-all duration-300">
              <img src={logo} alt="Success369" className="h-full object-contain" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                const active = isResourcesActive();
                return (
                  <DropdownMenu key={link.label}>
                    <DropdownMenuTrigger className="outline-none group">
                      <div className={`${linkClasses(active)} flex items-center gap-1`}>
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
                      className="w-[240px] flex flex-col p-4 gap-1 bg-background/95 backdrop-blur-2xl border-border/50 shadow-2xl animate-in fade-in zoom-in duration-200"
                    >
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
                              <span className="text-base font-semibold group-hover:text-primary transition-colors">{subLink.label}</span>
                              <span className="text-xs text-muted-foreground leading-tight">{subLink.description}</span>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  to={link.href!}
                  className={`${linkClasses(active)} group`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                      active ? "w-6" : "w-0 group-hover:w-6"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            <ThemeToggle className={!scrolled && isDarkHeroPage ? "!text-white !border-white/20 !bg-black/20 hover:!bg-black/40" : ""} />
            <CTAButton
              to="/contact"
              size="sm"
              variant="shimmer"
              className="px-5 py-2.5 text-sm"
            >
              Register Now
            </CTAButton>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle className={!scrolled && isDarkHeroPage ? "!text-white !border-white/20 !bg-black/20 hover:!bg-black/40" : ""} />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 transition-colors ${!scrolled && isDarkHeroPage ? "text-white" : "text-foreground"}`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
                const active = link.hasDropdown ? isResourcesActive() : isActive(link.href);

                return (
                  <div key={link.label}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`flex items-center justify-between text-2xl font-display font-semibold py-3 border-b border-border/30 ${
                        active ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {link.hasDropdown ? (
                        <button
                          onClick={() => setResourcesOpen(!resourcesOpen)}
                          className="flex items-center justify-between w-full"
                        >
                          <span>{link.label}</span>
                          <ChevronDown className={`transition-transform duration-300 ${resourcesOpen ? "rotate-180" : ""}`} />
                        </button>
                      ) : (
                        <Link to={link.href!} className="w-full" onClick={() => setMobileOpen(false)}>
                          {link.label}
                        </Link>
                      )}
                    </motion.div>

                    {link.hasDropdown && resourcesOpen && (
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
                to="/contact"
                size="md"
                variant="shimmer"
                className="w-full"
              >
                Register Now
              </CTAButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
