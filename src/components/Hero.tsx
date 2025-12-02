import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import headshotImage from "@/assets/uvaram-photo.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(var(--hero-gradient-start)), hsl(var(--hero-gradient-end)))`,
      }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Building Intelligent Solutions & Digital Experiences
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Software Engineering Undergraduate | Founder of FADE | AI Enthusiast
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <Play className="mr-2" size={18} />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Content - Professional Headshot */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/30 rounded-full blur-3xl" />
              <img
                src={headshotImage}
                alt="Uvaram Mohanaram - Professional Headshot"
                className="relative rounded-full w-80 h-80 md:w-96 md:h-96 object-cover border-4 border-white/20 shadow-2xl"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-accent rounded-full animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
