'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n } from '@/i18n-config';
import { Locale } from '@/i18n-config';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const LocaleSwitcher: React.FC = () => {
  const [language, setLanguage] = useState<string>('');
  const router = useRouter();
  const pathName = usePathname();
  const redirectPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  // Check what's the path when the component is mounted
  useEffect(() => {
    const segments = pathName.split('/');
    const locale = segments[1] as Locale;
    setLanguage(locale);
  }, [language]);

  const handleLanguageChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLan = e.target.value;
    {
      i18n.locales.map(locale => {
        setLanguage(locale);
        if (selectedLan === locale) router.push(redirectPathName(locale));
      });
    }
  };
  // console.log('language', language);

  return (
    <div>
      <select
        onChange={handleLanguageChanged}
        className="p-2 rounded-sm shadow-sm"
      >
        {i18n.locales.map(locale => (
          <option key={locale} value={locale}>
            {locale === 'en' ? 'English' : '中文'}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocaleSwitcher;
