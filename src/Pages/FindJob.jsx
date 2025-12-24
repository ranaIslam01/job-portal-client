const FindJob = () => {
  // ডামি জব ডেটা
  const jobs = [
    { id: 1, title: "Senior React Developer", company: "Google", type: "Full-time", salary: "$100k - $150k", location: "Remote", posted: "2 days ago" },
    { id: 2, title: "Product Designer", company: "Meta", type: "Full-time", salary: "$80k - $120k", location: "USA", posted: "1 day ago" },
    { id: 3, title: "Node.js Developer", company: "Amazon", type: "Contract", salary: "$50/hr", location: "Hybrid", posted: "5 hours ago" },
    { id: 4, title: "Marketing Manager", company: "Shopify", type: "Part-time", salary: "$40k - $60k", location: "Canada", posted: "3 days ago" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input 
              type="text" 
              placeholder="জব টাইটেল বা কিওয়ার্ড..." 
              className="border text-gray-700 border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input 
              type="text" 
              placeholder="শহর বা দেশ..." 
              className="border text-gray-700 border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button className="bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">
              সার্চ করুন
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Side: Sidebar Filters */}
          <aside className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
              <h3 className="text-lg font-bold mb-4 border-b pb-2">ফিল্টার করুন</h3>
              
              {/* Job Type Filter */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-gray-700">চাকরির ধরন</h4>
                <div className="space-y-2">
                  {['Full-time', 'Part-time', 'Contract', 'Remote'].map(type => (
                    <label key={type} className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                      <span className="text-gray-600">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Salary Range Filter */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-gray-700">বেতন সীমা</h4>
                <select className="w-full border border-gray-200 p-2 rounded-lg text-gray-600 outline-none">
                  <option>$0 - $50k</option>
                  <option>$50k - $100k</option>
                  <option>$100k+</option>
                </select>
              </div>

              <button className="w-full text-blue-600 font-semibold py-2 hover:bg-blue-50 border border-blue-600 rounded-lg transition">
                ক্লিয়ার ফিল্টার
              </button>
            </div>
          </aside>

          {/* Right Side: Job Listings */}
          <main className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">মোট {jobs.length}টি চাকরি পাওয়া গেছে</h2>
              <select className="bg-transparent border-none text-gray-600 font-medium cursor-pointer focus:ring-0">
                <option>Newest First</option>
                <option>Oldest First</option>
              </select>
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-transparent hover:border-blue-500 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-xl">
                      {job.company[0]}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 hover:text-blue-600 cursor-pointer">{job.title}</h3>
                      <p className="text-gray-500 font-medium">{job.company}</p>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">{job.type}</span>
                        <span className="text-gray-400 text-xs">📍 {job.location}</span>
                        <span className="text-gray-400 text-xs">💰 {job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 w-full md:w-auto transition">
                      Apply Now
                    </button>
                    <span className="text-gray-400 text-xs italic">{job.posted}</span>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FindJob;