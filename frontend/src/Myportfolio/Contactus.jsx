import React, { useRef, useEffect, useState } from 'react';

export default function Contact() {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
          setTimeout(() => setIsVisible(true), 100);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/realistic-neon-lights-background_23-2148900786.jpg')",
        backgroundColor: '#000000aa',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div
        className={`border border-gray-500 p-6 sm:p-10 rounded-lg w-full max-w-xl space-y-6 bg-black bg-opacity-30 ${
          isVisible ? 'animate-fadeIn' : ''
        }`}
      >
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center text-yellow-300 ${
            isVisible ? 'animate-fadeIn' : ''
          }`}
        >
          Contact Me
        </h2>
        <p className={`text-gray-300 text-center text-sm sm:text-base ${isVisible ? 'animate-fadeIn' : ''}`}>
          Have a project or question? I'd love to hear from you.
        </p>

        <form className="space-y-4">
          <div className={`space-y-1 ${isVisible ? 'animate-waveSlideInLeft' : ''}`}>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-transparent border border-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 customInput"
            />
          </div>
          <div className={`space-y-1 ${isVisible ? 'animate-waveSlideInRight' : ''}`}>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded bg-transparent border border-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 customInput"
            />
          </div>
          <div className={`space-y-1 ${isVisible ? 'animate-waveSlideInLeft' : ''}`}>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full px-4 py-2 rounded bg-transparent border border-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 customInput"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`w-40 bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500 transition duration-300 shiny-btn ${
                isVisible ? 'animate-fadeIn' : ''
              }`}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes waveSlideInLeft {
            0% { opacity: 0; transform: translateX(-40%) scale(0.95); }
            100% { opacity: 1; transform: translateX(0) scale(1); }
          }

          @keyframes waveSlideInRight {
            0% { opacity: 0; transform: translateX(40%) scale(0.95); }
            100% { opacity: 1; transform: translateX(0) scale(1); }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }

          .animate-waveSlideInLeft {
            animation: waveSlideInLeft 1s ease-out forwards;
          }

          .animate-waveSlideInRight {
            animation: waveSlideInRight 1s ease-out forwards;
          }

          .customInput:focus {
            box-shadow: 0 0 0 4px rgba(255, 221, 0, 0.4), 0 0 15px rgba(255, 221, 0, 0.6);
            transition: box-shadow 0.3s ease-in-out;
          }

          .shiny-btn {
            position: relative;
            overflow: hidden;
          }

          .shiny-btn::before {
            content: "";
            position: absolute;
            top: 0;
            left: -75%;
            width: 50%;
            height: 100%;
            background: linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent);
            transform: skewX(-20deg);
          }

          .shiny-btn:hover::before {
            animation: shine 0.75s ease-in-out;
          }

          @keyframes shine {
            0% { left: -75%; }
            100% { left: 125%; }
          }
        `}
      </style>
    </section>
  );
}
