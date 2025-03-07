import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const skills = {
  languages: ['Java', 'Kotlin', 'JavaScript', 'Python', 'HTML', 'CSS'],
  frameworks: ['Express', 'React'],
  tools: ['Android', 'Git', 'Linux', 'MongoDB', 'Node.js', 'Postman'],
};

const techIcons = {
  Java: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
  Kotlin: 'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg',
  JavaScript: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  Python: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
  HTML: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
  CSS: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
  Express: 'https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png',
  React: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
  Android: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg',
  Git: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
  Linux: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
  MongoDB: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
  'Node.js': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
  Postman: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Skills = () => {
  return (
    <section id="skills" className="p-12 bg-[#0A0F1A] text-white relative">
      {/* Floating Particles Background */}
      <div className="p-10 absolute inset-0 pointer-events-none backdrop-blur-3xl">
  <img
    src="https://i.imgur.com/ZAmY2M9.gif"
    alt="particles"
    className="w-full h-full opacity-30"
  />
</div>


      {/* Section Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="p-5 text-5xl font-bold text-white mb-6">Skills</h2>
        <p className="text-lg text-gray-400">
          My Tech Stack 🔥
        </p>
      </motion.div>

      {/* Skills Categories */}
      {Object.keys(skills).map((category) => (
        <motion.div
          key={category}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="mb-12 relative z-10"
        >
          <div className="flex flex-wrap gap-10 justify-center">
            {skills[category].map((tech, index) => (
              <Tilt key={index} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
                <div className="relative group">
                  <motion.img
                    src={techIcons[tech]}
                    alt={tech}
                    className="w-20 h-20 rounded-lg bg-white p-3 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-500 cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 text-sm bg-black text-white px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {tech}
                  </motion.div>
                </div>
              </Tilt>
            ))}
          </div>
        </motion.div>
      ))}

    
    </section>
  );
};

export default Skills;
