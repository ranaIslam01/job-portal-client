import { Link } from "react-router";
import JobCard from "../Components/JobCard";
import { useEffect, useState } from "react";

const FindJob = () => {
  const [initialJobs, setInitialJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    fetch("https://job-portal-server-y6ck.onrender.com/jobs")
      .then((res) => res.json())
      .then((data) => {
        setInitialJobs(data);
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, []);


  useEffect(() => {
    const filtered = initialJobs.filter((job) => {
      const titleMatch = job.title
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
      
      const locationMatch = job.location
        ?.toLowerCase()
        .includes(locationTerm.toLowerCase());

      const typeMatch =
        selectedTypes.length === 0 || selectedTypes.includes(job.jobType);

      return titleMatch && locationMatch && typeMatch;
    });

    setJobs(filtered);
  }, [searchTerm, locationTerm, selectedTypes, initialJobs]);

  const handleCheckboxChange = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  // ৪. Filter reset
  const clearFilter = () => {
    setSearchTerm("");
    setLocationTerm("");
    setSelectedTypes([]);
    setJobs(initialJobs);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-gray-900">
            আপনার স্বপ্নের চাকরি খুঁজুন
          </h1>
          <p className="text-gray-600 mt-2">
            সেরা কোম্পানিগুলোতে হাজারো চাকরির সুযোগ রয়েছে
          </p>
        </div>

        {/*search bar */}
        <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="জব টাইটেল বা কীওয়ার্ড"
                className="w-full pl-4 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                value={locationTerm}
                onChange={(e) => setLocationTerm(e.target.value)}
                placeholder="লোকেশন (ঢাকা, চট্টগ্রাম...)"
                className="w-full pl-4 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
              />
            </div>
            <button
              disabled
              className="bg-blue-600 text-white font-semibold py-3 rounded-xl opacity-90 shadow-lg shadow-blue-200 cursor-default"
            >
              অটো ফিল্টার হচ্ছে...
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                ফিল্টার করুন
              </h3>

              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-gray-800">চাকরির ধরন</h4>
                <div className="space-y-3">
                  {["Full-Time", "Part-Time", "Remote", "Hybrid", "Intern"].map(
                    (type) => (
                      <label
                        key={type}
                        className="flex items-center group cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedTypes.includes(type)}
                          onChange={() => handleCheckboxChange(type)}
                          className="w-5 h-5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                        />
                        <span className="ml-3 text-gray-600 group-hover:text-blue-600 transition-colors">
                          {type}
                        </span>
                      </label>
                    )
                  )}
                </div>
              </div>

              <button
                onClick={clearFilter}
                className="w-full py-3 text-red-500 font-medium hover:bg-red-50 rounded-xl transition-colors border border-transparent hover:border-red-100"
              >
                ফিল্টার মুছুন
              </button>
            </div>
          </aside>

          <main className="w-full lg:w-3/4">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
                <p className="mt-4 text-gray-500 italic">চাকরি খোঁজা হচ্ছে...</p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">
                    মোট <span className="text-blue-600">{jobs.length}টি</span>{" "}
                    চাকরি পাওয়া গেছে
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-5">
                  {jobs.length > 0 ? (
                    jobs.map((job) => (
                      <JobCard job={job} key={job._id}></JobCard>
                    ))
                  ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                      <p className="text-gray-500">
                        দুঃখিত, আপনার সার্চের সাথে কোনো চাকরি মেলেনি।
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default FindJob;