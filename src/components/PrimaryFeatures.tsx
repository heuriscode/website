import { useEffect, useState } from 'react';
import Image from "next/legacy/image";
import { Tab } from '@headlessui/react';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import backgroundImage from '@/images/background-features.jpg';
import screenshotExpenses from '@/images/screenshots/expenses.png';
import screenshotPayroll from '@/images/screenshots/payroll.png';
import screenshotReporting from '@/images/screenshots/reporting.png';
import screenshotVatReturns from '@/images/screenshots/vat-returns.png';

const features = [
  {
    title: 'Behavioural analysis & interventions',
    description:
      'The analysis of behavioural change covers a large area of study crossing multiple disciplines including social studies, economics, and psychology',
    image: screenshotPayroll,
  },
  {
    title: 'Productivity analysis & benchmarking',
    description:
      'Productivity analysis helps you understand how efficient you are in converting inputs influence your outputs and can decompose this efficiency to understand what changes can be made to improve efficiency.',
    image: screenshotExpenses,
  },
  {
    title: 'Impact evaluation design & econometric analysis',
    description:
      'An impact evaluation is an approach to understand the impacts produced by an intervention or program, whether these be positive or negative.',
    image: screenshotVatReturns,
  },
  {
    title: 'Water & natural resource policy',
    description:
      'The efficient allocation and conservation of scarce natural resources is increasingly necessary to maintain climate resilience and economic.',
    image: screenshotReporting,
  },
];

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal');

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)');

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal');
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener('change', onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative pt-8 pb-20 overflow-hidden hero-bg sm:py-20"
    >
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-[44%] -translate-y-[42%]">
        <Image src={backgroundImage} alt="" width={2245} height={1636} layout="fixed" unoptimized />
      </div> */}
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 id="services-title" className="text-3xl tracking-tight text-white font-display sm:text-4xl md:text-5xl">
            Services
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            We love the study and design of impact assessments.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="grid items-center grid-cols-1 pt-10 mt-16 gap-y-2 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="flex pb-4 -mx-4 overflow-x-auto sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex px-4 space-x-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:space-y-1 lg:space-x-0 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                        {
                          'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10':
                            selectedIndex === featureIndex,
                          'hover:bg-white/10 lg:hover:bg-white/5': selectedIndex !== featureIndex,
                        }
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx('font-display text-lg [&:not(:focus-visible)]:focus:outline-none', {
                            'text-blue-600 lg:text-white': selectedIndex === featureIndex,
                            'text-blue-100 hover:text-white lg:text-white': selectedIndex !== featureIndex,
                          })}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx('mt-2 hidden text-sm lg:block', {
                          'text-white': selectedIndex === featureIndex,
                          'text-blue-100 group-hover:text-white': selectedIndex !== featureIndex,
                        })}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map(feature => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 -top-[6.5rem] -bottom-[4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative max-w-2xl mx-auto text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="relative mt-10 aspect-[1085/730] w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        src={feature.image}
                        alt=""
                        layout="fill"
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  );
}
