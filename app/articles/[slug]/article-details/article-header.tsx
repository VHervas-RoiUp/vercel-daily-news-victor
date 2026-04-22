import Image from 'next/image';

import { formatPublishedDateLong } from '@/lib/date-service';
import { Article } from '@/types';
export function ArticleHeader({ article }: { article: Article }) {
  return (
    <div>
      <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium uppercase tracking-wide text-neutral-500">
        <span>{article.category}</span>
        <span className="text-neutral-300">·</span>
        <time
          className="font-normal normal-case text-neutral-500"
          dateTime={article.publishedAt}
        >
          {formatPublishedDateLong(article.publishedAt)}
        </time>
      </div>

      <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl sm:leading-tight">
        {article.title}
      </h1>

      <p className="mt-5 text-lg leading-relaxed text-neutral-600 sm:text-xl sm:leading-relaxed">
        {article.excerpt}
      </p>

      <div className="mt-8 flex flex-col gap-4 border-t border-neutral-200 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-sm font-semibold text-white"
            aria-hidden
          >
            {article.author?.avatar ? (
              <Image
                src={article.author.avatar}
                alt={article.author.name ?? ''}
                width={44}
                height={44}
                className="rounded-full"
              />
            ) : (
              <span className="text-neutral-400">
                {article.author?.name?.substring(0, 2).toUpperCase()}
              </span>
            )}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-black">
              {article.author?.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
