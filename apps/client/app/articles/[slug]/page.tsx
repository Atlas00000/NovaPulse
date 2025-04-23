// apps/client/app/articles/[slug]/page.tsx
interface ArticlePageProps {
  params: { slug: string }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = params

  return (
    <article className="prose dark:prose-invert mx-auto">
      <h1 className="text-4xl font-bold mb-4">{slug.replace(/-/g, ' ')}</h1>
      <p className="text-gray-600 mb-6">Published on {/* TODO: date */}</p>
      {/* TODO: Fetch and display article content */}
    </article>
  )
}
