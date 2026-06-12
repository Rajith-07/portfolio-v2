import { Reveal } from "@/components/motion";
import { experience } from "@/data/portfolio";

export function Timeline({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-white/5 via-white/30 to-white/5 md:left-1/2" />
      {experience.slice(0, compact ? 3 : experience.length).map((item, index) => (
        <Reveal key={`${item.title}-${item.period}`} delay={index * 0.06} className={`relative mb-8 md:w-1/2 ${index % 2 ? "md:ml-auto md:pl-10" : "md:pr-10"}`}>
          <div className="absolute left-[10px] top-7 h-3 w-3 rounded-full bg-white shadow-[0_0_28px_rgba(255,255,255,.9)] md:left-auto md:right-[-6px]" />
          <article className="glass ml-10 rounded-[1.75rem] p-6 md:ml-0">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">{item.type} · {item.period}</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
            <p className="mt-1 text-sm text-zinc-400">{item.org}</p>
            <p className="mt-4 text-zinc-300">{item.summary}</p>
            {!compact && <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-400">{item.points.map((point) => <li key={point}>{point}</li>)}</ul>}
          </article>
        </Reveal>
      ))}
    </div>
  );
}
