import React, { useState, useEffect } from "react";
import "./Home.css";
import PlaneIcon from "../../assets/PlaneIcon.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset: 100,
});

const Home = () => {
  const [isMoved, setMoved] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 350) {
      setMoved(true);
    } else {
      setMoved(false);
    }
  };

  return (
    <>
      <div className="backgroundHome"></div>
      <h1 className="sloganHome">
        Viví la experiencia de viajar a la Patagonia.
      </h1>
      <div className={isMoved ? "planeIconActive" : "planeIcon"}>
        <img className="planeImage" src={PlaneIcon} alt="Avión" />
      </div>
      <section className="homePage">
        <section className="whyChooseUs">
            <h2>¿Por qué elegirnos?</h2>
            <div className="boxCenter">
            <article className="boxToRight">
              <div className="box" data-aos="fade-right"></div>
            </article>
            <article className="boxToLeft">
              <div className="box" data-aos="fade-left"></div>
            </article>
            </div>
            <div className="boxCenter">
            <article className="boxToRight">
              <div className="box" data-aos="fade-right"></div>
            </article>
            <article className="boxToLeft">
              <div className="box" data-aos="fade-left"></div>
            </article>
            </div>
        </section>
      </section>
    </>
  );
};

export default Home;
