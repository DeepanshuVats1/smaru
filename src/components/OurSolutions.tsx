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
import { SVGProps } from "react";

const Drone = ({ className, strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement> & { strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {/* Main body */}
    <rect x="9" y="10" width="6" height="4" rx="1" />
    {/* Propellers */}
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="6" cy="18" r="2.5" />
    <circle cx="18" cy="18" r="2.5" />
    {/* Arms connecting body to propellers */}
    <line x1="9" y1="10" x2="6" y2="6" />
    <line x1="15" y1="10" x2="18" y2="6" />
    <line x1="9" y1="14" x2="6" y2="18" />
    <line x1="15" y1="14" x2="18" y2="18" />
    {/* Camera/gimbal */}
    <circle cx="12" cy="12" r="1.5" />
    <line x1="12" y1="10" x2="12" y2="8" />
  </svg>
);

const Capacitor = ({ className, strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement> & { strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {/* Left terminal */}
    <line x1="4" y1="12" x2="8" y2="12" />
    {/* Left plate */}
    <rect x="8" y="6" width="2" height="12" />
    {/* Gap between plates */}
    <line x1="10" y1="12" x2="14" y2="12" />
    {/* Right plate */}
    <rect x="14" y="6" width="2" height="12" />
    {/* Right terminal */}
    <line x1="16" y1="12" x2="20" y2="12" />
    {/* Multiple capacitor units stacked */}
    <rect x="8" y="8" width="2" height="2" fill="currentColor" />
    <rect x="14" y="8" width="2" height="2" fill="currentColor" />
    <rect x="8" y="14" width="2" height="2" fill="currentColor" />
    <rect x="14" y="14" width="2" height="2" fill="currentColor" />
  </svg>
);

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
    title: "Drone Powerline Inspection",
    icon: Drone,
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
    icon: Capacitor,
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
