import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"; // useParams যুক্ত করা হয়েছে
import Swal from "sweetalert2";
import axios from "axios";

const UpdatePostJob = () => {
  const { id } = useParams(); // URL থেকে আইডি নেওয়ার জন্য
  const navigate = useNavigate();

  // ১. job স্টেট সঠিকভাবে ডিক্লেয়ার করা হয়েছে
  const [job, setJob] = useState(null);

  // ২. formData স্টেট
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    category: "",
    jobType: "",
    salary: "",
    location: "",
    description: "",
  });

  // ৩. নির্দিষ্ট আইডি দিয়ে ডাটা ফেচ করা
  useEffect(() => {
    fetch(`https://job-portal-server-y6ck.onrender.com/job-post/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        // ৪. ডাটা আসার পর formData আপডেট করা হচ্ছে
        setFormData({
          title: data?.title || "",
          company: data?.company || "",
          category: data?.category || "",
          jobType: data?.jobType || "",
          salary: data?.salary || "",
          location: data?.location || "",
          description: data?.description || "",
        });
      });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `https://job-portal-server-y6ck.onrender.com/job-post/${id}`,
        formData
      );

      if (response.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "আপডেট সফল!",
          text: "চাকরির তথ্য সফলভাবে পরিবর্তন করা হয়েছে।",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/my-jobs");
      } else {
        Swal.fire(
          "তথ্য অপরিবর্তিত",
          "আপনি কোনো পরিবর্তন করেননি বা সার্ভারে সমস্যা।",
          "info"
        );
      }
    } catch (error) {
      Swal.fire(
        "ভুল হয়েছে",
        "সার্ভারে সমস্যা হয়েছে, আবার চেষ্টা করুন।",
        "error"
      );
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ডাটা লোড না হওয়া পর্যন্ত একটি লোডিং মেসেজ দেখানো ভালো
  if (!job)
    return <div className="text-center py-20">Loading job details...</div>;

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 text-gray-700">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            চাকরির তথ্য আপডেট করুন
          </h1>
          <p className="text-gray-600 mt-2">সঠিক তথ্য দিয়ে ফর্মটি পূরণ করুন</p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
          <form onSubmit={handleUpdate} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                চাকরির পদবী (Job Title) *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="যেমন: Senior React Developer"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  কোম্পানির নাম *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="আপনার কোম্পানির নাম"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ক্যাটাগরি
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                >
                  <option value="">ক্যাটাগরি নির্বাচন করুন</option>
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

              {/* Salary */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  বেতন সীমা (Salary)
                </label>
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  placeholder="যেমন: $40k - $60k"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
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
                value={formData.location}
                onChange={handleChange}
                placeholder="যেমন: ধানমন্ডি, ঢাকা"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                জব ডেসক্রিপশন (Description) *
              </label>
              <textarea
                name="description"
                rows="5"
                value={formData.description}
                onChange={handleChange}
                placeholder="বিস্তারিত লিখুন..."
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all"
              >
                আপডেট সম্পন্ন করুন
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePostJob;
