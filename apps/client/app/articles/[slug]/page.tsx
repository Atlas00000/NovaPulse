interface Props { params: { slug: string } }
export default function ArticlePage({ params }: Props) {
  return <div>Loading article: <strong>{params.slug}</strong></div>;
}
