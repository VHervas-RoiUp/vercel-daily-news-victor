'use client';

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import { useFormStatus } from 'react-dom';

type SubscribeFormPendingStore = {
  anyFormPending: boolean;
  addPending: () => void;
  removePending: () => void;
};

const SubscribeFormPendingContext =
  createContext<SubscribeFormPendingStore | null>(null);

export function SubscribeFormPendingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pendingCount, setPendingCount] = useState(0);

  const addPending = useCallback(() => {
    setPendingCount((c) => c + 1);
  }, []);

  const removePending = useCallback(() => {
    setPendingCount((c) => Math.max(0, c - 1));
  }, []);

  const value = useMemo(
    () => ({
      anyFormPending: pendingCount > 0,
      addPending,
      removePending,
    }),
    [addPending, pendingCount, removePending]
  );

  return (
    <SubscribeFormPendingContext.Provider value={value}>
      {children}
    </SubscribeFormPendingContext.Provider>
  );
}

export function SubscribeFormPendingBridge() {
  const store = useContext(SubscribeFormPendingContext);
  const { pending } = useFormStatus();
  const addPending = store?.addPending;
  const removePending = store?.removePending;

  useLayoutEffect(() => {
    if (!addPending || !removePending) {
      return;
    }
    if (pending) {
      addPending();
      return () => {
        removePending();
      };
    }
  }, [addPending, pending, removePending]);

  return null;
}

export function useSubscribeFormGlobalPending() {
  const store = useContext(SubscribeFormPendingContext);
  return store?.anyFormPending ?? false;
}
