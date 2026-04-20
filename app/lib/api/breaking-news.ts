import type { BreakingNewsResponse } from 'types';

import { apiFetch } from './client';

export async function getBreakingNews() {
  return apiFetch<BreakingNewsResponse>('/breaking-news', {
    cache: 'no-store',
  })
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      return null;
    });
}
