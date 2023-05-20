import { Locale } from '@/i18n-config';
import { getDictionary } from '../lib/getDictionary';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const d = await getDictionary(lang);

  return (
    <main className="w-full relative">
      <span className="border-[1px] border-[#333] h-[30rem] top-[21px] right-[170px] absolute -z-10"></span>
      <section className="max-w-5xl mx-auto mt-16 flex flex-col items-start  gap-10 px-6">
        <h1 className="text-9xl font-extrabold bg-gradient-to-r from-[#222]  to-[#444] bg-clip-text text-transparent">
          {d['greeting'].goal}
        </h1>
        <span className="absolute w-2/4 h-7 bg-[#fadc49] -z-20 top-[6rem]"></span>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-[#333]">
              {d['greeting'].WhoAmITitle}
            </h2>
            <p className="text-lg text-[#444]">{d['greeting'].intro}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#333]">
              {d['greeting'].whyTitle}
            </h2>
            <p className="text-lg text-[#444]">{d['greeting'].description}</p>
          </div>
        </article>
        <button
          type="button"
          className="bg-gradient-to-br from-[#222]  to-[#444] text-white p-3 rounded-md shadow-md hover:-translate-y-2 transition duration-300 ease-in-out
        "
        >
          <Link href="/en/apg">{d['navigate'].goto} APG</Link>
        </button>
        {/* <span className="absolute w-[15rem] border-[#333] border-[1px]"></span> */}
      </section>
    </main>
  );
}
