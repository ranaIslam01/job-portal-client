import React from 'react';
import { Link } from 'react-router';
import FeaturedJobs from '../Components/FeaturedJobs';

const Home = () => {

  return (
    <div className="bg-gray-50">
      
      {/* 1. Hero Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            আপনার স্বপ্নের চাকরি খুঁজে নিন
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            হাজারো চাকরির সুযোগ থেকে আপনার জন্য সঠিকটি বেছে নিন আজই।
          </p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-white p-2 rounded-lg shadow-lg flex flex-col md:flex-row gap-2">
            <input 
              type="text" 
              placeholder="চাকরির পদবী বা কোম্পানি..." 
              className="grow p-3 text-gray-800 outline-none rounded-md"
            />
            <input 
              type="text" 
              placeholder="লোকেশন (যেমন: ঢাকা)" 
              className="grow p-3 text-gray-800 border-l-0 md:border-l border-gray-200 outline-none rounded-md"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md font-bold transition">
              খুঁজুন
            </button>
          </div>
        </div>
      </section>

      {/* 2. Job Categories */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">জনপ্রিয় ক্যাটাগরি</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Software', 'Marketing', 'Design', 'Finance', 'Sales', 'Customer Care', 'Management', 'HR'].map((cat) => (
            <div key={cat} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center cursor-pointer border border-gray-100">
              <div className="text-blue-600 text-2xl mb-2">📁</div>
              <h3 className="font-semibold text-gray-700">{cat}</h3>
              <p className="text-sm text-gray-400">১২০+ চাকরি</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Jobs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">সাম্প্রতিক চাকরিগুলো</h2>
              <p className="text-gray-500 mt-2">আপনার জন্য বাছাইকৃত সেরা সুযোগ</p>
            </div>
            <button className="text-blue-600 font-semibold hover:underline">সবগুলো দেখুন →</button>
          </div>
          <div>
            <FeaturedJobs/>
          </div>
          
        </div>
      </section>

      {/* 4. Call to Action (CTA) */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="bg-gray-900 rounded-3xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">আপনি কি লোক নিয়োগ দিতে চান?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            আপনার কোম্পানির জন্য দক্ষ কর্মী খুঁজছেন? আজই আমাদের পোর্টালে চাকরির বিজ্ঞাপন দিন এবং সেরা প্রতিভা খুঁজে নিন।
          </p>
          <Link to ="/post-job" className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition">
            চাকরি পোস্ট করুন
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;