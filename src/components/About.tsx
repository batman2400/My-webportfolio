import { GraduationCap, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const About = () => {
  const titleReveal = useScrollReveal();
  const bioReveal = useScrollReveal({ threshold: 0.2 });
  const card1Reveal = useScrollReveal({ threshold: 0.2 });
  const card2Reveal = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={titleReveal.ref} className={cn("text-center mb-16 reveal", titleReveal.isVisible && "active")}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div ref={bioReveal.ref} className={cn("reveal", bioReveal.isVisible && "active")}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a <strong className="text-foreground">Software Engineering undergraduate</strong> (Class of 2028) at{" "}
              <strong className="text-foreground">General Sir John Kotelawala Defence University (KDU)</strong>. 
              Passionate about the intersection of AI and practical software, I founded my own startup,{" "}
              <strong className="text-accent">FADE</strong>, to bring innovative ideas to life.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              With a background in mathematics education, I approach problems with critical thinking and precision. 
              My experience as a <strong className="text-foreground">Maths Teacher at Amal International School</strong> has 
              strengthened my communication skills and ability to break down complex concepts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card ref={card1Reveal.ref} className={cn("p-6 hover:shadow-medium transition-shadow reveal-left", card1Reveal.isVisible && "active")}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground">Software Engineering</p>
                  <p className="text-sm text-muted-foreground">General Sir John Kotelawala Defence University (KDU)</p>
                  <p className="text-sm text-muted-foreground font-medium">Class of 2028</p>
                </div>
              </div>
            </Card>

            <Card ref={card2Reveal.ref} className={cn("p-6 hover:shadow-medium transition-shadow reveal-right", card2Reveal.isVisible && "active")}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Experience</h3>
                  <p className="text-sm text-muted-foreground">Mathematics Teacher</p>
                  <p className="text-sm text-muted-foreground">Amal International School</p>
                  <p className="text-sm text-muted-foreground font-medium">Communication & Education</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
