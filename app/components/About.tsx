// NOTE: This component contains Title and about descrition
import Link from 'next/link';

export const About = ({
  title,
  about,
  aboutDescription,
  termsToUnderstand,
  header,
  headerContent,
  panel,
  panelContent,
}: {
  title: string;
  about: string;
  aboutDescription: string;
  termsToUnderstand?: string;
  header?: string;
  headerContent?: string;
  panel?: string;
  panelContent?: string;
}) => {
  return (
    <article className=" px-4 w-full flex flex-col gap-4">
      <div>
        <h1 className="text-3xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent font-bold">
          {title}
        </h1>
      </div>
      <div>
        <h2 className="text-lg font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
          {about}
        </h2>
      </div>
      <div>
        <p className="text-[#555]">{aboutDescription}</p>
      </div>
      <ul>
        <h3>{termsToUnderstand}</h3>
        <li>
          <h4>{header}</h4>
          <p>{headerContent}</p>
        </li>
        <li>
          <h4>{panel}</h4>
          <p>{panelContent}</p>
        </li>
      </ul>
    </article>
  );
};
