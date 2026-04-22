import Image from 'next/image';

import { MarkdownBlock, MarkdownInline } from '@/lib/markdown';
import { ContentBlock as ContentBlockType } from '@/types';

export function ContentBlockView({ block }: { block: ContentBlockType }) {
  switch (block.type) {
    case 'paragraph':
      return <MarkdownBlock>{block.text}</MarkdownBlock>;
    case 'heading': {
      const Heading = block.level === 2 ? 'h2' : 'h3';
      return (
        <Heading>
          <MarkdownInline>{block.text}</MarkdownInline>
        </Heading>
      );
    }
    case 'blockquote':
      return (
        <blockquote className="border-l-4 border-neutral-300 pl-4 text-neutral-700 [&>p]:my-2 first:[&>p]:mt-0 last:[&>p]:mb-0">
          <MarkdownBlock>{block.text}</MarkdownBlock>
        </blockquote>
      );
    case 'unordered-list':
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>
              <MarkdownInline>{item}</MarkdownInline>
            </li>
          ))}
        </ul>
      );
    case 'ordered-list':
      return (
        <ol>
          {block.items.map((item, i) => (
            <li key={i}>
              <MarkdownInline>{item}</MarkdownInline>
            </li>
          ))}
        </ol>
      );
    case 'image':
      return (
        <figure>
          {block.src && (
            <Image src={block.src} alt={block.alt} width={800} height={450} />
          )}
          {block.caption && (
            <figcaption>
              <MarkdownInline>{block.caption}</MarkdownInline>
            </figcaption>
          )}
        </figure>
      );
    default:
      return null;
  }
}
