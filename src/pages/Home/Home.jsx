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
      <section className="home">
        <div className="backgroundHome"></div>
        <h1 className="sloganHome">
          Viví la experiencia de viajar a la Patagonia.
        </h1>
        <div className={isMoved ? "planeIconActive" : "planeIcon"}>
          <img className="planeImage" src={PlaneIcon} alt="Avión" />
        </div>
      </section>
      <section className="mainPage">
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
        <section className="aboutUs">
          <article className="infoAboutUs">
            <h2>Sobre nosotros</h2>
            <h3>La mejor agencia de viajes a la Patagonia desde 2021</h3>
            <p className="paragraph0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus, temporibus. Nobis distinctio at enim quia
              assumenda, eveniet corrupti numquam est!
            </p>
            <p className="paragraph">
              <i>+</i> Los mejores precios y ofertas.
            </p>
            <p className="paragraph">
              <i>+</i> Las guías mas completas para tus visitas.
            </p>
            <p className="paragraph">
              <i>+</i> Packs de viajes con todo incluido.
            </p>
            <button className="moreInfoButton">Ver mas</button>
          </article>
          <article className="imageAboutUs">
            <div className="image1" />
            <div className="image2" />
          </article>
        </section>
        <section className="travels">
          <h2 className="travelsTitle">Nuestros mejores viajes</h2>
          <div className="travelCards">
            <article>
              <div className="card1">
                <h2>Patagonia</h2>
              </div>
            </article>
            <article>
              <div className="card2">
              <h2>Patagonia</h2>
              </div>
            </article>
            <article>
              <div className="card3">
              <h2>Patagonia</h2>
              </div>
            </article>
            <article>
              <div className="card4">
              <h2>Patagonia</h2>
              </div>
            </article>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
