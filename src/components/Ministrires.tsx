
import { Link } from "react-router-dom";

interface Ministry {
  id: number;
  title: string;
  description: string;
  icon: string;
  label: string;
}

const ministries: Ministry[] = [
  {
    id: 1,
    title: "Children's Ministry",
    description:
      "Building a strong foundation of faith for the next generation through Bible stories, prayer, and joyful learning.",
    icon: "🌱",
    label: "Growing in Faith",
  },
  {
    id: 2,
    title: "Youth Ministry",
    description:
      "Encouraging young hearts to follow Jesus, discover their purpose, and grow together in faith and friendship.",
    icon: "🤝",
    label: "Faith & Friendship",
  },
  {
    id: 3,
    title: "Adult Ministry",
    description:
      "Growing together in God's Word, strengthening our faith, and supporting one another through every season of life.",
    icon: "📖",
    label: "Growing Together",
  },
  {
    id: 4,
    title: "Outreach Ministry",
    description:
      "Sharing God's love with our community through kindness, compassion, service, and practical support.",
    icon: "💙",
    label: "Serving Others",
  },
  {
    id: 5,
    title: "Worship Ministry",
    description:
      "Leading hearts toward God through music, singing, prayer, and meaningful times of corporate worship.",
    icon: "🎵",
    label: "Praise & Worship",
  },
];

const Ministries = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-white to-[#EAF5FF]">

      {/* Hero section */}
      <div className="relative bg-[#12345A] px-6 py-20 text-center sm:py-28">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <span className="inline-block rounded-full border border-sky-200/30 bg-white/10 px-4 py-2 text-sm font-semibold tracking-widest text-sky-200">
            WORSHIP · GROW · SERVE
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Discover Our
            <span className="block text-sky-300">Ministries</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
            There's a place for you at Everest Gospel Church. Discover
            your gifts, build meaningful relationships, grow in faith,
            and make a difference in the lives of others.
          </p>

          <a
            href="#ministry-list"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-300 px-7 py-3.5 font-bold text-[#12345A] transition hover:bg-white"
          >
            Explore Our Ministries
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      {/* Ministry cards */}
      <div
        id="ministry-list"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
            Find Your Place
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-[#12345A] sm:text-4xl">
            A Ministry for Everyone
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Use your gifts, discover your purpose, and become part of
            something meaningful. We grow stronger when we serve together.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry) => (
            <article
              key={ministry.id}
              className="group rounded-2xl border border-sky-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#DCEFFD] text-3xl transition duration-300 group-hover:bg-[#12345A] group-hover:scale-105">
                <span className="transition group-hover:scale-110">
                  {ministry.icon}
                </span>
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-sky-700">
                {ministry.label}
              </p>

              <h3 className="mt-2 text-xl font-extrabold text-[#12345A]">
                {ministry.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {ministry.description}
              </p>

              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 font-bold text-sky-700 transition hover:gap-3 hover:text-[#12345A]"
              >
                Get Involved
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* Bible verse section */}
      <div className="px-6 pb-20 sm:px-10 sm:pb-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#12345A] px-7 py-14 text-center shadow-xl sm:px-14 sm:py-16">
          <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full border-[24px] border-sky-300/10" />
          <div className="absolute -bottom-16 -left-12 h-48 w-48 rounded-full border-[24px] border-sky-300/10" />

          <div className="relative">
            <span className="text-5xl text-sky-300" aria-hidden="true">
              “
            </span>

            <blockquote className="mx-auto max-w-3xl text-2xl font-semibold leading-relaxed text-white sm:text-3xl">
              For I know the plans I have for you, declares the Lord,
              plans to prosper you and not to harm you, plans to give you
              hope and a future.
            </blockquote>

            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-sky-300" />

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
              Jeremiah 29:11
            </p>
          </div>
        </div>
      </div>

      {/* Final invitation */}
      <div className="border-t border-sky-100 bg-white px-6 py-16 text-center">
        <h2 className="text-2xl font-extrabold text-[#12345A] sm:text-3xl">
          Ready to Make a Difference?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
          We'd love to help you find a ministry where you can grow,
          serve, and connect with our church family.
        </p>

        <Link
          to="/contact"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#12345A] px-8 py-4 font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-sky-700"
        >
          Connect With Us
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
};

export default Ministries;
