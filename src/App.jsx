// src/App.js
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Teachers from "./components/Teachers";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import TeacherDetail from "./components/TeacherDetail";

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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/:id" element={<TeacherDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
