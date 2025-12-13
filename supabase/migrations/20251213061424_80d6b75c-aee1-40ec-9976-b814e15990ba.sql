-- Add author_id to blog_posts for ownership
ALTER TABLE public.blog_posts 
ADD COLUMN author_id UUID REFERENCES auth.users(id);

-- Policy for authenticated users to create posts
CREATE POLICY "Authenticated users can create posts" 
ON public.blog_posts 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = author_id);

-- Policy for authors to update their own posts
CREATE POLICY "Authors can update their own posts" 
ON public.blog_posts 
FOR UPDATE 
TO authenticated
USING (auth.uid() = author_id);

-- Policy for authors to delete their own posts
CREATE POLICY "Authors can delete their own posts" 
ON public.blog_posts 
FOR DELETE 
TO authenticated
USING (auth.uid() = author_id);

-- Storage policy for authenticated users to upload blog images
CREATE POLICY "Authenticated users can upload blog images" 
ON storage.objects 
FOR INSERT 
TO authenticated
WITH CHECK (bucket_id = 'blog-images');

-- Storage policy for users to update their uploaded images
CREATE POLICY "Users can update their blog images" 
ON storage.objects 
FOR UPDATE 
TO authenticated
USING (bucket_id = 'blog-images');

-- Storage policy for users to delete their uploaded images
CREATE POLICY "Users can delete their blog images" 
ON storage.objects 
FOR DELETE 
TO authenticated
USING (bucket_id = 'blog-images');