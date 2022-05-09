import Layout from '@/components/Layout/Layout';
import ContactPage from '@/components/ContactPage';
import { DefaultSeo } from '@/components/SEO/SEO';
import { SEOPropsData } from '@/utils/types';

const data: SEOPropsData = {
  title: 'Contact',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export default function Contact() {
  return (
    <Layout>
      <DefaultSeo seoData={data} />
      <ContactPage />
    </Layout>
  );
}
