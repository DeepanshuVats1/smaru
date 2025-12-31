import { 
  Filter, 
  Box, 
  Battery, 
  Zap, 
  Sliders, 
  ToggleLeft, 
  TrendingUp, 
  Layers, 
  CircuitBoard, 
  Shield, 
  Lightbulb,
  Activity
} from "lucide-react";

const solutions = [
  {
    title: "Active Harmonic Filter",
    icon: Filter,
  },
  {
    title: "Static VAR Generator SVG",
    icon: Box,
  },
  {
    title: "Capacitor Banks",
    icon: Battery,
  },
  {
    title: "MV/HV Statcom",
    icon: Zap,
  },
  {
    title: "Static Var Compensator",
    icon: Sliders,
  },
  {
    title: "TSC",
    icon: ToggleLeft,
  },
  {
    title: "Power Factor Correction",
    icon: TrendingUp,
  },
  {
    title: "Hybrid Power Factor Correction",
    icon: Layers,
  },
  {
    title: "Advanced Static Var Generator",
    icon: CircuitBoard,
  },
  {
    title: "Integrated Capacitors",
    icon: CircuitBoard,
  },
  {
    title: "Power Quality",
    icon: Activity,
  },
  {
    title: "Energy Saving",
    icon: Lightbulb,
  },
];

const OurSolutions = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Quote Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
            OPTIMIZE YOUR POWER QUALITY
          </h2>
          <p className="text-lg italic text-muted-foreground">
            "Energy efficiency is a journey, not a destination"
          </p>
        </div>

        {/* Section Title */}
        <h3 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          OUR SOLUTIONS
        </h3>

        {/* Solutions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center justify-center group cursor-pointer"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 flex items-center justify-center">
                  <IconComponent 
                    className="w-full h-full text-gray-400 group-hover:text-secondary transition-colors duration-300" 
                    strokeWidth={1.5}
                  />
                </div>
                <h4 className="text-secondary font-bold text-sm md:text-base text-center">
                  {solution.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
