import weddingCouple from "@/assets/wedding-couple.jpg";

const SaveTheDate = () => {
  const calendarUrl = (title: string, date: string, location: string) => {
    const start = date.replace(/-/g, "") + "T060000";
    const end = date.replace(/-/g, "") + "T230000";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&location=${encodeURIComponent(location)}&details=${encodeURIComponent("रोहित एवं प्राची विवाह समारोह")}`;
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-20">
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
        <p className="font-heading text-accent tracking-[0.3em] text-sm uppercase mb-2">
          शुभ मुहूर्त
        </p>
        <p className="text-accent text-2xl mb-8">↓</p>

        <div className="glass-card rounded-xl p-8 md:p-12 mb-4">
          <p className="font-heading text-foreground text-lg tracking-wider mb-4">
            कथा मटकोर एवं शुभ हल्दी
          </p>
          <p className="font-body text-muted-foreground text-lg">
            10/05/2026, रविवार (<a href="https://maps.app.goo.gl/QCf1osSb8bzggQ1t8" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">📍निज निवास</a>)
          </p>
          <a
            href={calendarUrl("कथा मटकोर एवं शुभ हल्दी", "2026-05-10", "निज निवास")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-accent text-accent-foreground font-heading text-sm tracking-wider rounded-md hover:opacity-90 transition-opacity"
          >
            📅 SAVE TO GOOGLE CALENDAR
          </a>
        </div>

        <div className="glass-card rounded-xl p-8 md:p-12 mb-4">
          <p className="font-heading text-forमलाही बाज़ार (eground text-lg tracking-wider mb-4">
            मेहँदी
          </p>
          <p className="font-body text-muted-foreground text-lg">
            11/05/2026, सोमवार (<a href="https://maps.app.goo.gl/QCf1osSb8bzggQ1t8" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">📍निज निवास</a>)
          </p>
          <a
            href={calendarUrl("मेहँदी", "2026-05-11", "निज निवास")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-accent text-accent-foreground font-heading text-sm tracking-wider rounded-md hover:opacity-90 transition-opacity"
          >
            📅 SAVE TO GOOGLE CALENDAR
          </a>
        </div>

        <div className="glass-card rounded-xl p-8 md:p-12 mb-4">
          <p className="font-heading text-foreground text-lg tracking-wider mb-6">
            शुभ विवाह
          </p>
          <h3 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            12 मई, 2026
          </h3>
          <div className="space-y-2 font-body text-muted-foreground text-lg">
            <p>मंगलवार</p>
            <p className="mt-4"><a href="https://maps.app.goo.gl/yTpSD1gDveVh8V32A" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">📍 राधेश्याम होटल एंड बैंक्वेट</a></p>
            <p>लौरिया अरेराज, बिहार – 845411</p>
          </div>
          <a
            href={calendarUrl("शुभ विवाह - रोहित & प्राची", "2026-05-12", "राधेश्याम होटल एंड बैंक्वेट, लौरिया अरेराज, बिहार - 845411")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-2 bg-accent text-accent-foreground font-heading text-sm tracking-wider rounded-md hover:opacity-90 transition-opacity"
          >
            📅 SAVE TO GOOGLE CALENDAR
          </a>
        </div>

        <div className="glass-card rounded-xl p-8 md:p-12">
          <p className="font-heading text-foreground text-lg tracking-wider mb-4">
            विदाई
          </p>
          <p className="font-body text-muted-foreground text-lg">
            13/05/2026, बुधवार (<a href="https://maps.app.goo.gl/QCf1osSb8bzggQ1t8" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">📍निज निवास</a>)
          </p>
        </div>
      </div>
    </section>
  );
};

export default SaveTheDate;
