import clsx from 'clsx';
import { Container } from '@/components/Container';
import { ButtonLink } from './Button';
import { ChartMixedIcon } from './icons/ChartMixedIcon';
import { FileCheckIcon } from './icons/FileCheckIcon';
import { HeadSideBrainIcon } from './icons/HeadSideBrainIcon';
import { LinkIcon } from './icons/LinkIcon';
import { SeedlingIcon } from './icons/SeedlingIcon';
import { RobotAstromechIcon } from './icons/RobotAstromechIcon';

const features = [
  {
    name: 'Behavioural analysis',
    description:
      'Behavioural analysis, experimental economics, behavioural interventions, behavioural change measurement and evaluation, and program learning insights/systems for behavioural change.',
    ctaLink: '/services/behavioural-analysis',
    icon: props => <HeadSideBrainIcon {...props} />,
  },
  {
    name: 'Econometric analysis',
    description: 'Productivity and efficiency analysis, non-market valuation, impact evaluation.',
    ctaLink: '/services/econometric-analysis',
    icon: props => <ChartMixedIcon {...props} />,
  },
  {
    name: 'Policy review and analysis',
    description:
      'Water policy, development policy, agricultural policy, environmental policy, impact pathways, policy design, implicit incentives, policy evaluation.',
    ctaLink: '/services/policy-review-analysis',
    icon: props => <FileCheckIcon {...props} />,
  },
  {
    name: 'Supply chain innovation',
    description:
      'Smallholder-inclusive value chains, agro-food systems, achieving Sustainable Development Goals (SDGs), local food systems.',
    ctaLink: '/services/supply-chain-innovation',
    icon: props => <LinkIcon {...props} />,
  },
  {
    name: 'Sustainability systems',
    description: 'Sustainability communication, sustainability governance, ESG, non-extractive development models.',
    ctaLink: '/services/sustainability-systems',
    icon: props => <SeedlingIcon {...props} />,
  },
  {
    name: 'Web technologies',
    description:
      'Quality assurance, certification systems, agro-food procurement and traceability systems, automated data collection/evaluation programs.',
    ctaLink: '/services/web-technologies',
    icon: props => <RobotAstromechIcon {...props} />,
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
