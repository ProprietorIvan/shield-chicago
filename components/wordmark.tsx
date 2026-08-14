export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  const color = inverted ? "text-bone" : "text-void";
  return (
    <span className={`flex items-baseline gap-2 ${color}`}>
      <span className="font-display text-xl tracking-tight italic">Shield</span>
      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-copper">
        Chicago
      </span>
    </span>
  );
}
