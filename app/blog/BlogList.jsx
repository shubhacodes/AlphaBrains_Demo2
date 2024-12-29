"use client";
import ShinyButton from "@/components/ui/shiny-button";
import { motion } from "framer-motion";
import Link from "next/link";

const colors = {
  red: "#c72229",
  purple: "#775090",
  blue: "#45487a",
  green: "#169e44",
};

export default function BlogList({ posts }) {
  return (
    <div className="min-h-screen bg-[#F8F8F8] py-8">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header with animated gradient text */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold tracking-tighter sm:text-5xl mt-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <span className="bg-gradient-to-r from-[#cb314e] via-[#4d5089] to-[#85599f] inline-block text-transparent bg-clip-text animate-rainbow-text">
              News & Updates
            </span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div
                  className="rounded-3xl p-6"
                  style={{
                    backgroundColor:
                      index === 0
                        ? colors.red
                        : index === 1
                        ? colors.purple
                        : index === 2
                        ? colors.blue
                        : colors.green,
                  }}
                >
                  <div className="flex justify-between text-base text-white mb-3">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-3">
                    {post.title}
                  </h2>

                  <p className="text-white text-base mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <ShinyButton className="text-white bg-white/20 hover:bg-white/30 px-5 py-2 rounded-full text-base transition-colors">
                    Read more
                  </ShinyButton>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
