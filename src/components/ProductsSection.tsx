import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    title: "300kvar Rack Type Static Var Generator SVG Cubicle - 1",
    image: "smaru-img/300kvar-Rack-Type-Static-Var-Generator-SVG-Cubicle-1-300x300.jpg",
  },
  {
    title: "6.6kv Indoor Static Synchronous Compensator(STATCOM SVG)- 1",
    image: "smaru-img/6.6kv-Indoor-Static-Synchronous-CompensatorSTATCOM-SVG-1-300x199.png",
  },
  {
    title: "Active Harmonic Filter AHF-2",
    image: "smaru-img/Active-Harmonic-Filter-AHF-2-155x300.jpg",
  },
  {
    title: "High Voltage Static Var Generator HV SVG Statcom Outdoor Container-1",
    image: "smaru-img/High-Voltage-Static-Var-Generator-HV-SVG-Statcom-Outdoor-Container-1-300x203.png",
  },
  {
    title: "HV Automatic Power Factor Improvement-2",
    image: "smaru-img/HV-Automatic-Power-Factor-Improvement-2-300x199.png"
  },
  {
    title: "MV Automatic Capacitor Banks With Harmonic Filters-2",
    image: "smaru-img/MV-Automatic-Capacitor-Banks-With-Harmonic-Filters-2-300x300.jpg"
  },
  {
    title: "TSC - Thyristor Switched Capacitor Banks-1",
    image: "smaru-img/TSC-Thyristor-Switched-Capacitor-Banks-1-300x288.jpg"
  },
  {
    title: "Wall Mounted 100kvar Static Var Generator - 2",
    image: "smaru-img/Wall-Mounted-100kvar-Static-Var-Generator-2-300x272.png"
  }
];

const ProductsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Create duplicated array for infinite loop (start with 2 copies, end with 2 copies)
  const duplicatedProducts = [...products, ...products, ...products];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev + 1;
        // Reset to start position when reaching end
        if (next >= products.length) {
          return 0;
        }
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => {
      const next = prev - 1;
      return next < 0 ? products.length - 1 : next;
    });
  };

  const goToNext = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      return next >= products.length ? 0 : next;
    });
  };

  // Calculate translateX starting from the middle copy for infinite loop
  const translateX = (products.length + currentSlide) * (100 / 3);
  const totalSlides = products.length;

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          OUR PRODUCTS
        </h2>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${translateX}%)` }}
            >
              {duplicatedProducts.map((product, index) => (
                <div 
                  key={index}
                  className="w-1/3 flex-shrink-0 px-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-full h-64 md:h-80 mb-4 bg-white rounded-lg overflow-hidden flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <p className="text-center text-sm md:text-base text-foreground font-bold">
                      {product.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white hover:bg-gray-100 rounded-full shadow-lg transition-colors"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-6 h-6 text-red-900" strokeWidth={2.5} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white hover:bg-gray-100 rounded-full shadow-lg transition-colors"
            aria-label="Next products"
          >
            <ChevronRight className="w-6 h-6 text-red-900" strokeWidth={2.5} />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index
                    ? "bg-foreground" 
                    : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
