'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n } from '@/i18n-config';

const LocaleSwitcher = () => {
  const pathName = usePathname();
  const redirectPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };
  return (
    <div>
      <p>Switch</p>
      <ul>
        {i18n.locales.map(locale => {
          return (
            <li key={locale}>
              <Link href={redirectPathName(locale)}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LocaleSwitcher;
