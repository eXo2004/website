import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artikel und Gedanken von Nikolas Bosold.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog</h1>
      <p className="text-gray-500 mb-10">Gedanken, Erfahrungen und Dinge, die ich gelernt habe.</p>

      {posts.length === 0 ? (
        <p className="text-gray-400 text-sm">Noch keine Posts — bald mehr.</p>
      ) : (
        <div className="space-y-0">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block py-5 border-b border-gray-100 last:border-0 group"
            >
              <div className="flex items-baseline justify-between gap-6">
                <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </span>
                <span className="text-sm text-gray-400 whitespace-nowrap flex-shrink-0">
                  {formatDate(post.date)}
                </span>
              </div>
              {post.summary && (
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">{post.summary}</p>
              )}
              {post.tags.length > 0 && (
                <div className="flex gap-2 mt-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });
}
