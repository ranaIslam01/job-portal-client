import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const PostJob = () => {
  const { user } = useContext(AuthContext); // ইউজার ইমেইল পাওয়ার জন্য
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    category: "",
    jobType: "Full-time",
    salary: "",
    location: "",
    description: "",
    hr_email: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ডাটা পাঠানোর আগে ইউজারের ইমেইলটি hr_email হিসেবে সেট করে নেওয়া
    const jobData = {
      ...formData,
      hr_email: user?.email, // লগইন করা ইউজারের ইমেইল এখানে যুক্ত হবে
    };

    fetch("https://job-portal-server-y6ck.onrender.com/job-post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // SweetAlert2 ব্যবহার করা হয়েছে
          Swal.fire({
            title: "সফল!",
            text: "চাকরি সফলভাবে পোস্ট করা হয়েছে!",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "ঠিক আছে",
          });
          e.target.reset(); // ফর্ম ক্লিয়ার করার জন্য

          setTimeout(() => {
            navigate("/my-jobs");
          }, 100);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "ভুল হয়েছে!",
          text: "চাকরি পোস্ট করা সম্ভব হয়নি।",
          icon: "error",
        });
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 text-gray-700">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            নতুন চাকরি পোস্ট করুন
          </h1>
          <p className="text-gray-600 mt-2">
            আপনার কোম্পানির জন্য সেরা দক্ষ কর্মী খুঁজে নিন
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Job Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                চাকরির পদবী (Job Title) *
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="যেমন: Senior React Developer"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  কোম্পানির নাম *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="আপনার কোম্পানির নাম"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
                  onChange={handleChange}
                />
              </div>

              {/* Job Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ক্যাটাগরি
                </label>
                <select
                  name="category"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition bg-white"
                  onChange={handleChange}
                >
                  <option value="">নির্বাচন করুন</option>
                  <option value="software">Software Development</option>
                  <option value="marketing">Marketing</option>
                  <option value="design">Graphic Design</option>
                  <option value="hr">Human Resource</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Job Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  চাকরির ধরন
                </label>
                <div className="flex gap-4 mt-2">
                  {["Full-time", "Remote", "Contract"].map((type) => (
                    <label
                      key={type}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="jobType"
                        value={type}
                        checked={formData.jobType === type}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-gray-600 text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Salary Range */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  বেতন সীমা (Salary)
                </label>
                <input
                  type="text"
                  name="salary"
                  placeholder="যেমন: $50k - $80k"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                লোকেশন (Location)
              </label>
              <input
                type="text"
                name="location"
                placeholder="যেমন: ঢাকা, বাংলাদেশ"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
                onChange={handleChange}
              />
            </div>

            {/* Job Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                জব ডেসক্রিপশন (Description) *
              </label>
              <textarea
                name="description"
                rows="5"
                required
                placeholder="চাকরির দায়িত্ব এবং যোগ্যতা সম্পর্কে বিস্তারিত লিখুন..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-200"
              >
                পাবলিশ করুন
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
