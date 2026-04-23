'use server';

import { revalidatePath } from 'next/cache';
import { activateSubscription, createSubscription } from '../api/subscription';
import { setSubscriptionToken } from '../services/subscription-token';

export async function subscribeAction() {
  const data = await createSubscription();

  if (data.token) {
    await setSubscriptionToken(data.token);
    await activateSubscription();
    revalidatePath('/');
  }
}
