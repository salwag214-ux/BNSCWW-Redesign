import "./services.css";

function Services() {
  const services = [
    {
      id: 1,
      icon: "📋",
      title: "المناقصات",
      description: "تعرف على المناقصات والإجراءات الخاصة بالشركة",
    },
    {
      id: 2,
      icon: "💧",
      title: "تسجيل قراءة العداد",
      description: "يمكنك تسجيل قراءة عداد المياه بسهولة",
    },
    {
      id: 3,
      icon: "🧾",
      title: "استعلم عن فاتورتك",
      description: "استعلم عن فاتورة المياه وسددها إلكترونيًا",
    },
    {
      id: 4,
      icon: "🤝",
      title: "تعاقدات",
      description: "تعرف على خدمات وإجراءات التعاقد",
    },
    {
      id: 5,
      icon: "💦",
      title: "تطبيق قرائتي",
      description: "اضغط لتحميل واستخدام تطبيق قرائتي",
    },
    {
      id: 6,
      icon: "📝",
      title: "شكاوى ومقترحات",
      description: "أرسل شكواك أو مقترحك بسهولة",
    },
  ];

  return (
    <section className="services-section" id="services">

      {/* Background */}
     


      <div className="services-container">

        {/* Section Title */}
        <div className="services-heading">

          <div className="services-title">
            خدمات الشركة
          </div>

          <h2>
            نحن في خدمتك عزيزي العميل
            <br />
            اختر الخدمة التي تريدها
          </h2>

          <div className="services-line"></div>

        </div>


        {/* Services Cards */}
        <div className="services-grid">

          {services.map((service) => (
            <div
              className="service-item"
              key={service.id}
            >

              <button
                className="service-card"
                type="button"
              >

                <div className="service-icon">
                  <span>
                    {service.icon}
                  </span>
                </div>

                <div className="service-name">
                  {service.title}
                </div>

                <div className="service-description">
                  {service.description}
                </div>

              </button>

            </div>
          ))}

        </div>


        {/* More Button */}
        <div className="services-more">

          
        </div>

      </div>


      {/* Bottom Waves */}
      <div className="services-wave services-wave-one"></div>

      <div className="services-wave services-wave-two"></div>

    </section>
  );
}

export default Services;