import { business } from "@/lib/business";

export default function StickyCall() {
  return (
    <a
      href={business.phoneHref}
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2 bg-signal py-4 font-display text-base font-bold uppercase tracking-wide text-chalk sm:hidden"
    >
      Call Now for Towing — {business.phone}
    </a>
  );
}
