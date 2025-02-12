import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <section className="dark:bg-gray-900 bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
              404
            </h1>
            <p className="text-gray-900 mb-4 text-3xl font-bold tracking-tight md:text-4xl dark:text-white">
              Something's missing.
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-4 text-lg font-light">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.
            </p>
            <Link
              to="/"
              className="hover:bg-primary-800 my-4 inline-flex rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:opacity-40"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
      ;
    </div>
  );
};
