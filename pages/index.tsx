import Head from 'next/head';
import { LinkButton } from '@/components/Link';
import HeroPage from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import Navbar from '@/components/Layout/Navbar';
import Contact from '@/components/Home/Contact';
import Statement from '@/components/Home/Statement';
import Cards from '@/components/Home/Cards';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroPage />
      <Statement />
      <Cards />
      <Services />
      <Contact />
    </main>
  );
}
