// apps/client/app/page.tsx
export default function HomePage() {
    return (
      <section>
        <h2 className="text-3xl font-semibold mb-6">Top Stories</h2>
        {/* TODO: Render ArticleCard grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <ArticleCard /> */}
        </div>
      </section>
    )
  }
  