import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="overflow-hidden bg-[#F5FAFF] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-16">
        {/* Left: Church image */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-4 -top-4 h-32 w-32 rounded-tl-[3rem] border-l-4 border-t-4 border-sky-300 sm:-left-6 sm:-top-6" />

          <img
            src="/src/assets/photo6.png"
            alt="Everest Gospel Church worship and fellowship"
            className="relative z-10 h-[320px] w-full rounded-2xl object-cover shadow-xl sm:h-[420px]"
          />

          {/* Image caption */}
          <div className="absolute -bottom-6 right-4 z-20 rounded-xl bg-[#12345A] px-5 py-4 text-white shadow-lg sm:right-8 sm:px-7">
            <p className="text-xl font-bold text-sky-300">Faith in Action</p>
            <p className="mt-1 text-sm text-blue-100">
              Growing together in God's love
            </p>
          </div>

          <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-br-[3rem] border-b-4 border-r-4 border-sky-300" />
        </div>

        {/* Right: About content */}
        <div className="pt-6 lg:pt-0">
          <span className="inline-block rounded-full bg-sky-100 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-sky-800">
            About Our Church
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#12345A] sm:text-4xl lg:text-5xl">
            Faith. Family.
            <span className="block text-sky-600">Community.</span>
          </h2>

          <div className="mt-6 h-1.5 w-20 rounded-full bg-sky-400" />

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Everest Gospel Church is a place where people from all walks of life
            come together to worship, learn, and grow in their relationship with
            Jesus Christ. We believe in the power of God's love to transform
            lives, strengthen families, and build a community rooted in faith,
            hope, and love.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Whether you are exploring faith for the first time or looking for a
            church to call home, you are welcome here. We would love to walk
            alongside you on your spiritual journey.
          </p>

          {/* Values */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-sky-100 bg-white p-4 shadow-sm">
              <span className="text-2xl text-sky-600">✦</span>
              <h3 className="mt-2 font-bold text-[#12345A]">Faith</h3>
              <p className="mt-1 text-sm text-slate-500">
                Growing in God's Word
              </p>
            </div>

            <div className="rounded-xl border border-sky-100 bg-white p-4 shadow-sm">
              <span className="text-2xl text-sky-600">♡</span>
              <h3 className="mt-2 font-bold text-[#12345A]">Family</h3>
              <p className="mt-1 text-sm text-slate-500">
                Caring for one another
              </p>
            </div>

            <div className="rounded-xl border border-sky-100 bg-white p-4 shadow-sm">
              <span className="text-2xl text-sky-600">⌂</span>
              <h3 className="mt-2 font-bold text-[#12345A]">Service</h3>
              <p className="mt-1 text-sm text-slate-500">
                Serving our community
              </p>
            </div>
          </div>

          {/* Button */}
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#12345A] px-7 py-3.5 font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-sky-700 hover:shadow-lg"
          >
            Learn More About Us
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
