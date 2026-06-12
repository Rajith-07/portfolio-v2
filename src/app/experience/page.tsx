import type { Metadata } from "next";
import { Timeline } from "@/components/timeline";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Experience", description: "Animated timeline of internships, leadership roles, and achievements." };
export default function ExperiencePage() { return <section className="container-pad py-32"><SectionHeading eyebrow="Experience" title="Internships and leadership across cloud, software, and IoT.">A timeline of production-facing work, technical leadership, and club-building responsibilities.</SectionHeading><Timeline /></section>; }
