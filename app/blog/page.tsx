import { getAllPosts } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";
import { CalendarIcon, TagIcon, UserIcon } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog – AI Insights & Tech Stories",
  description:
    "Explore insights, tutorials, and stories from the Ficiali team on AI, machine learning, software development, and digital transformation.",
  openGraph: {
    title: "Blog – AI Insights & Tech Stories | Ficiali",
    description:
      "Explore insights, tutorials, and stories from the Ficiali team on AI, machine learning, software development, and digital transformation.",
    type: "website",
  },
};

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="pt-28 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-violet-400 uppercase tracking-wide mb-3">
            Our Blog
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Insights & Stories
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Thoughts on AI, software engineering, and building great products —
            straight from the Ficiali team.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-gray-400">No posts yet. Check back soon!</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <article className="rounded-2xl p-7 bg-white/3 border border-white/6 hover:border-white/15 hover:-translate-y-0.5 transition-all duration-300">
                  {/* Tags */}
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs bg-violet-500/10 text-violet-300 rounded-full border border-violet-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <h2 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-sm text-gray-400 leading-relaxed mb-5 line-clamp-2">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <UserIcon className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
