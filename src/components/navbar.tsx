"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4" aria-label="Primary navigation">
      <nav className={cn("mx-auto flex max-w-4xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-300", scrolled ? "border-white/15 bg-black/55 shadow-2xl shadow-black/40 backdrop-blur-2xl" : "border-white/10 bg-white/[0.045] backdrop-blur-xl")}>
        <Link href="/" className="rounded-full px-4 py-2 font-mono text-xs font-semibold tracking-[0.25em] text-white" aria-label="Rajith S home">RS</Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return <Link key={item.href} href={item.href} className={cn("relative rounded-full px-3 py-2 text-sm text-zinc-400 transition hover:text-white", active && "text-black")} aria-current={active ? "page" : undefined}>{active && <span className="absolute inset-0 -z-10 rounded-full bg-white" />}{item.label}</Link>;
          })}
        </div>
        <button type="button" className="rounded-full p-3 text-white md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>{open ? <FiX /> : <FiMenu />}</button>
      </nav>
      {open && (
        <div className="mx-auto mt-3 grid max-w-sm gap-1 rounded-3xl border border-white/10 bg-black/85 p-3 shadow-2xl backdrop-blur-2xl md:hidden">
          {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm text-zinc-200 hover:bg-white/10">{item.label}</Link>)}
        </div>
      )}
    </header>
  );
}
