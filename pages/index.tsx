import Head from 'next/head';
import { LinkButton } from '@/components/Link';
import HeroPage from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import Layout from '@/components/Layout/Layout';
import Contact from '@/components/Home/Contact';
import Statement from '@/components/Home/Statement';
import Cards from '@/components/Home/Cards';
import { DefaultSeo } from '@/components/SEO/SEO';

const data = {
  title: 'Home',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export default function Home() {
  return (
    <Layout>
      <DefaultSeo seoData={data} />
      <HeroPage />
      <Statement />
      <Cards />
      <Services />
      <Contact />
    </Layout>
  );
}
