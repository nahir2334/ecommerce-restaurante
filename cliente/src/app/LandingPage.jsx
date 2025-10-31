import React from "react";
import Hero from "../components/Hero";
import MenuPreview from "../components/MenuPreview";
import ReservasPreview from "../components/ReservasPreview";
import Nosotros from "../components/Nosotros";
import Footer from "../components/Footer";
import "../App.css";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <main>
        <section id="menu-preview">
          <MenuPreview />
        </section>

        <section id="reservas-preview">
          <ReservasPreview />
        </section>

        <section id="nosotros">
          <Nosotros />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
