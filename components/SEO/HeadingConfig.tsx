import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

export default function Header(props) {
  const router = useRouter();
  const currentDomain = 'https://heuris.com.au';
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/heuris-logo.svg" />
      </Head>

      <NextSeo
        titleTemplate="%s - Heuris"
        description={props.description}
        canonical={`${currentDomain}${router.asPath == '/index' ? '' : router.asPath}`}
        openGraph={{
          url: `${currentDomain}${router.asPath == '/index' ? '' : router.asPath}`,
          type: 'website',
          locale: 'au',
          title: `${props.title}`,
          description: `${props.description}`,
          site_name: 'Heuris',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
    </>
  );
}
