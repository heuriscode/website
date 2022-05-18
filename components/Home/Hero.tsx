import Image from 'next/image';
import { LinkComponent } from '../Link';

import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';

// const ServicesCard = [
//   {
//     title: 'Agro-food supply chain inclusivity and sustainability',
//     href: '#',
//   },
//   {
//     title: 'Inclusive rural development',
//     href: '#',
//   },
//   {
//     title: 'Quality assurance innovations and governance for agro-food systems',
//     href: '#',
//   },
//   {
//     title: 'Agro-food supply chain insights',
//     href: '#',
//   },
//   {
//     title: 'Behavioural analysis and intervention',
//     href: '#',
//   },
// ];

export default function Hero({ services }) {
  return (
    <>
      <div className="px-4 pt-6 mx-auto mb-2 text-center sm:pt-10 max-w-7xl ">
        <div className="max-w-[280px] sm:max-w-none mx-auto">
          <Image
            src="/heuris-logo-label.svg"
            alt="heuris logo"
            width={340}
            height={340}
            className="relative px-4 pb-2 mx-auto sm:px-6 lg:px-8"
          />
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
          <div className="block mt-3">Economic analysis and tech-driven innovation on</div>
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="grid my-6 sm:my-8"
        >
          {services?.map((service) => (
            <SwiperSlide
              key={service._id}
              className="flex items-center justify-center px-3 py-3 text-white bg-green-700 rounded hover:bg-green-800"
            >
              <LinkComponent href={`/services/${service.slug.current}`}>{service.title}</LinkComponent>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
