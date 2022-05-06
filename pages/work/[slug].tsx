import Layout from '@/components/Layout/Layout';
import client from '@/client';
import groq from 'groq';
import { DefaultSeo } from '@/components/SEO/SEO';
import { WorkPage } from '@/components/Work/WorkPage';

const PostLayout = ({ post }) => {
  const seoData = {
    title: post?.title,
    description: post?.description,
  };

  return (
    <Layout>
      <DefaultSeo seoData={seoData} />
      <WorkPage post={post} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(groq`*[_type == "post" && defined(slug.current)][].slug.current`);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "authorName": author->name,
  "authorImage": author->image,
  "categories": categories[]->,
  mainImage,
  publishedAt,
  description,
  body
}`;
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default PostLayout;
