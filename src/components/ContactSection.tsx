import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "info@dnkgroup.com",
    action: "mailto:info@dnkgroup.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+260 979 961 647",
    action: "tel:+260979961647",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lusaka, Zambia",
    action: "#",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary-foreground blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Book Dr. Kabani
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            Ready to bring transformative insights to your conference, organization, or event?
            Let's discuss how Dr. Kabani can add value to your audience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-6 mb-8">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.action}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                    <method.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60">{method.label}</p>
                    <p className="font-medium group-hover:text-secondary transition-colors">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#">
                  <Calendar className="w-5 h-5" />
                  Schedule a Call
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
