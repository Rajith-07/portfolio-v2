import type { Metadata } from "next";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = { title: "Contact", description: "Contact Rajith S by email, GitHub, or LinkedIn." };
export default function ContactPage() { return <section className="container-pad py-32"><SectionHeading eyebrow="Contact" title="Let’s build something resilient, intelligent, and useful.">Use the form for a quick validation flow, or reach Rajith directly through email, GitHub, or LinkedIn.</SectionHeading><div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]"><Reveal className="glass rounded-[2rem] p-8"><p className="kicker mb-5">Direct links</p><div className="grid gap-3"><a className="rounded-2xl border border-white/10 p-4 text-zinc-200 hover:bg-white hover:text-black" href={`mailto:${profile.email}`}><FiMail className="mr-3 inline" />{profile.email}</a><a className="rounded-2xl border border-white/10 p-4 text-zinc-200 hover:bg-white hover:text-black" href={profile.github} target="_blank" rel="noreferrer"><FiGithub className="mr-3 inline" />GitHub</a><a className="rounded-2xl border border-white/10 p-4 text-zinc-200 hover:bg-white hover:text-black" href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin className="mr-3 inline" />LinkedIn</a></div></Reveal><Reveal delay={0.08}><ContactForm /></Reveal></div></section>; }
