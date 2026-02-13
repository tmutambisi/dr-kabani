import { motion } from "framer-motion";
import { Award, ExternalLink, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import bookPersonalDev from "@/assets/book-personal-development.jpg";
import bookIrresistible from "@/assets/book-be-irresistible.jpg";
import bookSpeak from "@/assets/book-speak-better.png";

const books = [
  {
    id: "book-personal-dev",
    title: "A Guide to Personal Development",
    subtitle: "What Exceptional Individuals Share in Common",
    category: "Personal Development",
    description:
      "A transformative workbook designed to empower readers in structuring their lives through clear vision, mission, and personal values.",
    award: "Award-Winning",
    price: 150,
    image: bookPersonalDev,
  },
  {
    id: "book-irresistible",
    title: "Be Irresistible",
    subtitle: "Rising from Humble Beginnings",
    category: "Personal Growth",
    description:
      "Practical solutions to become what you want in life or change the life you are leading now. Co-authored with Bethel Chimuka Lwiindi Kabani.",
    award: "Bestseller",
    price: 120,
    image: bookIrresistible,
  },
  {
    id: "book-speak",
    title: "Speak Better Than Me",
    subtitle: "The Ultimate Public Speaking Guide",
    category: "Public Speaking",
    description:
      "Master the art of public speaking with proven techniques and strategies from an international keynote speaker.",
    award: "Bestseller",
    price: 135,
    image: bookSpeak,
  },
];

export const PublicationsSection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (book: typeof books[0]) => {
    addToCart({
      id: book.id,
      title: book.title,
      price: book.price,
      image: book.image,
    });
  };

  return (
    <section id="publications" className="section-padding bg-muted">
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
            Publications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Award-winning books that have inspired leaders, entrepreneurs, and healthcare 
            professionals across the globe.
          </p>
        </motion.div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card rounded-xl overflow-hidden shadow-card border border-border hover:shadow-elegant transition-all duration-300 group"
            >
              {/* Book Cover Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium shadow-lg">
                  <Award className="w-3 h-3" />
                  {book.award}
                </div>
              </div>
              
              <div className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider font-subheading">
                  {book.category}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-1 group-hover:text-primary transition-colors">
                  {book.title}
                </h3>
                <p className="font-accent text-sm text-muted-foreground italic mb-3">
                  "{book.subtitle}"
                </p>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{book.description}</p>

                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-bold text-primary">
                    K{book.price.toFixed(2)}
                  </span>
                  <div className="flex gap-2">
                    <Button variant="link" className="p-0 h-auto text-primary font-subheading">
                      Details <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
                
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-full mt-4"
                  onClick={() => handleAddToCart(book)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Inquire About Publications
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
