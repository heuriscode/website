import { format, parseISO } from 'date-fns';
import Layout from '@/components/Layout/Layout';
import styles from './[slug].module.css';
import client from '@/client';
import groq from 'groq';
import { PortableText } from '@portabletext/react';
import { DefaultSeo } from '@/components/SEO/SEO';
import { urlFor } from '@/utils/sanityImage';

const PostLayout = ({ post }) => {
  const seoData = {
    title: post?.title,
    description: post?.description,
  };

  return (
    <Layout>
      <DefaultSeo seoData={seoData} />

      <article className={`max-w-7xl mx-auto`}>
        {post?.mainImage && (
          <img src={urlFor(post?.mainImage).width(1600).height(350).url()} alt={''} className="rounded" />
        )}
        <div className="max-w-5xl py-10 mx-auto prose text-center">
          <h1>{post?.title}</h1>
        </div>
        {post?.categories && (
          <ul className="flex justify-center gap-2 mb-4">
            {post?.categories.map((category) => (
              <li key={category} className="px-3 py-0.5 rounded-full bg-green-800/30">
                {category}
              </li>
            ))}
          </ul>
        )}

        <div className={`${styles.content} mx-auto`}>
          {post?.publishedAt && (
            <div className="mb-4 text-right">
              <time dateTime={post?.publishedAt} className="text-sm text-right text-gray-700">
                {format(parseISO(post?.publishedAt), 'd LLLL, yyyy')} - by {post?.authorName}
              </time>
            </div>
          )}

          <PortableText value={post?.body} components={ptComponents} />
        </div>
      </article>
    </Layout>
  );
};

// Sanity
export async function getStaticPaths() {
  const paths = await client.fetch(groq`*[_type == "post" && defined(slug.current)][].slug.current`);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "authorName": author->name,
  "authorImage": author->image,
  "categories": categories[]->title,
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
  };
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return <img alt={value.alt || ' '} loading="lazy" src={urlFor(value).url()} className="rounded" />;
    },
  },
};

export default PostLayout;
