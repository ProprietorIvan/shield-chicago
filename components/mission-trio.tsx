const ITEMS = [
  {
    title: "Build tools that fit this city",
    body: "Ultrasonic nodes on signposts, viaducts, and underpasses — places Chicago actually floods — instead of waiting for a river to jump its banks.",
  },
  {
    title: "Measure the last hundred feet",
    body: "Track ponding, basement-risk surcharge, and lakefront overtopping as they unfold, neighborhood by neighborhood, not as a single citywide average.",
  },
  {
    title: "Put the readings in public",
    body: "Residents, block clubs, agencies, and researchers should be able to see the same depths, download the same tables, and argue from the same clock.",
  },
];

export function MissionTrio() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-flag uppercase">What this project is for</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-navy">Three jobs, one network</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ITEMS.map((item, index) => (
            <article key={item.title} className="border border-navy/10 bg-white p-6">
              <p className="font-display text-sm text-sky">0{index + 1}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
