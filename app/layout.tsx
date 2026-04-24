import type { Metadata } from 'next';

import { SubscribeFormPendingProvider } from '@/components/subscription/subscribe-form-pending-context';
import Header from '@/layout/header';
import Footer from '@/layout/footer';

import '@/app/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Home',
    template: '%s | Vercel Daily News',
  },
  description: 'The latest news and insights for modern web developers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
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
