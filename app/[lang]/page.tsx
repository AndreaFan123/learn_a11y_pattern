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
      <span className="apg-vertical-line"></span>
      <section className="apg-wrapper">
        <h1 className="apg-title">{d['greeting'].goal}</h1>
        <span className="apg-yellow-underline"></span>
        <article className="apg-article-container">
          <div>
            <h2 className="apg-subtitle">{d['greeting'].WhoAmITitle}</h2>
            <p className="apg-paragraph">{d['greeting'].intro}</p>
          </div>
          <div>
            <h2 className="apg-subtitle">{d['greeting'].whyTitle}</h2>
            <p className="apg-paragraph">{d['greeting'].description}</p>
          </div>
        </article>
        <div className="flex gap-4">
          <Link className="btn" href="/en/apg">
            {d['navigate'].goto} APG
          </Link>
          <Link className="btn" href="/en/apg/aria">
            {d['aria'].readFirst}
          </Link>
        </div>

        {/* <span className="absolute w-[15rem] border-[#333] border-[1px]"></span> */}
      </section>
    </main>
  );
}
