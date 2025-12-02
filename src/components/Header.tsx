import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Uvaram Mohanaram</h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-accent transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-accent transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-accent transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-foreground hover:text-accent transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-accent transition-colors">
              Contact
            </button>
            <Button variant="hero" onClick={() => scrollToSection("contact")}>Let's Collaborate</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-accent transition-colors text-left">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-accent transition-colors text-left">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-accent transition-colors text-left">
              Services
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-foreground hover:text-accent transition-colors text-left">
              Projects
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-accent transition-colors text-left">
              Contact
            </button>
            <Button variant="hero" onClick={() => scrollToSection("contact")} className="w-full">Let's Collaborate</Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
