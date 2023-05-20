'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Routes } from '../constants/routes';
import Link from 'next/link';
import { Locale } from '@/i18n-config';
import { BsArrowRightCircle } from 'react-icons/bs';

export default function Card({
  routes,
  dictionary,
}: {
  routes: Routes[];
  dictionary: {
    [key: string]: string;
  };
}) {
  const [translateRoutes, setTranslateRoutes] = useState<Routes[]>([]);

  useEffect(() => {
    const translated = routes.map(route => ({
      ...route,
      title: dictionary[route.title] || route.title,
    }));
    setTranslateRoutes(translated);
  }, [routes, dictionary]);

  return (
    <section className="grid grid-cols-3 gap-5">
      {translateRoutes.map(route => (
        <Link
          href={`/en/apg/${route.url}`}
          key={route.title}
          className="w-full h-20 mb-6 rounded-[.2rem] shadow-lg hover:transform hover:-translate-y-2 transition duration-300 ease-in-out
          bg-[#343B7B] hover:bg-[#1c2550] flex items-center gap-4 p-4 relative focus:outline-none focus:ring-4 focus:ring-pink-700 focus:border-pink-700"
        >
          <div>
            <BsArrowRightCircle color="white" size="1.2rem" />
          </div>

          <div>
            <h2 className="text-lg text-white font-bold">{route.title}</h2>
          </div>

          <span className="absolute bg-pink-300 w-5 h-20 right-0 rounded-tr-[0.2rem] rounded-br-[0.2rem]"></span>
        </Link>
      ))}
    </section>
  );
}
