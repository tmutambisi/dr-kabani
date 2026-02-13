import { motion } from "framer-motion";
import { ArrowRight, Play, Award, Users, BookOpen, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitImage from "@/assets/ceo-kabani.jpg";

const stats = [
  { icon: Users, value: "300,000+", label: "People Reached Annually" },
  { icon: BookOpen, value: "4", label: "Award-Winning Books" },
  { icon: Building2, value: "3", label: "Business Ventures" },
  { icon: Award, value: "15+", label: "Years of Excellence" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-background" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground leading-tight mb-4">
              Dr. Daniel Ngombo{" "}
              <span className="text-primary">Kabani</span>
            </h1>

            {/* Handwritten personal tagline */}
            <p className="font-accent text-2xl sm:text-3xl text-secondary mb-6 -rotate-1">
              "Mastery in Business. Depth in Purpose."
            </p>

            <p className="text-lg text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0">
              A strategic authority bridging the gap between healthcare expertise and high-level
              business leadership. Helping organizations and individuals scale with clarity and integrity.
            </p>

            <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
              CEO of DNK Group • Global Speaker • Strategic Advisor • Award-Winning Author
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  Book a Speaking Engagement
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="https://youtube.com/playlist?list=PL9cn5nd4z2Vj7A4FaR1HFSzGCozItCfP0&si=Xza7R_Wte7u3arIc" target="_blank" rel="noopener noreferrer">
                  <Play className="w-5 h-5" />
                  Watch Speaking Reel
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <span>Featured at:</span>
              <span className="font-semibold text-foreground">Institute of Internal Auditors</span>
              <span>•</span>
              <span className="font-semibold text-foreground">Africa Philanthropy Conference</span>
            </div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl bg-primary/20 transform rotate-3" />
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl bg-secondary/20 transform -rotate-3" />

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={portraitImage}
                  alt="Dr. Daniel Ngombo Kabani"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -left-4 bottom-20 bg-card rounded-xl p-4 shadow-card border border-border"
              >
                <p className="text-sm font-medium text-muted-foreground">CEO</p>
                <p className="text-lg font-display font-bold text-primary">DNK Group</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 lg:mt-24"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="stat-card bg-card rounded-xl p-6 text-center shadow-card border border-border hover:border-primary/30 transition-colors"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
