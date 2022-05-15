export default function Hero() {
  return (
    <>
      <div className="px-4 pt-10 mx-auto mb-2 text-center max-w-7xl ">
        <img
          src="/heuris-logo-label.svg"
          alt="heuris logo"
          width={400}
          height={400}
          className="relative px-4 pb-2 mx-auto sm:px-6 lg:px-8"
        />
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Economic analysis and tech-driven innovation for</span>{' '}
          <span className="block text-transparent from-green-700 to-emerald-800 bg-gradient-to-r bg-clip-text xl:inline">
            agro-food supply chain issues and rural development
          </span>
        </h1>
        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Heuris applies advanced economic concepts and analysis to generate deep insights and novel innovations supporting inclusivity and sustainability in agro-food supply chains.
        </p>
        <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md from-green-600 to-emerald-700 bg-gradient-to-r hover:from-green-700 hover:to-emerald-700 md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-green-800 bg-white border border-transparent rounded-md hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
