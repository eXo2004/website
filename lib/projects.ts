export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  status: "active" | "completed" | "archived";
  date: string; // YYYY-MM-DD
  link?: string;
};

// Hier Projekte pflegen — neueste zuerst
export const projects: Project[] = [
  {
    slug: "dashboard",
    title: "Persönliches Dashboard",
    description:
      "Cowork-Artifact als persönliches Dashboard mit Projektübersicht, Live-E-Mail-Integration (Gmail) und Portfolio.",
    tags: ["Cowork", "Gmail API", "Dashboard"],
    status: "active",
    date: "2026-06-26",
  },
  {
    slug: "website",
    title: "Persönliche Website",
    description:
      "Diese Website — gebaut mit Next.js, Tailwind CSS und MDX. Hosted auf Vercel.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    status: "active",
    date: "2026-06-26",
  },
];
