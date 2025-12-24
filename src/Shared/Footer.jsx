import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Job<span className="text-blue-500">Portal</span>
            </h2>
            <p className="text-sm leading-relaxed">
              আপনার স্বপ্নের ক্যারিয়ার গড়ার পথে আমরা আছি আপনার সাথে। সেরা সব চাকরির সুযোগ খুঁজে পেতে আমাদের সাথেই থাকুন।
            </p>
            <div className="flex space-x-4 mt-6">
              {/* Social Icons (Placeholder) */}
              <a href="#" className="hover:text-blue-500 transition"><i className="fab fa-facebook-f"></i> FB</a>
              <a href="#" className="hover:text-blue-500 transition"><i className="fab fa-linkedin-in"></i> LN</a>
              <a href="#" className="hover:text-blue-500 transition"><i className="fab fa-twitter"></i> TW</a>
            </div>
          </div>

          {/* For Candidates */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">প্রার্থীদের জন্য</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">চাকরি খুঁজুন</a></li>
              <li><a href="#" className="hover:text-white transition">জীবনবৃত্তান্ত তৈরি</a></li>
              <li><a href="#" className="hover:text-white transition">চাকরির এলার্ট</a></li>
              <li><a href="#" className="hover:text-white transition">ক্যারিয়ার টিপস</a></li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">নিয়োগকারীদের জন্য</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">চাকরি পোস্ট করুন</a></li>
              <li><a href="#" className="hover:text-white transition">সেরা প্রতিভা খুঁজুন</a></li>
              <li><a href="#" className="hover:text-white transition">বিজ্ঞাপন দিন</a></li>
              <li><a href="#" className="hover:text-white transition">সাহায্য কেন্দ্র</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">নিউজলেটার</h3>
            <p className="text-sm mb-4">নতুন চাকরির আপডেট পেতে সাবস্ক্রাইব করুন।</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="আপনার ইমেইল..." 
                className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-white text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition duration-300">
                সাবস্ক্রাইব
              </button>
            </form>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} JobPortal. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;