import { getBlogPosts } from "@/lib/blog";
import BlogList from "./BlogList";

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return <BlogList posts={posts} />;
}
