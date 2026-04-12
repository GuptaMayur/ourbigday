import weddingCouple from "@/assets/wedding-couple.jpg";


const Footer = () => {
  return (
    <footer className="bg-background text-center relative min-h-[60vh] px-4">
       <img
        src={weddingCouple}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={1280}
      />
       <div className="absolute inset-0 bg-background/50" />
      <p className="font-body text-muted-foreground text-lg mb-6">
        हम आपके साथ इस खुशी को साझा करने की प्रतीक्षा कर रहे हैं!
      </p>

      <div className="max-w-md mx-auto glass-card rounded-xl p-6 mb-6">
        <p className="font-heading text-foreground text-sm tracking-wider mb-2">॥ प्रेषक ॥</p>
        <p className="font-body text-muted-foreground">श्री अमर प्रसाद</p>
        <p className="font-body text-muted-foreground text-sm">
         <a href="https://maps.app.goo.gl/QCf1osSb8bzggQ1t8" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">ग्राम - मलाही बाज़ार (वाया - अरेराज), जिला - पूर्वी चम्पारण (बिहार-845425)</a>
        </p>
      </div>

      {/* दर्शनाभिलाषी */}

      {/* दर्शनाभिलाषी */}
      <div className="max-w-md mx-auto glass-card rounded-xl p-6 mb-4">
        <p className="font-heading text-accent text-sm tracking-wider mb-2">दर्शनाभिलाषी</p>
        <p className="font-body text-muted-foreground text-sm">
          जनार्दन प्रसाद, ई॰ अजय प्रसाद, दुर्गेश प्रसाद, रत्नेश प्रसाद, जयप्रकाश गुप्ता, रोहित कुमार, मोहित कुमार, बालाजी
        </p>
      </div>

      {/* स्वागतकर्ता */}
      <div className="max-w-md mx-auto glass-card rounded-xl p-6 mb-4">
        <p className="font-heading text-accent text-sm tracking-wider mb-2">॥ स्वागतकर्ता ॥</p>
        <p className="font-body text-muted-foreground text-sm">
          दीपक प्रसाद गुप्ता, मयूर गुप्ता (बादल), विकास कुमार, भोला कुमार, मिहिर गुप्ता एवं समस्त ब्याहुत परिवार
        </p>
      </div>

      {/* आकांक्षी */}
      <div className="max-w-md mx-auto glass-card rounded-xl p-6 mb-4">
        <p className="font-heading text-accent text-sm tracking-wider mb-2">॥ आकांक्षी ॥</p>
        <p className="font-body text-muted-foreground">ई॰ अजय प्रसाद</p>
      </div>

      {/* विशेष निवेदक */}
      <div className="max-w-md mx-auto glass-card rounded-xl p-6 mb-6">
        <p className="font-heading text-accent text-sm tracking-wider mb-2">॥ विशेष निवेदक ॥</p>
        <p className="font-body text-muted-foreground">मयूर गुप्ता (बादल)</p>
        <p className="font-body text-muted-foreground text-sm">(Soft. Engineer, Bengaluru)</p>
      </div>

      <p className="text-accent text-2xl">✤</p>
    </footer>
  );
};

export default Footer;
