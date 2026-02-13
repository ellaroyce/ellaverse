import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg">Ella Türümina</span>
          </div>

          {/* Social Links */}
          {/* <div className="flex items-center gap-4"> */}
            {/* <a
              href="https://linkedin.com/in/ella-turumina"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a> */}
            {/* <a
              href="https://github.com/ellaroyce"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            > */}
              {/* <Github className="w-5 h-5" />
            </a> */}
          {/* </div> */}

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ella Ya. Türümina. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
