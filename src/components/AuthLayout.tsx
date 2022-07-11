export function AuthLayout({ children }) {
  return (
    <>
      <div className="relative flex justify-center min-h-full md:px-12 lg:px-0">
        <div className="relative z-10 flex flex-col justify-center flex-1 px-4 py-12 bg-white shadow-2xl md:flex-none md:px-28">
          <div className="w-full max-w-md mx-auto sm:px-4 md:w-96 md:max-w-sm md:px-0">{children}</div>
        </div>
        <div className="absolute inset-0 flex-1 hidden w-full hero-bg sm:block lg:relative lg:w-0"></div>
      </div>
    </>
  );
}
