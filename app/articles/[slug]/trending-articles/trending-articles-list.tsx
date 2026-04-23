import { getTrendingArticles } from '@/lib/api/articles';

import { TrendingArticleItem } from './trending-article-item';
import type { Article } from '@/types';

type TrendingArticlesListProps = {
  exclude?: string[];
};

function filterExcluded(articles: Article[], exclude?: string[]) {
  if (!exclude?.length) return articles;
  return articles.filter((a) => a.slug && !exclude.includes(a.slug));
}

export async function TrendingArticlesList({
  exclude,
}: TrendingArticlesListProps) {
  let trendingArticles: Article[] | null = null;
  try {
    trendingArticles = await getTrendingArticles();
  } catch {
    return null;
  }
  if (!trendingArticles?.length) return null;

  const items = filterExcluded(trendingArticles, exclude);
  if (!items.length) return null;

  return (
    <ul className="mt-8 list-none">
      {items.map((article) => (
        <TrendingArticleItem
          key={article.id ?? article.slug}
          article={article}
        />
      ))}
    </ul>
  );
}
