// apps/client/components/CategoryNav.tsx
"use client";

import Link from "next/link";

export function CategoryNav({ categories }: { categories: string[] }) {
  return (
    <nav className="overflow-x-auto py-2">
      <ul className="flex space-x-4 px-4">
        {categories.map((cat) => (
          <li key={cat}>
            <Link
              href={`/categories/${cat}`}
              className="whitespace-nowrap px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
