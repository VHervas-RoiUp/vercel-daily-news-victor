import { Subscription, SubscriptionResponse } from '@/types';
import { apiFetch } from './client';
import { getSubscriptionToken } from '@/lib/services/subscription-token';

export const createSubscription = async () => {
  const response = await apiFetch<SubscriptionResponse>(
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
  const response = await apiFetch<SubscriptionResponse>('/subscription', {
    method: 'GET',
    headers: {
      'x-subscription-token': token,
    },
  });
  console.log(response.data);
  return response.data as Subscription;
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
