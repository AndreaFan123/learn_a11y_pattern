import { Container } from '@/app/components/layout/Container';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/app/lib/getDictionary';
import { Metadata } from 'next';
import { CodeSnippets } from '@/app/components/codesnippets/CodeSnippets';
import {
  Aria,
  AsSuspender,
  Button,
  overwriteSematic,
} from '@/app/constants/codeSnippets';
import { ContentProps } from '@/app/types/ariaTypes';
import { ContentCard } from '@/app/components/layout/ContentCard';

export const metadata: Metadata = {
  title: 'Learn A11Y Patterns | No ARIA is better than Bad ARIA',
  description:
    'No ARIA is better than Bad ARIA, learn principles of using ARIA     ',
};

export default async function Page({ params }: { params: { lang: Locale } }) {
  const d = await getDictionary(params.lang);

  const contentData: ContentProps[] = [
    {
      title: d['aria'].principle1,
      snippets: Button,
      descriptions: [d['aria'].principleDescription1],
    },
    {
      title: d['aria'].principle2,
      descriptions: [
        d['aria'].principleDescription2,
        d['aria'].principleDescription3,
      ],
      snippets: Aria,
    },
    {
      title: d['aria'].browserAndAssistiveTech,
      descriptions: [
        d['aria'].browserAndAssitiveDesciption1,
        d['aria'].browserAndAssitiveDesciption2,
        d['aria'].browserAndAssitiveDesciption3,
      ],
    },
    {
      title: d['aria'].mobileAndTouchSupport,
      descriptions: [
        d['aria'].mobileAndTouchDescription1,
        d['aria'].mobileAndTouchDescription2,
      ],
    },
  ];

  return (
    <Container>
      <section className="text-[#444] flex flex-col">
        <h1 className="p-2 text-3xl font-medium mb-5 text-[#fafafa] bg-slate-700 w-fit rounded-md shadow-md">
          {d['aria'].readFirst}
        </h1>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 font-bold text-6xl">
          {d['aria'].noAriaIsBetterThanBadAria}
        </h2>
        <span className="md:absolute md:w-[50%] md:h-7 md:bg-[#fadc49] md:-z-20 md:top-[13.5rem]"></span>
      </section>
      <ContentCard content={contentData} />
    </Container>
  );
}
