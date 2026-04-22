import Image from 'next/image';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

/**
 * This is for when Markdown is broken on the CMS
 * e.g. `"-**Don’t` (closing `**` touching the next word) — insert a space after `**`.
 */
export function prepareMarkdownSource(source: string): string {
  let text = source.trim();
  if (text.includes('\\n')) {
    text = text.replace(/\\n/g, '\n');
  }
  text = text.replace(
    /\*\*([^*]+?)\s*\*\*/g,
    (_, inner: string) => `**${inner.trim()}**`
  );
  text = text.replace(
    /__([^_]+?)\s*__/g,
    (_, inner: string) => `__${inner.trim()}__`
  );
  text = text.replace(/(["\u201C\u201D]-)\*\*(?=[A-Za-z\u201C])/g, '$1** ');
  return text;
}

const markdownComponents: Components = {
  a: ({ href, children }) => (
    <a
      href={href}
      className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-2 transition-colors hover:decoration-neutral-900"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  code: ({ className, children, ...props }) => {
    const inline = !className;
    if (inline) {
      return (
        <code
          className="rounded bg-neutral-100 px-1.5 py-0.5 text-[0.9em] text-neutral-800"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="my-4 overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm">
      {children}
    </pre>
  ),
  img: ({ src, alt }) =>
    typeof src === 'string' ? (
      <Image
        src={src}
        alt={alt ?? ''}
        width={1200}
        height={675}
        className="my-4 w-full rounded-lg border border-neutral-200 object-cover"
      />
    ) : null,
};

export function MarkdownBlock({ children }: { children: string }) {
  const source = prepareMarkdownSource(children);
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
      {source}
    </ReactMarkdown>
  );
}

export function MarkdownInline({ children }: { children: string }) {
  const source = prepareMarkdownSource(children);
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        ...markdownComponents,
        p: ({ children: c }) => <>{c}</>,
      }}
    >
      {source}
    </ReactMarkdown>
  );
}
