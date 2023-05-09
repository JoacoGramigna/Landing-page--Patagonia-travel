import React, { useState, useEffect } from "react";
import "./Home.css";
import PlaneIcon from "../../assets/PlaneIcon.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset: 280,
  duration: 600,
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
      <section className="reasonsToTravel">
        <article className="boxToRight">
          <div className="box" data-aos="fade-right"></div>
        </article>
        <article className="boxToLeft">
          <div className="box" data-aos="fade-left"></div>
        </article>
      </section>
    </>
  );
};

export default Home;
