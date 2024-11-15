import type { Metadata } from 'next';

import './globals.css';

import { getLocale } from 'next-intl/server';

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

  return <>{children}</>;
}
