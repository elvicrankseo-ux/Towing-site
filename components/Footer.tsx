import { business } from "@/lib/business";
import Beacon from "./Beacon";

export default function Footer() {
  return (
    <footer className="bg-asphalt py-16 text-chalk">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-steel/30 pb-10 sm:flex-row sm:items-end">
          <div>
            <Beacon label="Dispatch Online · 24/7" />
            <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              Broken down? Call it in.
            </h2>
          </div>
          <a
            href={business.phoneHref}
            className="rounded-sm bg-amber px-8 py-4 font-display text-lg font-bold uppercase tracking-wide text-asphalt transition hover:bg-vest"
          >
            {business.phone}
          </a>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 font-mono text-xs uppercase tracking-widest text-chalk/50 sm:flex-row">
          <span>
            &copy; {new Date().getFullYear()} {business.name}. Licensed &amp; insured.
          </span>
          <span>Serving {business.serviceAreas.length} local areas</span>
        </div>
      </div>
    </footer>
  );
}
