import { Link, useLoaderData } from "react-router";
import JobCard from "../Components/JobCard";

const FindJob = () => {
  const initialJobs = useLoaderData();
  
  return (
    <div className="bg-gray-50 min-h-screen py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* হেডার সেকশন */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-gray-900">আপনার স্বপ্নের চাকরি খুঁজুন</h1>
          <p className="text-gray-600 mt-2">সেরা কোম্পানিগুলোতে হাজারো চাকরির সুযোগ রয়েছে</p>
        </div>

        {/* সার্চ বার */}
        <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="জব টাইটেল বা কীওয়ার্ড"
                className="w-full pl-4 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="লোকেশন (ঢাকা, চট্টগ্রাম...)"
                className="w-full pl-4 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
              />
            </div>
            <button className="bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              সার্চ করুন
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* সাইডবার ফিল্টার */}
          <aside className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                ফিল্টার করুন
              </h3>

              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-gray-800">চাকরির ধরন</h4>
                <div className="space-y-3">
                  {["Full-Time", "Part-Time", "Remote", "Hybrid", "Intern"].map((type) => (
                    <label key={type} className="flex items-center group cursor-pointer">
                      <input type="checkbox" className="w-5 h-5 border-gray-300 rounded text-blue-600 focus:ring-blue-500" />
                      <span className="ml-3 text-gray-600 group-hover:text-blue-600 transition-colors">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-gray-800">বেতন সীমা</h4>
                <select className="w-full border border-gray-200 p-3 rounded-xl text-gray-600 bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500">
                  <option>সব সীমা</option>
                  <option>২০k - ৪০k BDT</option>
                  <option>৪০k - ৮০k BDT</option>
                  <option>৮০k+ BDT</option>
                </select>
              </div>

              <button className="w-full py-3 text-red-500 font-medium hover:bg-red-50 rounded-xl transition-colors border border-transparent hover:border-red-100">
                ফিল্টার মুছুন
              </button>
            </div>
          </aside>

          {/* জব লিস্টিং */}
          <main className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                মোট <span className="text-blue-600">{initialJobs.length}টি</span> চাকরি পাওয়া গেছে
              </h2>
              <select className="bg-white border border-gray-200 text-gray-600 py-2 px-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-500">
                <option>নতুনগুলো আগে</option>
                <option>পুরানোগুলো আগে</option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {initialJobs.map((job) => (
                <JobCard job = {job} key={job._id}></JobCard>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FindJob;