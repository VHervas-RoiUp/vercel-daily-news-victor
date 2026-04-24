import { cacheLife, cacheTag } from 'next/cache';

import { apiFetch } from './client';
import type { Category, CategoryListResponse } from 'types';

export async function getCategories(): Promise<Category[] | null> {
  'use cache';
  cacheLife('hours');
  cacheTag('categories');

  try {
    const res = await apiFetch<CategoryListResponse>('/categories');
    return res.data ?? null;
  } catch {
    return null;
  }
}
