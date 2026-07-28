export default function Beacon({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-vest">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-beacon rounded-full bg-vest" />
      </span>
      {label}
    </div>
  );
}
