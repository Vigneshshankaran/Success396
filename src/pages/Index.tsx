import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import JourneySection from "@/components/JourneySection";
import VideoCardsSection from "@/components/VideoCardsSection";
import TrainersSection from "@/components/TrainersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import GlobalCTA from "@/components/GlobalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Success369 — Build Success That Is Aligned</title>
        <meta name="description" content="Success369 helps individuals, leaders, and organisations build sustainable success through clarity, congruence, and catalysis." />
      </Helmet>
      <Navbar />
      <HeroSlider />
      <JourneySection />
      <VideoCardsSection />
      <TrainersSection />
      <TestimonialsSection />
      <FAQSection />
      <GlobalCTA kind="form" />
      <Footer />
    </main>
  );
};

export default Index;
