// apps/client/app/categories/page.tsx

import Link from 'next/link';

const categories = [
  'tech',
  'business',
  'science',
  'politics',
  'culture',
  'sports',
  'future',
] as const;

export default function CategoriesIndex() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Browse by Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/categories/${cat}`}
            className="block p-6 border rounded hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold capitalize">{cat}</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              View the latest in {cat}.
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
