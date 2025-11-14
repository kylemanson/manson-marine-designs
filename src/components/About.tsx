import { Card } from "@/components/ui/card";
import { Award, Shield, Compass } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Professional Credentials
            </h2>
            <p className="text-xl text-muted-foreground">
              Licensed Professional Engineer with expertise across multiple marine engineering disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center border-border hover:border-accent/50 transition-colors">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">BC P.Eng</h3>
              <p className="text-sm text-muted-foreground">Professional Engineer, British Columbia</p>
            </Card>

            <Card className="p-6 text-center border-border hover:border-accent/50 transition-colors">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Naval Architecture</h3>
              <p className="text-sm text-muted-foreground">Specialized vessel design expertise</p>
            </Card>

            <Card className="p-6 text-center border-border hover:border-accent/50 transition-colors">
              <Compass className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Marine & Mechanical</h3>
              <p className="text-sm text-muted-foreground">Dual engineering specialization</p>
            </Card>
          </div>

          <Card className="p-8 bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">About Kyle Manson</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a licensed Professional Engineer in British Columbia, I bring comprehensive expertise in naval architecture, marine engineering, and mechanical engineering to every project.
              </p>
              <p>
                My work encompasses the complete spectrum of vessel design and marine systems engineering, from initial concept development through detailed design and construction oversight. I am committed to delivering technically sound, efficient, and compliant engineering solutions.
              </p>
              <p>
                With a focus on safety, performance, and regulatory compliance, I provide professional engineering services that meet the highest industry standards.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
