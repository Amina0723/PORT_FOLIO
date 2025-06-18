

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Myportfolio/Navbar";

import Home from "./Myportfolio/Home";
import About from "./Myportfolio/Aboutus";
import Projects from "./Myportfolio/Projects";
import Contact from "./Myportfolio/Contactus";
import Footer from "./Myportfolio/Footer";
import Resume from "./Myportfolio/Resume";

export default function App() {
  return (
     <>
    <Router>
      <Navbar />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      
    </Router>
    <div><Footer/></div>
  
    </>
     );
}








