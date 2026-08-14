import { QUESTIONS } from "@/lib/questions";
import { ArrowRight } from "lucide-react";

export function HomeFaq({
  title = "Frequently asked questions",
  subtitle = "Shield water damage restoration — serving Chicago from the Loop to the neighborhoods.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const items = QUESTIONS.slice(0, 6);

  return (
    <section className="section home-faq" id="faq">
      <div className="home-faq-grid">
        <div className="home-faq-intro" data-reveal>
          <p className="eyebrow">FAQ</p>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="home-faq-list" data-reveal>
          {items.map((faq) => (
            <details className="home-faq-item group" key={faq.q}>
              <summary>
                <span>{faq.q}</span>
                <ArrowRight className="home-faq-chevron" aria-hidden="true" />
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
