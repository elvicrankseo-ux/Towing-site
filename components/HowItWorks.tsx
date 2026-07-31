const steps = [
  "Call or message us with your location and vehicle details.",
  "We dispatch the nearest available truck to you.",
  "Track your driver's arrival — no guessing, no long waits.",
  "Get back on the road, safely and fast.",
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt sm:text-4xl">
        How it works
      </h2>

      <ol className="mt-8 space-y-5">
        {steps.map((step, i) => (
          <li key={step} className="flex items-start gap-4">
            <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-amber font-display text-sm font-bold text-asphalt">
              {i + 1}
            </span>
            <p className="text-steel">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
