import { useRouter } from 'next/router';
import { NextSeo, LocalBusinessJsonLd } from 'next-seo';
import Head from 'next/head';
import Script from 'next/script';

export default function Header(props) {
  const router = useRouter();
  const currentDomain = 'https://heuris.com';
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

      <LocalBusinessJsonLd
        type="LocalBusiness"
        id={currentDomain}
        name="Quoc Huy Technique"
        description="Công ty TNHH Kỹ thuật Quốc Huy được thành lập từ năm 1999, có nhiều kinh nghiệm trong lĩnh vực kiểm tra không phá hủy (NDT), đo lường, thử nghiệm."
        url="https://ndt-vn.com/contact"
        telephone="+84 283 894 0623"
        address={{
          streetAddress: '209 Bạch Đằng',
          addressLocality: 'P.3, Q. Gò Vấp',
          addressRegion: 'HCM',
          postalCode: '700000',
          addressCountry: 'VN',
        }}
        geo={{
          latitude: '10.815920677682236',
          longitude: '106.67614333864016',
        }}
        images={['https://ndt-vn.com/logo.png']}
        sameAs={[
          'https://www.facebook.com/QuocHuyCompany',
          'https://ndt-vn.com/',
          'https://quochuy.com/',
          'https://www.youtube.com/channel/UCDpuE4-ngw8vaOzQvx26wvg',
        ]}
        openingHours={[
          {
            opens: '08:00',
            closes: '17:00',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          },
          {
            opens: '8:00',
            closes: '12:00',
            dayOfWeek: 'Saturday',
          },
        ]}
        priceRange="$$$$"
      />
    </>
  );
}
