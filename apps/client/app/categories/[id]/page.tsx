// apps/client/app/categories/[id]/page.tsx

interface Props {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params }: Props) {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold capitalize">
        Category: <strong>{params.id}</strong>
      </h1>
    </div>
  );
}
