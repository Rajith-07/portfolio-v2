import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="container-pad border-t border-white/10 py-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="kicker mb-3">{profile.name}</p>
          <p className="max-w-xl text-zinc-400">{profile.role} focused on scalable systems, cloud-native applications, and intelligent software.</p>
          <p className="mt-4 text-sm text-zinc-500">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="glass rounded-full px-4 py-2 text-sm text-zinc-200 transition hover:bg-white hover:text-black" href={profile.github} target="_blank" rel="noreferrer"><FiGithub className="mr-2 inline" />GitHub</a>
          <a className="glass rounded-full px-4 py-2 text-sm text-zinc-200 transition hover:bg-white hover:text-black" href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin className="mr-2 inline" />LinkedIn</a>
          <a className="glass rounded-full px-4 py-2 text-sm text-zinc-200 transition hover:bg-white hover:text-black" href={`mailto:${profile.email}`}><FiMail className="mr-2 inline" />Email</a>
          <Link className="glass rounded-full px-4 py-2 text-sm text-zinc-200 transition hover:bg-white hover:text-black" href={profile.resume} target="_blank"><FiDownload className="mr-2 inline" />Resume</Link>
        </div>
      </div>
    </footer>
  );
}
