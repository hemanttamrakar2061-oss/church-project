
const Contact = () => {
  const contact = {
    phone: "+977 98XXXXXXXX",
    email: "church@example.com",
    facebook: "",
    instagram: "",
    whatsapp: "",
    address: "Nepal",
    serviceTime: "Sunday Worship",
  };

  return (
    <section className="min-h-screen bg-[#F4FAFF] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-[#12345A] sm:text-4xl">
            Contact Us
          </h1>

          <p className="mt-3 text-slate-600">
            We'd love to hear from you.
            Feel free to get in touch!
          </p>
        </div>

        {/* Contact information */}
        <div className="rounded-2xl bg-white p-6 shadow-md sm:p-10">

          <h2 className="mb-6 text-2xl font-bold text-[#12345A]">
            Everest Gospel Church
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-bold text-[#12345A]">
                Phone
              </h3>
              <a
                href={`tel:${contact.phone}`}
                className="text-sky-700 hover:underline"
              >
                {contact.phone}
              </a>
            </div>

            <div>
              <h3 className="font-bold text-[#12345A]">
                Email
              </h3>
              <a
                href={`mailto:${contact.email}`}
                className="break-all text-sky-700 hover:underline"
              >
                {contact.email}
              </a>
            </div>

            <div>
              <h3 className="font-bold text-[#12345A]">
                Facebook
              </h3>
              {contact.facebook ? (
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 hover:underline"
                >
                  Visit Facebook
                </a>
              ) : (
                <p className="text-slate-500">Coming soon</p>
              )}
            </div>

            <div>
              <h3 className="font-bold text-[#12345A]">
                Instagram
              </h3>
              {contact.instagram ? (
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 hover:underline"
                >
                  Visit Instagram
                </a>
              ) : (
                <p className="text-slate-500">Coming soon</p>
              )}
            </div>

            <div>
              <h3 className="font-bold text-[#12345A]">
                WhatsApp
              </h3>
              {contact.whatsapp ? (
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 hover:underline"
                >
                  Chat on WhatsApp
                </a>
              ) : (
                <p className="text-slate-500">Coming soon</p>
              )}
            </div>

            <div>
              <h3 className="font-bold text-[#12345A]">
                Church Address
              </h3>
              <p className="text-slate-600">
                {contact.address}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#12345A]">
                Service Time
              </h3>
              <p className="text-slate-600">
                {contact.serviceTime}
              </p>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 text-center">
          <p className="font-semibold text-[#12345A]">
            Worship · Grow · Serve
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
