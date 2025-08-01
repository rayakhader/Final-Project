import {
  FiHome, FiLogOut, FiMenu,
  FiMapPin,
  FiKey
} from "react-icons/fi";

import { JSX, useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Manage Cities", icon: FiMapPin, href: "/admin/cities" },
  { label: "Manage Hotels", icon: FiHome, href: "/admin/hotels" },
  { label: "Manage Rooms", icon: FiKey, href: "/admin/rooms" },
];

function Sidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <>
      <div className="md:hidden px-4 py-2 bg-transparent shadow-sm">
        <button
          className="p-2 rounded hover:bg-gray-200"
          onClick={() => setOpen(!open)}
        >
          {FiMenu({ size: 24 }) as JSX.Element}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0
           h-full w-64 bg-[#0E1B6B] shadow-lg transform transition-transform duration-300 ease-in-out z-50
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="px-4 py-5 font-semibold text-center text-white">
          Dashboard
        </div>
        <div className="border-b border-white"></div>
        <div className="flex-1 overflow-y-auto p-2  bg-cover bg-center bg-blend-overlay">
          <nav className="space-y-4 mt-4">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon
              return <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#4256D0] transition"
              >
                {Icon({ size: 24 }) as JSX.Element}
                <span className="text-sm font-medium">
                  {item.label}
                </span>
              </a>
            })}
          </nav>

          <div className={`absolute bottom-10 left-3`}>
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#4256D0] text-white shadow-lg hover:bg-[#3142a2] transition"
            // onClick={onLogout}
            >
              {FiLogOut({ size: 24 }) as JSX.Element}
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
