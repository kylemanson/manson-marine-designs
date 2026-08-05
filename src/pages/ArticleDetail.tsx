import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArticleContent from "@/components/ArticleContent";
import { Button } from "@/components/ui/button";
import { getArticle } from "@/data/articles";

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = slug ? getArticle(slug) : undefined;

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
            <ArticleContent content={article.content} />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;