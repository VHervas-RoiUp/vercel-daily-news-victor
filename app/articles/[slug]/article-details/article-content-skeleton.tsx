export function ArticleContentSkeleton() {
  return (
    <article className="min-w-0">
      <div className="prose prose-neutral mt-10 max-w-none">
        {/* Skeleton for paragraph */}
        <div className="mb-3 h-5 w-full animate-pulse rounded bg-neutral-200" />
        <div className="mb-3 h-5 w-11/12 animate-pulse rounded bg-neutral-200" />
        <div className="mb-3 h-5 w-5/6 animate-pulse rounded bg-neutral-200" />
        {/* Skeleton for paywall (button, etc.) */}
        <div className="mt-10 h-10 w-full max-w-md animate-pulse rounded-2xl bg-neutral-100" />
      </div>
    </article>
  );
}
