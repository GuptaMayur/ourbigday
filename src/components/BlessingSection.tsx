import weddingCouple from "@/assets/wedding-couple.jpg";

const BlessingSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
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
          <p className="font-heading text-foreground text-lg md:text-xl tracking-wider">
            मंगलम् भगवान विष्णु, मंगलम् गरुड़ध्वजः।
          </p>

          <p className="text-4xl md:text-5xl text-accent my-6">卐</p>

          <p className="font-heading text-foreground text-lg md:text-xl tracking-wider">
            मंगलम् पुण्डरीकाक्षः, मंगलाय तनोहरिः ॥
          </p>

          <div className="w-3/4 mx-auto h-px bg-border my-8 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-accent text-lg">✤</span>
          </div>

          <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed mb-6">
            महागुरु महादेव की असीम दया तथा साहेब दीदी के स्नेहिल आशीर्वाद से
          </p>

          {/* Bride */}
          <div className="mb-6">
            <p className="font-heading text-accent tracking-[0.2em] text-sm uppercase mb-2">वधू पक्ष</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
              आ॰ कुमारी प्राची
            </h2>
            <p className="font-body text-muted-foreground text-base">
              (सुपुत्री: श्रीमती निर्मला गुप्ता एवं श्री अमर प्रसाद)
            </p>
          </div>

          <p className="font-display text-3xl text-foreground my-4">&</p>

          {/* Groom */}
          <div className="mb-6">
            <p className="font-heading text-accent tracking-[0.2em] text-sm uppercase mb-2">वर पक्ष</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
              ई॰ रोहित गुप्ता
            </h2>
            <p className="font-body text-muted-foreground text-base">
              (सुपुत्र: श्रीमती कलावती देवी एवं श्री जितेन्द्र प्रसाद गुप्ता)
            </p>
            <p className="font-body text-muted-foreground text-sm mt-1">
              (नगर परिषद साहेबगंज, सभापति) - बिहार - 843125
            </p>
          </div>

          <div className="w-3/4 mx-auto h-px bg-border my-6 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-accent text-lg">✤</span>
          </div>

          <p className="font-heading text-accent text-sm tracking-wider mb-2">बाल-मनुहार</p>
          <p className="font-body text-muted-foreground text-base italic leading-relaxed">
            भेज रहे हैं निमंत्रण, आपको सादर बुलाने को,<br />
            मौसी की शादी में भूल न जाना, रसगुल्ले खाने को!
          </p>
          <p className="font-body text-muted-foreground text-sm mt-2">— तेजस एवं सार्थक</p>
        </div>
      </div>
    </section>
  );
};

export default BlessingSection;
