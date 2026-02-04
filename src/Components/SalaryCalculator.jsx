
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Calculator, Target } from 'lucide-react';

const SalaryCalculator = () => {
  const navigate = useNavigate();
  const [experience, setExperience] = useState(1);
  const [role, setRole] = useState("Software Engineer");

  const baseSalary = {
    "Software Engineer": 40000,
    "Product Designer": 35000,
    "Digital Marketer": 25000,
    "Project Manager": 45000
  };

  const estimatedSalary = (baseSalary[role] || 30000) + (experience * 10000);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 text-gray-900">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 mb-8 hover:text-blue-600 transition">
          <ArrowLeft size={20} /> ফিরে যান
        </button>

        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-[#0f172a] p-8 text-white text-center">
            <Calculator className="mx-auto mb-4" size={48} />
            <h1 className="text-3xl font-bold">স্যালারি ক্যালকুলেটর</h1>
            <p className="text-gray-400 mt-2">আপনার অভিজ্ঞতা অনুযায়ী সঠিক স্যালারি রেঞ্জ জানুন</p>
          </div>

          <div className="p-8 md:p-12 space-y-8">

            <div>
              <label className="block text-gray-700 font-bold mb-3">আপনার পদবী নির্বাচন করুন</label>
              <select 
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <option>Software Engineer</option>
                <option>Product Designer</option>
                <option>Digital Marketer</option>
                <option>Project Manager</option>
              </select>
            </div>


            <div>
              <label className="block text-gray-700 font-bold mb-3">অভিজ্ঞতা (বছরে): <span className="text-blue-600">{experience} বছর</span></label>
              <input 
                type="range" min="0" max="15" 
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>ফ্রেশার</span>
                <span>১৫+ বছর</span>
              </div>
            </div>

            {/*Result sectiono */}
            <div className="bg-blue-50 p-8 rounded-4xl border border-blue-100 text-center">
              <h3 className="text-gray-600 font-medium mb-2">আপনার সম্ভাব্য মাসিক বেতন</h3>
              <div className="text-4xl md:text-5xl font-black text-blue-600">
                ৳{estimatedSalary.toLocaleString()}
              </div>
              <p className="text-sm text-blue-400 mt-4 flex items-center justify-center gap-2">
                <Target size={16} /> এটি একটি বাজার ভিত্তিক আনুমানিক ধারণা
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryCalculator;