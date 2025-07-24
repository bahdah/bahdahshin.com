import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Download, MapPin } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const ProfileHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero p-6">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-lg border border-border/50 shadow-[var(--shadow-elegant)]">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-[var(--shadow-glow)]">
                <img 
                  src={profileAvatar} 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-card"></div>
            </div>
            
            {/* Profile Content */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <div className="space-y-3 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Alex Johnson
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Full Stack Developer
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
              
              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start animate-slide-in">
                <Badge variant="secondary" className="text-sm">React</Badge>
                <Badge variant="secondary" className="text-sm">TypeScript</Badge>
                <Badge variant="secondary" className="text-sm">Node.js</Badge>
                <Badge variant="secondary" className="text-sm">Python</Badge>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Button className="bg-gradient-primary hover:opacity-90 shadow-[var(--shadow-elegant)] transition-all duration-300">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button variant="outline" className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                  <Download className="w-4 h-4 mr-2 group-hover:translate-y-[-2px] transition-transform" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProfileHero;