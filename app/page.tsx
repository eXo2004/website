import Link from "next/link";
import { projects } from "@/lib/projects";
import { getAllPosts } from "@/lib/blog";

export default function HomePage() {
  const latestProjects = projects.filter((p) => p.status === "active").slice(0, 3);
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-6">

      {/* ── Hero ── */}
      <section className="bg-white rounded-2xl shadow-sm p-8 flex items-center gap-8">
        {/* Bild-Platzhalter */}
        <div className="flex-shrink-0 w-24 h-24 rounded-full bg-blue-100 border-4 border-blue-200 flex items-center justify-center text-blue-300 text-sm text-center leading-tight select-none">
          Dein<br />Foto
        </div>

        <div>
          <h1 className="text-4xl font-bold text-blue-900 mb-3">
            Hey, ich bin Nikolas.
          </h1>
          <p className="text-base text-blue-700 leading-relaxed max-w-xl">
            Ich baue Dinge, denke laut und schreibe darüber.
            Diese Seite ist mein persönlicher Raum — Projekte, Gedanken und alles dazwischen.
          </p>
          <div className="mt-5 flex gap-3">
            <Link
              href="/projekte"
              className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Projekte ansehen
            </Link>
            <Link
              href="/blog"
              className="inline-block bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Blog lesen
            </Link>
          </div>
        </div>
      </section>

      {/* ── Aktuelle Projekte ── */}
      {latestProjects.length > 0 && (
        <section className="bg-white rounded-2xl shadow-sm p-8">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-xl font-semibold text-blue-900">Aktuelle Projekte</h2>
            <Link href="/projekte" className="text-sm text-blue-400 hover:text-blue-700 transition-colors">
              Alle ansehen →
            </Link>
          </div>
          <div className="space-y-4">
            {latestProjects.map((p) => (
              <div
                key={p.slug}
                className="flex items-start justify-between gap-4 py-4 border-b border-gray-100 last:border-0"
              >
                <div>
                  <p className="font-medium text-blue-900">{p.title}</p>
                  <p className="text-sm text-blue-600 mt-1">{p.description}</p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-blue-50 text-blue-500 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                  Aktiv
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Neueste Blog-Posts ── */}
      {latestPosts.length > 0 && (
        <section className="bg-white rounded-2xl shadow-sm p-8">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-xl font-semibold text-blue-900">Zuletzt geschrieben</h2>
            <Link href="/blog" className="text-sm text-blue-400 hover:text-blue-700 transition-colors">
              Alle Posts →
            </Link>
          </div>
          <div className="space-y-4">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block py-4 border-b border-gray-100 last:border-0 group"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-medium text-blue-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </p>
                  <span className="text-xs text-blue-300 whitespace-nowrap flex-shrink-0">
                    {formatDate(post.date)}
                  </span>
                </div>
                {post.summary && (
                  <p className="text-sm text-blue-600 mt-1">{post.summary}</p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Fallback wenn kein Inhalt ── */}
      {latestPosts.length === 0 && latestProjects.length === 0 && (
        <section className="bg-white rounded-2xl shadow-sm p-8 text-blue-300 text-sm">
          Noch nichts hier — komm bald wieder.
        </section>
      )}

    </div>
  );
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("de-DE", { day: "numeric", month: "short", year: "numeric" });
}
