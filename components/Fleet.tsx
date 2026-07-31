import Image from "next/image";
import { business } from "@/lib/business";

export default function Fleet() {
  return (
    <section className="bg-asphalt py-20 text-chalk">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          Our fleet
        </h2>
        <p className="mt-3 max-w-xl text-chalk/70">
          Licensed, insured, and on the road for {business.name}.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-steel/30">
            <Image src="/truck-1.jpg" alt="Tow truck" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-steel/30">
            <Image src="/truck-2.jpg" alt="Tow truck flatbed" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-steel/30">
            <Image src="/truck-3.jpg" alt="Tow truck side view" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
