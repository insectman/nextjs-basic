import BackButton from '@/components/BackButton';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import { getLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <div className="h-screen flex items-center justify-center bg-gray-100">
          <div className="absolute top-4 right-4">
            <LocaleSwitcher locale={locale} />
          </div>
          <BackButton />
          <div className="container mx-auto p-4 flex flex-col items-center justify-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
