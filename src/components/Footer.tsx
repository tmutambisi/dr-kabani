import { Linkedin, Twitter, Facebook, Instagram, Mail } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { label: "About", href: "#about" },
    { label: "Speaking", href: "#speaking" },
    { label: "DNK Group", href: "#ventures" },
    { label: "Publications", href: "#publications" },
    { label: "Contact", href: "#contact" },
  ],
  ventures: [
    { label: "DNK Consultancy", href: "#" },
    { label: "DNK Publishers", href: "#" },
    { label: "DNK Health", href: "#" },
    { label: "Steathels Eat to Feed", href: "#" },
  ],
  resources: [
    { label: "Speaker Kit", href: "#" },
    { label: "Media & Press", href: "#" },
    { label: "Books", href: "#publications" },
    { label: "Blog", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">
                  DK
                </span>
              </div>
              <div>
                <p className="font-display font-semibold text-lg leading-tight">
                  Dr. Daniel Kabani
                </p>
              </div>
            </div>
            <p className="text-card/60 text-sm mb-6">
              Bridging Healthcare, Business, and Leadership Excellence
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-card/60 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">
              DNK Group
            </h4>
            <ul className="space-y-2">
              {footerLinks.ventures.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-card/60 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-card/60 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-card/10 pt-8 mb-8">
          <div className="max-w-xl">
            <h4 className="font-display font-semibold text-lg mb-2">
              Stay Connected
            </h4>
            <p className="text-card/60 text-sm mb-4">
              Receive insights on leadership, healthcare, and entrepreneurship.
            </p>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-card/40" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-11 pl-10 pr-4 rounded-lg bg-card/5 border border-card/10 text-card placeholder:text-card/40 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <button className="h-11 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Personal Sign-off & Signature */}
        <div className="border-t border-card/10 pt-8 mb-8">
          <div className="text-center">
            <p className="text-card/70 text-sm mb-4 max-w-md mx-auto">
              Thank you for taking the time to visit. I'd love to hear from you — 
              whether you have a question, an idea, or just want to say hello.
            </p>
            <p className="font-accent text-2xl text-primary transform -rotate-1">
              With gratitude, Daniel
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-card/40 text-sm">
          <p>© {new Date().getFullYear()} Dr. Daniel Ngombo Kabani. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-card transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-card transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
