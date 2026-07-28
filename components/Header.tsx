import { business } from "@/lib/business";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-steel/20 bg-asphalt/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl font-bold uppercase tracking-wide text-chalk">
          {business.name}
        </a>
        <a
          href={business.phoneHref}
          className="flex items-center gap-2 rounded-sm bg-amber px-4 py-2 font-display text-sm font-bold uppercase tracking-wide text-asphalt transition hover:bg-vest"
        >
          Call {business.phone}
        </a>
      </div>
    </header>
  );
}
