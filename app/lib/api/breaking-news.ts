import type { BreakingNews, BreakingNewsResponse } from 'types';

import { apiFetch } from './client';

export async function getBreakingNews(): Promise<BreakingNews | null> {
  // By definition, this return a random breaking news item on each request, so we are actively not caching this, to simulate a real-time experience. If we wanted, we maybe could add cache life for minutes.
  try {
    const res = await apiFetch<BreakingNewsResponse>('/breaking-news');
    return res.data ?? null;
  } catch (err) {
    throw err;
  }
}
