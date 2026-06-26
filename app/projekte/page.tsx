import type { Metadata } from "next";
import { projects, type Project } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projekte",
  description: "Aktuelle und abgeschlossene Projekte von Nikolas Bosold.",
};

const statusLabel: Record<Project["status"], string> = {
  active:    "Aktiv",
  completed: "Abgeschlossen",
  archived:  "Archiviert",
};

const statusStyle: Record<Project["status"], string> = {
  active:    "bg-green-50 text-green-700",
  completed: "bg-gray-100 text-gray-600",
  archived:  "bg-yellow-50 text-yellow-700",
};

export default function ProjektePage() {
  const active    = projects.filter((p) => p.status === "active");
  const completed = projects.filter((p) => p.status === "completed");
  const archived  = projects.filter((p) => p.status === "archived");

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Projekte</h1>
      <p className="text-gray-500 mb-10">Was ich gebaut habe und woran ich gerade arbeite.</p>

      {active.length > 0 && (
        <ProjectGroup title="Aktiv" projects={active} />
      )}
      {completed.length > 0 && (
        <ProjectGroup title="Abgeschlossen" projects={completed} />
      )}
      {archived.length > 0 && (
        <ProjectGroup title="Archiviert" projects={archived} />
      )}
    </div>
  );
}

function ProjectGroup({ title, projects }: { title: string; projects: Project[] }) {
  return (
    <section className="mb-12">
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">{title}</h2>
      <div className="space-y-6">
        {projects.map((p) => (
          <div key={p.slug} className="border border-gray-100 rounded-xl p-6 hover:border-gray-200 transition-colors">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-semibold text-gray-900 text-lg">
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    {p.title} ↗
                  </a>
                ) : p.title}
              </h3>
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0 ${statusStyle[p.status]}`}>
                {statusLabel[p.status]}
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">{p.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-gray-400">{formatDate(p.date)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("de-DE", { day: "numeric", month: "short", year: "numeric" });
}
