import weddingCouple from "@/assets/wedding-couple.jpg";

const VenueSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center py-20">
      <img
        src={weddingCouple}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-background/50" />

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 text-center">
        <div className="glass-card rounded-xl p-8 md:p-12 mb-4 border border-accent/40">
          <p className="font-heading text-accent tracking-[0.3em] text-sm uppercase mb-4">
            विवाह स्थल
          </p>
          <h3 className="font-heading text-foreground text-2xl md:text-3xl mb-3">
            राधेश्याम होटल एंड बैंक्वेट
          </h3>
          <p className="font-body text-muted-foreground text-lg">
            लौरिया अरेराज, बिहार – 845411
          </p>
          <a
            href="https://maps.app.goo.gl/yTpSD1gDveVh8V32A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-accent text-accent-foreground font-heading text-sm tracking-wider rounded-md hover:opacity-90 transition-opacity"
          >
            📍 NAVIGATE TO VENUE
          </a>
        </div>

        <div className="glass-card rounded-xl p-8 md:p-12">
          <p className="font-display text-foreground text-xl md:text-2xl italic mb-4">
            सस्नेह एवं शुभकामनाओं सहित
          </p>
          <p className="font-heading text-accent text-lg tracking-wider mb-6">
            परिजन एवं मित्रगण
          </p>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "रोहित & प्राची विवाह निमंत्रण",
                  text: "स्नेह के पावन बंधनों से जुड़ते इस शुभ अवसर पर, हम आपको हृदय से आमंत्रित करते हैं कि आप हमारे साथ सम्मिलित होकर  मेरी प्रिय बहन प्राची एवं रोहित के पावन विवाह समारोह के साक्षी बनें। 12 मई 2026, राधेश्याम होटल एंड बैंक्वेट, लौरिया अरेराज",
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert("लिंक कॉपी हो गया!");
              }
            }}
            className="inline-block px-6 py-3 bg-accent text-accent-foreground font-heading text-sm tracking-wider rounded-md hover:opacity-90 transition-opacity cursor-pointer"
          >
            📤 SHARE INVITATION
          </button>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
