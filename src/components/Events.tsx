
import { useState } from "react";
import { Link } from "react-router-dom";

interface ChurchEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  icon: string;
  featured?: boolean;
}

const demoEvents: ChurchEvent[] = [
  {
    id: 1,
    title: "Saturday Worship Service",
    date: "2026-10-24",
    time: "10:00 AM – 12:00 PM",
    location: "Everest Gospel Church",
    category: "Worship",
    description:
      "Join our church family for a meaningful time of worship, prayer, and God's Word.",
    icon: "✝",
    featured: true,
  },
  {
    id: 2,
    title: "Youth Fellowship",
    date: "2026-10-25",
    time: "2:00 PM – 4:00 PM",
    location: "Church Fellowship Hall",
    category: "Youth",
    description:
      "An encouraging gathering for young people to grow in faith and build friendships.",
    icon: "♡",
  },
  {
    id: 3,
    title: "Community Outreach",
    date: "2026-10-31",
    time: "9:00 AM – 12:00 PM",
    location: "Local Community",
    category: "Outreach",
    description:
      "Share kindness and God's love through practical service to our community.",
    icon: "🤝",
  },
  {
    id: 4,
    title: "Children's Bible Day",
    date: "2026-11-07",
    time: "11:00 AM – 1:00 PM",
    location: "Church Children's Hall",
    category: "Children",
    description:
      "A joyful day of Bible stories, activities, songs, and learning about Jesus.",
    icon: "✦",
  },
  {
    id: 5,
    title: "Praise and Worship Night",
    date: "2026-11-14",
    time: "5:00 PM – 7:00 PM",
    location: "Everest Gospel Church",
    category: "Worship",
    description:
      "Come together for an uplifting evening of music, prayer, praise, and fellowship.",
    icon: "♫",
    featured: true,
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(`${dateString}T12:00:00`);

  return {
    day: date.toLocaleDateString("en-US", { day: "2-digit" }),
    month: date.toLocaleDateString("en-US", { month: "short" }),
    full: date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  };
};

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(demoEvents.map((event) => event.category)),
  ];

  // Only show upcoming events and sort them by date.
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = demoEvents
    .filter((event) => {
      const eventDate = new Date(`${event.date}T00:00:00`);
      return eventDate >= today;
    })
    .filter(
      (event) =>
        selectedCategory === "All" ||
        event.category === selectedCategory,
    )
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <section className="min-h-screen bg-[#F5FAFF]">
      {/* Hero section */}
      <div className="relative overflow-hidden bg-[#12345A] px-6 py-20 text-center sm:py-28">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <span className="inline-block rounded-full border border-sky-200/30 bg-white/10 px-4 py-2 text-sm font-semibold tracking-widest text-sky-200">
            WORSHIP · CONNECT · GROW
          </span>

          <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Church{" "}
            <span className="text-sky-300">Events</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
            Be part of what God is doing in our church family.
            Discover upcoming worship services, fellowship gatherings,
            and opportunities to serve our community.
          </p>

          <a
            href="#upcoming-events"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-300 px-7 py-3.5 font-bold text-[#12345A] transition hover:bg-white"
          >
            Explore Events <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      {/* Events listing */}
      <div
        id="upcoming-events"
        className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20"
      >
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
              Mark Your Calendar
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#12345A] sm:text-4xl">
              Upcoming Events
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-slate-600">
              Find a gathering, invite a friend, and grow with us.
            </p>
          </div>

          <span className="w-fit rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-[#12345A]">
            {upcomingEvents.length}{" "}
            {upcomingEvents.length === 1 ? "Event" : "Events"} Found
          </span>
        </div>

        {/* Category filters */}
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                selectedCategory === category
                  ? "bg-[#12345A] text-white shadow-md"
                  : "border border-sky-100 bg-white text-slate-600 hover:border-sky-300 hover:text-[#12345A]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Event cards */}
        {upcomingEvents.length > 0 ? (
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => {
              const date = formatDate(event.date);

              return (
                <article
                  key={event.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Card banner */}
                  <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-[#12345A] via-[#245783] to-sky-400">
                    <div className="absolute -right-6 -top-10 h-36 w-36 rounded-full border-[18px] border-white/10" />
                    <div className="absolute -bottom-12 -left-6 h-36 w-36 rounded-full border-[18px] border-white/10" />

                    <span className="relative text-6xl text-white transition duration-300 group-hover:scale-110">
                      {event.icon}
                    </span>

                    {event.featured && (
                      <span className="absolute right-4 top-4 rounded-full bg-sky-200 px-3 py-1 text-xs font-bold text-[#12345A]">
                        Featured
                      </span>
                    )}

                    <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {event.category}
                    </span>
                  </div>

                  {/* Card content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex gap-4">
                      <div className="flex h-[76px] w-[68px] shrink-0 flex-col items-center justify-center rounded-xl bg-[#DCEFFD] text-[#12345A]">
                        <span className="text-xs font-bold uppercase">
                          {date.month}
                        </span>
                        <span className="text-2xl font-extrabold">
                          {date.day}
                        </span>
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-lg font-extrabold leading-snug text-[#12345A] transition group-hover:text-sky-700">
                          {event.title}
                        </h3>
                        <p className="mt-2 text-sm leading-5 text-slate-500">
                          {date.full}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">
                      {event.description}
                    </p>

                    <div className="mt-5 space-y-3 border-t border-sky-100 pt-5 text-sm text-slate-600">
                      <p className="flex items-start gap-3">
                        <span className="text-lg text-sky-600">◷</span>
                        <span>{event.time}</span>
                      </p>

                      <p className="flex items-start gap-3">
                        <span className="text-lg text-sky-600">⌖</span>
                        <span>{event.location}</span>
                      </p>
                    </div>

                    <Link
                      to="/contact"
                      className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#12345A] px-5 py-3 font-bold text-white transition hover:bg-sky-700"
                    >
                      I'm Interested
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-sky-100 bg-white px-6 py-16 text-center">
            <p className="text-4xl">📅</p>
            <h3 className="mt-4 text-xl font-bold text-[#12345A]">
              No upcoming events in this category
            </h3>
            <p className="mt-2 text-slate-600">
              Try another category to discover more events.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory("All")}
              className="mt-5 rounded-full bg-[#12345A] px-6 py-3 font-bold text-white hover:bg-sky-700"
            >
              View All Events
            </button>
          </div>
        )}

        {/* Bottom invitation */}
        <div className="mt-16 rounded-3xl bg-[#DCEFFD] px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-extrabold text-[#12345A] sm:text-3xl">
            Have Questions About an Event?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            We'd be happy to help you learn more about our gatherings.
            Reach out to us, and we look forward to welcoming you.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#12345A] px-7 py-3.5 font-bold text-white transition hover:bg-sky-700"
          >
            Contact Our Church →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
