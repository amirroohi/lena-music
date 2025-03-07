import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-desc">
          <h2 className="footer-desc--title">
            <img src="/logo-lena-light.svg" alt="لوگو" />
            آکادمی موسیقی لنا
          </h2>
          <p>
            آکادمی موسیقی لنا یک مرکز پیشرو در آموزش موسیقی است. با بهترین
            اساتید، محیطی عالی برای رشد و توسعه استعدادهای موسیقیایی فراهم
            می‌کنیم.
          </p>
        </div>
        {/* بخش لینک‌های ناوبری */}
        <div className="footer-nav">
          <h4>دسترسی سریع</h4>
          <ul>
            <li>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link to="/teachers" onClick={() => window.scrollTo(0, 0)}>
                اساتید
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                درباره ما
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                ارتباط با ما
              </Link>
            </li>
          </ul>
        </div>

        {/* بخش پل‌های ارتباطی */}
        <div className="footer-social">
          <h4>ما را دنبال کنید</h4>
          <ul>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                اینستاگرام
              </a>
            </li>
            {/* <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                آپارات
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                تلگرام
              </a>
            </li> */}
          </ul>
        </div>
      </div>
      {/* حق کپی‌رایت */}
      <div className="footer-copyright">
        <p>© 2025 آکادمی موسیقی لنا. تمامی حقوق محفوظ است.</p>
      </div>
    </footer>
  );
};

export default Footer;
