import { ContentProps } from '../types/ariaTypes';

export const ContentCard = ({
  dictionary,
}: {
  dictionary: {
    title: string;
  };
}) => {
  console.log(dictionary);
  return (
    <main>
      <article>
        <h1>{dictionary.title}</h1>
      </article>
    </main>
  );
};
