import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const getColorByCategory = (category) => {
  const colors = {
    Event: "#c72229",
    News: "#775090",
    Update: "#45487a",
    Announcement: "#45487a",
    default: "#169e44",
  };
  return colors[category] || colors.default;
};

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "public", "content", "blog");
  const filenames = await fs.readdir(postsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

async function getPost(slug) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "content",
    "blog",
    `${slug}.md`
  );
  const fileContents = await fs.readFile(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    frontmatter,
    slug,
    contentHtml,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = params;
  const post = await getPost(slug);
  const headerColor = getColorByCategory(post.frontmatter.category);

  return (
    <article className="min-h-screen bg-white">
      <div className="w-full py-16" style={{ backgroundColor: headerColor }}>
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Posts
          </Link>

          <div className="text-white">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-white/80">{post.frontmatter.date}</span>
              <span className="px-4 py-1 rounded-full bg-white/20">
                {post.frontmatter.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.frontmatter.title}
            </h1>

            {post.frontmatter.excerpt && (
              <p className="text-lg text-white/80 mb-8">
                {post.frontmatter.excerpt}
              </p>
            )}

            {post.frontmatter.image && (
              <div className="relative w-full h-[350px] rounded-xl overflow-hidden mb-8">
                <Image
                  src={post.frontmatter.image}
                  alt={post.frontmatter.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {post.frontmatter.author && (
              <p className="text-white/80">By {post.frontmatter.author}</p>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div
          className="prose prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-gray-900
          prose-p:text-gray-600 prose-p:leading-relaxed
          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-800
          prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </article>
  );
}
