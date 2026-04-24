import { Article, ContentBlock } from '@/types';

import { ContentBlockView } from './content-block-view';
import { getSubscription } from '@/lib/api/subscription';
import SubscribePaywall from '@/components/subscription/subscribe-paywall';

const articleProseClass =
  'prose prose-neutral mt-10 max-w-none prose-p:text-base prose-p:leading-7 prose-p:text-neutral-800';

const previewTeaserMaskClass =
  '[mask-image:linear-gradient(180deg,#000_0%,#000_20%,rgba(0,0,0,0.4)_55%,transparent_100%)] [-webkit-mask-image:linear-gradient(180deg,#000_0%,#000_20%,rgba(0,0,0,0.4)_55%,transparent_100%)]';

export async function ArticleContent({ article }: { article: Article }) {
  const subscription = await getSubscription();

  if (subscription?.status === 'active') {
    return <FullArticleContent article={article} />;
  }

  return <PartialArticleContent content={article.content?.slice(0, 1) ?? []} />;
}

function PartialArticleContent({ content }: { content: ContentBlock[] }) {
  const first = content[0];

  return (
    <article className="min-w-0">
      <div className={articleProseClass}>
        {first != null && (
          <div className={previewTeaserMaskClass}>
            <ContentBlockView key="preview-0" block={first} />
          </div>
        )}
      </div>
      <SubscribePaywall />
    </article>
  );
}

function FullArticleContent({ article }: { article: Article }) {
  const content = (article.content ?? []) as ContentBlock[];

  return (
    <article className="min-w-0">
      <div className={articleProseClass}>
        {content.map((block, index) => (
          <ContentBlockView key={`${block.type}-${index}`} block={block} />
        ))}
      </div>
      <div className="mt-10 border-t border-neutral-200 pt-10">
        {article.tags?.map((tag) => (
          <span
            key={tag}
            className="flex w-fit items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-4 py-1 text-sm text-neutral-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
