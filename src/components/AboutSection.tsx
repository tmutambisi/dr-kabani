import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Users } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    items: [
      "Bachelor of Pharmacy",
      "Certificate in Medical Anatomy",
      "Doctorate in Business Administration (Entrepreneurship)",
    ],
  },
  {
    icon: Briefcase,
    title: "Leadership Roles",
    items: [
      "CEO, DNK Group",
      "Former Senior Executive, Pharma Industry",
      "University Lecturer & Educator",
    ],
  },
  {
    icon: Award,
    title: "Board Memberships",
    items: [
      "Pharmaceutical Society of Zambia",
      "Lusaka Multi Facility Economic Zone",
      "Multiple Healthcare Committees",
    ],
  },
  {
    icon: Users,
    title: "Consulting Sectors",
    items: [
      "Government Institutions",
      "NGOs & Faith-Based Organizations",
      "Corporate Training Programs",
    ],
  },
];

const timeline = [
  { year: "Education", desc: "Pharmacy & Medical Sciences" },
  { year: "Early Career", desc: "UTH & Lusaka Apex Medical" },
  { year: "Pharma Leadership", desc: "Senior Pharmaceutical Executive" },
  { year: "Entrepreneurship", desc: "Founded DNK Group" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
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
            About Dr. Kabani
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A distinguished leader bridging healthcare expertise with business acumen, 
            Dr. Daniel Ngombo Kabani has dedicated his career to transforming industries 
            and empowering individuals across Africa and beyond.
          </p>
        </motion.div>

        {/* Career Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 lg:gap-0">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex items-center">
                <div className="text-center px-6 py-4">
                  <p className="font-display font-bold text-primary text-lg">{item.year}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block w-16 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, index) => (
            <motion.div
              key={cred.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elegant"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <cred.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                {cred.title}
              </h3>
              <ul className="space-y-2">
                {cred.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Personal Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-accent rounded-2xl p-8 lg:p-12 relative overflow-hidden"
        >
          {/* Decorative quote mark */}
          <span className="absolute top-4 left-6 text-8xl text-primary/10 font-display leading-none">"</span>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <p className="text-sm font-subheading uppercase tracking-widest text-primary mb-4">A Note From Daniel</p>
            <blockquote className="font-body text-lg lg:text-xl text-foreground mb-6 leading-relaxed">
              When I started my journey in pharmacy, I never imagined I'd one day stand before 
              thousands sharing lessons about leadership and life. But that's the beautiful thing 
              about our stories — they rarely go as planned, and that's exactly what makes them worth telling.
            </blockquote>
            <blockquote className="font-body text-lg lg:text-xl text-foreground mb-8 leading-relaxed">
              My mission isn't complicated: I want to help people believe in their potential 
              the same way someone once believed in mine.
            </blockquote>
            {/* Handwritten signature */}
            <p className="font-accent text-3xl text-primary transform -rotate-2">
              Daniel Kabani
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
