import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footercontainer">
          <div className="footerrow">
            <div className="footer-col">
              <h4>Patient Care</h4>
              <ul>
                <li>
                  <Link to="#">Find a Doctor</Link>
                </li>
                <li>
                  <Link to="#">Medical Services</Link>
                </li>
                <li>
                  <Link to="#">Value Services</Link>
                </li>
                <li>
                  <Link to="#">Pay Online</Link>
                </li>
                <li>
                  <Link to="#">Surgery</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>research</h4>
              <ul>
                <li>
                  <Link to="#">Courses</Link>
                </li>
                <li>
                  <Link to="#">academics</Link>
                </li>
                <li>
                  <Link to="#">network</Link>
                </li>
                <li>
                  <Link to="#">honors list</Link>
                </li>
                <li>
                  <Link to="#">what's new</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>hospitals</h4>
              <ul>
                <li>
                  <Link to="#">hospitals in india</Link>
                </li>
                <li>
                  <Link to="#">Clinics</Link>
                </li>
                <li>
                  <Link to="#">reach hospitals</Link>
                </li>
                <li>
                  <Link to="#">events</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow us</h4>

              <div className="social-links">
                <Link to="#">
                  <i className="bx bxl-facebook-circle"></i>
                </Link>
                <Link to="#">
                  <i className="bx bxl-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="bx bxl-instagram-alt"></i>
                </Link>
                <Link to="#">
                  <i className="bx bxl-youtube"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="rese">
          <h4>© 2022 CliniCo Hospitals Enterprise Ltd. All Rights Reserved.</h4>
        </div>
      </footer>
    </div>
  );
};
