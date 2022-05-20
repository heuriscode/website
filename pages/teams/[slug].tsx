import client from '@/client';
import groq from 'groq';
import Layout from '@/components/Layout/Layout';
import { Header } from '@/components/Header';
import { DefaultSeo } from '@/components/SEO/SEO';
import { SEOPropsData } from '@/utils/types';
import { PortableText } from '@portabletext/react';
import { TeamPage } from '@/components/Team/TeamPage';

export default function ServicesPage({ team }) {
  console.log(team);

  const data: SEOPropsData = {
    name: 'Teams',
    title: 'Our Expert',
  };

  return (
    <Layout>
      <DefaultSeo seoData={data} />
      <Header name={data?.name} title={data?.title} />
      <TeamPage team={team} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(groq`*[_type == "author" && defined(slug.current)][].slug.current`);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const teamQuery = groq`*[_type == "author" && slug.current == $slug][0]{
      'cv': cv.asset->url,
      email,
      linkedin,
      name,
      image,
      role,
      bio,
      }`;

  const { slug = '' } = params;
  const team = await client.fetch(teamQuery, { slug });

  return {
    props: {
      team,
    },
    revalidate: 10,
  };
}
