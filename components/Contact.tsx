import { business } from "@/lib/business";

export default function Contact() {
  return (
    <section className="bg-chalk py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt sm:text-4xl">
          Get in touch
        </h2>
        <p className="mt-3 max-w-xl text-steel">
          Call anytime, day or night, or reach out by email for
          non-urgent questions.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="border border-steel/20 bg-white p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-steel">
              Phone
            </p>
            <a href={business.phoneHref} className="mt-2 block font-display text-xl font-bold text-asphalt">
              {business.phone}
            </a>
          </div>

          <div className="border border-steel/20 bg-white p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-steel">
              Email
            </p>
            <a href={"mailto:" + business.email} className="mt-2 block font-display text-xl font-bold text-asphalt">
              {business.email}
            </a>
          </div>

          <div className="border border-steel/20 bg-white p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-steel">
              Address
            </p>
            <p className="mt-2 font-display text-xl font-bold text-asphalt">
              {business.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
