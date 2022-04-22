export default function Contact() {
  return (
    <>
      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-4xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Interested?</span>
            <span className="block pb-1 -mb-1 text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text">
              Get in touch with us.
            </span>
          </h2>
          <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border hover:from-purple-700 hover:to-indigo-700"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
