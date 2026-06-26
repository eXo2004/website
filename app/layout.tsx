import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Nikolas Bosold", template: "%s · Nikolas Bosold" },
  description: "Persönliche Website von Nikolas Bosold — Projekte, Blog und mehr.",
};

const navLinks = [
  { href: "/",         label: "Start"    },
  { href: "/projekte", label: "Projekte" },
  { href: "/blog",     label: "Blog"     },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        {/* ── Header ── */}
        <header className="border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold text-gray-900 hover:text-gray-600 transition-colors">
              Nikolas Bosold
            </Link>
            <nav className="flex gap-6">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* ── Main ── */}
        <main className="flex-1 max-w-3xl mx-auto px-6 py-12 w-full">
          {children}
        </main>

        {/* ── Footer ── */}
        <footer className="border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-6 py-6 text-sm text-gray-400 flex justify-between items-center">
            <span>© {new Date().getFullYear()} Nikolas Bosold</span>
            <span>Gebaut mit Next.js</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
