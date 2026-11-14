import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// To add another fun project, copy one of the objects below and edit the fields.
// `link` can point to a page on this site (e.g. "/ski/") or another website.
interface FunProject {
  title: string;
  platform?: string;
  description: string;
  image?: string;
  link: string;
  linkLabel: string;
}

const projects: FunProject[] = [
  {
    title: "Powder Days Ski Game",
    platform: "For PC (keyboard)",
    description:
      "An old-school pixel skiing game set on Whistler and Blackcomb, with a backcountry mountain beyond. Carve groomers, drop pillow lines and cliffs, send the Big Air, skim the pond, ride the halfpipe and the lifts, and skin up to the Cham Chutes for double points.",
    image: "/ski/powder-days.png",
    link: "/ski/",
    linkLabel: "Play the game",
  },
];

const FunProjects = () => {
  // the footer link is at the bottom of the page, so start this page at the top
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Fun Projects
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Things I build for fun outside of engineering work.
            </p>

            <div className="space-y-8">
              {projects.map((project) => (
                <Card key={project.title} className="overflow-hidden">
                  {project.image && (
                    <a href={project.link}>
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-64 md:h-80 object-cover"
                        style={{ imageRendering: "pixelated" }}
                      />
                    </a>
                  )}
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-foreground mb-1">
                      {project.title}
                    </h2>
                    {project.platform && (
                      <p className="text-sm text-muted-foreground mb-4">
                        {project.platform}
                      </p>
                    )}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    {/* A plain link (not a router Link) because the game is a separate static page */}
                    <Button asChild>
                      <a href={project.link}>{project.linkLabel}</a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FunProjects;
