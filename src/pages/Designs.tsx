import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

// To add a new design, copy one of the objects below and edit the fields.
// Set `image` to an imported image (e.g. import myImg from "@/assets/my-design.jpg")
// or leave it as undefined to show a placeholder block.
interface Design {
  title: string;
  year?: string;
  description: string;
  image?: string;
}

const designs: Design[] = [
  // Example — replace with your real designs:
  // {
  //   title: "PHK-20 Offshore Sailboat",
  //   year: "2020",
  //   description: "A performance offshore expedition sailing yacht...",
  //   image: phkImage,
  // },
];

const Designs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Designs
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              A selection of vessel and engineering designs I have worked on.
            </p>

            {designs.length === 0 ? (
              <Card className="p-12 text-center">
                <p className="text-muted-foreground text-lg">
                  Design descriptions coming soon.
                </p>
              </Card>
            ) : (
              <div className="space-y-8">
                {designs.map((design, index) => (
                  <Card key={index} className="overflow-hidden">
                    {design.image && (
                      <img
                        src={design.image}
                        alt={design.title}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold text-foreground mb-1">
                        {design.title}
                      </h2>
                      {design.year && (
                        <p className="text-sm text-muted-foreground mb-4">
                          {design.year}
                        </p>
                      )}
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {design.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Designs;