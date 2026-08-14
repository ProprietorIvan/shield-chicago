import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-flag uppercase">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-navy">That block is not on the map</h1>
      <p className="mt-4 text-sm text-muted">The page you asked for is not part of Shield Chicago.</p>
      <Link href="/" className="mt-8 inline-block rounded-sm bg-navy px-4 py-2 text-sm font-semibold text-paper">
        Back to the front
      </Link>
    </section>
  );
}
