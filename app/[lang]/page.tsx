import { Locale } from '@/i18n-config';
import { getDictionary } from '../lib/getDictionary';
import Link from 'next/link';

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const d = await getDictionary(lang);

  return (
    <main className="w-full relative">
      <article className="max-w-5xl mx-auto mt-16 flex flex-col gap-4">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-gray-800  to-gray-500 bg-clip-text text-transparent">
          {d['greeting'].whyTitle}
        </h1>
        <p className="text-lg text-gray-800">{d['greeting'].description}</p>
        <nav className="w-[7rem] bg-[#333] p-2">
          <Link href="/en/apg">{d['navigate'].goto} APG</Link>
        </nav>
      </article>
    </main>
  );
}
