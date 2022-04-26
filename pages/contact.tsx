import Layout from '@/components/Layout/Layout';
import ContactPage from '@/components/ContactPage';
import { DefaultSeo } from '@/components/SEO/SEO';

const data = {
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
