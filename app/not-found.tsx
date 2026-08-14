import Link from "next/link";

export default function Missing() {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl">That page is dry</h1>
      <p className="mt-3 text-sm text-quiet">Nothing here. Back to the front.</p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-void px-5 py-3 text-sm font-semibold text-bone">
        Shield Chicago home
      </Link>
    </section>
  );
}
