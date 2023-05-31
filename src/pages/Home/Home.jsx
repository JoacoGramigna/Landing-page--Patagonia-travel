import React, { useState, useEffect } from "react";
import "./Home.css";
import PlaneIcon from "../../assets/PlaneIcon.png";
import AOS from "aos";
import "aos/dist/aos.css";
import card4 from "../../assets/Background.jpg";

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
        <section className="aboutPatagonia">
          <h2>La Patagonia</h2>
          <article className="infoAboutPatagonia">
          <div className="imageAboutPatagonia"/>
          <div className="paragraphInfoPatagonia">
            <p>La Patagonia Argentina, un vasto y asombroso territorio en el extremo sur del continente americano.</p>
            <p>Con paisajes de ensueño, montañas imponentes, glaciares majestuosos y vastas llanuras, este lugar cautiva a los amantes de la naturaleza y la aventura.</p> 
            <p>Descubre la magia de sus parques nacionales, la riqueza de su flora y fauna, y sumérgete en la cultura de sus pueblos originarios.</p>
            <p>¡Bienvenido a la Patagonia, un destino que te dejará sin aliento!</p>
            </div>
          </article>
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
            <article className="card" style={{ backgroundImage: `url(${card4})` }}>
              <div className="cardContent">
                <h2>Patagonia</h2>
                <p>Ver mas</p>
              </div>
            </article>
            <article className="card" style={{ backgroundImage: `url(${card4})` }}>
              <div className="cardContent">
              <h2>Patagonia</h2>
              <p>Ver mas</p>
              </div>
            </article>
            <article className="card" style={{ backgroundImage: `url(${card4})` }}>
              <div className="cardContent">
              <h2>Patagonia</h2>
              <p>Ver mas</p>
              </div>
            </article>
            <article className="card" style={{ backgroundImage: `url(${card4})` }} >
              <div className="cardContent">
              <h2>Patagonia</h2>
              <p>Ver mas</p>
              </div>
            </article>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
