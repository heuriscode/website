import Image from 'next/image';
import clsx from 'clsx';
import DanGregg from '@/images/team/dan-edit.jpeg';

const posts = [
  {
    title: 'Boost your conversion rate',
    href: '/blog/my-post',
    category: { name: 'Article', href: '/blog/my-post', color: 'bg-indigo-100 text-indigo-800' },
    description:
      'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Dan Gregg',
      href: '/blog/my-post',
      imageUrl: DanGregg,
    },
    readingTime: '6 min',
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '/blog/my-post',
    category: { name: 'News', href: '/blog/my-post', color: 'bg-orange-100 text-orange-800' },
    description:
      'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    author: {
      name: 'Dan Gregg',
      href: '/blog/my-post',
      imageUrl: DanGregg,
    },
    readingTime: '4 min',
  },
  {
    title: 'Improve your customer experience',
    href: '/blog/my-post',
    category: { name: 'Case Study', href: '/blog/my-post', color: 'bg-green-100 text-green-800' },
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Dan Gregg',
      href: '/blog/my-post',
      imageUrl: DanGregg,
    },
    readingTime: '11 min',
  },
];

export function BlogSection() {
  return (
    <section
      id="news"
      aria-labelledby="news-title"
      className="px-4 pt-16 pb-20 bg-white sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
    >
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Recent News</h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
            arcu.
          </p>
        </div>
        <div className="grid gap-16 pt-12 mt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map(post => (
            <div key={post.title}>
              <div>
                <a href={post.category.href} className="inline-block">
                  <span
                    className={clsx(
                      post.category.color,
                      'inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium'
                    )}
                  >
                    {post.category.name}
                  </span>
                </a>
              </div>
              <a href={post.href} className="block mt-4">
                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                <p className="mt-3 text-base text-gray-500">{post.description}</p>
              </a>
              <div className="flex items-center mt-6">
                <div className="flex-shrink-0">
                  <a href={post.author.href}>
                    <span className="sr-only">{post.author.name}</span>
                    <div className="w-12 aspect-w-3 aspect-h-3">
                      <Image
                        className="w-10 h-10 rounded-full"
                        src={post.author.imageUrl}
                        layout="fill"
                        alt={post.author.name}
                      />
                    </div>
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href={post.author.href}>{post.author.name}</a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} read</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
