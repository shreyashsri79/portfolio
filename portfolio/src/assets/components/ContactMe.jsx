import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"; // Social Icons

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ContactMe = () => {
  const email = "shreyashn.dev@gmail.com";

  return (
    <section
      id="contact"
      className="p-10 min-h-screen flex flex-col justify-center items-center bg-[#0A0F1A] text-white relative"
    >
      
      {/* Heading Reveal */}
      <motion.div
        className="text-center mb-12 relative z-10"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg text-gray-400">
          Let's connect! Reach out for collaborations or any queries.
        </p>
      </motion.div>

      {/* Email Button */}
      <motion.a
        href={`mailto:${email}`}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.3)" }}
        className="bg-[#111827] text-white px-8 py-4 rounded-lg transition-all duration-500 hover:bg-[#ffffff30] shadow-lg cursor-pointer relative z-10 mb-8"
      >
        Say Hello 👋
      </motion.a>

      {/* Social Links */}
      <motion.div
        className="flex gap-8 text-3xl relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <motion.a
          href="https://www.linkedin.com/in/shreyash-neeraj-9a3024252?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bm6X6doGLR36GQImBt3D1IA%3D%3D"
          target="_blank"
          whileHover={{ scale: 1.2, color: "#0A66C2", textShadow: "0px 0px 15px rgba(10, 102, 194, 0.8)" }}
          className="cursor-pointer transition-all duration-300"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://github.com/shreyashsri79"
          target="_blank"
          whileHover={{ scale: 1.2, color: "#ffffff", textShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)" }}
          className="cursor-pointer transition-all duration-300"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://www.instagram.com/they.call.me.zoro/"
          target="_blank"
          whileHover={{ scale: 1.2, color: "#E1306C", textShadow: "0px 0px 15px rgba(225, 48, 108, 0.8)" }}
          className="cursor-pointer transition-all duration-300"
        >
          <FaInstagram />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ContactMe;
