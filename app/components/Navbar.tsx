import LocaleSwitcher from './LocaleSwitcher';

export default function Navbar({
  d,
}: {
  d: {
    welcome: string;
  };
}) {
  return (
    <header>
      <nav>
        <h1>{d.welcome}</h1>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
