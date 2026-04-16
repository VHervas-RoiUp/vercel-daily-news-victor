import type { Metadata } from 'next';
import Header from './components/layout/header';
import './globals.css';

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
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
