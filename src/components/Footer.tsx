import { Linkedin, Twitter, Facebook, Instagram, Mail, Youtube } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Speaking", href: "#speaking" },
    { label: "DNK Group", href: "#ventures" },
    { label: "Publications", href: "#publications" },
    { label: "Contact", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/dr-daniel-kabani-33159687/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/kabani_daniel", label: "Twitter" },
  { icon: Facebook, href: "https://www.facebook.com/Danielkabanidnk", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/kabani_daniel/", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/playlist?list=PL9cn5nd4z2Vj7A4FaR1HFSzGCozItCfP0&si=Xza7R_Wte7u3arIc", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="bg-white text-black py-16 border-t border-border">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">
                  DK
                </span>
              </div>
              <div>
                <p className="font-display font-bold text-xl leading-tight text-foreground">
                  Dr. Daniel Ngombo Kabani
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Bridging Healthcare, Business, and Leadership Excellence. Helping organizations and individuals scale with clarity and integrity.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-x-12 gap-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm font-bold hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border pt-12 mb-12">
          <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
            <h4 className="font-display font-bold text-xl mb-3 text-foreground">
              Stay Connected
            </h4>
            <p className="text-muted-foreground text-sm mb-6">
              Receive insights on leadership, healthcare, and entrepreneurship directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 rounded-xl bg-muted border border-border px-12 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <button className="h-12 px-8 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Personal Sign-off & Signature */}
        <div className="border-t border-border pt-12 mb-12 text-center">
          <p className="text-muted-foreground text-sm mb-4 max-w-md mx-auto">
            Thank you for taking the time to visit. I'd love to hear from you — whether you have a question, an idea, or just want to say hello.
          </p>
          <p className="font-accent text-3xl text-primary transform -rotate-1">
            With gratitude, Daniel
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-12 border-t border-border text-muted-foreground text-xs font-medium">
          <p>© {new Date().getFullYear()} Dr. Daniel Ngombo Kabani. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p>
              Developed & Maintained by{" "}
              <a
                href="https://tungasonic.co.zw"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-foreground hover:text-primary transition-all duration-300 hover:underline underline-offset-4"
              >
                TUNGASONIC
              </a>
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
