import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { getLocale, getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Service list',
  description: '',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <div className="h-screen flex items-center justify-center bg-gray-100">
          <div className="container mx-auto p-4 flex flex-col items-center justify-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
