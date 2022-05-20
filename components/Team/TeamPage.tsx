import { PortableText } from '@portabletext/react';
import { urlFor } from '@/utils/sanityImage';
import { LinkComponent } from '@/components/Link';
import { AiFillMail, AiFillFile, AiFillLinkedin } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';
import { TeamPageProps } from '@/utils/types';

export const TeamPage = ({ team }: TeamPageProps) => {
  return (
    <div className="container grid-cols-12 gap-8 px-4 sm:py-6 sm:grid">
      <div className="col-span-4">
        <div className="aspect-w-3 aspect-h-2">
          <img src={urlFor(team?.image).width(800).url()} alt={''} className="object-cover my-1 rounded shadow-lg" />
        </div>
        <div className="mt-6 mb-4">
          <h1 className="text-3xl">{team?.name}</h1>
          <h2 className="text-lg text-green-800">{team?.role}</h2>
        </div>
        <ul role="list" className="flex mb-5 space-x-5">
          <li>
            <a href={team.cv} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-green-800">
              <span className="sr-only">CV</span>
              <AiFillFile size={22} title="CV" />
            </a>
          </li>
          <li>
            <a href={team.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-green-800">
              <span className="sr-only">LinkedIn</span>
              <AiFillLinkedin size={22} title="LinkedIn" />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${team.email}`}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-green-800"
            >
              <span className="sr-only">Email</span>
              <AiFillMail size={22} title={team.email} />
            </a>
          </li>
        </ul>
      </div>

      <div className="col-span-8 mx-auto">
        <div className="max-w-3xl prose ">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <LinkComponent href={'/teams'} className="text-gray-500 no-underline hover:underline hover:text-green-800">
              Our Team
            </LinkComponent>
            <FiChevronRight />
            <div>{team?.name}</div>
          </div>
          <PortableText value={team?.bio} components={ptComponents} />
        </div>
      </div>
    </div>
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
