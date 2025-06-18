import React, { useEffect, useState, useRef } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, percentage: '90%' },
    { name: 'CSS', icon: <FaCss3Alt />, percentage: '85%' },
    { name: 'JavaScript', icon: <FaJsSquare />, percentage: '80%' },
    { name: 'React', icon: <FaReact />, percentage: '85%' },
    { name: 'Node.js', icon: <FaNodeJs />, percentage: '70%' },
    { name: 'Express.js', icon: <SiExpress />, percentage: '75%' },
    { name: 'MongoDB', icon: <SiMongodb />, percentage: '65%' },
    { name: 'Git & GitHub', icon: <FaGitAlt />, percentage: '90%' },
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-8 py-20 text-white"
      style={{
        backgroundImage:
          "url('https://img.pikbest.com/background/20180830/creative-purple-micro-three-dimensional-geometric-ppt-background-image_2746099.jpg!bw700')",
        backgroundColor: '#000000cc',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-4 lg:mt-4">
          My Skills
        </h2>

        <p className="text-sm sm:text-base text-gray-200 mb-10 max-w-3xl mx-auto">
          I’m a MERN Stack Developer skilled in building fast, scalable, and responsive websites
          using MongoDB, Express.js, React, and Node.js.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6  md:mb-32 sm:mt-28 lg:mb-28">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`relative group bg-white bg-opacity-20 text-yellow-300 font-semibold py-6 px-4 rounded-xl shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-yellow-300 ${
                isVisible ? 'fade-in-animation' : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl transition-all duration-700 ease-in-out group-hover:left-[70%] group-hover:rotate-[360deg]">
                {skill.icon}
              </span>

              <span className="block mt-10 text-white text-lg relative z-10">
                {skill.name}
              </span>

              <div className="absolute bottom-4 left-4 text-lg text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.percentage}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .fade-in-animation {
            animation: fadeIn 1.2s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
}
