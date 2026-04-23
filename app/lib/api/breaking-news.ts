import type { BreakingNews, BreakingNewsResponse } from 'types';

import { apiFetch } from './client';

export async function getBreakingNews(): Promise<BreakingNews | null> {
  try {
    const res = await apiFetch<BreakingNewsResponse>('/breaking-news');
    return res.data ?? null;
  } catch (err) {
    throw err;
  }
}
