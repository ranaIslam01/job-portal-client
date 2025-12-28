import React, { useState, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

 const handleSignOut = () => {
  signOutUser()
    .then(() => {
      toast.success("Log Out Successful");
    })
    .catch((error) => {
      console.log(error);
      toast.error("Something went wrong");
    });
};

  // ১. আপনার নতুন পেজ "My Jobs" এখানে অ্যাড করা হয়েছে
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Find Jobs", path: "/find-jobs" },
    { name: "My Posted Jobs", path: "/my-jobs" },
    { name: "My Applications", path: "/my-applications" },
    { name: "Companies", path: "/companies" },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        if (isOpen) return;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
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
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          
          {/* লোগো */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <motion.span
                animate={{
                  color: ["#FFFFFF", "#E01F42", "#C7DB30", "#FFFFFF"],
                  transition: { duration: 4, repeat: Infinity },
                }}
                className="text-white text-xl font-black italic"
              >
                J
              </motion.span>
            </div>
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-gray-900">
              Job<span className="text-blue-600">Portal</span>
            </h1>
          </Link>

          {/* ডেস্কটপ ও ট্যাবলেট মেনু (Large Tablet/Desktop - lg) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={desktopActiveStyle}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* অ্যাকশন বাটন (ডেস্কটপ ও ট্যাবলেট) */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-5">
            {user ? (
              <button
                onClick={handleSignOut}
                className="text-gray-700 hover:text-red-600 font-bold text-sm transition-all"
              >
                Log Out
              </button>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/signin" className="text-gray-700 hover:text-blue-600 font-bold text-sm">
                  Login
                </Link>
                <Link to="/signup" className="bg-gray-100 text-gray-900 px-4 py-2 rounded-xl font-bold text-sm hover:bg-gray-200">
                  Sign Up
                </Link>
              </div>
            )}
            <Link
              to="/post-job"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all active:scale-95"
            >
              Post a Job
            </Link>
          </div>

          {/* মোবাইল ও ছোট ট্যাবলেট মেনু বাটন */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-900 bg-gray-50 rounded-lg focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* মোবাইল ড্রপডাউন (ট্যাবলেট পর্যন্ত কভার করবে) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${
          isOpen ? "max-h-150 opacity-100 shadow-2xl" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 space-y-6">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-bold ${isActive ? "text-blue-600" : "text-gray-900"}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
            {user ? (
              <button
                onClick={() => { handleSignOut(); setIsOpen(false); }}
                className="w-full text-center py-3.5 text-red-600 font-extrabold border-2 border-red-50 rounded-2xl"
              >
                Log Out
              </button>
            ) : (
              <>
                <Link to="/signin" onClick={() => setIsOpen(false)} className="w-full text-center py-3.5 text-gray-900 font-extrabold border-2 border-gray-50 rounded-2xl">
                  Login
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)} className="w-full text-center py-3.5 bg-gray-50 text-gray-900 font-extrabold rounded-2xl">
                  Sign Up
                </Link>
              </>
            )}
            <Link
              to="/post-job"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-blue-600 text-white py-4 rounded-2xl font-extrabold shadow-lg"
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