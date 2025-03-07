import React from 'react';
import { motion } from 'framer-motion';
import about_image from '../res/about_image.jpg';

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
};

const staggerVariants = {
  visible: { transition: { staggerChildren: 0.2 } }
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

const AboutMe = () => {
  return (
    <div className="p-10 min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#0A0F1A]" id="about">
      {/* Left Section with Text */}
      <div className="flex items-center justify-center bg-gradient-to-b from-[#1F2937] to-[#111827] text-left p-6 md:p-0 rounded">
        <motion.div 
          className="space-y-6 max-w-lg relative" 
          variants={fadeInVariants} 
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={fadeInVariants} 
            className="text-4xl md:text-5xl font-bold text-white tracking-wide"
          >
            Hey there! I'm <span className="text-[#22c55e]">Shreyash Neeraj</span> 👋
          </motion.h2>

          <p className="text-lg text-gray-400 leading-relaxed">
            Full-stack developer skilled in <span className="text-[#22c55e] font-semibold">Android</span> and <span className="text-[#22c55e] font-semibold">web technologies</span>. Crafting innovative, user-focused solutions that drive growth, enhance engagement, and streamline operations. Passionate about transforming ideas into impactful digital experiences.
          </p>

          <motion.ul
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="fun-facts text-gray-300 space-y-2"
          >
            <motion.li variants={fadeInVariants} whileHover={{ scale: 1.1 }} className="cursor-pointer hover:text-[#22c55e]">
              🚀 Built my first Python game in 6th standard.
            </motion.li>
            <motion.li variants={fadeInVariants} whileHover={{ scale: 1.1 }} className="cursor-pointer hover:text-[#22c55e]">
              🎯 Always up for a coding challenge.
            </motion.li>
            <motion.li variants={fadeInVariants} whileHover={{ scale: 1.1 }} className="cursor-pointer hover:text-[#22c55e]">
              🎮 Gaming is my stress buster.
            </motion.li>
            <motion.li variants={fadeInVariants} whileHover={{ scale: 1.1 }} className="cursor-pointer hover:text-[#22c55e]">
              🌎 Dreaming of coding from a beach someday!
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>

      {/* Right Section with Image + Floating Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative flex justify-center items-center bg-gradient-to-b from-[#111827] to-[#1F2937] p-6 md:p-0 overflow-hidden"
      >
        {/* Floating Tech Icons */}
        <motion.div
          variants={floatingIconVariants}
          animate="animate"
          className="absolute w-16 top-16 left-8 opacity-20"
        >
          <svg fill="#22c55e" width="100%" height="100%" viewBox="0 0 24 24">
            <path d="M12 2L1.7 9.5 12 17 22.3 9.5 12 2zm0 2.3L20 9.5 12 15.7 4 9.5 12 4.3z"/>
          </svg>
        </motion.div>

        <motion.div
          variants={floatingIconVariants}
          animate="animate"
          className="absolute w-10 bottom-10 right-10 opacity-20"
        >
          <svg fill="#22c55e" width="100%" height="100%" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="none"/>
          </svg>
        </motion.div>

        {/* Image */}
        <img 
          src= {about_image} 
          alt="About Me" 
          className="object-cover w-9/10 h-9/10 rounded-2xl shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] border-[6px] border-transparent hover:border-[#ffffff30] backdrop-blur-lg"
        />
      </motion.div>
    </div>
  );
};

export default AboutMe;
