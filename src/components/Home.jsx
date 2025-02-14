// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { teachers } from "../data/teachers";


const Home = () => {
  return (
    <div className="home">
      {/* بخش Hero */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>آکادمی موسیقی لنا</h1>
          <p>یادگیری موسیقی با بهترین اساتید در محیطی دوستانه</p>
          <a className="cta-button" href="#about">اطلاعات بیشتر</a>
        </div>
      </div>

      {/* توضیحات درباره آموزشگاه */}
      <div className="about-section" id="about">
        <h2>درباره آکادمی موسیقی لنا</h2>
        <p>
          آکادمی موسیقی لنا با هدف پرورش استعدادهای موسیقی و ایجاد فضایی دلنشین
          برای یادگیری، فعالیت خود را آغاز کرده است. در این آکادمی، شما
          می‌توانید انواع سازهای موسیقی را از بهترین اساتید یاد بگیرید و از
          آموزش‌های استاندارد و حرفه‌ای بهره‌مند شوید.
        </p>
      </div>

      {/* لیست اساتید */}
      <div className="teachers-section">
        <h2>اساتید ما</h2>
        <div className="teachers-list--home">
          {teachers.map((teacher) => (
            <Link
              to={`/teachers/${teacher.id}`} // لینک به صفحه جزئیات
              key={teacher.id}
              className="teacher-card--home"
            >
              {" "}
              <img src={teacher.image} alt={teacher.name} />
              <p>{teacher.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
