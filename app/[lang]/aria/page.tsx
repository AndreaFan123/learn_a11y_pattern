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
import { ContentCard } from '@/app/components/ContentCard';

export const metadata: Metadata = {
  title: 'Learn A11Y Patterns | No ARIA is better than Bad ARIA',
  description:
    'No ARIA is better than Bad ARIA, learn principles of using ARIA     ',
};

export default async function Page({ params }: { params: { lang: Locale } }) {
  const d = await getDictionary(params.lang);

  // const contentData: ContentProps[] = [
  //   {
  //     title: d['aria'].principle1,
  //     snippets: Button,
  //     descriptions: [d['aria'].principleDescription1],
  //   },
  //   {
  //     title: d['aria'].principle2,
  //     descriptions: [
  //       d['aria'].principleDescription2,
  //       d['aria'].principleDescription3,
  //     ],
  //     snippets: Aria,
  //   },
  //   {
  //     title: d['aria'].browserAndAssistiveTech,
  //     descriptions: [
  //       d['aria'].browserAndAssitiveDesciption1,
  //       d['aria'].browserAndAssitiveDesciption2,
  //       d['aria'].browserAndAssitiveDesciption3,
  //     ],
  //   },
  //   {
  //     title: d['aria'].mobileAndTouchSupport,
  //     descriptions: [
  //       d['aria'].mobileAndTouchDescription1,
  //       d['aria'].mobileAndTouchDescription2,
  //     ],
  //   },
  // ];

  return (
    <Container>
      <section className="text-[#444] flex flex-col p-5 max-w-[80%] mx-auto">
        <h1 className="p-2 text-3xl font-medium mt-5 mb-7 text-[#fafafa] bg-slate-700 w-fit rounded-md shadow-md">
          {d['aria'].readFirst}
        </h1>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 font-bold text-6xl">
          {d['aria'].noAriaIsBetterThanBadAria}
        </h2>
        <span className="md:absolute lg:w-[91%] xl:w-[66%] 2xl:w-[49%] md:h-7 md:bg-[#fadc49] md:-z-20 md:top-[14.5rem]"></span>
        <article className="flex flex-col gap-8 py-6">
          <div className="border-2 border-[#333] rounded-md p-4 aria-content-card flex flex-col gap-4">
            <h2 className="font-semibold text-2xl">{d['aria'].principle1}</h2>
            <div className="flex flex-col gap-2">
              <CodeSnippets markdown={Button} />
            </div>
            <p>{d['aria'].principleDescription1}</p>
          </div>
          <div className="border-2 border-[#333] rounded-md p-4 aria-content-card flex flex-col gap-4">
            <h2 className="font-semibold text-2xl">{d['aria'].principle2}</h2>
            <div className="flex flex-col gap-2">
              <CodeSnippets markdown={Aria} />
            </div>
            <p>{d['aria'].principleDescription2}</p>
          </div>
        </article>
      </section>
    </Container>
  );
}