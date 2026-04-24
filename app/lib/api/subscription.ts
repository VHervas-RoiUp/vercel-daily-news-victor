import { cacheLife, cacheTag } from 'next/cache';

import { Subscription, SubscriptionResponse } from '@/types';
import { getSubscriptionToken } from '@/lib/services/subscription-token';
import { apiFetch } from './client';

async function getSubscriptionData(token: string) {
  'use cache';
  cacheLife('seconds');
  cacheTag('subscription', token);

  const response = await apiFetch<SubscriptionResponse>('/subscription', {
    method: 'GET',
    headers: {
      'x-subscription-token': token,
    },
  });
  return response.data as Subscription;
}

export const createSubscription = async () => {  const response = await apiFetch<SubscriptionResponse>(
    '/subscription/create',
    {
      method: 'POST',
    }
  );
  return response.data as Subscription;
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
