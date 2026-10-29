import "./about.css";

import leaderImage from "../../assets/image/leder.png";


function About() {
  return (
    <section className="about-section" id="about">

      {/* خلفية القسم */}
     

      <div className="about-container">

      

        <div className="about-content">

          {/* ================= صورة رئيس الشركة ================= */}
          <div className="leader-side">

            <div className="leader-decoration leader-circle"></div>
            <div className="leader-decoration leader-circle-two"></div>

            <div className="leader-image-box">
              <img
                src={leaderImage}
                alt="رئيس مجلس الإدارة والعضو المنتدب"
                className="leader-image"
              />
            </div>

            <div className="leader-name">
              <span>المهندس</span>
              <strong>عصام محمد أحمد بدوي</strong>
            </div>

          </div>


          {/* ================= الكلام ================= */}
          <div className="about-text">

         
            <h2 className="about-title">
              كلمة المهندس رئيس مجلس الإدارة
              <br />
              والعضو المنتدب
            </h2>

            <div className="title-line"></div>

            <p className="about-description">
              الماء شريان الحياة وعنصر التنمية الحاكم محليًا وإقليميًا
              وعالميًا، وبوجودها تتوقف الحياة وتكون ميدانًا للنزاعات
              والحروب، حتى أنه تم تخصيص يوم 21 مارس يومًا عالميًا للمياه.
              وتقاس درجة تقدم الدول بحكمة وجود مياه الشرب، والملاذ الآمن
              لمياه الصرف الصحي، طبقًا للقوانين المنظمة على صحة المواطنين.
              وتقوم الشركة بالعمل الجاد في توفير الخدمة وتحسينها وتطويرها
              بصفة مستمرة، كما تم تخصيص خط ساخن 125 لتلقي شكاوى الجمهور
              ومقترحاتهم على مدار 24 ساعة.
            </p>


            {/* ================= الأزرار ================= */}
            <div className="about-buttons">

              <button className="about-btn structure-btn">
                <span>هيكل وقطاعات الشركة</span>
                <span className="btn-icon">🏢</span>
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* الشكل الموجي أسفل السيكشن */}
      <div className="about-wave"></div>

    </section>
  );
}

export default About;