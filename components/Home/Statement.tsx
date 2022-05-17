import Image from 'next/image';
export default function Statement() {
  return (
    <div className="relative py-16 bg-white sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 w-full right-1/2 bg-gray-50 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            <div className="absolute shadow-xl rounded-2xl">
              <Image
                height={1000}
                width={1260}
                className="rounded-2xl"
                src="/crowdy_three.jpeg"
                alt="Crowdy Three Supply Chain Issues"
              />
            </div>
          </div>
        </div>

        <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Knowledge and theory underpinned by a creative mindset
            </h2>
            <div className="mt-6 space-y-6 text-gray-500">
              {/* <p className="text-base leading-7">BLAH</p> */}
              <p className="text-lg">
                Heuris applies advanced economic concepts and analysis to generate deep insights and novel innovations
                supporting inclusivity and sustainability in agro-food supply chains. Heuris originated from a concern
                that the major gap between research and impact objectives was increasingly failing to translate to
                social impacts in an efficient, or even effective, way.
              </p>
              <p className="text-lg">
                Our objective is to bridge this gap: to provide leading economic analysis/insights and to apply those to
                innovations that support inclusive and sustainable changes to agro-food supply systems and natural
                resource management problems.
              </p>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
