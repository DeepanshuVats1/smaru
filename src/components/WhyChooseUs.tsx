import { Shield, Award, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "All products undergo rigorous testing and quality control processes",
  },
  {
    icon: Award,
    title: "Certified Products",
    description: "ISO certified manufacturing with international quality standards",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated R&D team with years of industry experience",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Cutting-edge technology for superior power quality solutions",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">WHY CHOOSE US</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg hover:bg-muted transition-colors duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
