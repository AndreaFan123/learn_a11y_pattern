import Link from 'next/link';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

export default function Footer() {
  return (
    <footer className="bg-[#333] w-screen h-[10.5rem]">
      <div className="max-w-5xl h-full mx-auto p-5 flex justify-between items-center">
        <h3 className="text-white text-xl">Learn APG</h3>
        <div className="flex gap-4">
          <Link href="https://github.com/AndreaFan123/learn_a11y_pattern">
            <IoLogoGithub color="white" size={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/andrea-fan-b98491b9/">
            <IoLogoLinkedin color="white" size={30} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
