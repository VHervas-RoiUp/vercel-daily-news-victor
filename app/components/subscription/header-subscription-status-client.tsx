'use client';

import { useTransition } from 'react';
import { ButtonDropdown, Loading } from '@geist-ui/core';
import { Check } from '@geist-ui/icons';

import { unsubscribeAction } from '@/lib/actions/subscription-actions';

export function HeaderSubscriptionStatusClient() {
  const [isPending, startTransition] = useTransition();

  return (
    <ButtonDropdown auto type="default" className="shrink-0" scale={0.5}>
      <ButtonDropdown.Item
        main
        className="!gap-2 !bg-[#F2F2F2] !px-2.5 !font-bold !text-neutral-900 hover:!bg-[#EBEBEB]"
      >
        <span className="inline-flex items-center gap-2">
          <Check className="shrink-0 !text-green-500" size={16} aria-hidden />
          Subscribed
        </span>
      </ButtonDropdown.Item>
      <ButtonDropdown.Item
        className="!border-0 !bg-white !px-4 !py-3 !text-left !text-sm !font-medium !text-[#D32F2F] hover:!bg-neutral-50 disabled:!cursor-not-allowed disabled:!border-0 disabled:!bg-neutral-100 disabled:!text-neutral-500 disabled:hover:!bg-neutral-100 disabled:hover:!text-neutral-500"
        disabled={isPending}
        onClick={() => {
          if (isPending) return;
          startTransition(() => {
            void unsubscribeAction();
          });
        }}
      >
        {isPending ? <Loading type="error" /> : 'Unsubscribe'}
      </ButtonDropdown.Item>
    </ButtonDropdown>
  );
}
