const BEATS = [
  {
    year: "2024",
    title: "Neighborhood flood conversations",
    body: "West Side and South Side residents mapped where water actually sits — viaducts, park lawns, and basement stairwells — instead of relying on river-stage headlines.",
  },
  {
    year: "2025",
    title: "First prototype nodes",
    body: "Ultrasonic rangefinders went up on signposts in Albany Park, Austin, and Hegewisch to test power, mounting, and whether a one-minute sample could survive a Chicago winter.",
  },
  {
    year: "2026",
    title: "Demonstration network of 64 stations",
    body: "This site publishes a 32-community-area sketch with reconstructed hydrographs so the public interface can be used before a live feed exists.",
  },
];

export function OriginsTimeline() {
  return (
    <ol className="space-y-6">
      {BEATS.map((beat) => (
        <li key={beat.year} className="grid gap-2 border-l-2 border-sky pl-5 md:grid-cols-[80px_1fr]">
          <p className="font-display text-lg font-semibold text-navy">{beat.year}</p>
          <div>
            <h3 className="font-display text-xl font-semibold text-navy">{beat.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{beat.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
