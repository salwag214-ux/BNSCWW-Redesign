import "./ticker.css";

function Ticker() {
  return (
    <section className="ticker">

      {/* Water Icon */}
      <div className="ticker-icon">
        💧
      </div>

      {/* Moving Area */}
      <div className="ticker-wrapper">

        <div className="ticker-content">

          {/* Quran Section */}
          <div className="quran-section">

            <span className="bismillah">
              بسم الله الرحمن الرحيم
            </span>

            <span className="quran-verse">
              ﴿ وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ﴾
            </span>

            <span className="sadaq-allah">
              صدق الله العظيم
            </span>

          </div>


          {/* Separator */}
          <span className="ticker-separator">
            ◆
          </span>


          {/* Fawry Message */}
          <div className="fawry-message">

            <span>
              الآن يمكنكم سداد قيمة فواتير مياه الشرب والصرف الصحي
              عن طريق خدمات فوري، كما يمكنكم شحن الكارت عن طريق
              خدمة فوري على رقم الخدمة
            </span>

            <strong className="service-number">
              575
            </strong>

          </div>


          {/* Separator */}
          <span className="ticker-separator">
            ◆
          </span>


          {/* Repeat Quran */}
          <div className="quran-section">

            <span className="bismillah">
              بسم الله الرحمن الرحيم
            </span>

            <span className="quran-verse">
              ﴿ وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ﴾
            </span>

            <span className="sadaq-allah">
              صدق الله العظيم
            </span>

          </div>


          {/* Separator */}
          <span className="ticker-separator">
            ◆
          </span>


          {/* Repeat Fawry Message */}
          <div className="fawry-message">

            <span>
              الآن يمكنكم سداد قيمة فواتير مياه الشرب والصرف الصحي
              عن طريق خدمات فوري، كما يمكنكم شحن الكارت عن طريق
              خدمة فوري على رقم الخدمة
            </span>

            <strong className="service-number">
              575
            </strong>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Ticker;