'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n } from '@/i18n-config';
import { Locale } from '@/i18n-config';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LocaleSwitcher: React.FC = () => {
  const [language, setLanguage] = useState<Locale>();
  const router = useRouter();
  const pathName = usePathname();
  const redirectPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const handleLanguageChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLan = e.target.value;
    {
      i18n.locales.map(locale => {
        if (selectedLan === locale) router.push(redirectPathName(locale));
      });
    }
  };

  return (
    <div>
      <select onChange={handleLanguageChanged}>
        {i18n.locales.map(locale => (
          <option key={locale} value={locale}>
            {locale === 'zh_Hant' ? '中文' : 'En'}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocaleSwitcher;
