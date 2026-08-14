const PRINCIPLES = [
  {
    title: "Stay useful in this climate",
    body: "A Chicago network has to survive freeze-thaw, lake-effect cells, and a combined sewer that was sized for a different century. Hardware and software should still matter in twenty years.",
  },
  {
    title: "Solve the flood people actually get",
    body: "Basement backups, viaduct closures, and lakefront overtopping are the problems. If a tool cannot speak to those, it is a research toy.",
  },
  {
    title: "Site with the people who live there",
    body: "High-impact blocks on the West Side, South Side, and Calumet corridor decide where a node belongs. A downtown average is not a siting plan.",
  },
  {
    title: "Make the output usable on a phone",
    body: "Depths, maps, and downloads should be readable without a hydrology degree. If a block club cannot use it, it is not public yet.",
  },
  {
    title: "Show the method, not just the map",
    body: "Sensor geometry, quality flags, and the difference between a live gauge and a demonstration reconstruction should be in the open.",
  },
  {
    title: "Name the inequality",
    body: "Flood damage in Chicago tracks housing, race, and whose basement has historically been treated as acceptable collateral. The network should not pretend otherwise.",
  },
];

export function PrinciplesGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {PRINCIPLES.map((item) => (
        <article key={item.title} className="border border-navy/10 bg-white p-6">
          <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
