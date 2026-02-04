import React from "react";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    location,
    jobType,
    salaryRange,
    posted,
  } = job;

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          {/*Company logo*/}
          <div className="w-16 h-16 bg-gray-50 p-2 rounded-2xl border border-gray-100 flex items-center justify-center overflow-hidden">
            <img
              src={company_logo}
              alt={company}
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="text-blue-500 font-medium text-sm">{company}</p>

            <div className="flex flex-wrap gap-4 mt-3">
              <span className="flex items-center text-gray-500 text-sm italic">
                📍 {location}
              </span>
              <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                {jobType}
              </span>
              <span className="text-green-600 font-bold text-sm">
                ৳ {salaryRange.min} - {salaryRange.max}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3 border-t md:border-t-0 pt-4 md:pt-0">
          <Link
            to={`/jobs/${_id}`}  
            className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold text-center hover:bg-blue-600 transition-all w-full md:w-auto"
          >
            বিস্তারিত দেখুন
          </Link>
          <span className="text-gray-400 text-xs font-medium">
            পোস্ট করা হয়েছে: {posted || "সম্প্রতি"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;