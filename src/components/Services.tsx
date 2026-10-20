
import { Link } from "react-router-dom";

const serviceTimes = [
  {
    id: 1,
    day: "Saturday",
    time: "10:00 AM – 12:00 PM",
    title: "Weekend Worship",
    description:
      "Come together for heartfelt worship, prayer, and a meaningful message from God's Word.",
    icon: "✝",
    tag: "Worship & Prayer",
  },
  {
    id: 2,
    day: "Sunday",
    time: "11:00 AM – 1:00 PM",
    title: "Sunday Fellowship",
    description:
      "Grow in faith, build friendships, and share the love of Christ with our church family.",
    icon: "♡",
    tag: "Faith & Fellowship",
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#EAF5FF] px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-sky-100 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-sky-800">
            Worship With Us
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-[#12345A] sm:text-4xl md:text-5xl">
            Service Times
          </h2>

          <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-sky-400" />

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Join us as we worship God, hear His Word, and grow together
            in faith, hope, and love. There is a place for you here.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {serviceTimes.map((service) => (
            <article
              key={service.id}
              className="group rounded-3xl border border-sky-100 bg-white p-7 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DCEFFD] text-3xl text-[#12345A] transition group-hover:bg-[#12345A] group-hover:text-white">
                  {service.icon}
                </div>

                <span className="rounded-full bg-sky-50 px-3 py-2 text-xs font-bold text-sky-800 sm:text-sm">
                  {service.tag}
                </span>
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-widest text-sky-700">
                {service.day}
              </p>

              <h3 className="mt-2 text-2xl font-extrabold text-[#12345A] sm:text-3xl">
                {service.title}
              </h3>

              <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#F1F8FF] p-4">
                <span className="text-2xl" aria-hidden="true">
                  ◷
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Service Hours
                  </p>
                  <p className="mt-1 font-bold text-[#12345A]">
                    {service.time}
                  </p>
                </div>
              </div>

              <p className="mt-5 leading-7 text-slate-600">
                {service.description}
              </p>

              <div className="mt-7 border-t border-sky-100 pt-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-[#12345A]">
                  <span className="text-sky-600">✦</span>
                  Everyone is welcome!
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom call to action */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-[#12345A] px-6 py-10 text-center shadow-xl sm:px-10 sm:py-12">
          <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
            We Would Love to See You!
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Whether you are new to church or looking for a place to belong,
            come worship and grow with us. Our church family welcomes you.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-sky-300 px-7 py-3.5 font-bold text-[#12345A] transition hover:bg-white"
          >
            Plan Your Visit
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
