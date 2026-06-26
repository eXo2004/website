import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getAllPosts } from "@/lib/blog";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};
  return { title: post.meta.title, description: post.meta.summary };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article>
      {/* Back link */}
      <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8 block">
        ← Blog
      </Link>

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{post.meta.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>{formatDate(post.meta.date)}</span>
          {post.meta.tags.length > 0 && (
            <div className="flex gap-2">
              {post.meta.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {post.meta.summary && (
          <p className="mt-4 text-gray-600 text-lg leading-relaxed border-l-2 border-gray-200 pl-4">
            {post.meta.summary}
          </p>
        )}
      </header>

      {/* Content */}
      <div className="prose max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });
}
