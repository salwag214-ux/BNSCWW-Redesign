import { useEffect, useState } from "react";
import "./hero.css";

import image1 from "../../assets/image/image1.png";
import image2 from "../../assets/image/image2.png";
import image3 from "../../assets/image/image3.png";
import image4 from "../../assets/image/image4.png";
import image5 from "../../assets/image/image5.png";
import image6 from "../../assets/image/image6.png";


/* =========================
   IMAGES
========================= */

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];


/* =========================
   TITLE
========================= */

const fullTitle =
  "شركة مياه الشرب والصرف الصحي ببني سويف";


function Hero() {

  /* =========================
     STATES
  ========================= */

  const [currentImage, setCurrentImage] =
    useState(0);

  const [typedTitle, setTypedTitle] =
    useState("");

  const [typingFinished, setTypingFinished] =
    useState(false);


  /* =========================
     IMAGE SLIDER
  ========================= */

  useEffect(() => {

    const slider = setInterval(() => {

      setCurrentImage(
        (prev) =>
          (prev + 1) % images.length
      );

    }, 4500);


    return () => {
      clearInterval(slider);
    };

  }, []);


  /* =========================
     TYPEWRITER
     يعيد الكتابة كل دقيقتين
  ========================= */

  useEffect(() => {

    let typingInterval;
    let restartTimeout;
    let finishTimeout;


    /* =========================
       START TYPING
    ========================= */

    const startTyping = () => {

      let currentIndex = 0;


      /* نمسح العنوان القديم */

      setTypedTitle("");


      /* نخفي الوصف والزر */

      setTypingFinished(false);


      /* نبدأ الكتابة */

      typingInterval = setInterval(() => {

        currentIndex++;


        setTypedTitle(
          fullTitle.slice(
            0,
            currentIndex
          )
        );


        /* =========================
           FINISH TYPING
        ========================= */

        if (
          currentIndex >=
          fullTitle.length
        ) {

          clearInterval(
            typingInterval
          );


          /* بعد انتهاء الكتابة
             نظهر الوصف والزر */

          finishTimeout =
            setTimeout(() => {

              setTypingFinished(
                true
              );

            }, 300);


          /* =========================
             RESTART AFTER 2 MINUTES
          ========================= */

          restartTimeout =
            setTimeout(() => {

              startTyping();

            }, 120000);

        }

      }, 75);

    };


    /* أول مرة عند فتح الموقع */

    startTyping();


    /* =========================
       CLEANUP
    ========================= */

    return () => {

      clearInterval(
        typingInterval
      );

      clearTimeout(
        restartTimeout
      );

      clearTimeout(
        finishTimeout
      );

    };

  }, []);


  /* =========================
     JSX
  ========================= */

  return (

    <section className="hero">


      {/* =========================
          BACKGROUND SHAPES
      ========================= */}

      <div
        className="
          hero-shape
          hero-shape-one
        "
      ></div>


      <div
        className="
          hero-shape
          hero-shape-two
        "
      ></div>



      <div className="hero-container">


        {/* =========================
            IMAGES
        ========================= */}

        <div className="hero-slider">


          <div
            className="slider-decoration"
          ></div>


          <div
            className="hero-image-wrapper"
          >


            {images.map(
              (image, index) => (

                <img

                  key={index}

                  src={image}

                  alt={
                    `شركة مياه الشرب والصرف الصحي ببني سويف ${index + 1}`
                  }

                  className={
                    index ===
                    currentImage

                      ? "hero-image active"

                      : "hero-image"
                  }

                />

              )
            )}


          </div>


        </div>



        {/* =========================
            TEXT
        ========================= */}

        <div className="hero-content">


          {/* SMALL TITLE */}

          <span
            className="hero-small-title"
          >
            مرحبًا بكم في
          </span>



          {/* =========================
              TYPEWRITER TITLE
          ========================= */}

          <h1 className="hero-title">


            <span
              className="typed-text"
            >

              {typedTitle}

            </span>



            {/* مؤشر الكتابة */}

            {!typingFinished && (

              <span
                className="typing-cursor"
              >
                |
              </span>

            )}


          </h1>



          {/* =========================
              DESCRIPTION + BUTTON
          ========================= */}

          <div

            className={

              typingFinished

                ? "hero-after-typing show"

                : "hero-after-typing"

            }

          >


            {/* DESCRIPTION */}

            <p
              className="hero-description"
            >

              تهدف شركة بني سويف لمياه
              الشرب والصرف الصحي إلى توفير
              مياه الشرب عالية الجودة
              لمواطني بني سويف بالكمية
              والتكلفة المناسبة، ومد خدمة
              الصرف الصحي لمدن وقرى
              المحافظة، مع الحفاظ على
              البيئة واستخدام التكنولوجيا
              المتقدمة واحتلال الصدارة بين
              شركات مياه الشرب والصرف الصحي.

            </p>



            {/* =========================
                BUTTON
            ========================= */}

            <div
              className="hero-buttons"
            >


              <a

                href="#services"

                className="
                  hero-btn
                  secondary-btn
                "

              >

          تعرف علينا

              </a>

              <a

                href="#services"

                className="
                  hero-btn
                  secondary-btn
                "

              >

                خدماتنا

              </a>

            </div>


          </div>


        </div>


      </div>


    </section>

  );

}


export default Hero;