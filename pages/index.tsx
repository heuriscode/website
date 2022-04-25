import Head from 'next/head';
import { LinkButton } from '@/components/Link';
import HeroPage from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import Layout from '@/components/Layout/Layout';
import Contact from '@/components/Home/Contact';
import Statement from '@/components/Home/Statement';
import Cards from '@/components/Home/Cards';

export default function Home() {
  return (
    <Layout>
      <HeroPage />
      <Statement />
      <Cards />
      <Services />
      <Contact />
    </Layout>
  );
}
