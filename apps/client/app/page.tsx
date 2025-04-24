// apps/client/app/page.tsx

"use client";

import { HeroSpotlight } from "../components/HeroSpotlight";
import { CategoryNav } from "../components/CategoryNav";
import { TopStoriesGrid } from "../components/TopStoriesGrid";
import type { TopStory } from "../components/TopStoryCard";

export default function HomePage() {
  // Phase 2.4 data for Top Stories Grid
  const topStories: TopStory[] = [
    {
      title: "NovaPulse Unveils AI-Driven Dashboard",
      slug: "ai-driven-dashboard",
      category: "Tech",
      date: "Apr 24, 2025",
      readTime: "5 min",
      image: "/images/story1.jpg",
    },
    {
      title: "Global Markets React to New Regulations",
      slug: "markets-react-regulations",
      category: "Business",
      date: "Apr 23, 2025",
      readTime: "4 min",
      image: "/images/story2.jpg",
    },
    {
      title: "Breakthrough in Quantum Computing",
      slug: "quantum-computing-breakthrough",
      category: "Science",
      date: "Apr 22, 2025",
      readTime: "6 min",
      image: "/images/story3.jpg",
    },
  ];

  const categories = [
    "tech",
    "business",
    "science",
    "politics",
    "culture",
    "sports",
    "future",
  ];

  const recommended = [
    { title: "AI Ethics: What's Next?", slug: "ai-ethics-whats-next" },
    { title: "5G Rollout and Its Impact", slug: "5g-rollout-impact" },
    { title: "The Rise of Remote Work", slug: "rise-of-remote-work" },
  ];

  return (
    <div className="space-y-16">
      {/* Phase 2.3 Hero Spotlight */}
      <HeroSpotlight />

      {/* Phase 2.5: Category Quick-Links */}
      <section>
        <div className="container mx-auto px-4">
          <CategoryNav categories={categories} />
        </div>
      </section>

      {/* Phase 2.4: Top Stories Grid */}
      <section>
        <div className="container mx-auto px-4">
          <TopStoriesGrid stories={topStories} />
        </div>
      </section>

      {/* Recommended for You Carousel (unchanged) */}
      <section>...</section>

      {/* Newsletter & Alerts CTA (unchanged) */}
      <section>...</section>
    </div>
  );
}
