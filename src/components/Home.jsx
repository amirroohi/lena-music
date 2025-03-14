// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { teachers } from "../data/teachers";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  return (
    <div className="home">
      {/* بخش Hero */}
      <h1>آکادمی موسیقی لنا</h1>
      <div className="hero-section">
        <div className="hero-content">
          <p>یادگیری موسیقی با بهترین اساتید در محیطی دوستانه</p>
          <a className="cta-button" href="#about">
            اطلاعات بیشتر
          </a>
        </div>
      </div>
      <div className="swiper-container">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          speed={3000}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/piano-wallpaper.jpg" alt="instrument" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/piano-wallpaper.jpg" alt="instrument" />
          </SwiperSlide>

        </Swiper>
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
              onClick={() => window.scrollTo(0, 0)}
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
