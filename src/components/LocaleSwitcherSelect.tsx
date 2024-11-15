'use client';

import { Locale } from '@/i18n/routing';
import { usePathname, useRouter } from '../i18n/routing';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';

import { SwitcherSelectOption } from '@/types';
import Image from 'next/image';
import Select, {
  components,
  ControlProps,
  OptionProps,
  Options,
  SingleValue,
} from 'react-select';
import { useLocale, useMessages, useTranslations } from 'next-intl';

type Props = {
  options: Options<SwitcherSelectOption>;
  selectedOption: SwitcherSelectOption;
  label: string;
};

const getFlagImage = (locale: string) => (
  <Image
    src={`https://flagcdn.com/16x12/${localeToCountryCode(locale)}.png`}
    width={16}
    height={12}
    alt={localeToCountryCode(locale)}
  />
);

const localeToCountryCode = (locale: string) =>
  locale === 'en' ? 'gb' : locale;

export default function LocaleSwitcherSelect({
  options,
  //   selectedOption,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const locale = useLocale();

  /* const initialLocale = useLocale();
  const [locale, setLocale] = useState(initialLocale); */

  const messages = useMessages();

  const t = useTranslations('LocaleSwitcher');

  console.log('label', t('label'), { locale, messages });

  function onSelectChange(
    option: SingleValue<SwitcherSelectOption>
    // option: SingleValue<SwitcherSelectOption> | MultiValue<SwitcherSelectOption>
  ) {
    if (!option) {
      return;
    }

    const nextLocale = option.value as Locale;
    // const localePrefixRegex = new RegExp(`^/${locale}/?`);
    const localePrefixRegex = new RegExp(`^/pt|en|de|fr|ru|am/?`);
    const nextPathname = pathname.replace(localePrefixRegex, '/');
    console.log({
      pathname,
      nextPathname,
      localePrefixRegex,
      params,
      nextLocale,
      locale,
    });
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname: nextPathname, params },
        { locale: nextLocale }
      );
    });
  }

  const Control = ({
    children,
    ...props
  }: ControlProps<SwitcherSelectOption>) => (
    <components.Control {...props}>
      <span className="flex items-center pl-2">
        {getFlagImage(locale)}
        {children}
      </span>
    </components.Control>
  );

  const Option = (props: OptionProps<SwitcherSelectOption>) => (
    <components.Option {...props} className="country-option">
      <span className="flex items-center">
        {getFlagImage(props.data.value)}
        <span className="ml-2">{t(props.data.value)}</span>
      </span>
    </components.Option>
  );

  return (
    <label
      className={clsx(
        'relative text-gray-400',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className="sr-only">{label}</p>
      <Select
        value={options.find((option) => option.value === locale)}
        isMulti={false}
        options={options}
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        isDisabled={isPending}
        onChange={onSelectChange}
        components={{
          Option,
          Control,
        }}
      ></Select>
    </label>
  );
}
