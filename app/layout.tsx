import type { Metadata } from 'next';

import { SubscribeFormPendingProvider } from '@/components/subscription/subscribe-form-pending-context';
import { getPublicationConfig } from '@/lib/api/publication';
import { getSiteUrl } from '@/lib/site-url';
import Header from '@/layout/header';
import Footer from '@/layout/footer';

import '@/app/globals.css';

const FALLBACK_SITE_NAME = 'Vercel Daily News';
const FALLBACK_DESCRIPTION =
  'The latest news and insights for modern web developers.';

export async function generateMetadata(): Promise<Metadata> {
  const config = await getPublicationConfig();
  const name = config?.publicationName ?? FALLBACK_SITE_NAME;
  const seo = config?.seo;
  const title = seo?.defaultTitle ?? name;
  const description = seo?.defaultDescription ?? FALLBACK_DESCRIPTION;
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: seo?.titleTemplate ?? `%s | ${name}`,
    },
    description,
    openGraph: {
      type: 'website',
      siteName: name,
      title,
      description,
      url: siteUrl,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = await getPublicationConfig();
  const lang = config?.language ?? 'en';

  return (
    <html lang={lang} className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans bg-white">
        <SubscribeFormPendingProvider>
          <Header />
          <main className="flex-1 mx-auto w-full bg-white">{children}</main>
          <Footer />
        </SubscribeFormPendingProvider>
      </body>
    </html>
  );
}
