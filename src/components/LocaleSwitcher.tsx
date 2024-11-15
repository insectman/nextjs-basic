import { SwitcherSelectOption } from '@/types';
import { NextIntlClientProvider, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import { getMessages, getTranslations } from 'next-intl/server';

export default async function LocaleSwitcher({ locale }: { locale: string }) {
  console.log('LocaleSwitcher', { locale });
  const t = await getTranslations('LocaleSwitcher');

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
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleSwitcherSelect
        options={options}
        selectedOption={selectedOption}
        label={t('label')}
      ></LocaleSwitcherSelect>
    </NextIntlClientProvider>
  );
}
