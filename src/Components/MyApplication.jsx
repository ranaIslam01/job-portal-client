import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { Link } from "react-router";

const MyApplications = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://job-portal-server-y6ck.onrender.com/job-applications?email=${user.email}`,{
          credentials:"include"
        }
        
      )
        .then((res) => res.json())
        .then((data) => {
          setApplications(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching applications:", error);
          setLoading(false);
        });
    }
  }, [user?.email]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              আমার আবেদনসমূহ
            </h2>
            <p className="mt-2 text-gray-600">
              আপনি এ পর্যন্ত মোট <span className="font-bold text-blue-600">{applications.length}টি</span> জবে আবেদন করেছেন।
            </p>
          </div>
          <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold inline-block">
            ইউজার: {user?.email || "প্রার্থী"}
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
          <table className="table w-full border-collapse">
            {/* Table Head */}
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="py-5 px-6 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">কোম্পানি</th>
                <th className="py-5 px-6 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">পজিশন</th>
                <th className="py-5 px-6 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">আবেদনের তারিখ</th>
                <th className="py-5 px-6 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">অ্যাকশন</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan="4" className="py-32 text-center">
                    <div className="flex flex-col items-center">
                      <span className="loading loading-spinner loading-lg text-blue-600"></span>
                      <p className="mt-4 text-gray-500 animate-pulse font-medium">আপনার ডেটা প্রস্তুত হচ্ছে...</p>
                    </div>
                  </td>
                </tr>
              ) : applications.length > 0 ? (
                applications.map((app) => (
                  <tr key={app._id} className="hover:bg-blue-50/50 transition-colors duration-200">
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className="h-10 w-10 shrink-0 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                          {app.company?.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-bold text-gray-900">{app.company}</div>
                          <div className="text-xs text-gray-500 font-medium italic">Verified Company</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-xs font-bold">
                        {app.job_title}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-600 font-medium">
                      {new Date(app.applied_date).toLocaleDateString('bn-BD')}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center gap-2">
                        <a
                          href={app.github_url}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 text-xs font-bold border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300"
                        >
                          GitHub
                        </a>
                        <a
                          href={app.resume_url}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 text-xs font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          Resume
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-24 text-center">
                    <div className="flex flex-col items-center">
                      <div className="text-6xl mb-4 text-gray-200">📁</div>
                      <p className="text-xl font-bold text-gray-400">আপনি এখনো কোনো আবেদন করেননি</p>
                      <Link to = "/find-jobs" className="mt-4 btn btn-primary btn-sm rounded-full">জব খুঁজুন</Link>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default MyApplications;