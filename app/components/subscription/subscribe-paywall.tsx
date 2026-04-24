import { Check, Lock } from '@geist-ui/icons';

import { subscribeAction } from '@/lib/actions/subscription-actions';
import { getSubscription } from '@/lib/api/subscription';
import SubscribeButton from './subscribe-button';

const benefits = [
  'No credit card',
  'Cancel anytime',
  'Instant access',
] as const;

export default async function SubscribePaywall() {
  const subscription = await getSubscription();

  if (subscription?.status === 'active') {
    return null;
  }

  return (
    <div className="mt-10 rounded-2xl border border-neutral-200 bg-[#fafafa] px-8 py-10 text-center sm:px-10">
      <div
        className="mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black"
        aria-hidden
      >
        <Lock className="!text-white" size={24} aria-hidden />
      </div>
      <p className="mt-4 text-xs font-medium uppercase tracking-wider text-neutral-500">
        Members only
      </p>
      <h2 className="mt-3 text-balance text-2xl font-bold text-neutral-900 sm:text-3xl">
        Read the full article — free forever
      </h2>
      <p className="mx-auto mt-3 max-w-md text-pretty text-sm leading-relaxed text-neutral-600 sm:text-base">
        Join the Vercel Daily to unlock this article and get weekly engineering
        deep dives, changelogs, and customer stories.
      </p>
      <form action={subscribeAction} className="mt-8 flex justify-center">
        <SubscribeButton />
      </form>
      <ul
        className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-neutral-500 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2"
        aria-label="Subscription benefits"
      >
        {benefits.map((label) => (
          <li key={label} className="inline-flex items-center gap-1.5">
            <Check
              className="shrink-0 text-neutral-400"
              size={16}
              aria-hidden
            />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
