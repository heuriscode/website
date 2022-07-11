import Head from 'next/head';

// import { CallToAction } from '@/components/CallToAction';
// import { Faqs } from '@/components/Faqs';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
// import { Pricing } from '@/components/Pricing';
import { PrimaryFeatures } from '@/components/PrimaryFeatures';
import { SecondaryFeatures } from '@/components/SecondaryFeatures';
// import { Testimonials } from '@/components/Testimonials';
import { BlogSection } from '@/components/BlogSection';
import { TeamSection } from '@/components/TeamSection';
import { AboutUsSection } from '@/components/AboutUs';

export default function Home() {
  return (
    <>
      <Head>
        <title>Heuris - Economic analysis and tech-driven innovation</title>
        <meta name="description" content="Heuris - Economic analysis and tech-driven innovation" />
      </Head>
      <Header />
      <main>
        <Hero />
        <AboutUsSection />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <TeamSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
