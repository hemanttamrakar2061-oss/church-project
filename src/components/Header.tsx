
import { useEffect, useId, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

interface MenuItem {
  id: number;
  name: string;
  path: string;
}

const menu: MenuItem[] = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Ministries", path: "/ministries" },
  { id: 5, name: "Events", path: "/events" },
  { id: 6, name: "Donate", path: "/donate" },
  { id: 6, name: "Gallary", path: "/gallary" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuId = useId();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sky-100 bg-white shadow-sm">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:min-h-[88px] lg:px-8">

        {/* Church branding */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex min-w-0 items-center gap-3"
          aria-label="Everest Gospel Church Home"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#12345A] text-2xl text-white shadow-sm sm:h-12 sm:w-12">
            ✝
          </div>

          <div className="min-w-0">
            <h1 className="text-[15px] font-extrabold leading-tight tracking-tight text-[#12345A] sm:text-lg xl:text-xl">
              Everest Gospel Church
            </h1>

            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-sky-700 sm:text-[10px] sm:tracking-[0.2em]">
              Worship · Grow · Serve
            </p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex xl:gap-2"
        >
          {menu.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-lg px-3 py-3 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-sky-50 text-[#12345A]"
                    : "text-slate-600 hover:bg-sky-50 hover:text-[#12345A]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop call to action */}
        <Link
          to="/contact"
          className="hidden shrink-0 items-center justify-center rounded-full bg-[#12345A] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#23598A] lg:inline-flex"
        >
          Join Us Sunday
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </Link>

        {/* Mobile / Tablet toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls={mobileMenuId}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-100 bg-[#EAF6FF] text-[#12345A] transition-colors hover:bg-[#DCEFFD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 lg:hidden"
        >
          {menuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile / Tablet navigation */}
      <div
        id={mobileMenuId}
        className={`overflow-hidden bg-white transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "max-h-[600px] border-t border-sky-100 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
        inert={!menuOpen}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto max-w-7xl px-4 pb-5 pt-3 sm:px-6"
        >
          <div className="flex flex-col gap-1">
            {menu.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex min-h-12 items-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-[#DCEFFD] text-[#12345A]"
                      : "text-slate-600 hover:bg-sky-50 hover:text-[#12345A]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex min-h-12 items-center justify-center rounded-xl bg-[#12345A] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#23598A]"
          >
            Join Us Sunday
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>

          <p className="mt-4 text-center text-xs text-slate-500">
            A place of faith, hope and love
          </p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
