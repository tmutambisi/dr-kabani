import { motion } from "framer-motion";
import { Mic2, Heart, TrendingUp, Users, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import speakingImage from "@/assets/speaking-event.jpg";

const speakingTopics = [
  {
    icon: Heart,
    title: "Healthcare & Wellness",
    description: "Pharmaceutical innovation, patient care excellence, and public health strategies.",
  },
  {
    icon: TrendingUp,
    title: "Entrepreneurship",
    description: "Building sustainable businesses, strategic growth, and African entrepreneurship.",
  },
  {
    icon: Users,
    title: "Leadership Development",
    description: "Executive leadership, team building, and organizational transformation.",
  },
  {
    icon: Lightbulb,
    title: "Personal Development",
    description: "Goal setting, resilience, work-life balance, and continuous growth mindset.",
  },
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Corporate strategy, market positioning, and sustainable business models.",
  },
  {
    icon: Mic2,
    title: "Medical Education",
    description: "Training healthcare professionals, curriculum development, and capacity building.",
  },
];

const pastEvents = [
  "Institute of Internal Auditors Conference",
  "Africa Philanthropy Conference",
  "Pharmaceutical Society Annual Summit",
  "University Guest Lectures",
  "Corporate Leadership Retreats",
  "Government Training Programs",
];

export const SpeakingSection = () => {
  return (
    <section id="speaking" className="section-padding bg-muted">
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
            Speaking Engagements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dr. Kabani delivers transformative keynotes and workshops that inspire action,
            drive change, and leave lasting impact on audiences worldwide.
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img
              src={speakingImage}
              alt="Dr. Kabani speaking at a conference"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <p className="text-primary-foreground font-display text-2xl md:text-3xl font-bold mb-2">
                Reaching 300,000+ People Annually
              </p>
              <p className="text-primary-foreground/80 text-sm md:text-base">
                Keynotes, workshops, and training programs across multiple continents
              </p>
            </div>
          </div>
        </motion.div>

        {/* Topics Grid */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Keynote Topics
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakingTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-card rounded-xl p-6 shadow-card border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <topic.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold text-lg text-foreground mb-2">
                  {topic.title}
                </h4>
                <p className="text-sm text-muted-foreground">{topic.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border"
        >
          <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            Featured Speaking Engagements
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {pastEvents.map((event) => (
              <span
                key={event}
                className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium"
              >
                {event}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Invite Dr. Kabani to Speak</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://youtube.com/playlist?list=PL9cn5nd4z2Vj7A4FaR1HFSzGCozItCfP0&si=Xza7R_Wte7u3arIc" target="_blank" rel="noopener noreferrer">
                Watch Speaking Playlist
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
