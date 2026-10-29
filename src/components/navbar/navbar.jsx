import { useState } from "react";
import "./navbar.css";
import logo from "../../assets/image/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#" className="navbar-logo" onClick={closeMenu}>
          <img
            src={logo}
            alt="شركة مياه الشرب والصرف الصحي ببني سويف"
          />
        </a>

        {/* Navigation */}
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul className="navbar-links">

            <li>
              <a href="#" className="active" onClick={closeMenu}>
                الرئيسية
              </a>
            </li>

            <li>
              <a href="#about" onClick={closeMenu}>
                عن الشركة
              </a>
            </li>

            <li>
              <a href="#news" onClick={closeMenu}>
                أخبار الشركة
              </a>
            </li>

            <li>
              <a href="#jobs" onClick={closeMenu}>
                الوظائف
              </a>
            </li>

            <li>
              <a href="#tenders" onClick={closeMenu}>
                المناقصات
              </a>
            </li>

            <li>
              <a href="#customers" onClick={closeMenu}>
                خدمة العملاء
              </a>
            </li>

            <li>
              <a href="#school" onClick={closeMenu}>
                المدرسة الفنية
              </a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>
                اتصل بنا
              </a>
            </li>

          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="فتح القائمة"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;