// apps/client/app/categories/[id]/page.tsx
interface CategoryPageProps {
    params: { id: string }
  }
  
  export default function CategoryPage({ params }: CategoryPageProps) {
    const { id } = params
  
    return (
      <section>
        <h2 className="text-3xl font-semibold mb-4">
          {id.replace(/-/g, ' ')}
        </h2>
        {/* TODO: Render list of articles in this category */}
        <div className="space-y-4">
          {/* <ArticleCard /> */}
        </div>
      </section>
    )
  }
  