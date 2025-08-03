import {
  FiHome, FiLogOut, FiMenu, FiX, FiMapPin, FiKey, FiPieChart
} from "react-icons/fi";
import { JSX, useContext, useEffect, useState } from "react";
import { TokenContext } from "../context/TokenProvider";
import { NavLink, useLocation } from "react-router-dom";
import { UserTypeContext } from "../context/UserTypeProvider";

const NAV_ITEMS = [
  { id: 1, label: "Dashboard", icon: FiPieChart, href: "/admin/dashboard" },
  { id: 2, label: "Manage Cities", icon: FiMapPin, href: "/admin/cities" },
  { id: 3, label: "Manage Hotels", icon: FiHome, href: "/admin/hotels" },
  { id: 4, label: "Manage Rooms", icon: FiKey, href: "/admin/rooms" },
];

function Sidebar() {
  const [open, setOpen] = useState(false);
  const { setToken } = useContext(TokenContext);
  const { setUserType } = useContext(UserTypeContext);
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    setToken(null);
    setUserType(null);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <>
      <div className="md:hidden px-4 py-2 bg-transparent shadow-sm">
        <button
          className="p-2 rounded hover:bg-gray-200"
          onClick={() => setOpen(true)}
        >
          {FiMenu({ size: 24 }) as JSX.Element}
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[1000] md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 z-[1001] h-full w-64 bg-[#0E1B6B]
          shadow-lg transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="md:hidden absolute top-0 right-0 px-4 py-3">
          <button onClick={() => setOpen(false)} className="text-white hover:text-gray-300">
            {FiX({ size: 16 }) as JSX.Element}
          </button>
        </div>

        <div className="px-4 py-5 font-semibold text-center text-white">
          Dashboard
        </div>
        <div className="border-b border-white"></div>

        <div className="flex-1 overflow-y-auto p-2">
          <nav className="space-y-4 mt-4">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) => `
                    flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#4256D0] transition
                    ${isActive ? "bg-[#4256D0]" : ""}
                  `}
                >
                  {Icon({ size: 24 }) as JSX.Element}
                  <span className="text-sm font-medium">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          <div className="absolute bottom-10 left-3">
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#4256D0] text-white shadow-lg hover:bg-[#3142a2] transition"
              onClick={handleLogout}
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
