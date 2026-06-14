import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { marked } from "marked";
import Link from "next/link";
import { ArrowLeftIcon, CalendarIcon, UserIcon } from "lucide-react";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const htmlContent = await marked(post.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Ficiali",
      url: "https://www.ficialisoftwares.com",
    },
    datePublished: post.date,
    keywords: post.tags.join(", "),
    url: `https://www.ficialisoftwares.com/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="pt-28 pb-20 min-h-screen">
        <div className="max-w-3xl mx-auto px-4">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-10"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-violet-500/10 text-violet-300 rounded-full border border-violet-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 mb-10 pb-8 border-b border-white/8">
            <span className="flex items-center gap-1.5">
              <UserIcon className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarIcon className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
          </div>

          {/* Content */}
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Footer CTA */}
          <div className="mt-16 pt-8 border-t border-white/8 text-center">
            <p className="text-gray-400 text-sm mb-4">
              Enjoyed this article? Let&apos;s work together.
            </p>
            <Link
              href="/#contact-us"
              className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium bg-gradient-to-br from-indigo-500 to-indigo-600 hover:opacity-90 transition-all text-white"
            >
              Contact Ficiali
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
