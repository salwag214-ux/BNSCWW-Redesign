
import "./footer.css";

function Footer() {
  return (
    <footer className="site-footer" dir="rtl">
      <div className="footer-container">

        <div className="footer-column footer-about">
          <h3>عن الشركة</h3>
          <p>
            نعمل على توفير مياه شرب آمنة وخدمات صرف صحي
            متميزة، ونسعى دائمًا لتحسين جودة الخدمات
            المقدمة لأهالي محافظة بني سويف.
          </p>

          <a href="tel:125" className="footer-hotline">
            الخط الساخن <strong>575</strong>
          </a>
        </div>

        <div className="footer-column">
          <h3>روابط سريعة</h3>
          <a href="#top">الرئيسية</a>
          <a href="#about">عن الشركة</a>
          <a href="#services">خدمات الشركة</a>
        </div>

        <div className="footer-column footer-social">
          <h3>تابعونا</h3>

          <div className="footer-social-icons">
            <a href="https://www.facebook.com/" aria-label="فيسبوك"
              target="_blank" rel="noreferrer">
              <i className="bi bi-facebook"></i>
            </a>

            <a href="https://x.com/" aria-label="إكس"
              target="_blank" rel="noreferrer">
              <i className="bi bi-twitter-x"></i>
            </a>

            <a href="https://www.instagram.com/" aria-label="إنستجرام"
              target="_blank" rel="noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} شركة مياه الشرب والصرف الصحي ببني سويف
        </p>
        <span>جميع الحقوق محفوظة</span>
      </div>
    </footer>
  );
}

export default Footer;
