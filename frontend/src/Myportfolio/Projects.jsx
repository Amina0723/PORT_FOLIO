import React, { useState, useEffect } from "react";

export default function Projects() {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const tabData = [
    {
      name: "Tab1",
      projects: [
        {
          title: "Stone Paper Scissors",
          description: "A web version of the classic game using React.",
          imageUrl: "https://media.licdn.com/dms/image/v2/D4D22AQEs0NjicRPr2A/feedshare-shrink_800/feedshare-shrink_800/0/1726078195637?e=2147483647&v=beta&t=qyJ6SLvM_oZE9hHK7O_Opq0QS--G03dVauHwLg_jLiU",
          video: "/tictactoe.mp4",
        },
        {
          title: "Tic Tac Toe",
          description: "Interactive React-based Tic Tac Toe with game logic.",
          imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*3Rv4KFuTU5IJxCvhY_-tsA.png",
          video: "/tic.mp4",
        },
        {
          title: "Tailwind Website",
          description: "This website page built with React and Tailwind CSS.",
          imageUrl: "https://i.ytimg.com/vi/CQZxeoQeo5c/hqdefault.jpg",
          video: "/pararoz.mp4",
        },
      ],
    },
    {
      name: "Tab2",
      projects: [
        {
          title: "Full Stack Project",
          description: "A full stack blog with Node.js, React, and MongoDB.",
          imageUrl: "https://cdn.dribbble.com/userupload/15684858/file/original-48f64cddaaf713a60e1c0195506611b9.jpg?resize=400x0",
          video: "/blogdemo.mp4",
        },
        {
          title: "React Websites",
          description: "Developed modern websites with reusable React components..",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_HGYUqPSg_eEgS44tMB3LAnoIhlUfmMSfbg&s",
          video: "/nike.mp4",
        },
        {
          title: "CRUD",
          description: "Complete CRUD functionality using the MERN stack",
          imageUrl: "https://www.shutterstock.com/image-illustration/crud-acronym-create-read-update-600nw-2491959959.jpg",
          video: "/crud.mp4",
        },
      ],
    },
  ];

  useEffect(() => {
    setPage(0);
  }, [activeTab]);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 600);
    return () => clearTimeout(timer);
  }, [page, activeTab]);

  const projects = tabData[activeTab].projects;
  const pagedProjects = projects.slice(page * 3, (page + 1) * 3);

  return (
    <div style={{ background: "#0f172a", minHeight: "100vh", padding: "2rem", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: "#cbd5e1" }}>
      <style>
        {`
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: transform 0.8s ease;
            border-radius: 16px;
          }
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 16px;
          }
          .flip-card-back {
            background-color: #0f172a;
            transform: rotateY(180deg);
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #38bdf8;
            box-shadow: inset 0 0 20px #22d3eeaa, inset 0 0 50px #0ea5e9bb;
          }
        `}
      </style>

      <h1 style={{ color: "skyblue", textAlign: "center", marginBottom: "2rem", fontWeight: "bold", fontSize: "2rem", marginTop: "4rem", fontFamily: "serif" }}>
        <span className="text-yellow-400">My Interactive Projects</span>
      </h1>

      {/* Tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "3rem" }}>
        {tabData.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            style={{
              padding: "0.6rem 1.8rem",
              background: activeTab === idx ? "#FFD32C" : "#1e293b",
              color: activeTab === idx ? "#0f172a" : "#ccc",
              border: "none",
              borderRadius: "999px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "1rem",
              transition: "0.3s",
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative max-w-4xl w-full">
            <button onClick={() => setSelectedVideo(null)} className="absolute top-2 right-4 text-white text-3xl z-10">✕</button>
            <video src={selectedVideo} controls autoPlay className="w-full rounded-lg shadow-xl" />
          </div>
        </div>
      )}

      {/* Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", justifyItems: "center" }}>
        {pagedProjects.map((project, idx) => (
          <div
            key={idx}
            className="flip-card"
            style={{
              width: "280px",
              height: "380px",
              perspective: "1000px",
              cursor: "pointer",
              opacity: animate ? 0 : 1,
              transform: animate ? "translateY(30px)" : "translateY(0)",
              transition: "0.5s",
              backgroundColor: "#1e293b",
              borderRadius: "16px",
            }}
          >
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front">
                <img src={project.imageUrl} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "16px", filter: "brightness(0.85)" }} />
              </div>

              {/* Back */}
              <div className="flip-card-back">
                <h3 style={{ fontSize: "1.3rem", fontWeight: "bold" }}>{project.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#94a3b8", margin: "1rem 0" }}>{project.description}</p>
                <button
                  onClick={() => setSelectedVideo(project.video)}
                  style={{
                    backgroundColor: "#22d3ee",
                    color: "#0f172a",
                    padding: "0.5rem 1.2rem",
                    borderRadius: "9999px",
                    fontWeight: "600",
                    boxShadow: "0 4px 12px #22d3eeaa",
                  }}
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
