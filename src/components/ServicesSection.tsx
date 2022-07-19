import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartMixed,
  faChartNetwork,
  faChartWaterfall,
  faEarthAsia,
  faMoneyBillWheat,
  faValueAbsolute,
} from '@fortawesome/pro-solid-svg-icons';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import { ButtonLink } from './Button';

const features = [
  {
    name: 'Behavioural analysis',
    description:
      'The analysis of behaviour change has important implications for program evaluation and intervention design. Understanding behavioural biases and control points in decision making can better inform how you design, adapt, and target interventions and improve predictions around eventual behaviour.',
    ctaLink: '#',
    icon: props => <FontAwesomeIcon icon={faChartNetwork} {...props} />,
  },
  {
    name: 'Productivity analysis',
    description:
      'Productivity analysis helps you understand how efficient you are in converting inputs influence your outputs and can decompose this efficiency to understand what changes can be made to improve efficiency.',
    ctaLink: '#',
    icon: props => <FontAwesomeIcon icon={faChartMixed} {...props} />,
  },
  {
    name: 'Impact evaluation design',
    description:
      'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
    ctaLink: '#',
    icon: props => <FontAwesomeIcon icon={faValueAbsolute} {...props} />,
  },
  {
    name: 'Water & natural resource policy',
    description:
      'At Heuris we are leading experts in water and natural resource economics policy. We have extensive knowledge and experience of investment appraisal process, water allocation planning, and water and natural capital markets',
    ctaLink: '#',
    icon: props => <FontAwesomeIcon icon={faChartWaterfall} {...props} />,
  },
  {
    name: 'Natural capital & ecosystem services',
    description:
      'Natural capital is the stock natural ecosystems such as soil, water, air, plants, and animals that in combination provide a range of benefits. These benefits, or ecosystem services, go beyond the provision of materials such as timber and include regulation, cultural and supporting services in which humans derive benefits from.',
    ctaLink: '#',
    icon: props => <FontAwesomeIcon icon={faEarthAsia} {...props} />,
  },
  {
    name: 'Agri-food supply chain policy ',
    description:
      'Linked processes in the agricultural production of food, involving all stages of production, processing, trading, distribution, and consumption. These supply chains are responsible for providing essential products and underpin value-creation in agro-food industries.',
    ctaLink: '#',
    icon: props => <FontAwesomeIcon icon={faMoneyBillWheat} {...props} />,
  },
];

function Feature({ feature, className = '', ...props }) {
  return (
    <div
      className={clsx(
        'group relative mb-8 flex w-[300px] flex-col items-start whitespace-normal rounded-md bg-white/80 p-6 md:w-[340px]'
      )}
      {...props}
    >
      <div className="absolute top-0 inline-block p-5 leading-none transform -translate-y-1/2 rounded-md shadow-lg bg-primary-600">
        <feature.icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="mt-4 text-xl text-gray-900 font-display">{feature.name}</h3>
      <p className="mt-2 text-sm text-gray-800">{feature.description}</p>
      <span className="flex-grow"></span>
      <ButtonLink href={feature.ctaLink} className="mt-4 rounded-md">
        Find out more
      </ButtonLink>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-title" className="pt-16 pb-10 hero-bg sm:pb-16 sm:pt-20 lg:pb-20">
      <Container>
        <div className="max-w-2xl mx-auto md:text-center">
          <h2 id="services-title" className="text-3xl tracking-tight text-white font-display sm:text-4xl">
            Services
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-200">
            We apply economic and behavioural theory, along with expertise in policy design, impact evaluation, and data
            science/analytics to define problems, consider solution pathways, and to measure the <br />
            effectiveness of proposed solutions.
          </p>
        </div>
        <div className="flex mt-10 overflow-x-auto overflow-y-visible md:mt-20 md:justify-center">
          <div className="relative z-10 flex gap-4 px-4 pt-8 space-x-4 whitespace-nowrap md:grid md:grid-cols-2 md:space-x-0 md:whitespace-normal lg:grid-cols-3">
            {features.map(feature => (
              <Feature feature={feature} key={feature.name} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
