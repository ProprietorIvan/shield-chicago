export function StatsBand({
  stations,
  neighborhoods,
  events,
}: {
  stations: number;
  neighborhoods: number;
  events: number;
}) {
  const items = [
    { value: String(stations), label: "Demonstration stations" },
    { value: String(neighborhoods), label: "Community areas" },
    { value: String(events), label: "Reconstructed flood events" },
    { value: "1 min", label: "Intended sample interval" },
  ];

  return (
    <section className="bg-navy-mid text-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label}>
            <p className="font-display text-3xl font-semibold text-sky">{item.value}</p>
            <p className="mt-1 text-sm text-sky-soft">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
