import React from "react";
import footerlogo from "../images/footer-logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="top-footer">
          <img src={footerlogo} alt="logo" />
          <div className="footer-links">
            <div className="footer-column-1">
              <div className="navigation foot-nav">Navigation</div>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="About">About</a>
                </li>
                <li>
                  <a href="Menu">Menu</a>
                </li>
                <li>
                  <a href="Reservations">Reservations</a>
                </li>
                <li>
                  <a href="OrderOnline">Order Online</a>
                </li>
                <li>
                  <a href="Login">Login</a>
                </li>
              </ul>
            </div>

            <div className="footer-column-2">
              <div className="contact foot-nav">Contact</div>
              <div>43 Hazel st.Chicago IL US</div>
              <div>(+213) 789-792-2679</div>
              <div>contact@little.lemon.com</div>
            </div>

            <div className="footer-column-3">
              <div className="social foot-nav">Social Media Links</div>
              <ul>
                <li>
                  <a href="/">Follow on Instagram</a>
                </li>
                <li>
                  <a href="/">Follow on Facebook</a>
                </li>
                <li>
                  <a href="/">Follow on Twitter</a>
                </li>
                <li>
                  <a href="/">Subscribe on Youtube</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* End of Top footer */}

        <section className="bottom-footer">
          <div className="copyrights">
            © 2023 Little Lemon. All rights reserved.
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
