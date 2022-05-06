import { urlFor } from '@/utils/sanityImage';
import { format, parseISO } from 'date-fns';

export default function Portfolio({ work }) {
  return (
    <div className="relative px-4 pt-10 pb-20 bg-gray-50 sm:px-6 lg:pb-24 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="grid max-w-lg mx-auto mt-12 gap-x-6 gap-y-10 lg:grid-cols-3 lg:max-w-none">
          {work.map((post) => (
            <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="object-cover w-full h-48" src={urlFor(post.mainImage).width(800).url()} alt="" />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <p className="text-sm font-medium text-emerald-700">
                    <a href={'#'} className="hover:underline">
                      {'Category Name'}
                    </a>
                  </p>
                  <a href={`/work/${post.slug.current}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900 line-clamp-2 overflow-ellipsis">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500 line-clamp-2 overflow-ellipsis">{post.description}</p>
                  </a>
                </div>
                <div className="flex items-center mt-6">
                  {post.authorImage && (
                    <div className="flex-shrink-0">
                      <a href={'#'}>
                        <span className="sr-only">{post.authorName}</span>
                        <img
                          className="w-10 h-10 rounded-full"
                          src={urlFor(post.authorImage).width(100).url()}
                          alt=""
                        />
                      </a>
                    </div>
                  )}

                  <div className="ml-3">
                    {post.authorName && (
                      <p className="text-sm font-medium text-gray-900">
                        <a href={'#'} className="hover:underline">
                          {post.authorName}
                        </a>
                      </p>
                    )}

                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.publishedAt}>{format(parseISO(post.publishedAt), 'd LLLL, yyyy')}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
