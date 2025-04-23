interface Props { params: { id: string } }
export default function CategoryPage({ params }: Props) {
  return <div>Category: <strong>{params.id}</strong></div>;
}
