export default function Hero() {
  return (
    <>
      {/* Hero section */}
      {/* <div className="relative">
        <div className="absolute inset-x-0 bottom-0 bg-gray-100 h-1/2" />
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                alt="People working on laptops"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-800 to-sky-700 mix-blend-multiply" />
            </div>
            <img
              src="/heuris-logo-label.svg"
              alt="heuris logo"
              width={300}
              height={300}
              className="relative px-4 pt-16 mx-auto sm:px-6 lg:px-8"
            />
            <div className="relative px-4 py-16 sm:px-6 sm:pb-24 lg:pb-32 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl">
                <span className="block text-white">Take control of your</span>
                <span className="block text-emerald-200">customer support</span>
              </h1>
              <p className="max-w-lg mx-auto mt-6 text-xl text-center text-emerald-200 sm:max-w-3xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-3 text-base font-medium bg-white border border-transparent rounded-md shadow-sm text-emerald-700 hover:bg-emerald-50 sm:px-8"
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-emerald-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                  >
                    Our work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="pt-10 text-center">
        <img
          src="/heuris-logo-label.svg"
          alt="heuris logo"
          width={350}
          height={350}
          className="relative px-4 pb-2 mx-auto sm:px-6 lg:px-8"
        />
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Data to enrich your</span>{' '}
          <span className="block text-indigo-600 xl:inline">online business</span>
        </h1>
        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
        </p>
        <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
