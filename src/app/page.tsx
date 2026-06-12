import Link from "next/link";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { ParticleField } from "@/components/particles";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/timeline";
import { profile, projects, research, skillGroups } from "@/data/portfolio";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden pt-28">
        <ParticleField />
        <div className="container-pad relative z-10 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <Reveal>
            <p className="kicker mb-6">Systems · Cloud · AI</p>
            <h1 className="h1 uppercase">{profile.name}</h1>
            <p className="mt-5 text-2xl font-medium text-zinc-200 sm:text-4xl">{profile.role}</p>
            <p className="mt-6 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.055em] text-white/95 sm:text-5xl">Building scalable systems,<br />cloud-native platforms,<br />and intelligent software.</p>
            <p className="copy mt-6 max-w-2xl">An end-to-end engineer working across software engineering, distributed systems, cloud infrastructure, DevOps, networking, AI, and full stack product delivery.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/projects" className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200">View Projects</Link>
              <Link href="/contact" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"><FiMail className="mr-2 inline" />Contact Me</Link>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="hidden lg:block">
            <div className="glass relative rounded-[2.5rem] p-6">
              <div className="rounded-[2rem] border border-white/10 bg-black/50 p-6 font-mono text-sm text-zinc-300">
                <p className="text-zinc-500">const rajith = &#123;</p>
                <p className="pl-4">focus: [&quot;systems&quot;, &quot;cloud&quot;, &quot;ai&quot;],</p>
                <p className="pl-4">mindset: &quot;Build → Test → Deploy → Scale&quot;,</p>
                <p className="pl-4">architecture: &quot;end-to-end&quot;,</p>
                <p className="text-zinc-500">&#125;;</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="container-pad py-24">
        <SectionHeading eyebrow="Featured work" title="Systems with measurable constraints, not just polished UI.">Selected projects from Rajith’s resume and GitHub, presented through problem, solution, and impact.</SectionHeading>
        <div className="grid gap-5 md:grid-cols-2">{featured.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>
      <section className="container-pad py-20">
        <SectionHeading eyebrow="Expertise map" title="Engineering coverage from interface to infrastructure." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.slice(0, 6).map((group, i) => <Reveal key={group.category} delay={i * 0.04} className="glass rounded-[1.5rem] p-5"><h3 className="text-xl font-semibold">{group.category}</h3><p className="mt-3 text-sm leading-6 text-zinc-400">{group.skills.slice(0, 6).join(" · ")}</p></Reveal>)}
        </div>
      </section>
      <section className="container-pad py-20"><SectionHeading eyebrow="Experience" title="Production-oriented internships and technical leadership." /><Timeline compact /></section>
      <section className="container-pad py-20">
        <SectionHeading eyebrow="Research" title="Academic work at the edge of AI and systems thinking." />
        <div className="grid gap-5 md:grid-cols-2">{research.map((item) => <Reveal key={item.title} className="glass rounded-[2rem] p-6"><p className="kicker mb-4">{item.area}</p><h3 className="text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3><p className="mt-2 text-zinc-400">{item.subtitle}</p><a href={item.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm text-white">Open research <FiArrowRight /></a></Reveal>)}</div>
      </section>
      <section className="container-pad py-24"><div className="glass rounded-[2.5rem] p-8 text-center sm:p-14"><p className="kicker mb-5">Collaboration</p><h2 className="h2 mx-auto max-w-3xl">Have a systems problem that needs product taste and infrastructure depth?</h2><Link href="/contact" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-black">Let&apos;s build something</Link></div></section>
    </>
  );
}
