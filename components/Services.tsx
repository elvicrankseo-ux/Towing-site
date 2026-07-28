import { business } from "@/lib/business";

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 flex items-end justify-between border-b border-steel/20 pb-6">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt sm:text-4xl">
          What we handle
        </h2>
        <span className="hidden font-mono text-xs uppercase tracking-widest text-steel sm:block">
          Licensed &amp; Insured
        </span>
      </div>

      <div className="grid gap-px overflow-hidden rounded-sm border border-steel/15 bg-steel/15 sm:grid-cols-2 lg:grid-cols-3">
        {business.services.map((service) => (
          <div
            key={service.label}
            className="group bg-chalk p-6 transition hover:bg-asphalt hover:text-chalk"
          >
            <h3 className="font-display text-xl font-bold uppercase tracking-wide">
              {service.label}
            </h3>
            <p className="mt-2 text-sm text-steel group-hover:text-chalk/70">
              {service.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
