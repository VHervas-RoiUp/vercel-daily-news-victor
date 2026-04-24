import { ArrowRight } from '@geist-ui/icons';
import Link from 'next/link';
import Image from 'next/image';

import { formatPublishedDateShort } from '@/lib/services/date';
import type { Article } from 'types';

const CATEGORY_BADGE: Record<string, string> = {
  engineering: 'bg-[#eff6ff] text-[#1d4ed8]',
  changelog: 'bg-[#faf5ff] text-[#7c3aed]',
  'company news': 'bg-[#fff7ed] text-[#c2410c]',
  'customer story': 'bg-[#f0fdf4] text-[#15803d]',
};

function categoryBadgeClass(category: string | undefined) {
  if (!category) return 'bg-[#f5f5f5] text-[#525252]';
  const key = category.trim().toLowerCase();
  return CATEGORY_BADGE[key] ?? 'bg-[#f5f5f5] text-[#404040]';
}

function displayCategoryLabel(category: string | undefined) {
  if (!category) return 'Article';
  return category
    .split(/[-\s_]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

type SearchArticleCardProps = {
  article: Article;
  index: number;
};

export function SearchArticleCard({ article, index }: SearchArticleCardProps) {
  const href = article.slug ? `/articles/${article.slug}` : '#';
  const dateLabel = formatPublishedDateShort(article.publishedAt);
  const delayStyle = { animationDelay: `${index * 0.04}s` } as const;

  return (
    <Link
      href={href}
      className="group card-fade-in flex min-h-0 flex-col overflow-hidden rounded-[10px] border border-[#e5e5e5] bg-white text-inherit no-underline transition-[border-color,box-shadow] duration-150 hover:border-[#d4d4d4] hover:shadow-sm"
      style={delayStyle}
    >
      <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-[#f5f5f5]">
        {article.image?.trim() ? (
          <Image
            src={article.image}
            alt={article.title ?? 'Article cover'}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index === 0}
          />
        ) : (
          <div className="aspect-video w-full bg-[#f5f5f5]" />
        )}
        <div className="absolute left-2.5 top-2.5">
          <span
            className={`inline-block rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.07em] ${categoryBadgeClass(article.category)}`}
          >
            {displayCategoryLabel(article.category)}
          </span>
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col px-5 pb-5 pt-[18px]">
        <div className="mb-2.5 flex flex-wrap items-center gap-2 text-xs text-[#666666]">
          {dateLabel ? (
            <time dateTime={article.publishedAt}>{dateLabel}</time>
          ) : null}
          {dateLabel ? <span className="text-[#a3a3a3]">·</span> : null}
        </div>
        <h3 className="mb-2 flex-1 text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#0a0a0a]">
          {article.title}
        </h3>
        {article.excerpt ? (
          <p className="text-[13px] leading-[1.55] text-[#666666]">
            {article.excerpt}
          </p>
        ) : null}
        <div className="mt-3.5 flex items-center gap-1 text-xs font-semibold text-[#666666] transition-colors duration-150 group-hover:text-[#0a0a0a]">
          Read article
          <ArrowRight
            size={13}
            color="currentColor"
            className="shrink-0"
            aria-hidden
          />
        </div>
      </div>
    </Link>
  );
}
