import BackButton from '@/components/BackButton';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BackButton />
      {/* <LanguageSelector /> */}
      {children}
    </>
  );
}
