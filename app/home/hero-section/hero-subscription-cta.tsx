import { getSubscription } from '@/lib/api/subscription';
import { subscribeAction } from '@/lib/actions/subscription-actions';
import { SubscribeFormPendingBridge } from '@/components/subscription/subscribe-form-pending-context';
import SubscribeButton from '@/components/subscription/subscribe-button';

export default async function HeroSubscriptionCta() {
  const subscription = await getSubscription();

  if (subscription?.status === 'active') {
    return null;
  }

  return (
    <form
      action={subscribeAction}
      className="min-h-10.5 h-10.5 max-w-28 -mt-0.25"
    >
      <SubscribeFormPendingBridge />
      <SubscribeButton
        label="Subscribe"
        className="min-h-10.5 h-10.5 max-w-28"
        variant="default"
      />
    </form>
  );
}
