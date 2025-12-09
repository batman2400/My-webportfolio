import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/uvaram-mohanaram-aa20932b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/batman2400"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:mohanuvaram123@gmail.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-primary-foreground/80">
              © {currentYear} Uvaram Mohanaram. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/60 mt-2">
              Built with passion and cutting-edge technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
