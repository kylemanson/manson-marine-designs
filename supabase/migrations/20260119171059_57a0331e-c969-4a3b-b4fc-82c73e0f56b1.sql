-- Add column for additional images (up to 3)
ALTER TABLE public.blog_posts 
ADD COLUMN additional_images TEXT[];