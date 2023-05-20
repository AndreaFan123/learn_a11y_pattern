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
    <main>
      <header>{/* <p>{d['content']}</p> */}</header>
    </main>
  );
}
