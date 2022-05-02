import { format, parseISO } from 'date-fns';
import Layout from '@/components/Layout/Layout';
import styles from './[slug].module.css';
import client from '@/client';
import groq from 'groq';
import { PortableText } from '@portabletext/react';
import { DefaultSeo } from '@/components/SEO/SEO';
import { urlFor } from '@/utils/sanityImage';

const PostLayout = ({ post }) => {
  // const {
  //   // title = 'Missing title',
  //   description,
  //   name = 'Missing name',
  //   categories,
  //   mainImage,
  //   authorImage,
  //   body = [],
  // } = post;

  const seoData = {
    title: post?.title,
    description: post?.description,
  };
  // console.log(title);

  return (
    <Layout>
      <DefaultSeo seoData={seoData} />

      <article className={`${styles.content} max-w-3xl py-8 mx-auto`}>
        <div className="mb-8 text-center">
          {post?.publishedAt && (
            <time dateTime={post?.publishedAt} className="mb-1 text-xs text-gray-600">
              {format(parseISO(post?.publishedAt), 'd LLLL, yyyy')}
            </time>
          )}

          <h1>{post?.title}</h1>
          <p>{post?.description}</p>
          {post?.authorImage && (
            <div>
              <img src={urlFor(post?.authorImage).width(80).url()} alt={`${post?.name}'s picture`} />
            </div>
          )}
        </div>
        {post?.categories && (
          <ul>
            Posted in
            {post?.categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        )}
        {post?.mainImage && (
          <div>
            <img src={urlFor(post?.mainImage).width(1600).url()} alt={''} />
          </div>
        )}
        <PortableText value={post?.body} components={ptComponents} />
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
  "name": author->name,
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
  // types: {
  //   image: ({ value }) => {
  //     if (!value?.asset?._ref) {
  //       return null;
  //     }
  //     return (
  //       <img
  //         alt={value.alt || ' '}
  //         loading="lazy"
  //         src={urlFor(value).width(320).height(240).fit('max').auto('format')}
  //       />
  //     );
  //   },
  // },
};

export default PostLayout;
