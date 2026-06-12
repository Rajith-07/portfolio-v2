import Link from "next/link";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { projects } from "@/data/portfolio";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group glass relative flex h-full flex-col overflow-hidden rounded-[2rem] p-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">{project.category}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{project.name}</h3>
        </div>
        <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub repository`} className="rounded-full border border-white/10 p-3 text-zinc-300 transition group-hover:border-white group-hover:bg-white group-hover:text-black"><FiGithub /></a>
      </div>
      <p className="text-sm leading-6 text-zinc-400">{project.summary}</p>
      <div className="mt-6 grid gap-3 text-sm">
        <p><span className="text-zinc-500">Problem:</span> <span className="text-zinc-300">{project.problem}</span></p>
        <p><span className="text-zinc-500">Impact:</span> <span className="text-zinc-300">{project.impact}</span></p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.slice(0, 6).map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">{tech}</span>)}
      </div>
      <Link href={`/projects#${project.slug}`} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm text-white">Inspect system <FiArrowUpRight /></Link>
    </article>
  );
}
