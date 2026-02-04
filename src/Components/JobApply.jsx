import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";

const JobApply = () => {
  const job = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;

    const application = {
      job_id: job._id,
      job_title: job.title,
      company: job.company,
      applicant_email: user?.email,
      linkedin_url: form.linkedin.value,
      github_url: form.github.value,
      resume_url: form.resume.value,
      applied_date: new Date().toLocaleDateString(),
    };

    fetch("https://job-portal-server-y6ck.onrender.com/job-applications", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(application),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "আবেদন সফল হয়েছে!",
            text: `${job.title} পদের জন্য আপনার প্রোফাইল জমা দেওয়া হয়েছে।`,
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/my-applications");
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "দুঃখিত",
          text: "সার্ভারে সমস্যা হয়েছে, আবার চেষ্টা করুন।",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 text-gray-900">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        {/* Header Area */}
        <div className="bg-blue-600 p-8 text-white text-center">
          <h2 className="text-3xl font-extrabold">জব অ্যাপ্লিকেশন ফর্ম</h2>
          <p className="mt-2 text-blue-100 italic">
            {job.title} @ {job.company}
          </p>
        </div>

        <form onSubmit={handleApply} className="p-8 md:p-12 space-y-6">
          {/* Read-only email field */}
          <div className="form-control">
            <label className="label text-gray-700 font-bold mb-1">
              আপনার ইমেইল (অপরিবর্তনযোগ্য)
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              className="w-full p-4 bg-gray-100 border border-gray-200 rounded-2xl text-gray-500 cursor-not-allowed focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label text-gray-700 font-bold mb-1">
                LinkedIn প্রোফাইল লিঙ্ক
              </label>
              <input
                type="url"
                name="linkedin"
                placeholder="https://linkedin.com/in/..."
                className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-gray-700 font-bold mb-1">
                GitHub প্রোফাইল লিঙ্ক
              </label>
              <input
                type="url"
                name="github"
                placeholder="https://github.com/..."
                className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label text-gray-700 font-bold mb-1">
              রেজ্যুমে/সিভি ড্রাইভ লিঙ্ক
            </label>
            <input
              type="url"
              name="resume"
              placeholder="Google Drive/Dropbox Link"
              className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              required
            />
            <p className="text-xs text-gray-400 mt-2">
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl shadow-lg hover:shadow-blue-200 transition-all active:scale-95 text-lg"
          >
            আবেদন জমা দিন
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
