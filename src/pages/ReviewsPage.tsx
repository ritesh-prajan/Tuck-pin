import React from 'react';
import { reviews } from '../data';
import { SectionTitle, ReviewCard } from '../components/UI';
import InstagramFeed from '../components/InstagramFeed';

export default function ReviewsPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 space-y-12 animate-fadeIn text-left">
      <SectionTitle
        title="What Our Customers Say"
        subtitle="Verified feedback from brides, working women, and school directors in Chennai."
      />

      {/* Testimonials Grid stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
        {reviews.map((review) => (
          <div key={review.id} className="flex h-full">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>

      {/* VIDEO REVIEWS SECTION -> REPLACED WITH INTERACTIVE INSTAGRAM FIELD */}
      <section className="pt-4 border-t border-brand-blush/20">
        <div className="text-center mb-6">
          <h3 className="font-serif text-lg font-bold text-brand-plum mb-1">
            Instagram Diaries & Client Reviews
          </h3>
          <p className="text-[11px] text-neutral-mid font-sans">
            Browse real-life client stories, drapery transitions, and bride diaries straight from our Instagram.
          </p>
        </div>

        {/* Interactive Simulated Instagram Feed Embed */}
        <InstagramFeed />
      </section>
    </div>
  );
}
