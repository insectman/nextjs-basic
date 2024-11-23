import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';

function Card({
  src,
  text,
  href,
}: {
  src: string;
  text: string;
  href: string;
}) {
  return (
    <Link href={href} className="bg-white rounded-lg p-4 shadow">
      <Image
        src={src}
        alt={text}
        className="object-cover"
        priority
        width={100}
        height={100}
      />
      <p className="text-lg text-center text-wrap w-[100px]">{text}</p>
    </Link>
  );
}

const ListOfOptions = [
  { src: '/qr-service.png', textKey: 'generationQR', href: '/qr' },
  {
    src: '/barcode-service.png',
    textKey: 'generationBarcode',
    href: '/barcode',
  },
];

export default function Home() {
  const t = useTranslations('HomePage');

  // const [locale, setLocale] = useState('en');

  return (
    <>
      <h1 className="text-4xl font-bold mb-4">{t(`serviceList`)}</h1>
      <ul
        className={`grid grid-cols-1 md:grid-cols-${Math.min(
          ListOfOptions.length,
          2
        )} lg:grid-cols-${Math.min(
          ListOfOptions.length,
          3
        )} gap-4 mx-auto grid-rows-[1fr]`}
      >
        {ListOfOptions.map(({ src, textKey, href }, i) => (
          <li key={i} className="flex items-start">
            <Card src={src} text={t(textKey)} href={href} />
          </li>
        ))}
      </ul>
    </>
  );
}
