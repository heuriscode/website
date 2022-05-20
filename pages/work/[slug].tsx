import Layout from '@/components/Layout/Layout';
import client from '@/client';
import groq from 'groq';
import { ArticleSeo } from '@/components/SEO/SEO';
import { WorkPage } from '@/components/Work/WorkPage';
import { urlFor } from '@/utils/sanityImage';
import { SEOPropsData } from '@/utils/types';

const PostLayout = ({ post }) => {
  console.log(post);

  const seoData: SEOPropsData = {
    title: post?.title,
    description: post?.description,
    publishedAt: post?.publishedAt,
    updatedAt: post?.updatedAt,
    authorName: post?.authorName,
    coverImage: urlFor(post?.mainImage).height(630).width(1200).url() ?? null,
    tags: post?.categories?.map((category) => category.title) ?? [],
  };

  return (
    <Layout>
      <ArticleSeo seoData={seoData} />
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
  shortTitle,
  "authorName": author->name,
  "authorImage": author->image,
  "categories": categories[]->,
  mainImage,
  publishedAt,
  "updatedAt": _updatedAt,
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
