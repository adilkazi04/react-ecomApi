import { NavLink } from "react-router-dom";
import "../styles/HeroSection.css"; 



const HeroSection = () => {


  return (
    <section className="hero-section">
      <div className="container">
        <div className=" hero-section__grid">
          <div className="hero-section__data">
            <h2>Welcome to Ecommerce</h2>
         
            <p>
            Welcome to our online store, where quality meets affordability. Explore our diverse range of products designed to enhance your life. From fashion to electronics, we have something for everyone. Start shopping today and discover the joy of convenience at your fingertips
            </p>
            <NavLink to="/products">
              <button className="button">Buy Now</button>
            </NavLink>
          </div>
      
          <div className="hero-section-image">
           {/* eslint-disable-next-line */}
              <img
                src="images/ecomm-bg.webp"
                alt="hero section photo"
                className="img-bg"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
