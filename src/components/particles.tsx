"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const Particles = dynamic(() => import("@tsparticles/react"), { ssr: false });
const ParticlesProvider = dynamic(() => import("@tsparticles/react").then((m) => m.ParticlesProvider), { ssr: false });

function Field() {
  const options = useMemo<ISourceOptions>(() => ({
    fullScreen: { enable: false },
    fpsLimit: 60,
    particles: {
      number: { value: 34, density: { enable: true } },
      color: { value: "#ffffff" },
      opacity: { value: { min: 0.12, max: 0.36 } },
      size: { value: { min: 1, max: 2.2 } },
      links: { enable: true, color: "#ffffff", opacity: 0.08, distance: 145, width: 1 },
      move: { enable: true, speed: 0.42, outModes: { default: "bounce" } },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" }, resize: { enable: true } },
      modes: { grab: { distance: 150, links: { opacity: 0.18 } } },
    },
    detectRetina: true,
  }), []);
  return <Particles id="tsparticles" className="absolute inset-0" options={options} />;
}

export function ParticleField() {
  return (
    <ParticlesProvider init={async (engine: Engine) => { await loadSlim(engine); }}>
      <Field />
    </ParticlesProvider>
  );
}
