import { Card } from "@/components/ui/card";
import { Ship, Cog, Anchor } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Naval Architecture",
    description: "Comprehensive vessel design and analysis, from concept through construction. Specializing in hull form optimization, stability analysis, and regulatory compliance.",
    features: [
      "Hull design and optimization",
      "Stability and hydrostatics",
      "Structural analysis",
      "Regulatory compliance"
    ]
  },
  {
    icon: Cog,
    title: "Marine Engineering",
    description: "Expert marine systems design and integration. Propulsion systems, power generation, and auxiliary systems engineered for reliability and efficiency.",
    features: [
      "Propulsion system design",
      "Power and electrical systems",
      "HVAC and auxiliary systems",
      "System integration"
    ]
  },
  {
    icon: Anchor,
    title: "Mechanical Engineering",
    description: "Advanced mechanical engineering solutions for marine and industrial applications. From machinery selection to custom system design.",
    features: [
      "Machinery design and selection",
      "System optimization",
      "Technical specifications",
      "Performance analysis"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Engineering Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional engineering expertise across naval architecture, marine systems, and mechanical design
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50 bg-card"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
