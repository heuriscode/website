import { AiFillMail, AiFillFile, AiFillLinkedin } from 'react-icons/ai';
import { TeamsCardType } from '@/utils/types';
import { LinkComponent } from './Link';
import { urlFor } from '@/utils/sanityImage';

export default function TeamsCard({ heuris, heuristech }: TeamsCardType) {
  console.log(heuris);

  return (
    <div className="bg-white">
      {/* Heuris */}
      {heuris && (
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Heuris</h2>
              <p className="text-xl text-gray-500">
                Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum
                vestibulum suspendisse.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              >
                {heuris?.map((person) => (
                  <li key={person?.name}>
                    <div className="space-y-4">
                      <div className="aspect-w-3 aspect-h-2">
                        <img
                          className="object-cover rounded-lg shadow-lg"
                          src={urlFor(person?.image).width(1000).url()}
                          alt=""
                        />
                      </div>
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>
                          <LinkComponent href={`/teams/${person.slug.current}`}>{person.name}</LinkComponent>
                        </h3>
                        <p className="text-green-800">
                          <LinkComponent href={`/teams/${person.slug.current}`}>{person.role} </LinkComponent>
                        </p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{person.bio}</p>
                      </div>

                      <ul role="list" className="flex space-x-5">
                        <li>
                          <a
                            href={person.cv}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 hover:text-green-800"
                          >
                            <span className="sr-only">CV</span>
                            <AiFillFile size={22} title="CV" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 hover:text-green-800"
                          >
                            <span className="sr-only">LinkedIn</span>
                            <AiFillLinkedin size={22} title="LinkedIn" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={`mailto:${person.email}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 hover:text-green-800"
                          >
                            <span className="sr-only">Email</span>
                            <AiFillMail size={22} title={person.email} />
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
      )}

      {/* Heuristechs */}
      {heuristech && (
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4 sm:order-last">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Heuristechs</h2>
              <p className="text-xl text-gray-500">
                Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum
                vestibulum suspendisse.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              >
                {heuristech?.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-4">
                      <div className="aspect-w-3 aspect-h-2">
                        <img
                          className="object-cover rounded-lg shadow-lg"
                          src={urlFor(person?.image).width(1000).url()}
                          alt=""
                        />
                      </div>
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>
                          <LinkComponent href={`/teams/${person.slug.current}`}>{person.name}</LinkComponent>
                        </h3>
                        <p className="text-green-800">
                          <LinkComponent href={`/teams/${person.slug.current}`}>{person.role} </LinkComponent>
                        </p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{person.bio}</p>
                      </div>

                      <ul role="list" className="flex space-x-5">
                        <li>
                          <a
                            href={person.cv}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 hover:text-green-800"
                          >
                            <span className="sr-only">CV</span>
                            <AiFillFile size={22} title="CV" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 hover:text-green-800"
                          >
                            <span className="sr-only">LinkedIn</span>
                            <AiFillLinkedin size={22} title="LinkedIn" />
                          </a>
                        </li>
                        <li>
                          <a
                            href={`mailto:${person.email}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 hover:text-green-800"
                          >
                            <span className="sr-only">Email</span>
                            <AiFillMail size={22} title={person.email} />
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
      )}
    </div>
  );
}
