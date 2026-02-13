import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Dr. Kabani's keynote at our annual conference was transformative. His unique blend of healthcare expertise and business acumen resonated deeply with our members.",
    author: "Conference Director",
    organization: "Institute of Internal Auditors",
  },
  {
    quote:
      "An exceptional speaker who delivers practical insights with passion and authenticity. Dr. Kabani's session on leadership excellence was the highlight of our summit.",
    author: "Program Coordinator",
    organization: "Africa Philanthropy Conference",
  },
  {
    quote:
      "Dr. Kabani's consulting work with our organization has been invaluable. His strategic guidance helped us navigate complex challenges and achieve sustainable growth.",
    author: "Executive Director",
    organization: "Healthcare NGO",
  },
  {
    quote:
      "A true thought leader in the pharmaceutical industry. Dr. Kabani's books are required reading for anyone serious about healthcare leadership.",
    author: "Dean",
    organization: "School of Pharmacy",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Kind Words
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-2">
            I'm humbled by the people I've had the privilege to work with. 
            Here's what some of them have shared.
          </p>
          <p className="font-accent text-xl text-secondary -rotate-1">
            (These mean the world to me)
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.organization}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card rounded-xl p-6 lg:p-8 shadow-card border border-border hover:border-primary/30 transition-all duration-300 relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <blockquote className="font-body text-lg text-foreground mb-6 relative z-10 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.organization}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
