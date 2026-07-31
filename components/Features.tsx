const features = [
  {
    title: "Rapid Dispatch",
    detail: "Real-time routing gets the closest available driver to you first, every time.",
  },
  {
    title: "Licensed & Insured",
    detail: "Fully licensed operation with insurance coverage on every job, no exceptions.",
  },
  {
    title: "Fleet Tracking",
    detail: "Every truck is tracked so dispatch always knows exact arrival time.",
  },
  {
    title: "Transparent Pricing",
    detail: "Straightforward rates quoted upfront — no surprise fees at drop-off.",
  },
];

export default function Features() {
  return (
    <section className="bg-steel/5 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt sm:text-4xl">
          Built for reliability
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-sm border border-steel/20 bg-chalk p-6">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber" />
              <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-wide text-asphalt">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-steel">{f.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
