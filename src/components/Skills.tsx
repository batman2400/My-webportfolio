import { Brain, Code, Lightbulb, Users, MessageSquare, Workflow } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const Skills = () => {
  const titleReveal = useScrollReveal();
  const techTitleReveal = useScrollReveal({ threshold: 0.2 });
  const softTitleReveal = useScrollReveal({ threshold: 0.2 });
  const technicalSkills = [
    { icon: Brain, name: "Artificial Intelligence", color: "text-accent" },
    { icon: Code, name: "Web Design", color: "text-accent" },
    { icon: Workflow, name: "App Development", color: "text-accent" },
  ];

  const softSkills = [
    { icon: Lightbulb, name: "Creative Thinking" },
    { icon: Brain, name: "Critical Thinking" },
    { icon: Users, name: "Teamwork" },
    { icon: Workflow, name: "Adaptability" },
    { icon: MessageSquare, name: "Communication" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={titleReveal.ref} className={cn("text-center mb-16 reveal", titleReveal.isVisible && "active")}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Technical Skills */}
          <div>
            <h3 ref={techTitleReveal.ref} className={cn("text-2xl font-semibold mb-6 text-center reveal", techTitleReveal.isVisible && "active")}>Technical Skills</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {technicalSkills.map((skill, index) => {
                const skillReveal = useScrollReveal({ threshold: 0.2 });
                return (
                <Card 
                  key={skill.name}
                  ref={skillReveal.ref}
                  className={cn("p-8 hover:shadow-medium transition-all hover:-translate-y-1 reveal-scale", skillReveal.isVisible && "active")}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 bg-accent/10 rounded-lg">
                      <skill.icon className={`w-10 h-10 ${skill.color}`} />
                    </div>
                    <h4 className="font-semibold text-lg">{skill.name}</h4>
                  </div>
                </Card>
                );
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 ref={softTitleReveal.ref} className={cn("text-2xl font-semibold mb-6 text-center reveal", softTitleReveal.isVisible && "active")}>Soft Skills</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {softSkills.map((skill) => {
                const skillReveal = useScrollReveal({ threshold: 0.2 });
                return (
                <Card 
                  key={skill.name}
                  ref={skillReveal.ref}
                  className={cn("p-6 hover:shadow-medium transition-all hover:-translate-y-1 reveal-scale", skillReveal.isVisible && "active")}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium">{skill.name}</p>
                  </div>
                </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
