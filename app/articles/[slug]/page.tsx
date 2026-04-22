import { getArticleDetails, getArticleList } from '@/lib/api/articles';
import { notFound } from 'next/navigation';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getArticleList({}).then(
    (res) =>
      res?.map((post) => ({
        slug: post.slug,
      })) ?? []
  );

  return posts;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleDetails(slug);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <h1>Article</h1>
    </div>
  );
}
