import { getSubscription } from '@/lib/api/subscription';
import { HeaderSubscriptionStatusClient } from './header-subscription-status-client';

export default async function HeaderSubscriptionStatus() {
  const subscription = await getSubscription();

  if (subscription?.status === 'active') {
    return <HeaderSubscriptionStatusClient />;
  }

  return null;
}
