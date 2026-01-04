import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const utilities = [
  { name: "Haryana Vidyut Prasaran Nigam Ltd.", abbr: "HVPNL", image: "smaru-img/WhatsApp Image 2025-12-31 at 1.48.09 PM.jpeg" },
  { name: "Jharkhand Bijli Vitran Nigam Ltd.", abbr: "JBVNL", image:"smaru-img/WhatsApp Image 2025-12-31 at 1.48.29 PM.jpeg" },
  { name: "Jharkhand Urja Vikas Nigam Ltd.", abbr: "JUVNL", image:"smaru-img/WhatsApp Image 2025-12-31 at 1.49.18 PM.jpeg" },
  { name: "Madhyanchal Vidyut Vitran Nigam Ltd", abbr: "MVVNL", image:"smaru-img/WhatsApp Image 2025-12-31 at 1.49.33 PM.jpeg" },
  { name: "Purvanchal Vidyut Vitaran Nigam Ltd.", abbr: "PuVVNL", image:"smaru-img/WhatsApp Image 2025-12-31 at 1.49.49 PM.jpeg"},
  { name: "Uttar Haryana Bijli Vitran Nigam Ltd.", abbr: "UHBVN", image:"smaru-img/WhatsApp Image 2026-01-04 at 2.44.13 PM.jpeg" },
  { name: "Uttarakhand Power Corporation Ltd", abbr: "UPCL", image:"smaru-img/WhatsApp Image 2025-12-31 at 1.59.23 PM.jpeg" },
  { name: "Dakshinanchal Vidyut Vitran Nigam Ltd", abbr: "DVVNL", image:"smaru-img/WhatsApp Image 2025-12-31 at 1.59.46 PM.jpeg"},
  { name: "Manipur State Power Company Ltd", abbr: "MSPCL", image:"smaru-img/WhatsApp Image 2025-12-31 at 2.00.01 PM.jpeg" },
  { name: "Dakshin Haryana Bijli Vitran Nigam", abbr: "DHBVN", image:"smaru-img/WhatsApp Image 2025-12-31 at 2.00.14 PM.jpeg" },
  { name: "Pashchimanchal Vidyut Vitran Nigam Ltd.", abbr: "PVVNL", image:"smaru-img/WhatsApp Image 2025-12-31 at 2.00.22 PM.jpeg" },
  { name: "Uttar Pradesh Industrial Development Authority", abbr: "UPIDA", image:"smaru-img/WhatsApp Image 2025-12-31 at 2.00.49 PM.jpeg" },
  { name: "Jammu Power Distribution Corporation Ltd", abbr: "JPDCL", image:"smaru-img/WhatsApp Image 2025-12-31 at 2.00.59 PM.jpeg"},
  { name: "Haryana State Industrial and Infrastructure Development Corporation", abbr: "HSIIDC", image:"smaru-img/WhatsApp Image 2025-12-31 at 2.01.24 PM.jpeg" },
];

const ApprovedByUtilities = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % utilities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Approved By Utilities
        </h2>
        
        <div className="relative overflow-hidden">
          {/* Left Arrow */}
          <button
            onClick={() => setScrollPosition((prev) => (prev - 1 + utilities.length) % utilities.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => setScrollPosition((prev) => (prev + 1) % utilities.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${scrollPosition * (100 / 5)}%)` }}
          >
            {[...utilities, ...utilities].map((utility, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/5 px-4"
              >
                <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow h-full flex flex-col items-center justify-center min-h-[180px] border border-border">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                    {utility.image ? (
                      <img 
                        src={utility.image} 
                        alt={utility.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-primary font-bold text-lg">{utility.abbr}</span>
                    )}
                  </div>
                  <p className="text-sm text-center text-muted-foreground font-medium">
                    {utility.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {utilities.slice(0, 5).map((_, index) => (
            <button
              key={index}
              onClick={() => setScrollPosition(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                Math.floor(scrollPosition / 3) === index 
                  ? "bg-primary" 
                  : "bg-primary/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApprovedByUtilities;
