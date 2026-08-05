import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArticleContent from "@/components/ArticleContent";
import { Button } from "@/components/ui/button";
import { getArticle } from "@/data/articles";
import sabaniDugout from "@/assets/sabani-dugout-shelter.jpg";
import sabaniAnchored from "@/assets/sabani-anchored-reef.jpg";
import sabaniHull from "@/assets/sabani-hull-covered.jpg";

const articleImages: Record<string, { src: string; alt: string }[]> = {
  "sabani-okinawa-traditional-outrigger-fishing-boat": [
    {
      src: sabaniDugout,
      alt: "Traditional Okinawan sabani hull preserved under an open timber shelter",
    },
    {
      src: sabaniAnchored,
      alt: "Two sabani anchored off a reef flat under overcast skies in Okinawa",
    },
    {
      src: sabaniHull,
      alt: "Sabani hull cradled on blocks ashore with a fitted cover",
    },
  ],
};

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = slug ? getArticle(slug) : undefined;
  const images = slug ? articleImages[slug] : undefined;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Article not found
            </h1>
            <Button asChild variant="outline">
              <Link to="/articles">Back to Articles</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/articles"
              className="text-sm text-accent hover:underline mb-6 inline-block"
            >
              ← All articles
            </Link>
            <p className="text-sm text-accent mb-2">{article.displayDate}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              {article.title}
            </h1>
            {images && images.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {images.map((img) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-48 sm:h-56 object-cover rounded-xl border border-border"
                  />
                ))}
              </div>
            )}
            <ArticleContent content={article.content} />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;