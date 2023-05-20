import Card from '@/app/components/Card';
import { ROUTES } from '../../constants/routes';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/app/lib/getDictionary';

export default async function IndexPage({
  params,
}: {
  params: { lang: string };
}) {
  const d = await getDictionary(params.lang as Locale);
  return (
    <main className="max-w-5xl mt-12 mx-auto">
      <Card routes={ROUTES} dictionary={d['routes']} />
    </main>
  );
}
