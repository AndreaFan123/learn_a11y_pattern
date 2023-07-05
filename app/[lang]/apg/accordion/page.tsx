import { About } from '@/app/components/About';
import { Container } from '@/app/components/layout/Container';
import { getDictionary } from '@/app/lib/getDictionary';
import { Locale } from '@/i18n-config';

export default async function AccordionPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const d = await getDictionary(lang);
  return (
    <Container>
      <About
        title={d['accordion'].title}
        about={d['accordion'].aboutThisPattern}
        aboutDescription={d['accordion'].about}
        termsToUnderstand={d['accordion'].termsUnderstaning}
        header={d['accordion'].header}
        headerContent={d['accordion'].headerContent}
        panel={d['accordion'].panel}
        panelContent={d['accordion'].panelContent}
      />
    </Container>
  );
}
