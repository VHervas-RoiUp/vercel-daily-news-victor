import { Suspense } from 'react';

import { BreakingNews } from '@/components/home/breaking-news';

export default function Home() {
  return (
    // TODO: maybe add skeleton?
    <Suspense fallback={<div className="h-14 w-full"></div>}>
      <BreakingNews />
    </Suspense>
  );
}
