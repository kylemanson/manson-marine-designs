import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Edit, Plus, LogOut, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  featured_image_url: string | null;
  additional_images?: string[] | null;
  published: boolean;
  created_at: string;
}

const Admin = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [additionalImages, setAdditionalImages] = useState<File[]>([]);
  const [existingAdditionalImages, setExistingAdditionalImages] = useState<string[]>([]);
  const [published, setPublished] = useState(false);
  const [postDate, setPostDate] = useState<Date>(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchPosts();
    }
  }, [user]);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setPosts(data);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!editingPost) {
      setSlug(generateSlug(value));
    }
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${user?.id}/${fileName}`;

    const { error } = await supabase.storage
      .from("blog-images")
      .upload(filePath, file);

    if (error) {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive",
      });
      return null;
    }

    const { data } = supabase.storage
      .from("blog-images")
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsSubmitting(true);

    try {
      let imageUrl = editingPost?.featured_image_url || null;

      if (featuredImage) {
        imageUrl = await uploadImage(featuredImage);
      }

      // Upload additional images
      const uploadedAdditionalUrls: string[] = [];
      for (const file of additionalImages) {
        const url = await uploadImage(file);
        if (url) uploadedAdditionalUrls.push(url);
      }

      // Combine existing + new additional images
      const allAdditionalImages = [...existingAdditionalImages, ...uploadedAdditionalUrls];

      if (editingPost) {
        const { error } = await supabase
          .from("blog_posts")
          .update({
            title,
            slug,
            content,
            featured_image_url: imageUrl,
            additional_images: allAdditionalImages,
            published,
            created_at: postDate.toISOString(),
          })
          .eq("id", editingPost.id);

        if (error) throw error;
        toast({ title: "Post updated" });
      } else {
        const { error } = await supabase
          .from("blog_posts")
          .insert({
            title,
            slug,
            content,
            featured_image_url: imageUrl,
            additional_images: allAdditionalImages,
            published,
            created_at: postDate.toISOString(),
          });

        if (error) throw error;
        toast({ title: "Post created" });
      }

      resetForm();
      fetchPosts();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setSlug("");
    setContent("");
    setFeaturedImage(null);
    setAdditionalImages([]);
    setExistingAdditionalImages([]);
    setPublished(false);
    setPostDate(new Date());
    setEditingPost(null);
    setIsEditing(false);
  };

  const removeExistingImage = (index: number) => {
    setExistingAdditionalImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setTitle(post.title);
    setSlug(post.slug);
    setContent(post.content || "");
    setExistingAdditionalImages(post.additional_images || []);
    setPublished(post.published);
    setPostDate(new Date(post.created_at));
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post?")) return;

    const { error } = await supabase
      .from("blog_posts")
      .delete()
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({ title: "Post deleted" });
      fetchPosts();
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-foreground">Blog Admin</h1>
              <Button variant="outline" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>

            {/* Post Form */}
            <Card className="p-6 mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                {editingPost ? "Edit Post" : "New Post"}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="slug">Slug</Label>
                  <Input
                    id="slug"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={10}
                  />
                </div>
                
                <div>
                  <Label htmlFor="image">Featured Image</Label>
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFeaturedImage(e.target.files?.[0] || null)}
                  />
                </div>

                <div>
                  <Label htmlFor="additional-images">Gallery Images</Label>
                  <Input
                    id="additional-images"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => setAdditionalImages(Array.from(e.target.files || []))}
                  />
                  {additionalImages.length > 0 && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {additionalImages.length} new image(s) selected
                    </p>
                  )}
                  
                  {existingAdditionalImages.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground mb-2">Existing gallery images:</p>
                      <div className="grid grid-cols-4 gap-2">
                        {existingAdditionalImages.map((url, index) => (
                          <div key={index} className="relative group">
                            <img 
                              src={url} 
                              alt={`Gallery ${index + 1}`} 
                              className="w-full h-20 object-cover rounded"
                            />
                            <button
                              type="button"
                              onClick={() => removeExistingImage(index)}
                              className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div>
                  <Label>Post Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal mt-1",
                          !postDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {postDate ? format(postDate, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={postDate}
                        onSelect={(date) => date && setPostDate(date)}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="flex items-center gap-2">
                  <Switch
                    id="published"
                    checked={published}
                    onCheckedChange={setPublished}
                  />
                  <Label htmlFor="published">Published</Label>
                </div>
                
                <div className="flex gap-2">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : editingPost ? "Update" : "Create"}
                  </Button>
                  {editingPost && (
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancel
                    </Button>
                  )}
                </div>
              </form>
            </Card>

            {/* Posts List */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-foreground">All Posts</h2>
                {!isEditing && (
                  <Button onClick={() => setIsEditing(true)} size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    New Post
                  </Button>
                )}
              </div>
              
              {posts.length === 0 ? (
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground">No posts yet.</p>
                </Card>
              ) : (
                <div className="space-y-4">
                  {posts.map((post) => (
                    <Card key={post.id} className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground">{post.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {format(new Date(post.created_at), "MMM d, yyyy")} • 
                            <span className={post.published ? "text-green-500" : "text-yellow-500"}>
                              {post.published ? " Published" : " Draft"}
                            </span>
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(post)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(post.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
