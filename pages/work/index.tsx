import Layout from '@/components/Layout/Layout';
import { Header } from '@/components/Header';
import Portfolio from '@/components/Portfolio';
import { DefaultSeo } from '@/components/SEO/SEO';
import client from '@/client';
import groq from 'groq';
import { SEOPropsData } from '@/utils/types';

export default function Work({ posts }) {
  const data: SEOPropsData = {
    name: 'Work',
    title: 'Our Projects',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };
  return (
    <Layout>
      <DefaultSeo seoData={data} />
      <Header name={data.name} title={data.title} description={data.description} />
      <Portfolio work={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]{ 
        title,
        "authorName": author->name,
        "authorImage": author->image,
        "categories": categories[]->,
        mainImage,
        publishedAt,
        description,
        slug
      } | order(publishedAt desc)
    `);

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
