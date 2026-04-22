import { Article } from '@/types';
import Image from 'next/image';

export function FeaturedImage({ article }: { article: Article }) {
  return (
    <figure className="mt-10 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
      {article.image && (
        <Image
          src={article.image}
          alt={article.title ?? ''}
          width={1000}
          height={1000}
          className="aspect-[16/9] w-full object-cover"
        />
      )}
    </figure>
  );
}
