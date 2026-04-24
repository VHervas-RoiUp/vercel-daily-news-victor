'use client';

import { useFormStatus } from 'react-dom';
import { Loading } from '@geist-ui/core';

import { Button } from '../ui/button';

export default function SubscribeButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="primary"
      disabled={pending}
      className="min-h-11 gap-1.5 rounded-lg px-6"
    >
      {pending ? (
        <Loading className="!min-w-[5.5rem]" />
      ) : (
        <>
          <span>Subscribe free</span>
          <span aria-hidden>→</span>
        </>
      )}
    </Button>
  );
}
