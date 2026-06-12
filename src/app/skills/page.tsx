import type { Metadata } from "next";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/portfolio";

export const metadata: Metadata = { title: "Skills", description: "Categorized software engineering, cloud, DevOps, networking, database, AI, tool, and OS skills." };
export default function SkillsPage() { return <section className="container-pad py-32"><SectionHeading eyebrow="Skills" title="Grouped by real engineering surfaces, not fake percentages.">Skills are presented by where they fit in an end-to-end system: code, cloud, delivery, data, networks, intelligence, and tools.</SectionHeading><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{skillGroups.map((group, i) => <Reveal key={group.category} delay={(i % 4) * .04} className="group glass rounded-[2rem] p-6 transition hover:bg-white/[0.08]"><p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">{String(i + 1).padStart(2, "0")}</p><h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{group.category}</h2><div className="mt-5 flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-sm text-zinc-300 transition group-hover:border-white/20">{skill}</span>)}</div></Reveal>)}</div></section>; }
