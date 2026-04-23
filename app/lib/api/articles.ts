import { cacheLife, cacheTag } from 'next/cache';

import { apiFetch } from './client';
import { Article, ArticleResponse, ArticleListResponse } from 'types';

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
  'use cache';
  cacheLife('hours');

  const queryParams = new URLSearchParams();
  if (params.page) queryParams.set('page', params.page.toString());
  if (params.limit) queryParams.set('limit', params.limit.toString());
  if (params.category) queryParams.set('category', params.category);
  if (params.search) queryParams.set('search', params.search);
  if (params.featured) queryParams.set('featured', params.featured.toString());

  const queryString = queryParams.toString();
  cacheTag('article-list', queryString || 'all');

  try {
    const res = await apiFetch<ArticleListResponse>(`/articles?${queryString}`);
    return res.data ?? null;
  } catch (err) {
    if (err instanceof Error && err.cause === 422) return null;
    throw err;
  }
}

export async function getArticleDetails(id: string): Promise<Article | null> {
  'use cache';
  cacheLife('hours');

  try {
    const res = await apiFetch<ArticleResponse>(
      `/articles/${encodeURIComponent(id)}`
    );
    return res.data ?? null;
  } catch (err) {
    if (err instanceof Error && err.cause === 404) return null;
    throw err;
  }
}

export async function getTrendingArticles(): Promise<Article[] | null> {
  try {
    const res = await apiFetch<ArticleListResponse>('/articles/trending');
    return res.data ?? null;
  } catch (err) {
    throw err;
  }
}
