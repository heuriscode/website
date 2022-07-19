import Image from 'next/image';
import clsx from 'clsx';
import DanGregg from '@/images/team/dan-edit.jpeg';
import DanHill from '@/images/team/dan-h-edit.jpeg';

const posts = [
  {
    title: 'ADaPTing Ugandan coffee supply chains',
    href: '/blog/adapting-ugandan-coffee-supply-chains',
    category: {
      name: 'Behavioural analysis',
      href: '/blog/adapting-ugandan-coffee-supply-chains',
      color: 'bg-orange-100 text-orange-800',
    },
    description:
      'ADaPTing Ugandan coffee supply chains - Digital procurement and payment systems to achieve inclusive and scalable agro-food value chains.',
    date: 'March 16, 2022',
    datetime: '2022-03-16',
    author: {
      name: 'Dan Gregg',
      href: '/blog/adapting-ugandan-coffee-supply-chains',
      imageUrl: DanGregg,
    },
    readingTime: '7 min',
  },
  {
    title: 'The Crowdy Three in agro food supply chains',
    href: '/blog/the-crowdy-three-in-agro-food-supply-chains',
    category: {
      name: 'Info',
      href: '/blog/the-crowdy-three-in-agro-food-supply-chains',
      color: 'bg-green-100 text-green-800',
    },
    description:
      'The Crowdy Three and how traditional supply chain models fail as development mechanisms for smallholder farmers.',
    date: 'May 17, 2022',
    datetime: '2022-05-17',
    author: {
      name: 'Daniel Hill',
      href: '/blog/the-crowdy-three-in-agro-food-supply-chains',
      imageUrl: DanGregg,
    },
    readingTime: '11 min',
  },
  {
    title: 'Establishing behaviour change',
    href: '/blog/establishing-behaviour-change',
    category: {
      name: 'Behavioural analysis',
      href: '/blog/establishing-behaviour-change',
      color: 'bg-orange-100 text-orange-800',
    },
    description:
      'The analysis of behavioural change covers a large area of study crossing multiple disciplines including social studies, economics and psychology.',
    date: 'May 5, 2022',
    datetime: '2022-05-5',
    author: {
      name: 'Dan Hill',
      href: '/blog/establishing-behaviour-change',
      imageUrl: DanHill,
    },
    readingTime: '8 min',
  },
];

export function BlogSection() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-title"
      className="px-4 pt-16 pb-20 bg-white sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
    >
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 font-display sm:text-4xl">
            Blog Articles
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">A selection of our latest articles.</p>
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
                <p className="text-xl text-gray-900 font-display">{post.title}</p>
                <p className="mt-3 text-base text-gray-500">{post.description}</p>
              </a>
              <div className="flex items-center mt-6">
                <div className="flex-shrink-0">
                  <a href={post.author.href}>
                    <span className="sr-only">{post.author.name}</span>
                    <div className="w-12 aspect-w-3 aspect-h-3">
                      <Image
                        className="object-cover w-10 h-10 rounded-full"
                        layout="fill"
                        src={post.author.imageUrl}
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
