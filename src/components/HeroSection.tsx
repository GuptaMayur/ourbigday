import { useState, useCallback, useRef } from "react";
import weddingCouple from "@/assets/wedding-couple.jpg";
import WeddingCountdown from "./WeddingCountdown";
import Bell from "./bell";

interface HeroSectionProps {
  onEnter: () => void;
}

const HeroSection = ({ onEnter }: HeroSectionProps) => {
  const [ringing, setRinging] = useState(false);

  // 🔥 single audio instance (IMPORTANT)
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 🔥 play music safely
  const playMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        `${import.meta.env.BASE_URL}Flute.mp3`
      );
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }

    if (audioRef.current.paused) {
      audioRef.current.play().catch(() => {});
    }
  };

  const handleBellClick = useCallback(() => {
    if (ringing) return;

    setRinging(true);

    playMusic(); // 🔥 start music

    setTimeout(() => {
      onEnter();
    }, 1500);
  }, [ringing, onEnter]);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) return;

        playMusic(); // 🔥 anywhere click = music

        onEnter();
      }}
      style={{ cursor: "pointer" }}
    >
      <img
        src={weddingCouple}
        alt="Wedding couple illustration"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-4">
        <p className="font-heading text-foreground tracking-[0.3em] text-sm md:text-base uppercase mb-6">
          एक नई शुरुआत का उत्सव
        </p>

        <h1 className="font-display text-5xl md:text-6xl text-foreground leading-tight">
          रोहित
        </h1>

        <p className="font-display text-3xl md:text-4xl text-foreground my-2">
          &
        </p>

        <h1 className="font-display text-5xl md:text-6xl text-foreground leading-tight">
          प्राची
        </h1>

        <button
          onClick={handleBellClick}
          className="mt-10 focus:outline-none cursor-pointer group"
          aria-label="घंटी बजाएं"
        >
          <Bell />
        </button>

        <p className="font-heading text-foreground tracking-[0.25em] text-xs md:text-sm uppercase mt-4">
          शुभ प्रवेश हेतु घंटी स्पर्श करें
        </p>
        <WeddingCountdown />
      </div>
    </div>
  );
};

export default HeroSection;