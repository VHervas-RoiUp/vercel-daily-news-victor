'use client';

import { useFormStatus } from 'react-dom';
import { twMerge } from 'tailwind-merge';
import { Loading } from '@geist-ui/core';

import { Button } from '../ui/button';
import { useSubscribeFormGlobalPending } from './subscribe-form-pending-context';

type SubscribeButtonProps = {
  label?: string | React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary';
};

export default function SubscribeButton(props: SubscribeButtonProps) {
  const { pending } = useFormStatus();
  const anySubscribeFormPending = useSubscribeFormGlobalPending();
  const disabled = pending || anySubscribeFormPending;

  return (
    <Button
      type="submit"
      variant={props.variant ?? 'primary'}
      disabled={disabled}
      className={twMerge('min-h-11 gap-1.5 rounded-lg px-6', props.className)}
    >
      {pending ? (
        <Loading className="!min-w-[5.5rem]" />
      ) : typeof props.label === 'string' ? (
        <span>{props.label}</span>
      ) : (
        props.label
      )}
    </Button>
  );
}
