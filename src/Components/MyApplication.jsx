import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyApplications = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  if (!user?.email) {
    setLoading(false);
    return;
  }
  setLoading(true);

  const fetchApplications = async () => {
    try {
      const response = await fetch(
        `https://job-portal-server-y6ck.onrender.com/job-applications?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${user?.accessToken}`,
          },
        }
      );
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchApplications();
}, [user?.email, user?.accessToken]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "আপনি কি নিশ্চিত?",
      text: "একবার মুছে ফেললে এটি আর ফিরে পাবেন না!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "হ্যাঁ, মুছে ফেলুন!",
      cancelButtonText: "না, বাতিল করুন",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://job-portal-server-y6ck.onrender.com/job-applications/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "মুছে ফেলা হয়েছে!",
                text: "আপনার আবেদনটি সফলভাবে ডিলিট করা হয়েছে।",
                icon: "success",
              });
              const remaining = applications.filter((app) => app._id !== id);
              setApplications(remaining);
            }
          })
          .catch((error) => {
            console.error("Error deleting:", error);
            Swal.fire("Error!", "মুছে ফেলার সময় একটি সমস্যা হয়েছে।", "error");
          });
      }
    });
  };

  if (!user?.email && !loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          আপনি লগইন করেননি!
        </h2>
        <Link to="/login" className="btn btn-primary px-8 rounded-full">
          লগইন করুন
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    {/* Header Section */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          আমার আবেদনসমূহ
        </h2>
        <p className="mt-2 text-gray-600">
          মোট{" "}
          <span className="font-bold text-blue-600">
            {applications.length}টি
          </span>{" "}
          আবেদন
        </p>
      </div>
      <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold self-start md:self-center">
        {user?.email}
      </div>
    </div>

    {/* Table Container */}
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
      <div className="overflow-x-auto">
        <table className="table w-full border-collapse min-w-150 md:min-w-full">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-5 px-6 text-left font-bold text-gray-600 whitespace-nowrap">
                কোম্পানি
              </th>
              <th className="py-5 px-6 text-left font-bold text-gray-600 whitespace-nowrap">
                পজিশন
              </th>
              <th className="py-5 px-6 text-left font-bold text-gray-600 whitespace-nowrap">
                তারিখ
              </th>
              <th className="py-5 px-6 text-center font-bold text-gray-600 whitespace-nowrap">
                ডকুমেন্টস
              </th>
              <th className="py-5 px-6 text-center font-bold text-gray-600 whitespace-nowrap">
                অ্যাকশন
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr>
                <td colSpan="5" className="py-20 text-center">
                  <div className="flex flex-col items-center">
                        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-600"></div>
                        <p className="mt-4 text-gray-500 text-sm">
                          ডাটা লোড হচ্ছে...
                        </p>
                      </div>
                </td>
              </tr>
            ) : applications.length > 0 ? (
              applications.map((app) => (
                <tr
                  key={app._id}
                  className="hover:bg-blue-50/50 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold shrink-0">
                        {app.company?.charAt(0)}
                      </div>
                      <div className="ml-4 font-bold text-gray-900 whitespace-nowrap">
                        {app.company}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-xs font-bold whitespace-nowrap">
                      {app.job_title}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600 whitespace-nowrap">
                    {app.applied_date
                      ? new Date(app.applied_date).toLocaleDateString("bn-BD")
                      : "N/A"}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center gap-2">
                      <a
                        href={app.github_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-900 hover:text-white btn btn-xs btn-outline"
                      >
                        GitHub
                      </a>
                      <a
                        href={app.resume_url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-xs btn-primary text-white"
                      >
                        Resume
                      </a>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button
                      onClick={() => handleDelete(app._id)}
                      className="btn btn-ghost btn-circle text-red-500 hover:bg-red-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 md:h-6 md:w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-24 text-center">
                  <p className="text-xl font-bold text-gray-400">
                    কোনো আবেদন পাওয়া যায়নি
                  </p>
                  <Link
                    to="/find-jobs"
                    className="mt-4 btn btn-primary btn-sm rounded-full"
                  >
                    জব খুঁজুন
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  );
};

export default MyApplications;
