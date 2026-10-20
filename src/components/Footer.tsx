
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";


const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      icon: <FaFacebookF />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      icon: <FaInstagram />,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/",
      icon: <FaYoutube />,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/",
      icon: <FaWhatsapp />,
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Ministries", path: "/ministries" },
    { name: "Events", path: "/events" },
    { name: "Donate", path: "/donate" },
  ];

  return (
    <footer className="bg-[#12345A] text-white">
      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:px-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-16">

        {/* Church branding */}
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#12345A] text-2xl text-white shadow-sm">
              ✝
            </div>

            <div>
              <h2 className="text-lg font-extrabold leading-tight sm:text-xl">
                Everest Gospel Church
              </h2>
              <p className="mt-1 text-xs font-medium tracking-[0.2em] text-sky-300">
                WORSHIP · GROW · SERVE
              </p>
            </div>
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-7 text-blue-100">
            A place of faith, hope, and love. Join our church family
            as we worship God, grow in His Word, and serve our community.
          </p>

          {/* Social media */}
          <div className="mt-6">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-sky-300">
              Connect With Us
            </h3>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-200/20 bg-white/10 text-lg text-sky-200 transition duration-300 hover:-translate-y-1 hover:bg-sky-300 hover:text-[#12345A]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-lg font-bold text-white">Quick Links</h3>
          <div className="mt-2 h-1 w-12 rounded-full bg-sky-300" />

          <ul className="mt-6 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="inline-flex items-center gap-2 text-sm text-blue-100 transition hover:translate-x-1 hover:text-sky-300"
                >
                  <span className="text-sky-300">›</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact information */}
        <div>
          <h3 className="text-lg font-bold text-white">Contact Us</h3>
          <div className="mt-2 h-1 w-12 rounded-full bg-sky-300" />

          <div className="mt-6 space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sky-300">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4 className="font-semibold">Our Location</h4>
                <p className="mt-1 text-sm leading-6 text-blue-100">
                  Golpark, Kohalpur-11,
                  <br />
                  Banke, Nepal
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sky-300">
                <FaEnvelope />
              </div>

              <div>
                <h4 className="font-semibold">Email Address</h4>
                <a
                  href="mailto:everestgospelchurch@gmail.com"
                  className="mt-1 block break-all text-sm text-blue-100 transition hover:text-sky-300"
                >
                  everestgospelchurch@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Invitation */}
        <div>
          <h3 className="text-lg font-bold text-white">You Are Welcome</h3>
          <div className="mt-2 h-1 w-12 rounded-full bg-sky-300" />

          <p className="mt-6 text-sm leading-7 text-blue-100">
            Looking for a church family? We'd love to meet you.
            Come worship with us and experience fellowship rooted in faith.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-300 px-6 py-3 text-sm font-bold text-[#12345A] transition hover:bg-white"
          >
            Get In Touch
            <span aria-hidden="true">→</span>
          </Link>

          <a
            href="#top"
            className="mt-5 flex w-fit items-center gap-2 text-sm font-medium text-blue-100 transition hover:text-sky-300"
          >
            Back to top <FaArrowUp className="text-xs" />
          </a>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10 bg-[#0D2948]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center sm:px-10 md:flex-row md:text-left">
          <p className="text-sm text-blue-100">
            © {new Date().getFullYear()} Everest Gospel Church. All rights reserved.
          </p>

          <p className="text-xs tracking-wide text-sky-200">
            Built with faith, love, and community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
