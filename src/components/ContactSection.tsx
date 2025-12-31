import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      );
      
      // Open default email client
      window.location.href = `mailto:admin@smaru.in?subject=${subject}&body=${body}`;
      
      // Reset form after a short delay
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSubmitStatus("success");
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      setSubmitStatus("error");
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">CONTACT US</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Head Office</h3>
                <p className="text-sm text-muted-foreground">
                  New Delhi, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Manufacturing Plant</h3>
                <p className="text-sm text-muted-foreground">
                  Manesar, Gurugram, Haryana
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <div className="flex flex-col gap-1">
                  <a href="tel:0124-4833243" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  0124-4833243
                  </a>
                  <a href="tel:011-45650747" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    011-45650747
                  </a>
                </div>
                
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <div className="flex flex-col gap-1">
                  <a href="mailto:admin@smaru.in" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    admin@smaru.in 
                  </a>
                  <a href="mailto:works@smaru.in" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    works@smaru.in
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Saturday: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-4">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 rounded border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 rounded border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  required
                  className="w-full px-4 py-2 rounded border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                />
              </div>
              {submitStatus === "success" && (
                <div className="p-3 bg-green-100 text-green-700 rounded text-sm">
                  Message sent! Please check your email client to complete sending.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-3 bg-red-100 text-red-700 rounded text-sm">
                  Error sending message. Please try again.
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-2 px-4 rounded font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
