import React from 'react';

const Salaries = () => {
  // ডামি স্যালারি ডেটা
  const salaryData = [
    { id: 1, role: "Software Engineer", average: "$95,000", range: "$70k - $140k", popularIn: "Dhaka, Remote" },
    { id: 2, role: "Product Designer", average: "$82,000", range: "$60k - $120k", popularIn: "Chittagong, USA" },
    { id: 3, role: "Digital Marketer", average: "$45,000", range: "$30k - $75k", popularIn: "Dhaka, Hybrid" },
    { id: 4, role: "Project Manager", average: "$88,000", range: "$65k - $130k", popularIn: "Remote" },
    { id: 5, role: "Data Scientist", average: "$105,000", range: "$85k - $160k", popularIn: "Dhaka, India" },
    { id: 6, role: "HR Manager", average: "$55,000", range: "$40k - $90k", popularIn: "Sylhet" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">বেতন নির্দেশিকা (Salary Guide)</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            বাজার দর অনুযায়ী আপনার পদের গড় বেতন এবং সুযোগ-সুবিধা সম্পর্কে স্পষ্ট ধারণা নিন।
          </p>
        </div>

        {/* Search Bar for Salaries */}
        <div className="max-w-4xl mx-auto mb-12 bg-white p-4 rounded-2xl shadow-sm flex flex-col md:flex-row gap-4 border border-gray-100">
          <input 
            type="text" 
            placeholder="পদবীর নাম (যেমন: Frontend Developer)" 
            className="flex-grow p-4 outline-none border-none text-gray-700 bg-gray-50 rounded-xl"
          />
          <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-md shadow-blue-200">
            বেতন চেক করুন
          </button>
        </div>

        {/* Salary List/Table */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="p-6 font-semibold uppercase text-sm">চাকরির পদবী</th>
                  <th className="p-6 font-semibold uppercase text-sm">গড় বাৎসরিক বেতন</th>
                  <th className="p-6 font-semibold uppercase text-sm">বেতনের সীমা (Range)</th>
                  <th className="p-6 font-semibold uppercase text-sm">জনপ্রিয় লোকেশন</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {salaryData.map((item) => (
                  <tr key={item.id} className="hover:bg-blue-50 transition-colors">
                    <td className="p-6">
                      <p className="font-bold text-gray-800 text-lg">{item.role}</p>
                    </td>
                    <td className="p-6">
                      <span className="text-blue-600 font-extrabold text-xl">{item.average}</span>
                    </td>
                    <td className="p-6">
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2 max-w-[150px]">
                        <div className="bg-blue-500 h-2 rounded-full w-2/3"></div>
                      </div>
                      <p className="text-xs text-gray-500 font-medium">{item.range}</p>
                    </td>
                    <td className="p-6">
                      <span className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                        {item.popularIn}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Career Advice Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-600 p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-4">বেতন বৃদ্ধির আলোচনা করবেন কীভাবে?</h3>
            <p className="text-blue-100 mb-6">আমাদের গাইডলাইন পড়ে জেনে নিন কীভাবে ইন্টারভিউতে সঠিকভাবে স্যালারি নেগোসিয়েশন করতে হয়।</p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition">
              টিপস দেখুন
            </button>
          </div>
          <div className="bg-gray-100 p-8 rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">আপনার বর্তমান বেতন কত হওয়া উচিত?</h3>
            <p className="text-gray-600 mb-6">আমাদের ক্যালকুলেটর ব্যবহার করে আপনার অভিজ্ঞতা অনুযায়ী সঠিক স্যালারি রেঞ্জ খুঁজে বের করুন।</p>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-800 transition">
              ক্যালকুলেটর ওপেন করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salaries;