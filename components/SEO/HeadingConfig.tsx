import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

export default function Header() {
  const router = useRouter();
  const URL = 'https://heuris.com.au';
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/heuris-logo.svg" />
      </Head>

      <NextSeo
        titleTemplate="%s - Heuris"
        canonical={`${URL}${router.asPath}`}
        openGraph={{
          url: `${URL}${router.asPath}`,
          locale: 'au',
          site_name: 'Heuris',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
    </>
  );
}
