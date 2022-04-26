import { NextSeo, BreadcrumbJsonLd } from 'next-seo';
import Head from 'next/head';

export function DefaultSeo({ seoData }) {
  return (
    <NextSeo
      title={seoData.title}
      description={seoData.description}
      openGraph={{
        images: [
          {
            url: `/heuris-logo.svg`,
            alt: `${seoData.title}`,
          },
        ],
      }}
      twitter={{ cardType: 'summary_large_image' }}
    />
  );
}

// export function NewsSeo({ article }) {
//   return (
//     <>
//       <NextSeo
//         title={article.title}
//         description={`${article.description}`}
//         openGraph={{
//           images: [
//             {
//               url: `https://opengraph-psi.vercel.app/api/blog?banner=${article.image.data.attributes.url}&templateTitle=${article.title}&theme=light`,
//               alt: `${article.title}`,
//               width: 1200,
//               height: 630,
//             },
//           ],
//         }}
//         twitter={{ cardType: 'summary_large_image' }}
//       />
//       <BreadcrumbJsonLd
//         itemListElements={[
//           {
//             position: 1,
//             name: 'Bài Viết',
//             item: 'https://ndt-vn.com/news',
//           },
//           {
//             position: 2,
//             name: `${article.title}`,
//             item: `https://ndt-vn.com/news/${article.slug}`,
//           },
//         ]}
//       />
//       <Head>
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: `{"@context":"https://schema.org",
//             "@type":"Article",
//             "datePublished":"${article.updatedAt}",
//             "description":"${article.description}",
//             "mainEntityOfPage":{"@type":"WebPage","@id": "https://ndt-vn.com/news/${article.slug}"},
//             "headline":"${article.title}",
//             "image":["https://opengraph-psi.vercel.app/api/blog?banner=${article.image.data.attributes.url}&templateTitle=${article.title}&theme=light"],
//             "dateModified":"${article.updatedAt}",
//             "author":[{"@type":"Person","name":"Quốc Huy Technique", "url":"ndt-vn.com"}],
//             "publisher":{"@type":"Organization",
//             "name":"Quốc Huy Technique",
//             "logo":{"@type":"ImageObject","url":"https://ndt-vn.com/favicon.png"}}}`,
//           }}
//         />
//       </Head>
//     </>
//   );
// }
