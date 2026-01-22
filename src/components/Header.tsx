import { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import Logo from "./Logo";

const navItems = [
  { label: "Home", href: "#home", active: true },
  { label: "About Us", href: "#about" },
  { label: "Product", href: "#products" },
  { label: "Certification", href: "#certification" },
  { label: "Contact Us", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background shadow-sm  top-0 z-50">
      {/* Top bar with contact info */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center border-b border-border">
        <Logo />
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:011-45650747" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4 text-smaru-gray" />
            <span>011-45650747</span>
          </a>
          <a href="mailto:admin@smaru.in" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4 text-smaru-gray" />
            <span>admin@smaru.in</span>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-end py-2">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`nav-link ${item.active ? "active" : ""}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <ul className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`sticky py-2 px-4 ${item.active ? "text-primary" : "text-foreground"} hover:text-primary transition-colors`}
                  onClick={() => {
                    if (item.label !== "Home") {
                      setMobileMenuOpen(false);
                    }
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4 px-4 border-t border-border mt-4">
              <a href="tel:011-45650747" className="flex items-center gap-2 text-sm text-muted-foreground py-2">
                <Phone className="w-4 h-4" />
                <span>011-45650747</span>
              </a>
              <a href="mailto:admin@smaru.in" className="flex items-center gap-2 text-sm text-muted-foreground py-2">
                <Mail className="w-4 h-4" />
                <span>admin@smaru.in</span>
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
