import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';

const GoogleSignUp = ({form2}) => {
   const navigate = useNavigate();

   const {signInWithGoogle} = useContext(AuthContext);

   const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("গুগল দিয়ে সফলভাবে সাইন আপ করা হয়েছে!");
      setTimeout(() => {
        navigate(form2 || "/");
      }, 100);
    } catch (error) {
      console.error(error);
      toast.error("গুগল সাইন ইন ব্যর্থ হয়েছে।");
    }
  };

   return (
      <div>
          {/* Google Sign-In Button */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 py-3.5 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition-all duration-300 mb-6 shadow-sm active:scale-[0.98]"
        >
          <FcGoogle size={24} />
          গুগল দিয়ে সাইন আপ করুন
        </button>
      </div>
   );
};

export default GoogleSignUp;