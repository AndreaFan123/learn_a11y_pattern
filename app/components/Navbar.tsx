import Link from 'next/link';
import LocaleSwitcher from './LocaleSwitcher';
import { IoAccessibility } from 'react-icons/io5';
import { Locale } from '@/i18n-config';

export default function Navbar({
  dictionary,
}: {
  dictionary: {
    welcome: string;
  };
}) {
  return (
    <header className="w-full p-6 border-b-2 border-[#4e4e4e]">
      <div className="flex justify-between items-center max-w-[80%] mx-auto">
        <Link
          href="/en"
          className="flex items-center gap-3 font-bold text-[#333333] text-xl"
        >
          <IoAccessibility size={30} />
          {dictionary.welcome}
        </Link>

        <LocaleSwitcher />
      </div>
    </header>
  );
}
