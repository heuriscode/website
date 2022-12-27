import Image from "next/legacy/image";
import Jack from '@/images/team/jack.jpeg';
import DanGregg from '@/images/team/dan-edit.jpeg';
import DanHill from '@/images/team/dan-h-edit.jpeg';

const people = [
  {
    name: 'Daniel Gregg',
    role: 'Principal Economist',
    imageUrl: DanGregg,
    bio: 'Daniel has worked as a natural resource/agricultural economist and agribusiness analyst for Central Queensland University, Waikato University, the University of Adelaide and the University of New England applying various analytical techniques, including supply chain analysis, and productivity and efficiency analysis.',
    linkedinUrl: 'https://www.linkedin.com/in/daniel-gregg-a21b5919a/',
  },
  {
    name: 'Jack McNicol',
    role: 'Principal Architect / Developer',
    imageUrl: Jack,
    bio: 'Jack is a Solutions Architect who has worked on various enterprise-level Australian businesses, corporations and educational institutions through their digital transformation journey.',
    twitterUrl: 'https://twitter.com/jackmcpickle',
    linkedinUrl: 'https://www.linkedin.com/in/jackmcpickle/',
  },
  {
    name: 'Daniel Hill',
    role: 'Economist',
    imageUrl: DanHill,
    bio: 'Dan is an economist specialising in agriculture, rural development, water and natural resources, providing support for data analysis, research and policy advice.',
    linkedinUrl: 'https://www.linkedin.com/in/daniel-hill4/',
  },
];

export function TeamSection() {
  return (
    <section id="team" aria-labelledby="team-title" className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>
            <p className="text-xl text-gray-700">A focus on solutions and &apos;doing&apos;</p>
            <p className="text-gray-500">
              Our team members balance innovation and research with an impact-driven focus. Achieving impactful change
              requires those that can act to do so by moving beyond theory to application. We act on the changes we see
              as important to achieve a more equitable and sustainable world. Our team work together to understand
              sustainable development and agro-food supply chain issues merging theoretical rigour and innovation with
              program design and web- technology expertise.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 md:grid-cols-3 lg:gap-x-8"
            >
              {people.map(person => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <Image
                        className="rounded-lg object-cover shadow-lg"
                        layout="fill"
                        src={person.imageUrl}
                        alt={person.name}
                      />
                    </div>
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3 className="font-display">{person.name}</h3>
                      <p className="text-primary-600">{person.role}</p>
                    </div>
                    <div className="text-base">
                      <p className="text-gray-500">{person.bio}</p>
                    </div>

                    <ul role="list" className="flex space-x-5">
                      {person.twitterUrl && (
                        <li>
                          <a
                            href={person.twitterUrl}
                            target="_blank"
                            className="text-gray-400 hover:text-gray-500"
                            rel="noreferrer"
                          >
                            <span className="sr-only">Twitter</span>
                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                      )}
                      <li>
                        <a
                          href={person.linkedinUrl}
                          target="_blank"
                          className="text-gray-500 hover:text-gray-600"
                          rel="noreferrer"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
