import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../res/hero_portfolio_pfp.jpg';

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
};

const floatingIconVariants = {
  animate: {
    y: [0, 15, 0],
    rotate: [0, 10, 0],
    opacity: [0.3, 0.7, 0.3],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

const Hero = () => {
  const name = "Shreyash Neeraj";

  return (
    <div className="p-10 min-h-screen md:h-screen grid grid-cols-1 md:grid-cols-2 bg-[#0A0F1A]">
      {/* Left Section with Image + Floating Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full flex justify-center items-center bg-gradient-to-b from-[#111827] to-[#1F2937] p-6 md:p-0 rounded relative overflow-hidden"
      >
        {/* Floating Tech Icon 1 */}
        <motion.div
          variants={floatingIconVariants}
          animate="animate"
          className="absolute w-12 top-10 left-10 opacity-20"
        >
          <svg fill="#22c55e" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
          </svg>
        </motion.div>

        {/* Floating Tech Icon 2 */}
        <motion.div
          variants={floatingIconVariants}
          animate="animate"
          className="absolute w-16 bottom-16 right-16 opacity-20"
        >
          <svg fill="#22c55e" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" />
          </svg>
        </motion.div>

        <img
          src={heroImage}
          alt="Profile"
          className="object-cover w-9/10 h-9/10 rounded-2xl shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] border-[6px] border-transparent hover:border-[#ffffff30] backdrop-blur-lg"
        />
      </motion.div>

      {/* Right Section with Text */}
      <div className="flex items-center justify-center bg-gradient-to-b from-[#1F2937] to-[#111827] text-center p-6 md:p-0">
        <motion.div
          className="space-y-6 max-w-lg"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide">
            {name}
          </h1>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            Software Engineer | Web & Android Developer
          </p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: '0px 0px 30px rgba(255, 255, 255, 0.2)' }}
            className="bg-[#111827] text-white px-6 md:px-8 py-3 rounded-lg transition-all duration-500 hover:bg-[#ffffff30] shadow-lg cursor-pointer"
            onClick={() => {
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
            }}
          >
            Reach out
          </motion.button>

        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
