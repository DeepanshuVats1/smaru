import Logo from "./Logo";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-smaru-dark text-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4 bg-background inline-block p-2 rounded">
              <Logo />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              SMARU TECH LLP is a leading manufacturer of power quality solutions including APF, SVG, and APFC systems. Established in 2014, we are committed to delivering innovative and reliable products.
            </p>
            <div className="flex gap-4">
              <img src="smaru-img/WhatsApp-Image-2023-02-01-at-4.28.27-PM.jpeg" alt="" className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] h-auto w-full" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Products</a></li>
              <li><a href="#certification" className="text-sm text-muted-foreground hover:text-primary transition-colors">Certification</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Active Power Filter</a></li>
              <li><a href="#products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Static VAR Generator</a></li>
              <li><a href="#products" className="text-sm text-muted-foreground hover:text-primary transition-colors">APFC Panels</a></li>
              <li><a href="#products" className="text-sm text-muted-foreground hover:text-primary transition-colors">STATCOM</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SMARU TECH LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
