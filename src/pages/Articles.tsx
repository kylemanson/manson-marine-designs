import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { articles } from "@/data/articles";

const Articles = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Articles
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Writing on naval architecture, marine engineering, and traditional
              boatbuilding.
            </p>

            {articles.length === 0 ? (
              <Card className="p-12 text-center">
                <p className="text-muted-foreground text-lg">
                  Articles coming soon.
                </p>
              </Card>
            ) : (
              <div className="space-y-6">
                {articles.map((article) => (
                  <Card key={article.slug} className="p-6">
                    <p className="text-sm text-accent mb-2">{article.displayDate}</p>
                    <h2 className="text-2xl font-semibold text-foreground mb-3">
                      <Link
                        to={`/articles/${article.slug}`}
                        className="hover:text-accent transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <Link
                      to={`/articles/${article.slug}`}
                      className="text-accent hover:underline font-medium"
                    >
                      Read article →
                    </Link>
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

export default Articles;