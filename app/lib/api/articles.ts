import { apiFetch } from './client';
import { Article, ArticleResponse, ArticleListResponse } from 'types';

const CACHE_TIME = 5;

export type GetArticleListParams = {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  featured?: boolean;
};

export async function getArticleList(
  params: GetArticleListParams
): Promise<Article[] | null> {
  const queryParams = new URLSearchParams();
  if (params.page) queryParams.set('page', params.page.toString());
  if (params.limit) queryParams.set('limit', params.limit.toString());
  if (params.category) queryParams.set('category', params.category);
  if (params.search) queryParams.set('search', params.search);
  if (params.featured) queryParams.set('featured', params.featured.toString());

  try {
    const res = await apiFetch<ArticleListResponse>(
      `/articles?${queryParams.toString()}`,
      {
        next: { revalidate: CACHE_TIME },
      }
    );
    return res.data ?? null;
  } catch (err) {
    if (err instanceof Error && err.cause === 422) return null;
    throw err;
  }
}

export async function getArticleDetails(id: string): Promise<Article | null> {
  try {
    const res = await apiFetch<ArticleResponse>(
      `/articles/${encodeURIComponent(id)}`,
      {
        next: { revalidate: CACHE_TIME },
      }
    );
    return res.data ?? null;
  } catch (err) {
    if (err instanceof Error && err.cause === 404) return null;
    throw err;
  }
}
