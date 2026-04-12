import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import BlessingSection from "@/components/BlessingSection";
import SaveTheDate from "@/components/SaveTheDate";
import VenueSection from "@/components/VenueSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [entered, setEntered] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {!entered ? (
        <HeroSection onEnter={() => setEntered(true)} />
      ) : (
        <div className="animate-fade-in-up">
          <BlessingSection />
          <SaveTheDate />
          <VenueSection />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Index;
