import { cookies } from 'next/headers';

export const SUBSCRIPTION_TOKEN_COOKIE_NAME = 'subscription-token';

export const getSubscriptionToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get(SUBSCRIPTION_TOKEN_COOKIE_NAME)?.value;
};

export const setSubscriptionToken = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.set(SUBSCRIPTION_TOKEN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
  });
};

export const clearSubscriptionToken = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(SUBSCRIPTION_TOKEN_COOKIE_NAME);
};
