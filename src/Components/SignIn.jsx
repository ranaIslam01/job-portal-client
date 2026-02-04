import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";
import GoogleSignUp from "./GoogleSignUp";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const form2 = location.state || "/";


  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Firebase Sign In
    signIn(email, password)
      .then(() => {
        toast.success("সফলভাবে লগইন করা হয়েছে!");
        navigate(form2);
        setLoading(false); // কাজ শেষে লোডিং বন্ধ
      })
      .catch((error) => {
        console.error(error);
        toast.error("ভুল ইমেইল বা পাসওয়ার্ড! আবার চেষ্টা করুন।");
        setLoading(false);
      });
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gray-50 px-4 py-12">
      <ToastContainer />
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            স্বাগতম!
          </h2>
          <p className="text-gray-500 mt-2 font-medium">
            আপনার অ্যাকাউন্টে লগইন করুন
          </p>
        </div>
        <div>
          <GoogleSignUp form2 = {form2}/>
        </div>

        <form onSubmit={handleSignIn} className="space-y-6">
          {/* Email Field */}
          <div className="group">
            <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">
              ইমেইল
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                <HiOutlineMail size={20} />
              </span>
              <input
                name="email"
                type="email"
                required
                placeholder="example@mail.com"
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all duration-200 text-gray-700"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="group">
            <div className="flex justify-between items-center mb-1.5 ml-1">
              <label className="text-sm font-bold text-gray-700">
                পাসওয়ার্ড
              </label>
              <a
                href="#"
                className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </a>
            </div>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                <HiOutlineLockClosed size={20} />
              </span>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full pl-11 pr-12 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all duration-200 text-gray-700"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-gray-400 hover:text-blue-500 transition-colors focus:outline-none"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={22} />
                ) : (
                  <AiOutlineEye size={22} />
                )}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform active:scale-[0.98] flex justify-center items-center ${
                loading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200"
              }`}
            >
              {loading ? <ClipLoader color="#ffffff" size={24} /> : "সাইন ইন"}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-500 font-medium">
            অ্যাকাউন্ট নেই?
            <Link
              to="/signup"
              className="text-blue-600 font-extrabold ml-1 hover:text-blue-700 transition-colors"
            >
              রেজিস্ট্রেশন করুন
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
