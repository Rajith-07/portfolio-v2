import { Reveal } from "@/components/motion";

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <Reveal className="mx-auto mb-10 max-w-3xl text-center">
      <p className="kicker mb-4">{eyebrow}</p>
      <h2 className="h2">{title}</h2>
      {children ? <p className="copy mt-5">{children}</p> : null}
    </Reveal>
  );
}
