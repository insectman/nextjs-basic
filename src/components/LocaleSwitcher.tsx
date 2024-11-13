import { Locale } from '@/i18n/routing';
import { SwitcherSelectOption } from '@/types';
import { useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher({ locale }: { locale: string }) {
  const t = useTranslations('LocaleSwitcher');

  const options: SwitcherSelectOption[] = [
    {
      value: 'en',
      label: 'English',
    },
    {
      value: 'de',
      label: 'German',
    },
    {
      value: 'fr',
      label: 'French',
    },
    {
      value: 'am',
      label: 'Armenian',
    },
    {
      value: 'ru',
      label: 'Russian',
    },
    {
      value: 'pt',
      label: 'Portuguese',
    },
  ];

  const selectedOption =
    options.find((option) => option.value === (locale || 'en')) || options[0];

  console.log({ selectedOption });

  return (
    <LocaleSwitcherSelect
      options={options}
      selectedOption={selectedOption}
      label={t('label')}
    ></LocaleSwitcherSelect>
  );
}
