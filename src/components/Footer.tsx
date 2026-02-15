import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg">Ella Tiuriumina</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ella Tiuriumina. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
