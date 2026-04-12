import weddingCouple from "@/assets/wedding-couple.jpg";

const GroomSection = () => {
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

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4">
        <div className="glass-card rounded-xl p-8 md:p-12 text-center">
          <p className="font-heading text-accent tracking-[0.2em] text-sm uppercase mb-3">वर पक्ष</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            ई॰ रोहित गुप्ता
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-1">
            (इंजीनियर)
          </p>
          <p className="font-body text-muted-foreground text-lg">
            सुपुत्र श्रीमती कलावती देवी एवं श्री जितेन्द्र प्रसाद गुप्ता
          </p>
          <p className="font-body text-muted-foreground text-sm mt-1">
            (नगर परिषद साहेबगंज, सभापति) - बिहार - 843125
          </p>
        </div>
      </div>
    </section>
  );
};

export default GroomSection;
