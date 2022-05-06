import { format, parseISO } from 'date-fns';
import styles from './WorkPage.module.css';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/utils/sanityImage';
import { LinkComponent } from '@/components/Link';
import { FiChevronRight } from 'react-icons/fi';

export const WorkPage = ({ post }) => {
  return (
    <article className={`max-w-7xl mx-auto`}>
      {post?.mainImage && (
        <picture>
          <source srcSet={urlFor(post?.mainImage).width(600).height(300).url()} media="(max-width: 600px)" />
          <img src={urlFor(post?.mainImage).width(1600).height(350).url()} alt={''} className="my-2 rounded-sm" />
        </picture>
      )}
      <div className={`my-4 justify-center px-4`}>
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-1 mb-4 text-xs text-gray-500">
          <LinkComponent href={'/work'} className="text-gray-500 hover:underline hover:text-green-800">
            Work
          </LinkComponent>
          <FiChevronRight />
          <div>{post?.title}</div>
        </div>
      </div>
      <div className="max-w-5xl px-4 pt-4 pb-8 mx-auto prose text-center sm:prose-h1:text-4xl prose-h1:text-2xl">
        <h1>{post?.title}</h1>
      </div>

      <div className={`${styles.section}`}>
        {post?.categories && (
          <ul className="flex justify-center gap-2 mb-6">
            {post?.categories.map((category) => (
              <li
                key={category.title}
                className="px-3 py-0.5 rounded-full bg-green-800/30 text-sm text-emerald-800 hover:underline"
              >
                <LinkComponent href={`/services/${category.slug.current}`}>{category.title}</LinkComponent>
              </li>
            ))}
          </ul>
        )}
        {post?.publishedAt && (
          <div className="mb-8 text-right">
            <time dateTime={post?.publishedAt} className="text-sm text-right text-gray-700">
              {format(parseISO(post?.publishedAt), 'd LLLL, yyyy')} - by {post?.authorName}
            </time>
          </div>
        )}

        <div className={styles.content}>
          <PortableText value={post?.body} components={ptComponents} />
        </div>
      </div>
    </article>
  );
};

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
