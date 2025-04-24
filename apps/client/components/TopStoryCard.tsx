// apps/client/components/TopStoryCard.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export interface TopStory {
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export function TopStoryCard({ story }: { story: TopStory }) {
  return (
    <article className="border dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-transform duration-200">
      <div className="relative h-48">
        <Image src={story.image} alt={story.title} fill className="object-cover" />
      </div>
      <div className="p-4 dark:bg-gray-800">
        <span className="inline-block bg-blue-500 dark:bg-blue-600 text-white text-xs px-2 py-1 rounded">
          {story.category}
        </span>
        <h3 className="mt-2 text-xl font-bold dark:text-white">
          <Link href={`/articles/${story.slug}`}>{story.title}</Link>
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {story.date} • {story.readTime}
        </p>
      </div>
    </article>
  );
}
