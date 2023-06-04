import { ContentProps } from '@/app/types/ariaTypes';
import { CodeSnippets } from '../codesnippets/CodeSnippets';

export const ContentCard = ({ content }: { content: ContentProps[] }) => {
  return (
    <section className=" flex flex-col gap-6 mt-5 mx-3">
      {content.map(itemt => (
        <article className="aria-content-card ">
          <h3 className="text-2xl font-semibold text-[#444]">{itemt.title}</h3>
          {itemt.snippets ? <CodeSnippets markdown={itemt.snippets} /> : ''}
          {itemt.descriptions?.map(sentence => (
            <p>{sentence}</p>
          ))}
        </article>
      ))}
    </section>
  );
};
