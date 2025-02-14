// src/components/Navbar.js
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // ارجاع به منوی باز شده
  const hamburgerRef = useRef(null); // ارجاع به دکمه همبرگر

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // تغییر وضعیت منو
  };

  // بستن منو در صورت کلیک خارج از آن
  useEffect(() => {
    const handleClickOutside = (event) => {
      // بررسی کلیک خارج از منو و دکمه همبرگر
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false); // بستن منو
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/path-to-your-logo/logo.png" alt="لوگو" />
      </div>
      <div ref={hamburgerRef} className={isMenuOpen?"activeHamburger":"hamburger"} onClick={toggleMenu}>
        {/* آیکون همبرگر */}
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul
        ref={menuRef}
        className={`navbar-links ${isMenuOpen ? "active" : ""}`}
      >
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            صفحه اصلی
          </Link>
        </li>
        <li>
          <Link to="/teachers" onClick={() => setIsMenuOpen(false)}>
            اساتید
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            درباره ما
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            ارتباط با ما
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
