import LocaleSwitcher from './LocaleSwitcher';

export default function Navbar({
  dictionary,
}: {
  dictionary: {
    welcome: string;
  };
}) {
  return (
    // <header className="w-full bg-gradient-to-r from-cyan-800 to-cyan-900 p-6">
    <header className="w-full p-6 border-b-2 border-[#4e4e4e]">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-[#333333] text-xl">
          {dictionary.welcome}
        </h1>
        <LocaleSwitcher />
      </div>
    </header>
  );
}
