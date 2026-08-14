export function DemonstrationBanner({ compact = false }: { compact?: boolean }) {
  return (
    <div
      role="status"
      className={`border-y border-flag/30 bg-flag/10 text-navy ${compact ? "px-3 py-2 text-xs" : "px-4 py-3 text-sm"}`}
    >
      <p className="mx-auto max-w-6xl leading-5">
        <span className="font-semibold">Demonstration data.</span> Station depths, hydrographs, and
        maps on this site are reconstructed from a seeded model so the interface can be used and
        critiqued. They are not live Chicago gauges.
      </p>
    </div>
  );
}
