import { Article } from '@/types';

import { ContentBlockView } from './content-block-view';

export function ArticleContent({ article }: { article: Article }) {
  return (
    <article className="min-w-0">
      <div className="prose prose-neutral mt-10 max-w-none prose-p:text-base prose-p:leading-7 prose-p:text-neutral-800">
        {article.content?.map((block, index) => (
          <ContentBlockView key={`${block.type}-${index}`} block={block} />
        ))}
      </div>
    </article>
  );
}
