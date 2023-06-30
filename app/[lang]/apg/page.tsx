import Card from '@/app/components/Card';
import { Routes } from '../../constants/routes';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/app/lib/getDictionary';
import { Container } from '@/app/components/layout/Container';

export default async function IndexPage({ params }: { params: { lang: Locale } }) {
  const d = await getDictionary(params.lang as Locale);
  return (
    <Container>
      <Card routes={Routes} dictionary={d['routes']} />
    </Container>
  );
}
