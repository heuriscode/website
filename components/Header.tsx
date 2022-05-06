export default function Header({ name, title, description }) {
  return (
    <div className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide uppercase text-emerald-700">{name}</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {title}
          </p>
          <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}
