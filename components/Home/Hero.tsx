export default function Hero() {
  return (
    <>
      <div className="pt-10 text-center">
        <img
          src="/heuris-logo-label.svg"
          alt="heuris logo"
          width={400}
          height={400}
          className="relative px-4 pb-2 mx-auto sm:px-6 lg:px-8"
        />
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Data to enrich your</span>{' '}
          <span className="block text-transparent from-green-600 to-emerald-600 bg-gradient-to-r bg-clip-text xl:inline">
            online business
          </span>
        </h1>
        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
        </p>
        <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md from-green-600 to-emerald-600 bg-gradient-to-r hover:from-green-600 hover:to-emerald-700 md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="flex items-center justify-center w-full px-8 py-3 text-base font-medium bg-white border border-transparent rounded-md text-emerald-600 hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
