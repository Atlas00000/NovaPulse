// apps/client/app/page.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../components/theme/ThemeProvider";
import { HeroSpotlight } from "../components/HeroSpotlight";

export default function HomePage() {
  const { theme } = useTheme();
  
  const topStories = [
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
    { title: "AI Ethics: What’s Next?", slug: "ai-ethics-whats-next" },
    { title: "5G Rollout and Its Impact", slug: "5g-rollout-impact" },
    { title: "The Rise of Remote Work", slug: "rise-of-remote-work" },
  ];

  return (
    <div className="space-y-16">
      {/* Phase 2.3 Hero Spotlight (Image component version) */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero.jpg"
            alt="Hero image"
            fill
            priority
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center text-white px-4">
          <span className="inline-block bg-blue-600 dark:bg-blue-700 px-3 py-1 text-sm uppercase font-semibold mb-4">
            Breaking
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            NovaPulse Launches AI-Driven Insights
          </h1>
          <p className="text-lg md:text-2xl mb-4 max-w-2xl">
            Real-time data and expert analysis at your fingertips.
          </p>
          <Link
            href="/articles/ai-driven-dashboard"
            className="inline-block bg-blue-600 dark:bg-blue-700 text-white px-5 py-3 rounded-md hover:opacity-90 transition"
          >
            Read More
          </Link>
        </div>
      </section>

      {/* Category Quick-Links */}
      <section>
        <div className="container mx-auto px-4">
          <div className="flex space-x-4 overflow-x-auto py-2">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/categories/${cat}`}
                className="whitespace-nowrap px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Stories Grid */}
      <section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">Top Stories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topStories.map((story) => (
              <article
                key={story.slug}
                className="border dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative h-48">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 dark:bg-gray-800">
                  <span className="inline-block bg-blue-500 dark:bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {story.category}
                  </span>
                  <h3 className="mt-2 text-xl font-bold dark:text-white">
                    <Link href={`/articles/${story.slug}`}>
                      {story.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {story.date} • {story.readTime}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended for You Carousel */}
      <section>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">
            Recommended for You
          </h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {recommended.map((item) => (
              <Link
                key={item.slug}
                href={`/articles/${item.slug}`}
                className="min-w-[200px] border dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-800 hover:shadow transition"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter & Alerts CTA */}
      <section>
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 dark:bg-blue-800 text-white rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
            <h3 className="text-xl font-semibold mb-4 md:mb-0">
              Stay ahead of the curve—get AI-curated news daily.
            </h3>
            <div className="space-x-4">
              <Link
                href="/subscribe"
                className="bg-white text-blue-600 dark:bg-gray-800 dark:text-white px-4 py-2 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                Subscribe
              </Link>
              <Link
                href="/alerts"
                className="border border-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 dark:hover:bg-blue-900 transition"
              >
                Set Alerts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
);
}
