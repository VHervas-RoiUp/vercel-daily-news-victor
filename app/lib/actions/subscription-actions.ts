'use server';

import { revalidatePath, updateTag } from 'next/cache';
import {
  activateSubscription,
  createSubscription,
  deleteSubscription,
  isSubscriptionNotFound,
} from '../api/subscription';
import {
  clearSubscriptionToken,
  getSubscriptionToken,
  setSubscriptionToken,
} from '../services/subscription-token';

export async function subscribeAction() {
  const existing = await getSubscriptionToken();

  if (existing) {
    try {
      await activateSubscription(existing);
      updateTag('subscription');
      revalidatePath('/');
      return;
    } catch (e) {
      if (!isSubscriptionNotFound(e)) {
        throw e;
      }
      await clearSubscriptionToken();
    }
  }

  const created = await createSubscription();
  await setSubscriptionToken(created.token);
  await activateSubscription(created.token);
  updateTag('subscription');
  revalidatePath('/');
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
