import { CashIcon, ChartSquareBarIcon, ChipIcon } from '@heroicons/react/outline';
import Image from 'next/image';

const supportLinks = [
  {
    name: 'Economic Analysis',
    href: '/contact',
    description:
      'Leading data collection expertise including behavioural analysis and rapid assessment methodologies for impact evaluation.',
    icon: CashIcon,
  },
  {
    name: 'Strategy',
    href: '/contact',
    description:
      'Our strategy services help you develop a clear and actionable plan to achieve your business goals. We work with you to understand your unique situation and develop custom solutions that fit your needs.',
    icon: ChartSquareBarIcon,
  },
  {
    name: 'Tech Innovation',
    href: '/contact',
    description:
      'We help businesses and organisations innovate and stay ahead of the curve. We offer consulting, and development services to help you identify and implement a solution that best matches your needs.',
    icon: ChipIcon,
  },
];

export function AboutUsSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
            layout="fill"
          />
          <div className="absolute inset-0 bg-charcoal-500 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            At Heuris
          </h2>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            We use our knowledge and theory, underpinned by a creative mindset, to enabling the discovery of new and
            innovative solutions to the most complex problems.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map(link => (
            <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-primary-600 p-5 shadow-lg">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                <a href={link.href} className="text-base font-medium text-primary-700 hover:text-primary-600">
                  Contact us<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
