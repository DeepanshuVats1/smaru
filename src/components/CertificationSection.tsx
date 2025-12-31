import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const certifications = [
  { 
    name: "ISO 9001:2015",
    image: "certification/ISO-Certificate-BIS_page-0001-725x1024.jpg"
  },
  { 
    name: "ISO 9001:2015",
    image: "certification/ISO_DBS-._page-0001-724x1024.jpg"
  },
  { 
    name: "Udyam Registration",
    image: "certification/Udyam-Certificate_page-0001-790x1024.jpg"
  },
  { 
    name: "Udyam Registration",
    image: "certification/Udyam-Certificate_page-0002-790x1024.jpg"
  },
];

const CertificationSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Create duplicated array for infinite loop
  const duplicatedCertifications = [...certifications, ...certifications, ...certifications];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev + 1;
        return next >= certifications.length ? 0 : next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => {
      const next = prev - 1;
      return next < 0 ? certifications.length - 1 : next;
    });
  };

  const goToNext = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      return next >= certifications.length ? 0 : next;
    });
  };

  // Calculate translateX starting from the middle copy for infinite loop
  const translateX = (certifications.length + currentSlide) * (100 / 3);

  return (
    <section id="certification" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              OUR CERTIFICATES
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Company takes technological innovation and high quality as the core competitiveness, has now passed ISO9000:2015 quality management system, all the products are type tested by CPRI, ERDA & NSIC.
            </p>
          </div>

          {/* Right Side - Carousel */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${translateX}%)` }}
              >
                {duplicatedCertifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="w-1/3 flex-shrink-0 px-2"
                  >
                    <div className="w-full aspect-[3/4] bg-background rounded-lg overflow-hidden shadow-md">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-100 rounded-full shadow-lg transition-colors"
              aria-label="Previous certificates"
            >
              <ChevronLeft className="w-6 h-6 text-red-900" strokeWidth={2.5} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-100 rounded-full shadow-lg transition-colors"
              aria-label="Next certificates"
            >
              <ChevronRight className="w-6 h-6 text-red-900" strokeWidth={2.5} />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide
                      ? "bg-foreground" 
                      : "bg-gray-400"
                  }`}
                  aria-label={`Go to certificate ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
