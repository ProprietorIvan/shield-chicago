export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="bg-navy text-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] text-sky uppercase">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-sky-soft md:text-lg">{lede}</p>
      </div>
    </section>
  );
}
