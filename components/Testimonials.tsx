import { business } from "@/lib/business";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt sm:text-4xl">
        From the shoulder of the road
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {business.testimonials.map((t) => (
          <blockquote
            key={t.name}
            className="border-l-2 border-amber bg-chalk p-6 text-asphalt"
          >
            <p className="text-steel">&ldquo;{t.quote}&rdquo;</p>
            <cite className="mt-4 block font-mono text-xs uppercase tracking-widest text-asphalt not-italic">
              — {t.name}
            </cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
