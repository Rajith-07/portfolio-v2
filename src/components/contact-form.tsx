"use client";
import { useState } from "react";
import { motion } from "@/components/motion";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  return (
    <form className="glass rounded-[2rem] p-6" onSubmit={(e) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const email = String(data.get("email") || "");
      const message = String(data.get("message") || "");
      setStatus(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && message.trim().length > 10 ? "success" : "error");
    }}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-zinc-300">Name<input name="name" required className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-white" /></label>
        <label className="grid gap-2 text-sm text-zinc-300">Email<input name="email" type="email" required className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-white" /></label>
      </div>
      <label className="mt-4 grid gap-2 text-sm text-zinc-300">Message<textarea name="message" required rows={6} minLength={11} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-white" /></label>
      <motion.button whileTap={{ scale: 0.98 }} type="submit" className="mt-5 w-full rounded-full bg-white px-6 py-4 font-semibold text-black transition hover:bg-zinc-200">Send message</motion.button>
      <div aria-live="polite" className="mt-4 min-h-6 text-sm">
        {status === "success" && <p className="text-emerald-300">Message validated. Please send it through your mail client or email Rajith directly.</p>}
        {status === "error" && <p className="text-red-300">Please enter a valid email and a message longer than 10 characters.</p>}
      </div>
    </form>
  );
}
