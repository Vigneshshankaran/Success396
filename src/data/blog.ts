export type BlogCategory = "Clarity" | "Alignment" | "Catalysis" | "Leadership";

export const categories: BlogCategory[] = ["Clarity", "Alignment", "Catalysis", "Leadership"];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  author: string;
  image: string;
  category: BlogCategory;
  featured: boolean;
  headings: { index: number; label: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "clarity-before-action",
    title: "Why Clarity Comes Before Action",
    excerpt: "Exploring why most people skip the most important step in their growth journey and how to fix it.",
    content: [
      "In the rush of modern life, we often prioritize action over understanding. We feel that if we aren't moving, we aren't growing. But action without clarity is merely activity—it doesn't necessarily lead to progress.",
      "Clarity is the foundation upon which all sustainable success is built. Without it, your efforts are fragmented, and your energy is dissipated across too many competing priorities.",
      "The GITA framework emphasizes that the first step is always seeing clearly. When you truly understand where you are and where you want to go, the right actions become obvious and effortless."
    ],
    date: "Feb 15, 2024",
    readTime: "5 min read",
    author: "Success369 Team",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    category: "Clarity",
    featured: true,
    headings: [
      { index: 0, label: "The Trap of Activity" },
      { index: 1, label: "The Power of Seeing" },
      { index: 2, label: "Building Your Foundation" }
    ]
  },
  {
    slug: "unconscious-patterns",
    title: "Breaking Free from Unconscious Patterns",
    excerpt: "A deep dive into how hidden beliefs silently shape our decisions and outcomes.",
    content: [
      "Much of our behavior is driven by patterns we aren't even aware of. These unconscious scripts were often written years ago, based on past experiences that may no longer be relevant.",
      "The MAYA journey is about lifting the veil on these patterns. By becoming aware of the hidden beliefs that drive us, we gain the power to choose a different path.",
      "Real transformation isn't about adding new skills; it's about removing the obstacles created by our own internal programming."
    ],
    date: "Feb 10, 2024",
    readTime: "4 min read",
    author: "Success369 Team",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800",
    category: "Alignment",
    featured: false,
    headings: [
      { index: 0, label: "The Invisible Scripts" },
      { index: 1, label: "Lifting the Veil" },
      { index: 2, label: "The Path to Choice" }
    ]
  }
];
