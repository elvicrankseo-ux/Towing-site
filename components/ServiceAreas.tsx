import { business } from "@/lib/business";

export default function ServiceAreas() {
  return (
    <section className="chain-divider bg-steel/5 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt sm:text-4xl">
          Where we run
        </h2>
        <p className="mt-3 max-w-xl text-steel">
          Trucks staged across the metro so a driver is always close, not
          crossing town.
        </p>

        <ul className="mt-8 flex flex-wrap gap-3">
          {business.serviceAreas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-steel/30 bg-chalk px-4 py-2 font-mono text-sm text-asphalt"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
