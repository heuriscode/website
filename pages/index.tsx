import HeroPage from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import Layout from '@/components/Layout/Layout';
import Contact from '@/components/Home/Contact';
import Statement from '@/components/Home/Statement';
import Cards from '@/components/Home/Cards';
import { DefaultSeo } from '@/components/SEO/SEO';
import { SEOPropsData } from '@/utils/types';
import client from '@/client';
import groq from 'groq';

const data: SEOPropsData = {
  title: 'Home',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export default function Home({ serviceSlug }) {
  return (
    <Layout>
      <DefaultSeo seoData={data} />
      <HeroPage services={serviceSlug} />
      <Statement />
      <Cards />
      <Services />
      <Contact />
    </Layout>
  );
}

export async function getStaticProps() {
  const postQuery = groq`*[count((categories[]->slug.current)[@ in [$slug]]) > 0]{
        title,
        mainImage,
        publishedAt,
        description,
        slug
      } | order(publishedAt desc)`;

  // Need different slug params for each service tag
  // const slug1 = '';
  // const slug2 = '';
  // const slug3 = '';

  const serviceSlug = await client.fetch(groq`*[_type == "category" && defined(slug.current)]`);
  // const service2 = await client.fetch(postQuery, { slug2 });
  return {
    props: {
      serviceSlug,
      // service2,
    },
    revalidate: 10,
  };
}
