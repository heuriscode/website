import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ReactNode } from 'react';
import { BlogPixelBgd } from '../BlogPixelBgd';
import { BlogImage } from '../BlogImage';

export interface BlogLayoutProps {
  children: ReactNode;
  title: string;
  summary?: string;
  subtitle?: string;
}

const components = {
  img: BlogImage,
};

// for blog listing
// https://www.section.io/engineering-education/static-nextjs-markdown-blog-typescript-mdx-tailwindcss/

export default function BlogLayout({ children, title, summary, subtitle }: BlogLayoutProps) {
  return (
    <>
      <Head>
        <title>{`${title} - Blog - Heuris`}</title>
        <meta name="description" content={summary} />
      </Head>
      <Header />
      <MDXProvider components={components}>
        <main>
          <div className="relative py-16 overflow-hidden bg-white">
            <BlogPixelBgd />
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="mx-auto text-lg max-w-prose">
                <h1>
                  {subtitle && (
                    <span className="block text-base font-semibold tracking-wide text-center uppercase text-primary-600">
                      {subtitle}
                    </span>
                  )}
                  <span className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
                    {title}
                  </span>
                </h1>
                {summary && <p className="my-8 text-xl leading-8 text-gray-700">{summary}</p>}
              </div>
              <div className="mx-auto mt-10 prose prose-lg text-gray-500 prose-primary-500">{children}</div>
            </div>
          </div>
        </main>
      </MDXProvider>
      <Footer />
    </>
  );
}
