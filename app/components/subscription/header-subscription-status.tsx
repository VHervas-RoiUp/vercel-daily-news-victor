import { getSubscription } from '@/lib/api/subscription';
import { subscribeAction } from '@/lib/actions/subscription-actions';
import { HeaderSubscriptionStatusClient } from './header-subscription-status-client';
import { SubscribeFormPendingBridge } from './subscribe-form-pending-context';
import SubscribeButton from './subscribe-button';

export default async function HeaderSubscriptionStatus() {
  const subscription = await getSubscription();

  if (subscription?.status === 'active') {
    return <HeaderSubscriptionStatusClient />;
  }

  return (
    <form action={subscribeAction}>
      <SubscribeFormPendingBridge />
      <SubscribeButton
        label="Subscribe now"
        className="h-9 min-h-9 whitespace-nowrap px-4 text-xs sm:h-7.5 sm:min-h-7.5 sm:px-5 sm:text-sm sm:whitespace-normal"
      />
    </form>
  );
}
