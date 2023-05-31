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
              <div className="box" data-aos="fade-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-shield-heart"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#00abfb"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 21a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12.01 12.01 0 0 1 .378 5" />
                  <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
                </svg>
                <h3>Calidad y seguridad</h3>
                <p>Garantizamos altos estándares de calidad y seguridad en todos nuestros servicios de viaje.</p>
              </div>
            </article>
            <article className="boxToLeft">
              <div className="box" data-aos="fade-left">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
</svg>
                <h3>Atención personalizada</h3>
                <p>Nuestro equipo de expertos estará a tu disposición para brindarte una atención personalizada y adaptada a tus necesidades.</p>
              </div>
            </article>
          </div>
          <div className="boxCenter">
            <article className="boxToRight">
              <div className="box" data-aos="fade-right">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin-star" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 11a3 3 0 1 0 -3.908 2.86" />
  <path d="M11.059 21.25a2 2 0 0 1 -.472 -.35l-4.244 -4.243a8 8 0 1 1 13.646 -6.079" />
  <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
</svg>
<h3>Destinos únicos</h3>
<p>Descubre destinos exclusivos y sorprendentes que te permitirán vivir experiencias inolvidables.</p>
              </div>
            </article>
            <article className="boxToLeft">
              <div className="box" data-aos="fade-left">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-smile-beam" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
  <path d="M10 10c-.5 -1 -2.5 -1 -3 0" />
  <path d="M17 10c-.5 -1 -2.5 -1 -3 0" />
  <path d="M14.5 15a3.5 3.5 0 0 1 -5 0" />
</svg>
                <h3>Satisfacción garantizada</h3>
                <p>Nos esforzamos por superar tus expectativas y asegurarte una experiencia de viaje inolvidable y satisfactoria.</p>
              </div>
            </article>
          </div>
        </section>
        <section className="aboutPatagonia">
          <h2>La Patagonia</h2>
          <article className="infoAboutPatagonia">
            <div className="imageAboutPatagonia" />
            <div className="paragraphInfoPatagonia">
              <p>
                La Patagonia Argentina, un vasto y asombroso territorio en el
                extremo sur del continente americano.
              </p>
              <p>
                Con paisajes de ensueño, montañas imponentes, glaciares
                majestuosos y vastas llanuras, este lugar cautiva a los amantes
                de la naturaleza y la aventura.
              </p>
              <p>
                Descubre la magia de sus parques nacionales, la riqueza de su
                flora y fauna, y sumérgete en la cultura de sus pueblos
                originarios.
              </p>
              <p>
                ¡Bienvenido a la Patagonia, un destino que te dejará sin
                aliento!
              </p>
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
            <article
              className="card"
              style={{ backgroundImage: `url(${card4})` }}
            >
              <div className="cardContent">
                <h2>Patagonia</h2>
                <p>Ver mas</p>
              </div>
            </article>
            <article
              className="card"
              style={{ backgroundImage: `url(${card4})` }}
            >
              <div className="cardContent">
                <h2>Patagonia</h2>
                <p>Ver mas</p>
              </div>
            </article>
            <article
              className="card"
              style={{ backgroundImage: `url(${card4})` }}
            >
              <div className="cardContent">
                <h2>Patagonia</h2>
                <p>Ver mas</p>
              </div>
            </article>
            <article
              className="card"
              style={{ backgroundImage: `url(${card4})` }}
            >
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
