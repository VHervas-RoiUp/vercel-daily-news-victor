import { Article } from '@/types';

import { ContentBlockView } from './content-block-view';
import { getSubscription } from '@/lib/api/subscription';

export async function ArticleContent({ article }: { article: Article }) {
  const subscription = await getSubscription();
  console.log(subscription);
  return (
    <article className="min-w-0">
      <div className="prose prose-neutral mt-10 max-w-none prose-p:text-base prose-p:leading-7 prose-p:text-neutral-800">
        {article.content?.map((block, index) => (
          <ContentBlockView key={`${block.type}-${index}`} block={block} />
        ))}
      </div>
      <div className="mt-10 border-t border-neutral-200 pt-10">
        {article.tags?.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-2 text-sm text-neutral-500 bg-neutral-100 px-4 py-1 rounded-full border border-neutral-200 w-fit"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
