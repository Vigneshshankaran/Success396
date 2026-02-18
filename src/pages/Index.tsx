import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import JourneySection from "@/components/JourneySection";
import VideoCardsSection from "@/components/VideoCardsSection";
import TrainersSection from "@/components/TrainersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import NewsletterCTA from "@/components/NewsletterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSlider />
      <JourneySection />
      <VideoCardsSection />
      <TrainersSection />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterCTA />
      <Footer />
    </main>
  );
};

export default Index;
