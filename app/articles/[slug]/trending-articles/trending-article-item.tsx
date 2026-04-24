import Link from 'next/link';

import { formatPublishedDateShort } from '@/lib/services/date';
import type { Article } from '@/types';

export function TrendingArticleItem({ article }: { article: Article }) {
  const href = `/articles/${article.slug}`;
  const dateLabel = formatPublishedDateShort(article.publishedAt);

  return (
    <li className="border-b border-neutral-200 py-6 last:border-b-0 last:pb-0">
      <article>
        <Link href={href} className="group block">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            <span>{article?.category ?? ''}</span>
            {dateLabel ? (
              <>
                <span className="mx-1.5 font-normal normal-case text-neutral-400">
                  ·
                </span>
                <time
                  className="font-normal normal-case"
                  dateTime={article.publishedAt}
                >
                  {dateLabel}
                </time>
              </>
            ) : null}
          </p>
          <h3 className="mt-2 text-base font-semibold leading-snug text-black underline-offset-4 group-hover:underline">
            {article.title}
          </h3>
          {article.excerpt ? (
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-600">
              {article.excerpt}
            </p>
          ) : null}
        </Link>
      </article>
    </li>
  );
}
