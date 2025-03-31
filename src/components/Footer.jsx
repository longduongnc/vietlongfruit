import React from "react";
import "./Footer.css";
// If you want to use icons, you can install react-icons and import them:
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section footer-left">
          <h2 className="footer-logo">vietlongfruit</h2>
          <p>166 Kansas City, Missouri, USA</p>
          <p>CĐ 0066 99 4 000</p>
          <p>support@vietlongfruit.com</p>

          <div className="social-connect">
            <span>SOCIAL CONNECT</span>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-section footer-middle">
          <h3>Essential Pages</h3>
          <ul>
            <li>Contact</li>
            <li>Service</li>
            <li>Service Details</li>
            <li>Team</li>
            <li>Team Details</li>
            <li>About</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-section footer-right">
          <h3>Get Newsletter</h3>
          <p>
            Want to be notified about our services? Just sign up and we will
            send you updates by email.
          </p>
          <div className="newsletter">
            <input type="email" placeholder="Email Address" />
            <button type="submit" aria-label="Subscribe">
              ?
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          Copyright &copy; 2024
          <span className="highlight"> VietLongFruit</span>. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
