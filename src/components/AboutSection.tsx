const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">PROFESSIONAL IN POWER QUALITY SOLUTIONS</h2>
        
        <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed text-foreground">
          <div className="space-y-4 text-justify">
            <p>
              <strong className="text-primary">SMARU TECH</strong>, established in 2014, is a Delhi NCR–based company with its Head Office in New Delhi and a manufacturing facility in Manesar, Gurugram. We are a leading manufacturer focused on advanced power quality improvement and power factor correction solutions. Our core product portfolio includes APF, SVG, and APFC systems, engineered to enhance energy efficiency, system stability, and operational reliability.

SMARU TECH is supported by an experienced R&D team, a strong quality supervision system, and long-term collaborations with institutions such as the Central Power Research Institute, Electrical Research & Development Association, and other reputed R&D organizations. Guided by customer requirements and continuous innovation, we have built over a decade of expertise in low- and medium-voltage power quality solutions, including STATCOM systems and automatic power factor correction products.

            </p>
          </div>
          <div className="space-y-4 text-justify">
            <p>
            In addition to conventional power quality solutions, SMARU TECH is expanding into drone-based powerline inspection technologies to address modern utility and infrastructure monitoring requirements. By utilizing advanced drones equipped with high-resolution imaging and inspection sensors, we enable safer, faster, and more accurate assessment of transmission lines, substations, and critical electrical assets. This technology minimizes human risk, enhances fault detection, and supports predictive and preventive maintenance strategies.

  Our solutions are widely deployed across power distribution networks, electrical substations, railways, oil and chemical industries, metallurgy, mining, and high-rise buildings, delivering reliability, safety, and innovation at scale.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
