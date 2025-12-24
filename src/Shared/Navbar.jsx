import React, { useState, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router"; // নিশ্চিত হোন আপনি react-router-dom ব্যবহার করছেন কিনা
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log(result);
        toast.success("Log Out Successfull");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Find Jobs", path: "/find-jobs" },
    { name: "Companies", path: "/companies" },
    { name: "Salaries", path: "/salaries" },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (isOpen) return;

        // স্মার্ট হাইড/শো
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        // ব্যাকগ্রাউন্ড চেঞ্জ লজিক
        setScrolled(currentScrollY > 20);
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY, isOpen]);

  const desktopActiveStyle = ({ isActive }) =>
    isActive
      ? "relative text-blue-600 font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-blue-600 transition-all"
      : "text-gray-600 hover:text-blue-600 font-semibold transition-all duration-300";

  return (
    <nav
      style={{ top: isVisible ? "0" : "-100px" }}
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* ১. লোগো */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <span className="text-white text-xl font-black italic">J</span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Job<span className="text-blue-600">Portal</span>
            </h1>
          </Link>

          {/* ২. ডেক্সটপ মেনু */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={desktopActiveStyle}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* ৩. অ্যাকশন বাটন */}
          <div className="hidden md:flex items-center space-x-5">
            {user ? (
              <Link
                onClick={handleSignOut}
                className="bg-gray-100 text-gray-900 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all"
              >
                Log Out
              </Link>
            ) : (
              <div>
                <Link
                  to="/signin"
                  className="text-gray-700 hover:text-blue-600 font-bold text-sm transition-all"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-gray-100 text-gray-900 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all"
                >
                  Sign Up
                </Link>
              </div>
            )}
            <Link
              to="/post-job"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all transform active:scale-95"
            >
              Post a Job
            </Link>
          </div>

          {/* ৪. মোবাইল হ্যামবার্গার মেনু বাটন */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="p-2 text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 transition focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M6 18L18 6"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ৫. মোবাইল ড্রপডাউন */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${
          isOpen ? "max-h-[600px] opacity-100 shadow-2xl" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 space-y-6 bg-white">
          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-bold transition-colors ${
                    isActive ? "text-blue-600" : "text-gray-900"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {user ? (
              <Link
                onClick={() => {
                  handleSignOut();
                  setIsOpen(false);
                }}
                className="w-full text-center py-4 text-gray-900 font-extrabold border-2 border-gray-100 rounded-2xl hover:bg-gray-50 transition"
              >
                Log Out
              </Link>
            ) : (
              <div className="pt-6 flex flex-col gap-4 border-t border-gray-200">
                <Link
                  to="/signin"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-4 text-gray-900 font-extrabold border-2 border-gray-100 rounded-2xl hover:bg-gray-50 transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-4 text-gray-900 font-extrabold border-2 border-gray-100 rounded-2xl hover:bg-gray-50 transition"
                >
                  Sign Up
                </Link>
              </div>
            )}
            <Link
              to="/post-job"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-blue-600 text-white py-4 rounded-2xl font-extrabold shadow-lg shadow-blue-200 active:scale-95 transition"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
