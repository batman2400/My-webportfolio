import { ExternalLink, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const Projects = () => {
  const titleReveal = useScrollReveal();
  const projects = [
    {
      title: "Smart Blind Stick",
      category: "Hardware/IoT",
      description: "An innovative assistive device using live camera feed capture, obstacle detection, and location tracking to aid visually impaired users. Combines computer vision and IoT technology.",
      tags: ["IoT", "Computer Vision", "Hardware"],
    },
    {
      title: "FADE Website",
      category: "Web Development",
      description: "The official digital presence for my startup FADE, showcasing brand identity and services with a modern, responsive design that engages visitors.",
      tags: ["React", "Web Design", "Branding"],
    },
    {
      title: "Canela Ceylon Chatbot",
      category: "AI Automation",
      description: "A WhatsApp automation bot designed to streamline customer interactions for Canela Ceylon, providing instant responses and improving customer service efficiency.",
      tags: ["AI", "Chatbot", "WhatsApp API"],
    },
    {
      title: "Martial Dev Website",
      category: "Corporate Website",
      description: "A professional corporate website developed for a development agency, featuring clean design, portfolio showcase, and service information.",
      tags: ["Web Development", "Corporate", "UI/UX"],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={titleReveal.ref} className={cn("text-center mb-16 reveal", titleReveal.isVisible && "active")}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Notable Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions that bridge technology and real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => {
            const projectReveal = useScrollReveal({ threshold: 0.2 });
            return (
            <Card 
              key={project.title}
              ref={projectReveal.ref}
              className={cn("p-8 hover:shadow-medium transition-all hover:-translate-y-1 group reveal-scale", projectReveal.isVisible && "active")}
            >
              <div className="mb-4">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button variant="outline" className="group/btn">
                <Eye className="mr-2 w-4 h-4 group-hover/btn:text-accent transition-colors" />
                View Project
                <ExternalLink className="ml-2 w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </Button>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
