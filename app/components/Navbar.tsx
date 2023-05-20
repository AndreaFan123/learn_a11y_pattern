import LocaleSwitcher from './LocaleSwitcher';

export default function Navbar({
  dictionary,
}: {
  dictionary: {
    welcome: string;
  };
}) {
  return (
    <header className="w-full bg-gradient-to-r from-cyan-800 to-blue-600 p-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-white text-xl">{dictionary.welcome}</h1>
        <LocaleSwitcher />
      </div>
    </header>
  );
}
