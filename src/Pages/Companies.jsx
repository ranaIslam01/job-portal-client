import React from 'react';

const Companies = () => {
  // ডামি কোম্পানি ডেটা
  const companies = [
    { id: 1, name: "Google", industry: "Technology", jobs: 25, rating: 4.8, logo: "G", color: "bg-red-100 text-red-600" },
    { id: 2, name: "Meta", industry: "Social Media", jobs: 18, rating: 4.5, logo: "M", color: "bg-blue-100 text-blue-600" },
    { id: 3, name: "Amazon", industry: "E-commerce", jobs: 40, rating: 4.2, logo: "A", color: "bg-yellow-100 text-yellow-700" },
    { id: 4, name: "Netflix", industry: "Entertainment", jobs: 12, rating: 4.7, logo: "N", color: "bg-red-50 text-red-700" },
    { id: 5, name: "Microsoft", industry: "Software", jobs: 30, rating: 4.6, logo: "M", color: "bg-blue-50 text-blue-800" },
    { id: 6, name: "Tesla", industry: "Automotive", jobs: 10, rating: 4.4, logo: "T", color: "bg-gray-100 text-gray-800" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">সেরা কোম্পানিগুলো খুঁজুন</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            আপনার পছন্দের কোম্পানিতে ক্যারিয়ার শুরু করুন। তাদের কাজের পরিবেশ এবং বর্তমান চাকরির সুযোগ সম্পর্কে জানুন।
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <input 
            type="text" 
            placeholder="কোম্পানির নাম লিখুন..." 
            className="grow p-4 border border-gray-200 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="p-4 border border-gray-200 rounded-xl shadow-sm outline-none bg-white text-gray-600">
            <option>সব ইন্ডাস্ট্রি</option>
            <option>Technology</option>
            <option>Finance</option>
            <option>Marketing</option>
          </select>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div key={company.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                {/* Logo Placeholder */}
                <div className={`w-16 h-16 ${company.color} rounded-2xl flex items-center justify-center text-2xl font-black shadow-inner`}>
                  {company.logo}
                </div>
                <div className="text-right">
                  <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                    {company.jobs} Jobs
                  </span>
                </div>
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                {company.name}
              </h2>
              <p className="text-gray-500 text-sm mb-4">{company.industry}</p>

              <div className="flex items-center gap-1 mb-6">
                <span className="text-yellow-400">★</span>
                <span className="text-sm font-bold text-gray-700">{company.rating}</span>
                <span className="text-gray-400 text-xs ml-1">(Reviews)</span>
              </div>

              <button className="w-full py-3 bg-gray-50 text-gray-700 font-semibold rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                কোম্পানি প্রোফাইল দেখুন
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Placeholder */}
        <div className="mt-12 flex justify-center">
          <nav className="flex gap-2">
            <button className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-50">Previous</button>
            <button className="px-4 py-2 border rounded-lg bg-blue-600 text-white">1</button>
            <button className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-50">2</button>
            <button className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-50">Next</button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Companies;