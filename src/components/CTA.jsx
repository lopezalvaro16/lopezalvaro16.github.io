import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        ¿Tienes un proyecto en mente? <br className="sm:block hidden" />
        ¡Construyamos algo juntos!
      </p>
      <Link to="/contact" className="btn">
        Contactame
      </Link>
    </section>
  );
};

export default Cta;
