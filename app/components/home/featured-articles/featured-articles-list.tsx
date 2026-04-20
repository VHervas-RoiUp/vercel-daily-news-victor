import { FeaturedArticleCard } from './featured-article-card';
import { getFeaturedArticles } from '@/lib/api/featured-articles';

export async function FeaturedArticlesList() {
  const featuredArticles = await getFeaturedArticles({
    featured: true,
    limit: 6,
  });

  console.log(featuredArticles);

  if (!featuredArticles) return null;

  return (
    <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1">
      {featuredArticles.map((article) => (
        <FeaturedArticleCard
          key={article.id}
          article={{
            href: `/articles/${article.slug}`,
            imageSrc: article.image ?? '',
            imageAlt: article.title ?? '',
            category: article.category ?? '',
            date: article.publishedAt ?? '',
            title: article.title ?? '',
            excerpt: article.excerpt ?? '',
          }}
        />
      ))}
    </div>
  );
}
