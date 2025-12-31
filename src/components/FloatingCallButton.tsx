import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:011-45650747"
      className="floating-call-btn"
      aria-label="Call us"
    >
      <Phone className="w-6 h-6 text-secondary-foreground" />
    </a>
  );
};

export default FloatingCallButton;
