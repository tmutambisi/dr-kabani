import { motion } from "framer-motion";
import { BookOpen, Users, Briefcase, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    icon: BookOpen,
    title: "Insight & Knowledge",
    audience: "For Individuals",
    description: "Access world-class wisdom and actionable strategies through award-winning books and digital resources.",
    features: [
      "Bestselling Books",
      "Thought Leadership Articles",
      "Digital Resources",
      "Personal Development Tools"
    ],
    cta: "Explore Library",
    href: "#publications",
    highlight: false
  },
  {
    icon: Users,
    title: "Empowerment & Training",
    audience: "For Teams & Organizations",
    description: "Transform your workforce with high-impact workshops, keynote speaking, and corporate training programs.",
    features: [
      "Keynote Speaking",
      "Corporate Workshops",
      "Team Building Retreats",
      "Capacity Building"
    ],
    cta: "Book Dr. Kabani",
    href: "#contact",
    highlight: true
  },
  {
    icon: Briefcase,
    title: "Strategic Advisory",
    audience: "For Executives & Corporations",
    description: "Elite-level consulting and advisory services for organizational transformation and high-stakes decision making.",
    features: [
      "Executive Coaching",
      "Board Advisory",
      "Strategic Consulting",
      "Organizational Design"
    ],
    cta: "Inquire Now",
    href: "#contact",
    highlight: false
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
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
            Pathways to Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you are an individual seeking personal mastery, an organization aiming for growth, 
            or a leader navigating complex challenges, there is a pathway designed for your success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative rounded-2xl p-8 border hover:shadow-elegant transition-all duration-300 flex flex-col ${
                tier.highlight 
                  ? "bg-card shadow-card z-10 scale-105 border-primary/20 ring-1 ring-primary/10" 
                  : "bg-background/50 border-border opacity-90 hover:opacity-100"
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <tier.icon className="w-6 h-6 text-primary" />
              </div>

              <div className="mb-2">
                <span className="text-xs font-bold tracking-wider text-primary uppercase">
                  {tier.audience}
                </span>
              </div>
              
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                {tier.title}
              </h3>
              
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                {tier.description}
              </p>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                    <Star className="w-4 h-4 text-secondary fill-secondary/20" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.highlight ? "default" : "outline"} 
                className="w-full"
                asChild
              >
                <a href={tier.href}>
                  {tier.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
