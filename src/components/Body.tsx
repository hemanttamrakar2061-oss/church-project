
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <section className="relative flex min-h-[650px] items-center overflow-hidden bg-[#12345A] sm:min-h-[700px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-[url('/src/assets/photo5.png')] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      />

      {/* Dark blue overlay for readable text */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#12345A]/95 via-[#12345A]/75 to-[#12345A]/25" />

      {/* Decorative light blue glow */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          {/* Welcome badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200/40 bg-white/10 px-4 py-2 text-sm font-medium text-sky-100 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-sky-300" />
            WORSHIP · GROW · SERVE
          </div>

          {/* Main heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to
            <span className="mt-2 block text-sky-300">
              Everest Gospel Church
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold leading-snug text-white sm:text-3xl md:text-4xl">
            A Place to Belong,
            <span className="block text-sky-200">
              Grow and Make a Difference.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50 sm:text-lg">
            We are a community of believers, united by faith, guided by
            God's Word, and committed to loving God and serving others.
            Come as you are and grow with us in faith, hope, and love.
          </p>

          {/* Action buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-300 px-8 py-4 font-bold text-[#12345A] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Join Us This Saturday
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#12345A]"
            >
              Discover Our Church
            </Link>
          </div>

          {/* Service information */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-blue-100">
            <span className="flex items-center gap-2">
              <span className="text-sky-300">✦</span>
              Faith and Fellowship
            </span>

            <span className="hidden h-4 w-px bg-white/30 sm:block" />

            <span className="flex items-center gap-2">
              <span className="text-sky-300">✦</span>
              Everyone Is Welcome
            </span>
          </div>
        </div>
      </div>

      {/* Bottom decorative transition */}
      <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-sky-200 via-sky-400 to-[#12345A]" />
    </section>
  );
};

export default Body;
