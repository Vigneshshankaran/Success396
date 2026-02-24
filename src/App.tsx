import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import ProgramGita from "./pages/ProgramGita";
import ProgramMaya from "./pages/ProgramMaya";
import ProgramSarvam from "./pages/ProgramSarvam";
import ProgramShakti from "./pages/ProgramShakti";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import FreeSession from "./pages/FreeSession";
import Podcast from "./pages/Podcast";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/program-gita" element={<ProgramGita />} />
          <Route path="/program-maya" element={<ProgramMaya />} />
          <Route path="/program-sarvam" element={<ProgramSarvam />} />
          <Route path="/program-shakti" element={<ProgramShakti />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="/free-session" element={<FreeSession />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
