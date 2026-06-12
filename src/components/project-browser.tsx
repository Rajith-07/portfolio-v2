"use client";
import { useMemo, useState } from "react";
import { FiExternalLink, FiGithub, FiSearch } from "react-icons/fi";
import { projects } from "@/data/portfolio";
import { motion } from "@/components/motion";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function ProjectBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => projects.filter((p) => {
    const haystack = `${p.name} ${p.summary} ${p.technologies.join(" ")} ${p.problem} ${p.solution}`.toLowerCase();
    return (category === "All" || p.category === category) && haystack.includes(query.toLowerCase());
  }), [query, category]);
  return (
    <div>
      <div className="glass mb-8 flex flex-col gap-4 rounded-[2rem] p-4 lg:flex-row lg:items-center lg:justify-between">
        <label className="relative flex-1"><FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search projects, systems, technologies..." className="w-full rounded-full border border-white/10 bg-black/40 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-white" /></label>
        <div className="flex flex-wrap gap-2" role="list" aria-label="Project filters">
          {categories.map((cat) => <button key={cat} onClick={() => setCategory(cat)} className={cn("rounded-full border px-4 py-2 text-sm transition", category === cat ? "border-white bg-white text-black" : "border-white/10 text-zinc-300 hover:border-white/40")}>{cat}</button>)}
        </div>
      </div>
      <div className="grid gap-5">
        {filtered.map((project) => (
          <motion.article id={project.slug} key={project.slug} layout className="glass rounded-[2rem] p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="kicker mb-3">{project.category}</p>
                <h2 className="text-3xl font-semibold tracking-[-0.05em]">{project.name}</h2>
                <p className="copy mt-3 max-w-3xl">{project.summary}</p>
              </div>
              <div className="flex gap-2">
                <a className="rounded-full border border-white/10 p-3 text-zinc-300 hover:bg-white hover:text-black" href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} source`}><FiGithub /></a>
                {project.demo && <a className="rounded-full border border-white/10 p-3 text-zinc-300 hover:bg-white hover:text-black" href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.name} demo`}><FiExternalLink /></a>}
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[['Problem', project.problem], ['Solution', project.solution], ['Impact', project.impact]].map(([label, text]) => <div key={label} className="rounded-3xl border border-white/10 bg-black/25 p-5"><p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">{label}</p><p className="mt-3 text-sm leading-6 text-zinc-300">{text}</p></div>)}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-full bg-white/[0.07] px-3 py-1 text-xs text-zinc-300">{tech}</span>)}</div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
