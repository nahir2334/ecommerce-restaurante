import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-overlay">
        <div className="hero-inner">
          <h1 className="hero-title">TASTYF</h1>
          <p className="hero-sub">Una experiencia gourmet con sabor clásico y frescura moderna</p>
          <div className="hero-cta">
            <Link className="btn btn-primary" to="/menu">Ver Menú</Link>
            <Link className="btn btn-outline" to="/pedidos">Hacer Pedido</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
