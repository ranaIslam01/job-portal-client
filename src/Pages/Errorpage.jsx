import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const Errorpage = () => {
   return (
      <div className='h-screen flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden'>
         
         <motion.h1 
            animate={{ 
               y: [0, -20, 0], // উপরে নিচে নড়বে
               scale: [1, 1.1, 1], // ছোট বড় হবে
               rotate: [0, 5, -5, 0] // হালকা ডানে বামে দুলবে
            }}
            transition={{ 
               duration: 3, 
               repeat: Infinity, // সারাক্ষণ চলবে
               ease: "easeInOut" 
            }}
            className='text-9xl text-cyan-500 font-extrabold shadow-2xl drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]'
         >
            404
         </motion.h1>

         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='text-center mt-5'
         >
            <h2 className='text-3xl text-white font-bold mb-2'>Page Not Found</h2>
            <p className='text-gray-400 mb-8'>আপনি যে পেজটি খুঁজছেন সেটি খুঁজে পাওয়া যায়নি!</p>
            
            <Link to="/">
               <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='px-8 py-3 bg-cyan-600 text-white rounded-full font-bold shadow-lg shadow-cyan-500/30'
               >
                  হোম পেজে ফিরে যান
               </motion.button>
            </Link>
         </motion.div>

      </div>
   );
};

export default Errorpage;