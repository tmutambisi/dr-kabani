import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoConsultancy from "@/assets/logo-dnk-consultancy.png";
import logoPublishers from "@/assets/logo-dnk-publishers.png";
import logoHealth from "@/assets/logo-dnk-health.png";
import logoGroup from "@/assets/logo-dnk-group.png";

const ventures = [
  {
    logo: logoConsultancy,
    name: "DNK General Consultancy",
    tagline: "Corporate Excellence & Strategic Advisory",
    description:
      "Providing strategic consulting, corporate training, and advisory services to governments, NGOs, faith-based organizations, and corporations. Specializing in leadership development, organizational transformation, and capacity building.",
    services: [
      "Corporate Training Programs",
      "Government Advisory",
      "Strategic Planning",
      "Leadership Development",
    ],
    color: "primary",
  },
  {
    logo: logoPublishers,
    name: "DNK Brand and Publishers",
    tagline: "Ideas That Inspire Action",
    description:
      "A publishing house dedicated to bringing transformative ideas to life. From award-winning books to comprehensive brand development services, we help authors and organizations share their stories with the world.",
    services: [
      "Book Publishing",
      "Brand Development",
      "Content Strategy",
      "Author Services",
    ],
    color: "secondary",
  },
  {
    logo: logoHealth,
    name: "DNK Health and Pharmaceuticals",
    tagline: "Your Health, Our Priority",
    description:
      "Committed to improving healthcare outcomes through pharmaceutical consulting, medical education, and healthcare capacity building. Bridging the gap between pharmaceutical expertise and patient care.",
    services: [
      "Pharmaceutical Consulting",
      "Medical Education",
      "Healthcare Training",
      "Regulatory Advisory",
    ],
    color: "primary",
  },
];

export const VenturesSection = () => {
  return (
    <section id="ventures" className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="accent-line mx-auto mb-6" />
          <div className="flex justify-center mb-6">
            <img 
              src={logoGroup} 
              alt="DNK Group" 
              className="h-20 md:h-28 w-auto object-contain"
            />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            DNK Group of Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A diversified portfolio of businesses united by a common mission: 
            delivering excellence across consulting, publishing, and healthcare.
          </p>
        </motion.div>

        <div className="space-y-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-elegant transition-all duration-500 group"
            >
              <div className="grid lg:grid-cols-5 gap-6 p-6 lg:p-10">
                {/* Logo & Name */}
                <div className="lg:col-span-2">
                  <div className="mb-4">
                    <img 
                      src={venture.logo} 
                      alt={venture.name} 
                      className="h-16 md:h-20 w-auto object-contain"
                    />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {venture.name}
                  </h3>
                  <p
                    className={`text-sm font-medium ${
                      venture.color === "primary" ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {venture.tagline}
                  </p>
                </div>

                {/* Description */}
                <div className="lg:col-span-2">
                  <p className="text-muted-foreground mb-4">{venture.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {venture.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            venture.color === "primary" ? "bg-primary" : "bg-secondary"
                          }`}
                        />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="lg:col-span-1 flex lg:items-center lg:justify-end">
                  <Button
                    variant={venture.color === "primary" ? "outline" : "secondary"}
                    className="group/btn"
                    asChild
                  >
                    <a href="#contact">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Sectors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">
            Trusted by Organizations Across Sectors
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Government",
              "NGOs",
              "Faith-Based Organizations",
              "Corporations",
              "Educational Institutions",
              "Healthcare",
            ].map((sector) => (
              <span
                key={sector}
                className="px-5 py-2.5 rounded-full bg-muted text-muted-foreground text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {sector}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
