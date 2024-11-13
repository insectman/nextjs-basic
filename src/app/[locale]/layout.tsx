import BackButton from '@/components/BackButton';
import { LanguageSelector } from '@/components/LanguageSelector';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BackButton />
      <LanguageSelector />
      {children}
    </>
  );
}
