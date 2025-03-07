import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineCalendar } from "react-icons/hi";
import "./Navbar.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div
        ref={hamburgerRef}
        className={isMenuOpen ? "activeHamburger" : "hamburger"}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className="navbar-logo">
        <img src="/logo-lena-light.svg" alt="لوگو" />
      </div>

      <ul
        ref={menuRef}
        className={`navbar-links ${isMenuOpen ? "active" : ""}`}
      >
        <li>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
              setIsMenuOpen(false);
            }}
          >
            صفحه اصلی
          </Link>
        </li>
        <li>
          <Link
            to="/teachers"
            onClick={() => {
              window.scrollTo(0, 0);
              setIsMenuOpen(false);
            }}
          >
            اساتید
          </Link>
        </li>
        <li>
          <Link
            to="/instruments"
            onClick={() => {
              window.scrollTo(0, 0);
              setIsMenuOpen(false);
            }}
          >
            ساز ها
          </Link>
        </li>
        <li>
          <Link
            to="/schedule"
            onClick={() => {
              window.scrollTo(0, 0);
              setIsMenuOpen(false);
            }}
          >
            زمانبندی کلاس ها
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={() => {
              window.scrollTo(0, 0);
              setIsMenuOpen(false);
            }}
          >
            درباره ما
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => {
              window.scrollTo(0, 0);
              setIsMenuOpen(false);
            }}
          >
            ارتباط با ما
          </Link>
        </li>
      </ul>

      {/* لینک زمان‌بندی کلاس‌ها در سمت چپ نوبار */}
      <div className="navbar-schedule">
        <Link
          to="/schedule"
          className="schedule-link"
          onClick={() => {
            window.scrollTo(0, 0);
            setIsMenuOpen(false);
          }}
        >
          <HiOutlineCalendar />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
