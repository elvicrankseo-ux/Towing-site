import Image from "next/image";
import { business } from "@/lib/business";

export default function Intro() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-asphalt sm:text-4xl">
            Full-Service Towing & Roadside Recovery
          </h2>
          <p className="mt-4 text-steel">
            {business.name} is built to get drivers unstuck, fast. From
            flatbed recovery to emergency roadside calls, our dispatch,
            tracking, and licensed drivers work together so every call gets
            a truck moving toward you, not a hold queue.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-steel/20">
          <Image src="/truck-1.jpg" alt={business.name} fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}