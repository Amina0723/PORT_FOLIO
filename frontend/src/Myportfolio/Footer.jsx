import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-gradient-to-r from-cyan-700 via-blue-950 to-sky-600 text-white py-10 px-4 shadow-inner border-t border-zinc-700"
    >
      {/* Decorative line */}
      <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-6" />

      {/* Animated Social Icons */}
      <motion.div className="flex justify-center space-x-6 mb-4">
        <motion.a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition transform hover:scale-110 duration-300"
          variants={itemVariants}
        >
          <FaFacebookF size={20} />
        </motion.a>
        <motion.a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-300 transition transform hover:scale-110 duration-300"
          variants={itemVariants}
        >
          <FaTwitter size={20} />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-300 transition transform hover:scale-110 duration-300"
          variants={itemVariants}
        >
          <FaInstagram size={20} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300 transition transform hover:scale-110 duration-300"
          variants={itemVariants}
        >
          <FaLinkedinIn size={20} />
        </motion.a>
      </motion.div>

      {/* Footer Text */}
      <motion.p
        variants={itemVariants}
        className="text-sm text-gray-200 text-center"
      >
        © 2025 All rights reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
