import { apiFetch } from './client';
import { ArticleListResponse } from 'types';
import type { Article } from 'types';

export type GetFeaturedArticlesParams = {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  featured: boolean;
};

export async function getFeaturedArticles(
  params: GetFeaturedArticlesParams
): Promise<Article[] | null> {
  const queryParams = new URLSearchParams();
  if (params.page) queryParams.set('page', params.page.toString());
  if (params.limit) queryParams.set('limit', params.limit.toString());
  if (params.category) queryParams.set('category', params.category);
  if (params.search) queryParams.set('search', params.search);
  if (params.featured) queryParams.set('featured', params.featured.toString());

  return apiFetch<ArticleListResponse>(`/articles?${queryParams.toString()}`)
    .then((res) => res.data ?? null)
    .catch((err) => {
      console.error(err);
      return null;
    });
}
