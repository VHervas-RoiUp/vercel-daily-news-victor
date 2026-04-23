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

export const activateSubscription = async () => {
  const token = await getSubscriptionToken();
  if (!token) {
    return null;
  }
  const response = await apiFetch<SubscriptionResponse>('/subscription', {
    method: 'POST',
    headers: {
      'x-subscription-token': token,
    },
  });
  console.log('activateSubscription', response.data);
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
