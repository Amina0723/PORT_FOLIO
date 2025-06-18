import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const words = [
    "MERN Stack Developer",
    "Node.js Developer",
    "MongoDB Expert",
    "Tailwind CSS Lover",
    "React.js Pro",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (letterIndex <= currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, letterIndex));
        setLetterIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setLetterIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 1500);
      return () => clearTimeout(pause);
    }
  }, [letterIndex, wordIndex]);

  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/01/7f/b4/017fb4ca6cd0c4c59bc48077875ceaec.jpg')",
        }}
      >
        <div className="w-full max-w-[90%] sm:max-w-4xl px-4 flex flex-col-reverse sm:flex-row items-center justify-between gap-6 sm:gap-10 text-center sm:text-left">
          {/* Image */}
          <div className="w-full sm:w-1/2 flex justify-center">
            <img
              src="https://stories.freepiklabs.com/api/vectors/search-engines/amico/render?color=FFC100FF&background=complete&hide="
              alt="Developer Illustration"
              className="w-40 sm:w-56 md:w-72 h-auto rounded-xl shadow-xl drop-shadow-xl hover:scale-105 transition duration-300 mb-9"
            />
          </div>

          {/* Text */}
          <div className="w-full sm:w-1/2 space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow text-white mt-8">
              Hi, I'm <span className="text-yellow-300">Hamna</span>
            </h1>
            <h3 className="text-sm sm:text-base font-semibold uppercase tracking-widest">
              <span className="text-yellow-300 border-r-2 border-yellow-300 pr-1 animate-blink">
                {displayedText}
              </span>
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-white max-w-sm mx-auto sm:mx-0">
              I specialize in building robust websites using the MERN stack —
              MongoDB, Express.js, React, and Node.js. From front-end to backend,
              I bring your ideas to life.
            </p>
            <Link to="/contact">
              <button className="mt-2 sm:mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 sm:py-3 rounded-full transition-all transform hover:scale-105 hover:opacity-90">
                Get In Touch →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-20 -mt-10 px-4 sm:px-6 md:px-20 py-16 bg-[#111827]">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 text-center mb-10">
          My Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="animate-card bg-gray-900 text-white p-6 rounded-lg shadow-xl text-center border-t-4 border-yellow-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-400 cursor-pointer">
            <div className="text-4xl mb-4">🧩</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-yellow-300">
              Full-Stack Web Apps
            </h3>
            <p className="text-sm">
              I build scalable, full-stack web applications using MongoDB,
              Express, React, and Node.js — from concept to deployment.
            </p>
          </div>

          {/* Card 2 */}
          <div className="animate-card bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center border-t-4 border-yellow-400 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-300 cursor-pointer">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-yellow-300">
              REST APIs & Backend
            </h3>
            <p className="text-sm">
              I create secure and high-performance RESTful APIs using Express
              and Node.js to handle backend logic and data flow.
            </p>
          </div>

          {/* Card 3 */}
          <div className="animate-card bg-gray-900 text-white p-6 rounded-lg shadow-xl text-center border-t-4 border-yellow-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-400 cursor-pointer">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-yellow-300">
              React Frontend
            </h3>
            <p className="text-sm">
              I design interactive user interfaces with React.js, using modern
              tools like Redux, Tailwind CSS, and Hooks for a smooth UX.
            </p>
          </div>
        </div>
      </section>

      {/* CSS */}
      <style jsx>{`
        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          0%, 100% {
            border-color: transparent;
          }
          50% {
            border-color: yellow;
          }
        }

        .animate-card {
          animation: fadeSlideUp 0.8s ease-out both;
        }

        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
}
