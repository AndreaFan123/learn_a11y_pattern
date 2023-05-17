import { getDictionary } from '../lib/getDictionary';
import { Locale } from '@/i18n-config';
import LocaleSwitcher from '../components/LocaleSwitcher';

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const d = await getDictionary(lang);

  return (
    <main className="h-[100vh]">
      <LocaleSwitcher />
      <p>Current locale: {lang}</p>
      <p>This text is rendered on the server: {d['greeting'].welcome}</p>
    </main>
  );
}
