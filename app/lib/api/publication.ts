import { cacheLife, cacheTag } from 'next/cache';

import { apiFetch } from './client';
import type { PublicationConfig, PublicationConfigResponse } from 'types';

export async function getPublicationConfig(): Promise<PublicationConfig | null> {
  'use cache';
  cacheLife('hours');
  cacheTag('publication-config');

  try {
    const res = await apiFetch<PublicationConfigResponse>('/publication/config');
    return res.data ?? null;
  } catch {
    return null;
  }
}
