import type { Metadata } from "next";
import { ProjectBrowser } from "@/components/project-browser";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Projects", description: "Searchable project showcase with problem, solution, technologies, impact, and GitHub links." };
export default function ProjectsPage() { return <section className="container-pad py-32"><SectionHeading eyebrow="Projects" title="A searchable system showcase.">Each project is modeled from structured data so the portfolio can evolve like a product catalog.</SectionHeading><ProjectBrowser /></section>; }
