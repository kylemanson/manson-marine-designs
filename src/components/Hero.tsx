import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sailboat.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-primary/85" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Kyle Manson, P.Eng.
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-primary-foreground/90 mb-6">
            Naval Architect and Mechanical Engineer
          </h2>
          
          <div className="inline-block mb-8 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <span className="text-accent font-semibold text-sm">BC P.Eng | Professional Engineer</span>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
            <Button 
              size="lg" 
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
            <Button 
              size="lg" 
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8"
            >
              <Link to="/blog">
                <BookOpen className="mr-2 h-5 w-5" />
                Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg className="w-full h-24 md:h-32 text-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0 C150,80 350,0 600,30 C850,60 1050,0 1200,50 L1200,120 L0,120 Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
