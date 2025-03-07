import React from 'react';
import { motion } from 'framer-motion';

const experience = [
  {
    title: 'Developer Tech Team',
    company: 'Ecell, VIT Bhopal',
    duration: 'Nov 2025 - Present',
    type: 'Full-time',
    description: 'Contributing to the tech team for developing Android applications and managing software solutions.',
  },
  {
    title: 'Tech Team Android',
    company: 'Ecell, VIT Bhopal',
    duration: 'Nov 2024 - Jan 2025',
    type: 'Apprenticeship',
    description: 'Worked on Android applications with Kotlin and Android frameworks.',
  },
  {
    title: 'Tech Team Android',
    company: 'CSI Student Chapter VIT Bhopal',
    duration: 'Oct 2024 - Present',
    type: 'Full-time',
    description: 'Developed Android applications using Kotlin and Jetpack Compose.',
  },
  {
    title: 'Tech Team Android',
    company: 'CSI Student Chapter VIT Bhopal',
    duration: 'Sep 2024 - Oct 2024',
    type: 'Apprenticeship',
    description: 'Contributed to Android projects during the apprenticeship program.',
  },
  {
    title: 'Contributor',
    company: 'GirlScript Summer of Code',
    duration: 'Oct 2024 - Nov 2024',
    type: 'Part-time',
    description: 'Contributed to open-source projects and collaborated with global developers.',
  },
  {
    title: 'Mobile Application Developer',
    company: 'Pinnacle Labs',
    duration: 'Aug 2024 - Oct 2024',
    type: 'Internship',
    description: 'Worked as a mobile application developer on Kotlin-based apps.',
  }
];

const fadeInSlideVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3, delayChildren: 0.2 }
  }
};

const EducationAndExperience = () => {
  return (
    <section id="experience" className="p-10 bg-[#0A0F1A] text-white">
      {/* Heading Reveal */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInSlideVariants}
      >
        <h2 className="text-5xl font-bold mb-4">Experience & Education</h2>
        <p className="text-lg text-gray-400">
          My professional journey across development and learning.
        </p>
      </motion.div>

      {/* Experience Cards with Staggered Animation */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            variants={fadeInSlideVariants}
            className="bg-gray-800 rounded-2xl shadow-lg p-6 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] cursor-pointer"
          >
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <p className="text-green-400">{exp.company}</p>
            <p className="text-sm text-gray-500">{exp.duration} | {exp.type}</p>
            <p className="text-gray-400 mt-4">{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Education Card */}
      <motion.div
        variants={fadeInSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 bg-gray-800 rounded-2xl shadow-lg p-6 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] text-center"
      >
        <h3 className="text-2xl font-semibold">B.Tech Computer Science & Engineering</h3>
        <p className="text-green-400">Vellore Institute of Technology (VIT) Bhopal</p>
        <p className="text-sm text-gray-500">2024 - 2028</p>
    
      </motion.div>
    </section>
  );
};

export default EducationAndExperience;
