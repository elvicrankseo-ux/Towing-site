import { business } from "@/lib/business";
import Beacon from "./Beacon";

export default function Hero() {
  return (
    <section id="top" className="diagonal-edge relative overflow-hidden bg-asphalt pb-24 pt-16 text-chalk">
      {/* passing light-bar sweep, decorative only */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/3 h-px w-1/3 animate-sweep bg-gradient-to-r from-transparent via-amber to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <Beacon label="Dispatch Online · 24/7" />

        <h1 className="mt-6 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-7xl">
          {business.tagline}
        </h1>

        <p className="mt-6 max-w-xl font-body text-lg text-chalk/70">
          Licensed, insured towing and roadside assistance. One call gets a
          driver moving toward you, not a hold queue.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href={business.phoneHref}
            className="rounded-sm bg-amber px-8 py-4 font-display text-lg font-bold uppercase tracking-wide text-asphalt transition hover:bg-vest"
          >
            Call Now — {business.phone}
          </a>
          <div className="font-mono text-sm text-chalk/60">
            <span className="text-vest">avg. arrival</span> {business.avgResponse}
          </div>
        </div>
      </div>
    </section>
  );
}
