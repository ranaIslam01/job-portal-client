import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();
  const navigate = useNavigate();

  if (!job || Object.keys(job).length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-blue-600"></span>
        <p className="ml-4 text-xl font-semibold">লোড হচ্ছে...</p>
      </div>
    );
  }

  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange = {},
    description,
    company,
    requirements = [],
    responsibilities = [],
    hr_email,
    hr_name,
    company_logo,
  } = job;

  const { min = 0, max = 0, currency = "BDT" } = salaryRange;

  return (
    <div className="bg-gray-50 min-h-screen py-10 font-sans">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-blue-600 font-semibold flex items-center gap-2 hover:underline transition-all"
        >
          ← ফিরে যান
        </button>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header setion */}
          <div className="bg-blue-600 p-8 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={company_logo}
                  alt={`${company} logo`}
                  className="w-20 h-20 bg-white rounded-2xl p-2 object-contain shadow-md"
                />
                <div>
                  <h1 className="text-3xl font-bold">{title}</h1>
                  <p className="text-blue-100 mt-1 text-lg">{company}</p>
                </div>
              </div>
              <span className="bg-white text-blue-600 px-5 py-2 rounded-full font-bold text-sm shadow-sm">
                {jobType}
              </span>
            </div>
          </div>

          <div className="p-8">
            {/* Job releted Data */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-4 bg-blue-50/30 p-5 rounded-2xl border border-blue-50">
                <h3 className="text-lg font-bold text-gray-800 border-b border-blue-100 pb-2">
                  চাকরির তথ্য
                </h3>
                <p className="text-gray-600">
                  <strong>লোকেশন:</strong> {location}
                </p>
                <p className="text-gray-600">
                  <strong>বেতন:</strong> {currency?.toUpperCase()} {min} - {max}
                </p>
                <p className="text-gray-600">
                  <strong>ডেডলাইন:</strong> {applicationDeadline}
                </p>
                <p className="text-gray-600">
                  <strong>ক্যাটাগরি:</strong> {category}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-800 border-b pb-2">
                  প্রয়োজনীয় দক্ষতা
                </h3>
                <div className="flex flex-wrap gap-2">
                  {requirements.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-white text-blue-700 px-4 py-1.5 rounded-lg text-sm font-medium border border-blue-200 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                চাকরির বিবরণ
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {description}
              </p>
            </div>

            {/* Responsibilies */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                দায়িত্বসমূহ
              </h3>
              <ul className="grid grid-cols-1 gap-3">
                {responsibilities.map((res, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600">
                    <span className="text-blue-500 mt-1">✔</span> {res}
                  </li>
                ))}
              </ul>
            </div>

            {/* contuct */}
            <div className="bg-gray-50 p-6 rounded-2xl mb-10 border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h4 className="font-bold text-gray-800 text-lg mb-1">যোগাযোগের তথ্য:</h4>
                <p className="text-gray-700"><strong>HR:</strong> {hr_name} | {hr_email}</p>
              </div>
              <div className="mt-4 md:mt-0 italic text-sm text-gray-500">
                Job ID: {_id}
              </div>
            </div>

            <Link
              to={`/job-apply/${_id}`}
              className="block w-full text-center bg-blue-600 text-white py-4 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 active:scale-[0.98]"
            >
              আবেদন করুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;