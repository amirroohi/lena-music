// src/App.js
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Teachers from "./components/Teachers";
import NavBar from "./components/Nav.jsx";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import TeacherDetail from "./components/TeacherDetail";
import Schedule from "./components/Schedule.jsx";
import Instruments from "./components/Instruments.jsx";
import InstrumentDetail from "./components/InstrumentDetail.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading && (
        <div className="loading-modal">
          <div className="loading-content">
            <div className="spinner">
            </div>
              <img src="/logo-lena-light.svg" alt="لوگو" />
          </div>
        </div>
      )}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/:id" element={<TeacherDetail />} />
        <Route path="/schedule" element={<Schedule />} />{" "}
        {/* 👈 مسیر زمان‌بندی */}
        <Route path="/instruments" element={<Instruments />} />{" "}
        {/* 👈 صفحه لیست سازها */}
        <Route path="/instruments/:id" element={<InstrumentDetail />} />{" "}
        {/* 👈 صفحه جزئیات ساز */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
