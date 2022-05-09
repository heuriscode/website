import { NextSeo, BreadcrumbJsonLd } from 'next-seo';
import { SEOPropsType } from '@/utils/types';

const URL = 'https://heuris.com.au';

export function DefaultSeo({ seoData }: SEOPropsType) {
  return (
    <NextSeo
      title={seoData.title}
      description={seoData.description}
      openGraph={{
        type: 'website',
        images: [
          {
            url: `${URL}/heuris-logo.svg`,
            alt: `${seoData.title}`,
          },
        ],
      }}
      twitter={{ cardType: 'summary' }}
    />
  );
}

export function ArticleSeo({ seoData }: SEOPropsType) {
  return (
    <NextSeo
      title={seoData.title}
      description={seoData.description}
      openGraph={{
        title: seoData.title,
        description: seoData.description,
        type: 'article',
        article: {
          publishedTime: seoData.publishedAt,
          modifiedTime: seoData.updatedAt,
          authors: [`${seoData.authorName}`],
          tags: seoData.tags,
        },
        images: [
          {
            url: seoData?.coverImage,
            width: 1200,
            height: 630,
            alt: `Cover of ${seoData.title}`,
          },
        ],
      }}
      twitter={{ cardType: 'summary_large_image' }}
    />
  );
}
