import { Brain, Globe, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const Services = () => {
  const titleReveal = useScrollReveal();
  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Building custom AI agents and intelligent automation systems to solve complex business problems and enhance operational efficiency.",
    },
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "Creating modern, responsive websites for businesses that combine stunning design with seamless functionality and user experience.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Developing mobile application solutions that bring your ideas to life with intuitive interfaces and robust performance.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={titleReveal.ref} className={cn("text-center mb-16 reveal", titleReveal.isVisible && "active")}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services Offered</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into reality with cutting-edge technology and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => {
            const serviceReveal = useScrollReveal({ threshold: 0.2 });
            return (
            <Card 
              key={service.title}
              ref={serviceReveal.ref}
              className={cn("p-8 hover:shadow-glow transition-all hover:-translate-y-2 group reveal", serviceReveal.isVisible && "active")}
            >
              <div className="mb-6">
                <div className="inline-block p-4 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg group-hover:scale-110 transition-transform">
                  <service.icon className="w-10 h-10 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
