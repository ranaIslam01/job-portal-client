import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);

  useEffect(() => {
    fetch("https://job-portal-server-y6ck.onrender.com/job-post")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedJobs(data);
      })
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Featured Jobs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredJobs.map((job) => {
          const { _id, title, company, jobType, location, salary, category } =
            job;

          return (
            <div
              key={_id}
              className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md hover:border-blue-400 transition-all group bg-white"
            >
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">
                  {jobType}
                </span>
                <span className="text-[10px] text-gray-400 uppercase">
                  {category}
                </span>
              </div>

              <h3 className="text-xl font-bold mt-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                {title}
              </h3>

              <p className="text-gray-600 font-medium mb-4">{company}</p>

              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500 gap-2">
                  <span>📍</span>
                  <span>{location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 gap-2">
                  <span>💰</span>
                  <span>{salary}</span>
                </div>
              </div>

              <button className="w-full mt-6 py-2.5 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                আবেদন করুন
              </button>
            </div>
          );
        })}
      </div>

      {featuredJobs.length === 0 && (
        <p className="text-center text-gray-500 mt-10">কোনো জব পাওয়া যায়নি।</p>
      )}
    </div>
  );
};

export default FeaturedJobs;
