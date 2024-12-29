import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const getExcerpt = (content, length = 150) => {
  const plainText = content.replace(/[#*`]/g, "").trim();
  return plainText.length > length
    ? `${plainText.slice(0, length)}...`
    : plainText;
};

export async function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "public", "content", "blog");

  try {
    const fileNames = await fs.readdir(postsDirectory);
    const allPostsData = await Promise.all(
      fileNames.map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, "utf8");
        const { data: frontmatter, content } = matter(fileContents);

        return {
          slug,
          excerpt: getExcerpt(content),
          ...frontmatter,
        };
      })
    );

    return allPostsData.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error("Error loading blog posts:", error);
    return [];
  }
}
