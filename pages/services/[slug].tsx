import client from '@/client';
import groq from 'groq';
import Layout from '@/components/Layout/Layout';
import { Header } from '@/components/Header';
import { DefaultSeo } from '@/components/SEO/SEO';
import Portfolio from '@/components/Portfolio';

export default function ServicesPage({ posts, services }) {
  console.log(posts);
  // console.log(services);
  const data = {
    name: 'Services',
    title: services?.title,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };
  return (
    <Layout>
      <DefaultSeo seoData={data} />
      <Header name="Services" title={services?.title} description={services?.description} />
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
