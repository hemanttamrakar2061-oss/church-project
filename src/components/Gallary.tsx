
const Gallary = () => {
  const gallery = [
    "Sunday Worship",
    "Church Fellowship",
    "Prayer Meetings",
    "Church Events",
    "Youth Ministry",
    "Community Outreach",
  ];

  return (
    <section className="min-h-screen bg-[#F4FAFF] px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">

        {/* Page heading */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-[#DCEFFD] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#12345A]">
            Our Gallery
          </span>

          <h1 className="mt-5 text-3xl font-extrabold text-[#12345A] sm:text-4xl">
            Church Gallery
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Beautiful moments of worship, fellowship,
            faith and community.
          </p>
        </div>

        {/* Gallery cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >

              {/* Image placeholder */}
              <div className="flex aspect-[4/3] flex-col items-center justify-center bg-gradient-to-br from-[#EAF6FF] via-[#DCEFFD] to-[#B8DFF5] p-6 text-center">

                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-3xl text-[#12345A]">
                  ✝
                </div>

                <p className="text-base font-bold text-[#12345A]">
                  Images Coming Soon
                </p>

                <p className="mt-2 text-xs text-sky-800">
                  Stay tuned for updates
                </p>
              </div>

              {/* Card title */}
              <div className="p-5">
                <h2 className="text-lg font-bold text-[#12345A]">
                  {item}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Photos will be available soon.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-12 text-center">
          <p className="text-lg font-bold text-[#12345A]">
            Capturing Moments of Faith
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Everest Gospel Church
          </p>
        </div>

      </div>
    </section>
  );
};

export default Gallary;
