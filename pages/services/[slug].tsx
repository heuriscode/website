import client from '@/client';
import groq from 'groq';
import Layout from '@/components/Layout/Layout';
import { Header } from '@/components/Header';
import { DefaultSeo } from '@/components/SEO/SEO';
import Portfolio from '@/components/Portfolio';
import { SEOPropsData } from '@/utils/types';

export default function ServicesPage({ posts, services }) {
  const data: SEOPropsData = {
    name: 'Services',
    title: services?.title,
    description: 'We will need a description.',
  };

  return (
    <Layout>
      <DefaultSeo seoData={data} />
      <Header name={data?.name} title={data?.title} description={data?.description} />
      <Portfolio work={posts} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(groq`*[_type == "category" && defined(slug.current)][].slug.current`);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const postQuery = groq`*[count((categories[]->slug.current)[@ in [$slug]]) > 0]{ 
        title,
        "authorName": author->name,
        "authorImage": author->image,
        "categories": categories[]->,
        mainImage,
        publishedAt,
        description,
        slug
      } | order(publishedAt desc)`;
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = params;
  const posts = await client.fetch(postQuery, { slug });
  const services = await client.fetch(groq`*[_type == "category" && slug.current == $slug][0]`, { slug });
  return {
    props: {
      posts,
      services,
    },
    revalidate: 10,
  };
}
