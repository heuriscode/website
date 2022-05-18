import Layout from '@/components/Layout/Layout';
import { Header } from '@/components/Header';
import StaffsCard from '@/components/StaffsCard';
import { DefaultSeo } from '@/components/SEO/SEO';
import { SEOPropsData } from '@/utils/types';
import client from '@/client';
import groq from 'groq';

export default function Teams({ heuris, heuristech }) {
  // console.log(heuris);
  // console.log(heuristech);

  const data: SEOPropsData = {
    name: 'Teams',
    title: 'Our Experts',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };
  return (
    <Layout>
      <DefaultSeo seoData={data} />
      <Header name={data.name} title={data.title} description={data.description} />
      <StaffsCard heuris={heuris} heuristech={heuristech} />
    </Layout>
  );
}

export async function getStaticProps() {
  const teamQuery = groq`*[_type == "author" && $team in team[]]{
      'cv': cv.asset->url,
      email,
      linkedin,
      name,
      slug,
      image,
      role,
      }`;

  const heuris = await client.fetch(teamQuery, { team: 'heuris' });
  const heuristech = await client.fetch(teamQuery, { team: 'heuristech' });

  return {
    props: {
      heuris,
      heuristech,
    },
    revalidate: 10,
  };
}

const people = {
  heuris: [
    {
      name: 'Daniel Gregg',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna.',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Dan',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna.',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
  ],
  heuristechs: [
    {
      name: 'Tom',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna.',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Jack',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna.',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
  ],
};
