import Link from 'next/link';
import Image from 'next/image';

import type { FeaturedArticle } from './types';

type FeaturedArticleCardProps = {
  article: FeaturedArticle;
};

export function FeaturedArticleCard({ article }: FeaturedArticleCardProps) {
  return (
    <article className="min-w-0">
      <Link href={article.href} className="group flex flex-col">
        <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100 border border-gray-200 p-2">
          <Image
            src={article.imageSrc}
            alt={article.imageAlt}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-gray-500">
          {article.category}
          <span className="mx-1.5 font-normal normal-case text-gray-400">
            ·
          </span>
          <span className="font-normal normal-case">{article.date}</span>
        </p>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-black underline-offset-4 group-hover:underline sm:text-base">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
          {article.excerpt}
        </p>
      </Link>
    </article>
  );
}
