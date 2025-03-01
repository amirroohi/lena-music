// src/App.js
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Teachers from "./components/Teachers";
import NavBar from "./components/NavBar.jsx";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import TeacherDetail from "./components/TeacherDetail";
import Schedule from "./components/Schedule.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-modal">
        <div className="loading-content">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/:id" element={<TeacherDetail />} />
        <Route path="/schedule" element={<Schedule />} /> {/* 👈 مسیر زمان‌بندی */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
