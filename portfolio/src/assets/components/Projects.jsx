import { motion } from "framer-motion";

const Projects = () => {
  const cards = [
    {
      title: "Android Projects",
      description: "Showcasing Android apps built with Kotlin and Java.",
      icon: "📱",
    },
    {
      title: "Web Projects",
      description: "Collection of web applications using React and modern frameworks.",
      icon: "🌐",
    },
    {
      title: "Backend Projects",
      description: "API development and server-side logic using Node.js, Express, and MongoDB.",
      icon: "⚙️",
    },
  ];

  const iconAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const staggerVariants = {
    visible: {
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section
      id="projects"
      className="p-10 h-screen flex flex-col justify-center items-center bg-[#0A0F1A] text-white"
    >
      {/* Heading Reveal */}
      <motion.div
        className="container mx-auto text-center mb-12"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold mb-6 text-white">
          Projects
        </h2>
        <p className="text-lg text-gray-400">
          A glimpse into my works across different platforms.
        </p>
      </motion.div>

      {/* Card Reveal */}
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-5xl"
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            className="bg-gray-800 rounded-2xl shadow-lg p-8 w-full md:w-1/3 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] relative overflow-hidden"
          >
            <div className="flex items-center gap-4">
              <motion.span
                className="text-3xl"
                animate={iconAnimation}
              >
                {card.icon}
              </motion.span>
              <h3 className="text-2xl font-semibold">{card.title}</h3>
            </div>
            <p className="text-gray-400 mt-4">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
