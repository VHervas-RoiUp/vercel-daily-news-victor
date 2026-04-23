import { subscribeAction } from '@/lib/actions/subscribe';
import SubscribeButton from './subscribe-button';
import { getSubscription } from '@/lib/api/subscription';

export default async function SubscribeSection() {
  const subscription = await getSubscription();

  if (subscription?.status === 'active') {
    return null;
  }

  return (
    <form action={subscribeAction}>
      <SubscribeButton />
    </form>
  );
}
