// utils/getBlogPosts.js
import { readFileSync, readdirSync } from "fs";
import path from "path";
import matter from "gray-matter";

// Helper function to get excerpt
const getExcerpt = (content, length = 150) => {
  const plainText = content.replace(/[#*`]/g, "").trim();
  return plainText.length > length
    ? `${plainText.slice(0, length)}...`
    : plainText;
};

export async function getBlogPosts() {
  try {
    const blogDir = path.join(process.cwd(), "public", "content", "blog");
    const files = readdirSync(blogDir);

    const posts = files.map((filename) => {
      const slug = filename.replace(".md", "");
      const markdownWithMeta = readFileSync(
        path.join(blogDir, filename),
        "utf-8"
      );
      const { data: frontmatter, content } = matter(markdownWithMeta);
      return {
        slug,
        excerpt: getExcerpt(content),
        ...frontmatter,
      };
    });

    // Sort posts by date (most recent first)
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}
