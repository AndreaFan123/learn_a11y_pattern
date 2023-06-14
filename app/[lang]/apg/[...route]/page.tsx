import { ContentCard } from '@/app/components/ContentCard';
import { Container } from '@/app/components/layout/Container';
import { AccordionItems } from '@/app/constants/contents';
import { getDictionary } from '@/app/lib/getDictionary';
import { Locale } from '@/i18n-config';

export default async function Page({
  params,
}: {
  params: { lang: string; route: string };
}) {
  const d = await getDictionary(params.lang as Locale);
  const renderContentCards = (path: string) => {
    switch (path) {
      case 'accordion':
        return <ContentCard dictionary={d['accordion']} />;
    }
  };
  return <Container>{renderContentCards(params.route)}</Container>;
}
