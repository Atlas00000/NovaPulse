// apps/client/components/TopStoriesGrid.tsx
"use client";

import { TopStory, TopStoryCard } from "./TopStoryCard";

export function TopStoriesGrid({ stories }: { stories: TopStory[] }) {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6 dark:text-white">Top Stories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <TopStoryCard key={story.slug} story={story} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-800 transition">
          Load More
        </button>
      </div>
    </section>
  );
}
