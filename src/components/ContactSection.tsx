import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Calendar,
  Coffee 
} from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "alex@example.com",
      href: "mailto:alex@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-secondary">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Coffee className="w-5 h-5 text-primary" />
                Get In Touch
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.href}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{method.label}</p>
                        <p className="text-sm text-muted-foreground">{method.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>
            
            {/* Social Links */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Social Media</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </Card>
          </div>
          
          {/* Quick Actions */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Let's Collaborate</h3>
              <div className="space-y-4">
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 group">
                  <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Send Message
                </Button>
                <Button variant="outline" className="w-full group hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                  <Calendar className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Schedule Meeting
                </Button>
              </div>
            </Card>
            
            {/* Availability */}
            <Card className="p-6 bg-gradient-hero border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Available for Work</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Currently open to new opportunities and exciting projects. 
                Let's build something amazing together!
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Full-time</Badge>
                <Badge variant="secondary" className="text-xs">Contract</Badge>
                <Badge variant="secondary" className="text-xs">Remote</Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;