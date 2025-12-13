import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  featured_image_url: string | null;
  created_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setPosts(data);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Project Blog
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Personal projects, experiments, and insights from naval architecture and beyond.
            </p>

            {loading ? (
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="p-6 animate-pulse">
                    <div className="h-6 bg-muted rounded w-3/4 mb-4" />
                    <div className="h-4 bg-muted rounded w-1/4 mb-4" />
                    <div className="h-4 bg-muted rounded w-full" />
                  </Card>
                ))}
              </div>
            ) : posts.length === 0 ? (
              <Card className="p-12 text-center">
                <p className="text-muted-foreground text-lg">
                  No blog posts yet. Check back soon!
                </p>
              </Card>
            ) : (
              <div className="space-y-6">
                {posts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`}>
                    <Card className="p-6 hover:border-accent transition-colors group">
                      {post.featured_image_url && (
                        <img
                          src={post.featured_image_url}
                          alt={post.title}
                          className="w-full h-48 object-cover rounded-md mb-4"
                        />
                      )}
                      <h2 className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-4">
                        {format(new Date(post.created_at), "MMMM d, yyyy")}
                      </p>
                      {post.content && (
                        <p className="text-muted-foreground line-clamp-3">
                          {post.content.slice(0, 200)}...
                        </p>
                      )}
                    </Card>
                  </Link>
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

export default Blog;
