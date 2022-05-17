import { LinkComponent } from '../Link';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';

export default function Cards() {
  return (
    <>
      {/* Alternating Feature Sections */}
      <div className="relative pt-20 pb-32 overflow-hidden lg:pt-28">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Leading data collection expertise including behavioural analysis and rapid assessment methodologies
                    for impact evaluation
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia
                    porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus
                    viverra dui tellus ornare pharetra.
                  </p>
                  <div className="mt-6">
                    <LinkComponent
                      href="#"
                      className="inline-flex px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r from-emerald-600 to-green-600 bg-origin-border hover:from-emerald-700 hover:to-green-700"
                    >
                      Learn more
                    </LinkComponent>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden mt-12 sm:mt-16 lg:mt-0 sm:block">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="w-full shadow-lg rounded-xl lg:w-auto lg:h-full"
                >
                  <SwiperSlide>
                    <img
                      src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                      alt="Customer profile user interface"
                      className="lg:max-w-3xl"
                    />
                    <LinkComponent
                      href="#"
                      className="absolute w-full px-6 py-3 text-white bottom-5 from-green-700 to-green-800 bg-gradient-to-l"
                    >
                      Link title
                    </LinkComponent>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                      alt="Customer profile user interface"
                      className="lg:max-w-3xl"
                    />
                    <LinkComponent
                      href="#"
                      className="absolute w-full px-6 py-3 text-white bottom-5 from-green-700 to-green-800 bg-gradient-to-l"
                    >
                      Link title
                    </LinkComponent>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 lg:mt-28">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    A focus on solutions and &quot;doing&quot;
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia
                    porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus
                    viverra dui tellus ornare pharetra.
                  </p>
                  <div className="mt-6">
                    <LinkComponent
                      href="#"
                      className="inline-flex px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r from-emerald-600 to-green-600 bg-origin-border hover:from-emerald-700 hover:to-green-700"
                    >
                      Learn more
                    </LinkComponent>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden mt-12 sm:mt-16 lg:mt-0 lg:col-start-1 sm:block">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="w-full shadow-lg rounded-xl lg:w-auto lg:h-full"
                >
                  <SwiperSlide>
                    <img
                      src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                      alt="Customer profile user interface"
                      className="lg:max-w-3xl"
                    />
                    <LinkComponent
                      href="#"
                      className="absolute w-full px-6 py-3 text-right text-white bottom-5 from-green-700 to-green-800 bg-gradient-to-r"
                    >
                      Link title
                    </LinkComponent>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                      alt="Customer profile user interface"
                      className="lg:max-w-3xl"
                    />
                    <LinkComponent
                      href="#"
                      className="absolute w-full px-6 py-3 text-right text-white bottom-5 from-green-700 to-green-800 bg-gradient-to-r"
                    >
                      Link title
                    </LinkComponent>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 lg:mt-28">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">What we do</h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia
                    porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus
                    viverra dui tellus ornare pharetra.
                  </p>
                  <div className="mt-6">
                    <LinkComponent
                      href="#"
                      className="inline-flex px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r from-emerald-600 to-green-600 bg-origin-border hover:from-emerald-700 hover:to-green-700"
                    >
                      Learn more
                    </LinkComponent>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden mt-12 sm:mt-16 lg:mt-0 sm:block">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="w-full shadow-lg rounded-xl lg:w-auto lg:h-full"
                >
                  <SwiperSlide>
                    <img
                      src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                      alt="Customer profile user interface"
                      className="lg:max-w-3xl"
                    />
                    <LinkComponent
                      href="#"
                      className="absolute w-full px-6 py-3 text-white bottom-5 from-green-700 to-green-800 bg-gradient-to-l"
                    >
                      Link title
                    </LinkComponent>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                      alt="Customer profile user interface"
                      className="lg:max-w-3xl"
                    />
                    <LinkComponent
                      href="#"
                      className="absolute w-full px-6 py-3 text-white bottom-5 from-green-700 to-green-800 bg-gradient-to-l"
                    >
                      Link title Link title Link title Link title Link title Link title Link title Link title Link title
                    </LinkComponent>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
