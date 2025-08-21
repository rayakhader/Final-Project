import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TokenContext } from '../context/TokenProvider';
import { UserTypeContext } from '../context/UserTypeProvider';
import { Menu, X } from 'lucide-react';

function NavUser() {
  const { setToken } = useContext(TokenContext);
  const { setUserType } = useContext(UserTypeContext);
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
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
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-[1000] flex items-center justify-between bg-white px-10 py-3 shadow-md">
      
      <div className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
        <Link to="/">🏨 StayFinder</Link>
      </div>

      <ul className="hidden md:flex items-center gap-6">
        <li>
          <Link
            to="/login"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Signup
          </Link>
        </li>
      </ul>

      <div className="md:hidden">
        {!open && (
          <Menu
            onClick={() => setOpen(true)}
            className="w-6 h-6 cursor-pointer text-gray-800"
          />
        )}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <X
            onClick={() => setOpen(false)}
            className="w-4 h-4 absolute top-5 right-5 z-50 cursor-pointer text-black"
          />
          <div
            className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-6 text-lg">
              <li>
                <Link
                  to="/login"
                  className="text-gray-800 hover:text-blue-600 transition"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-gray-800 hover:text-blue-600 transition"
                >
                  Signup
                </Link>
              </li>

            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavUser;
