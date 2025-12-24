import React, { useContext, useState } from "react";
import { Link } from "react-router";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUser,
} from "react-icons/hi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {createUser} = useContext(AuthContext);

  const handleSignUP = (e) => {
    e.preventDefault();
    console.log("handlesingup click");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password);

    // create user 
    createUser(email,password)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    })


  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            অ্যাকাউন্ট তৈরি করুন
          </h2>
          <p className="text-gray-500 mt-2 font-medium">
            সেরা চাকরির সুযোগ পেতে আজই যোগ দিন
          </p>
        </div>

        <form onSubmit={handleSignUP} className="space-y-5">
          {/* Name Field */}
          <div className="group">
            <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">
              পুরো নাম
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                <HiOutlineUser size={20} />
              </span>
              <input
                name="name"
                type="text"
                placeholder="আপনার নাম"
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all duration-200 text-gray-700"
              />
            </div>
          </div>

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
                placeholder="example@mail.com"
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all duration-200 text-gray-700"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="group">
            <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">
              পাসওয়ার্ড
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                <HiOutlineLockClosed size={20} />
              </span>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="কমপক্ষে ৮ অক্ষরের"
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

          {/* Terms & Conditions */}
          <div className="flex items-start gap-3 px-1">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 text-blue-600 border-gray-300 rounded-lg focus:ring-blue-500 cursor-pointer"
              required
            />
            <span className="text-xs text-gray-500 leading-relaxed">
              আমি আমাদের{" "}
              <a href="#" className="text-blue-600 font-bold hover:underline">
                শর্তাবলী
              </a>{" "}
              এবং
              <a href="#" className="text-blue-600 font-bold hover:underline">
                {" "}
                প্রাইভেসি পলিসি
              </a>{" "}
              মেনে নিচ্ছি।
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all duration-300 transform active:scale-[0.98]"
          >
            সাইন আপ
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 font-medium">
            ইতিমধ্যে অ্যাকাউন্ট আছে?
            <Link
              to="/signin"
              className="text-blue-600 font-extrabold ml-1 hover:text-blue-700 transition-colors"
            >
              লগইন করুন
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
