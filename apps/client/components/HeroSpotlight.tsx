// apps/client/components/HeroSpotlight.tsx

import Link from 'next/link';

export function HeroSpotlight() {
  return (
    <section
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 text-white max-w-3xl">
        {/* Accent badge */}
        <span className="inline-block bg-blue-600 px-3 py-1 text-sm uppercase font-semibold mb-4">
          Breaking
        </span>
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          NovaPulse Launches AI‐Driven Insights
        </h1>
        {/* Subheadline */}
        <p className="text-lg md:text-2xl mb-6">
          Real‐time data and expert analysis at your fingertips.
        </p>
        {/* Read More button */}
        <Link
          href="/articles/ai-driven-dashboard"
          className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md hover:opacity-90 transition"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
