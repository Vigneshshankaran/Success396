import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Sparkles, Clock, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalCTA from "@/components/GlobalCTA";
import { blogPosts, categories, type BlogCategory } from "@/data/blog";
import { fadeUp } from "@/lib/animations";

// fadeUp imported from @/lib/animations

type FilterType = "All" | BlogCategory;

const Blog = () => {
  const [filter, setFilter] = useState<FilterType>("All");
  const [search, setSearch] = useState("");
  const featured = blogPosts.find((p) => p.featured);

  const filtered = blogPosts.filter((p) => {
    const matchesCategory = filter === "All" || p.category === filter;
    const matchesSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const allFilters: FilterType[] = ["All", ...categories];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog — Insights for Sustainable Growth | Success369</title>
        <meta name="description" content="Explore perspectives on clarity, congruence, and catalysis — the three pillars of lasting transformation." />
        <link rel="canonical" href="https://success369.org/blog" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
        <div className="absolute top-20 left-1/4 w-[400px] h-[300px] bg-primary/8 rounded-full blur-[150px]" />
        <div className="absolute top-40 right-1/4 w-[300px] h-[200px] bg-pink-500/5 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" animate="visible">
            <motion.div
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-8 bg-primary/60" />
              <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">
                Leadership & Thought Leadership
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="mb-8"
            >
              Insights for{" "}
              <span className="text-primary text-glow">sustainable growth</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            >
              Explore perspectives on clarity, congruence, and catalysis — the three pillars of
              lasting transformation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="section bg-background/50 relative overflow-hidden">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to={`/blog/${featured.slug}`}
                className="group block rounded-2xl overflow-hidden bg-card/40 backdrop-blur-sm border border-border/30 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_60px_-15px_hsl(var(--primary)/0.15)]"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60 hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:hidden" />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="text-primary font-semibold uppercase tracking-wider">{featured.category}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground group-hover:text-primary transition-colors mb-4 leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filters + Search + Grid */}
      <section className="section relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
        <div className="relative container-custom">
          {/* Search + Filters */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-stretch md:items-center mb-12">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {allFilters.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                    filter === tab
                      ? "bg-primary border-primary text-primary-foreground shadow-[0_0_20px_-3px_hsl(var(--primary)/0.4)]"
                      : "bg-card/40 border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/45"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-card/40 border border-border/40 hover:border-primary/30 focus:border-primary/50 focus:outline-none rounded-full py-2.5 pl-11 pr-5 text-sm transition-colors text-foreground"
              />
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Search size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">We couldn't find any articles matching "{search}".</p>
              <button
                onClick={() => {
                  setSearch("");
                  setFilter("All");
                }}
                className="px-6 py-2.5 rounded-full bg-card border border-border/50 hover:border-primary/50 text-sm font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block h-full rounded-2xl overflow-hidden bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.15)]"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    </div>
 
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="text-primary font-semibold uppercase tracking-wider">{post.category}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <GlobalCTA
        kind="form"
        title="Meaningful insights, delivered without noise."
        description="Get weekly perspectives on clarity, congruence, and catalysis — the three pillars of lasting transformation."
        showPillars={true}
      />


      <Footer />
    </div>
  );
};

export default Blog;
