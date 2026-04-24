import type { Metadata } from 'next';
import { getArticleDetails, getArticleList } from '@/lib/api/articles';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import {
  ArticleBackButton,
  ArticleContent,
  FeaturedImage,
  ArticleHeader,
} from './article-details';
import { TrendingArticles } from './trending-articles';
import { ArticleContentSkeleton } from './article-details/article-content-skeleton';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  try {
    const res = await getArticleList({});
    const posts =
      res?.map((post) => ({
        slug: post.slug,
      })) ?? [];
    return posts;
  } catch (err) {
    throw err;
  }
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleDetails(slug);
  if (!article) {
    notFound();
  }

  const title = article.title ?? 'Article';
  const description = article.excerpt ?? undefined;
  const path = `/articles/${encodeURIComponent(slug)}`;
  const image = article.image;
  const authorName = article.author?.name;

  return {
    title,
    description,
    openGraph: {
      type: 'article',
      url: path,
      publishedTime: article.publishedAt,
      authors: authorName ? [authorName] : undefined,
      images: image
        ? [
            {
              url: image,
              alt: title,
            },
          ]
        : undefined,
    },
    twitter: image ? { images: [image] } : undefined,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleDetails(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="general-container general-padding-x py-10 lg:py-14">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="flex flex-col gap-4">
          <ArticleBackButton />
          <ArticleHeader article={article} />
          <FeaturedImage article={article} />
          <Suspense fallback={<ArticleContentSkeleton />}>
            <ArticleContent article={article} />
          </Suspense>
        </div>
        <aside className="min-w-0 space-y-10 lg:sticky lg:top-24 lg:self-start">
          <TrendingArticles exclude={[slug]} />
        </aside>
      </div>
    </div>
  );
}
