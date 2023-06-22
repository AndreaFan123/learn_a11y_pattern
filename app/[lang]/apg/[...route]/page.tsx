import { ContentCard } from '@/app/components/layout/ContentCard';
import { Container } from '@/app/components/layout/Container';
import { getDictionary } from '@/app/lib/getDictionary';
import { Locale } from '@/i18n-config';

export default async function Page({
  params,
}: {
  params: { lang: string; route: string };
}) {
  const d = await getDictionary(params.lang as Locale);

  // get path name
  const path = params.route[0];

  const renderContentCards = (path: string) => {
    switch (path) {
      case 'accordion':
        return <ContentCard dictionary={d['accordion']} />;
    }
  };
  return <Container>{renderContentCards(path)}</Container>;
}
