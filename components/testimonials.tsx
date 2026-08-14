"use client";

import { REVIEWS } from "@/lib/reviews";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [reviewsPerView, setReviewsPerView] = useState(1);

  const maxIndex = Math.max(0, REVIEWS.length - reviewsPerView);
  const pageCount = maxIndex + 1;
  const slideIndex = Math.min(currentIndex, maxIndex);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setReviewsPerView(3);
      else if (window.innerWidth >= 768) setReviewsPerView(2);
      else setReviewsPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    setIsAutoPlaying(false);
  }, [maxIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, handleNext]);

  return (
    <section className="section home-testimonials" id="reviews">
      <div className="section-heading home-center-heading" data-reveal>
        <p className="eyebrow">Customer stories</p>
        <h2>What our clients say</h2>
        <div className="home-testimonials-rating">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
          <span>4.9</span>
        </div>
      </div>

      <div className="home-testimonials-carousel">
        <button
          type="button"
          onClick={handlePrev}
          className="home-testimonials-nav is-prev"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="home-testimonials-track-wrap">
          <div
            className="home-testimonials-track"
            style={{ transform: `translateX(-${slideIndex * (100 / reviewsPerView)}%)` }}
          >
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="home-testimonial-slide"
                style={{ width: `${100 / reviewsPerView}%` }}
              >
                <article className="home-testimonial-card">
                  <div className="home-testimonial-stars" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote>
                    <p>&ldquo;{review.text}&rdquo;</p>
                  </blockquote>
                  <div className="home-testimonial-author">
                    <div className="home-testimonial-avatar" aria-hidden="true">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="home-testimonial-name">{review.name}</p>
                      <p className="home-testimonial-role">{review.role}</p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="home-testimonials-nav is-next"
          aria-label="Next review"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="home-testimonials-dots" aria-label="Review pages">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={index === slideIndex ? "is-active" : undefined}
              aria-label={`Go to review page ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="home-testimonials-cta">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Shield+Water+Damage+Restoration+Chicago"
          target="_blank"
          rel="noopener noreferrer"
          className="button button-outline"
        >
          See our Google Business listing
        </a>
      </div>
    </section>
  );
}
