import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions"
    },
    {
      icon: Palette,
      title: "Design-Focused",
      description: "Creating beautiful user experiences"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions and beautiful interfaces. 
            Always eager to learn new technologies and tackle challenging problems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* About Text */}
          <Card className="p-8 bg-gradient-secondary border-0 animate-slide-in">
            <h3 className="text-xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a dedicated full-stack developer with a passion for crafting elegant solutions 
                to complex problems. My journey in tech started with curiosity and has evolved into 
                a deep love for creating meaningful digital experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or enjoying the great outdoors. I believe in continuous 
                learning and staying up-to-date with the latest industry trends.
              </p>
            </div>
          </Card>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 group">
                  <Icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
        
        {/* Tech Stack */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-xl font-semibold mb-6 text-center">Technology Stack</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js", 
              "Python", "Django", "PostgreSQL", "MongoDB", "Docker", "AWS", 
              "Git", "Figma", "Tailwind CSS", "GraphQL"
            ].map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="hover:bg-primary/10 hover:border-primary transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;