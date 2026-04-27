import { cacheLife, cacheTag } from 'next/cache';

import { Subscription, SubscriptionResponse } from '@/types';
import { getSubscriptionToken } from '@/lib/services/subscription-token';
import { apiFetch, apiFetchEx } from './client';

export function isSubscriptionNotFound(e: unknown): boolean {
  if (!(e instanceof Error)) return false;
  if (e.cause === 404) return true;
  return /not found/i.test(e.message);
}

async function getSubscriptionData(
  token: string
): Promise<Subscription | null> {
  'use cache';
  cacheLife('seconds');
  cacheTag('subscription', token);

  try {
    const response = await apiFetch<SubscriptionResponse>('/subscription', {
      method: 'GET',
      headers: {
        'x-subscription-token': token,
      },
    });
    return response.data as Subscription;
  } catch (e) {
    if (isSubscriptionNotFound(e)) {
      return null;
    }
    throw e;
  }
}

export const createSubscription = async (): Promise<
  Subscription & { token: string }
> => {
  const { json, res } = await apiFetchEx<SubscriptionResponse>(
    '/subscription/create',
    { method: 'POST' }
  );
  const headerToken = res.headers.get('x-subscription-token')?.trim();
  const body = json.data as Subscription | undefined;
  const token = headerToken || body?.token;
  if (!token) {
    throw new Error(
      'Subscription was created but no token was returned by the API'
    );
  }
  return { ...(body ?? {}), token };
};

export const activateSubscription = async (token: string) => {
  const response = await apiFetch<SubscriptionResponse>('/subscription', {
    method: 'POST',
    headers: {
      'x-subscription-token': token,
    },
  });
  return response.data as Subscription;
};

export const getSubscription = async () => {
  const token = await getSubscriptionToken();
  if (!token) {
    return null;
  }
  return getSubscriptionData(token);
};
export const deleteSubscription = async (token: string) => {
  const response = await apiFetch<SubscriptionResponse>('/subscription', {
    method: 'DELETE',
    headers: {
      'x-subscription-token': token,
    },
  });
  return response.data as Subscription;
};
