// NOTE: This component contains Title and about descrition

export const About = ({
  title,
  about,
  aboutDescription,
}: {
  title: string;
  about: string;
  aboutDescription: string;
}) => {
  return (
    <article className="w-full">
      <div className="w-full border-b-3 border-[#333]">
        <h1 className="text-3xl bg-gradient-to-tr from-slate-500 to-slate-800 bg-clip-text text-transparent font-bold">
          {title}
        </h1>
      </div>
      <div>
        <h2>{about}</h2>
      </div>
      <div>
        <p>{aboutDescription}</p>
      </div>
    </article>
  );
};
