import { Card } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Mail className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Contact</h2>
          </div>
          
          <Card className="p-6 border-border">
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="mailto:kylemanson7@gmail.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>kylemanson7@gmail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/kylemanson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
