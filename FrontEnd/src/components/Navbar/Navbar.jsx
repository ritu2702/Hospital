import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const handleHomePage = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };
  const handleAboutPage = (e) => {
    e.preventDefault();
    navigate("/about", { replace: true });
  };
  const handleServicesPage = (e) => {
    e.preventDefault();
    navigate("/services", { replace: true });
  };
  const handleContactPage = (e) => {
    e.preventDefault();
    navigate("/contact", { replace: true });
  };
  const handleSignUpPage = (e) => {
    e.preventDefault();
    navigate("/signup", { replace: true });
  };

  return (
    <div className="navbar">
      <h3 className="logo" onClick={handleHomePage}>
        CliniCo
      </h3>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li className="home" onClick={handleHomePage}>
          Home
        </li>
        <li className="about" onClick={handleAboutPage}>
          About Us
        </li>
        <li className="services" onClick={handleServicesPage}>
          Services
        </li>
        <li className="contact" onClick={handleContactPage}>
          Contact Us
        </li>
        <li className="signup" onClick={handleSignUpPage}>
          Signup
        </li>
      </ul>

      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times" />
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </div>
  );
};
