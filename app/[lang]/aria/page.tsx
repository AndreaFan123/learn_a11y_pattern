import { Container } from '@/app/components/layout/Container';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/app/lib/getDictionary';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learn A11Y Patterns | No ARIA is better than Bad ARIA',
  description:
    'No ARIA is better than Bad ARIA, learn principles of using ARIA     ',
};

export default async function Page({ params }: { params: { lang: Locale } }) {
  const d = await getDictionary(params.lang);

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
      <article className="max-w-md flex flex-col gap-6 mt-5 mx-3">
        <article className="flex flex-col mt-6 gap-3  text-[#444] border-2 border-black p-4 rounded-md boxshodow">
          <h3 className="text-2xl font-medium text-[#444]">
            {d['aria'].principle1}
          </h3>
          <pre className=" bg-black p-3 rounded-md shadow-md">
            <code className="text-yellow-300">
              &lt;div role="button"&gt;I am a button&lt;/div&gt;
            </code>
          </pre>
          <p>{d['aria'].principleDescription1}</p>
        </article>
        <article className="flex flex-col mt-6 gap-3  text-[#444] border-2 border-black p-4 rounded-md boxshodow">
          <h3 className="text-2xl font-medium text-[#444]">
            {d['aria'].principle2}
          </h3>
          <pre className="bg-black flex flex-col rounded-md shadow-md p-3 gap-3">
            <code className="text-yellow-300">
              &lt;a role="menuitem"&gt;Assistive tech users perceive this
              element as an item in a menu, not a link.&lt;/a&gt;
            </code>
            <span className="text-pink-300">
              &lt;a aria-label="Assistive tech users can only perceive the
              contents of this aria-label"&gt;Link text&lt;/a&gt;
            </span>
          </pre>
          <p>{d['aria'].principleDescription2}</p>
        </article>
      </article>
    </Container>
  );
}
