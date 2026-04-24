'use server';

import { revalidatePath, updateTag } from 'next/cache';
import {
  activateSubscription,
  createSubscription,
  deleteSubscription,
} from '../api/subscription';
import {
  getSubscriptionToken,
  setSubscriptionToken,
} from '../services/subscription-token';

export async function subscribeAction() {
  const token = await getSubscriptionToken();

  if (token) {
    await activateSubscription(token);
    revalidatePath('/');
    return;
  }

  const data = await createSubscription();
  if (data.token) {
    await setSubscriptionToken(data.token);
    await activateSubscription(data.token);
    updateTag('subscription');
    revalidatePath('/');
  }
}

export async function unsubscribeAction() {
  const token = await getSubscriptionToken();
  if (!token) {
    return;
  }
  await deleteSubscription(token);
  /* We could clear the subscription token to empty the cookie, but we
   don't want to do that because we want to keep the cookie for the next time the user subscribes
   await clearSubscriptionToken();
   */
  revalidatePath('/');
}
