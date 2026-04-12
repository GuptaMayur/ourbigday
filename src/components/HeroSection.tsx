import { useState } from "react";
import weddingCouple from "@/assets/wedding-couple.jpg";
import bellImg from "@/assets/bell.png";
import Bell from "./bell";

interface HeroSectionProps {
  onEnter: () => void;
}

const HeroSection = ({ onEnter }: HeroSectionProps) => {
  const [ringing, setRinging] = useState(false);

  const handleBellClick = () => {
    setRinging(true);
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onClick={(e) => {
        // Prevent click from bell button bubbling up
        if ((e.target as HTMLElement).closest('button')) return;
        onEnter();
      }}
      style={{ cursor: 'pointer' }}
    >
      <img
        src={weddingCouple}
        alt="Wedding couple illustration"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-background/40" />

      <div className="relative z-10 text-center px-4">
        <p className="font-heading text-foreground tracking-[0.3em] text-sm md:text-base uppercase mb-6">
          एक नई शुरुआत का जश्न
        </p>

        <h1 className="font-display text-5xl md:text-6xl text-foreground leading-tight">
          रोहित
        </h1>
        <p className="font-display text-3xl md:text-4xl text-foreground my-2">&</p>
        <h1 className="font-display text-5xl md:text-6xl text-foreground leading-tight">
          प्राची
        </h1>

        <button
          onClick={handleBellClick}
          className="mt-10 focus:outline-none cursor-pointer group"
          aria-label="घंटी बजाएं"
          style={{ pointerEvents: 'auto' }}
        >
          <Bell />
          
        </button>

        <p className="font-heading text-foreground tracking-[0.25em] text-xs md:text-sm uppercase mt-4">
          शुभ प्रवेश हेतु घंटी बजाएं
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
