// import './globals.css';
import { Inter } from 'next/font/google';
import { i18n } from '@/i18n-config';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Learn A11Y Patterns',
  description: 'Learn A11Y Patterns',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
