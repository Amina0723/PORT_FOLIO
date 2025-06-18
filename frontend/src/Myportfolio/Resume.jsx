import React from "react";
import { motion } from "framer-motion";

const resumeData = [
  {
    year: "2019 – 2021",
    title: "Intermediate in ICS",
    subtitle: "Punjab College",
    desc: "Completed with strong focus on Mathematics and Computer Science.",
  },
  {
    year: "2022–2025",
    title: "Bachelor’s Degree of CS",
    subtitle: "University of Sargodha",
    desc: "Strong foundation in programming, web development, and software engineering.",
  },
  {
    year: "2025",
    title: "WordPress Developer",
    subtitle: "Adan IT Center",
    desc: "Experienced in custom themes, performance optimization, and responsive design.",
  },
  {
    year: "2025",
    title: "MERN Stack Developer",
    subtitle: "Adan IT Center",
    desc: "Skilled in React, Tailwind CSS, and building responsive, user-centric applications. Specialized in building scalable server-side applications and APIs.",
  },
];

const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen bg-[#0f172a] text-white px-4 sm:px-6 md:px-20 py-16"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-3">
          My Education
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          A visual timeline of my academic and professional journey.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l-2 border-yellow-400 max-w-4xl mx-auto pl-6 sm:pl-10">
        {resumeData.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative mb-12 group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[10px] top-2 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white group-hover:scale-125 transition-all duration-300" />

            {/* Content Box */}
            <div className="bg-[#1e293b] p-5 sm:p-6 rounded-lg border border-gray-700 shadow-lg hover:shadow-yellow-400/40 transition duration-300">
              <p className="text-yellow-400 text-sm font-semibold">{item.year}</p>
              <h3 className="text-lg sm:text-xl font-bold mt-1">{item.title}</h3>
              <h4 className="text-gray-400 uppercase text-xs sm:text-sm">{item.subtitle}</h4>
              <p className="text-gray-300 text-sm sm:text-base mt-2">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Resume;
