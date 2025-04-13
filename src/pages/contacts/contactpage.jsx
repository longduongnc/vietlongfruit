import React from "react";
import "./contact.css";
import { FiMapPin, FiClock } from "react-icons/fi";

const ContactPage = () => {
  return (
    <>
     <div className="hero-wrapper">
        <img
          src={`${window.location.origin}/Images/BG-05.jpg`}
          alt="Hero"
          className="hero-img-flipped"
        />
        <div
          className="hero-contents"
          style={{
            marginLeft: "-90px",
            marginTop: "50px",
            color: "white",
            textAlign: "left",
          }}
        >
          <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>Contact Us</h1>
          <nav className="breadcrumb-nav">
            <a href="/" className="breadcrumb-link">
              Home
            </a>
            <span className="breadcrumb-separator">›</span>
            <a href="/contact" className="breadcrumb-link">
              Contact
            </a>
          </nav>
        </div>
      </div>
    <div className="contact-container"style={{marginTop:'-150px'}}>
      <div className="contact-container">
        <div className="contact-cards">
          <div className="contact-card">
            <img
              src="/Icons/email-icon.svg"
              alt="Email Icon"
              className="contact-icon"
            />
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <p className="contact-text">Support@VietLongfruit.com</p>
            </div>
          </div>

          <div className="contact-card">
            <img
              src="/Icons/phone-icon.svg"
              alt="Phone Icon"
              className="contact-icon"
            />
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <p className="contact-text">00 0566 999 34 00</p>
            </div>
          </div>

          <div className="contact-card">
            <img
              src="/Icons/location-icon.svg"
              alt="Location Icon"
              className="contact-icon"
            />
            <div className="contact-info">
              <p className="contact-title">Address</p>
              <p className="contact-text">66 Kansas City, Missouri, USA</p>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-image">
            <img
              src={`${window.location.origin}/Images/BG-06.jpg`}
              alt="Contact us"
            />
          </div>

          <div className="contact-content">
  <div className="header-line">
    <h1>Have any Questions?</h1>
  </div>
  <div className="header-line">
    <h2>Get in Touch!</h2>
  </div>

  <form className="contact-form">
    <div className="form-row">
      <div className="form-group">
        <input type="text" placeholder="Your Name" />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Your Phone Number" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group">
        <input type="email" placeholder="Your Email" />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Subject" />
      </div>
    </div>
    <div className="form-group">
      <textarea placeholder="Your Message"></textarea>
    </div>
    <button type="submit" className="submit-button">
      Send Message
    </button>
  </form>
</div>

        </div>
      </div>

      <div className="contact-cards">
        <div className="contact-card">
          <div className="two-column-layout">
            <div className="left-column">
              <div className="section-header">
                <FiMapPin className="section-icon" />
                <h3>Visit our office or warehouse!</h3>
              </div>
              <p className="section-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="card-tags">
                <button className="tag-button">
                  <span>Get Vestimatum</span>
                </button>
              </div>
            </div>

            <div className="vertical-divider"></div>

            <div className="right-column">
              <div className="section-header">
                <FiClock className="section-icon" />
                <h3>Time</h3>
              </div>
              <div className="opening-hours">
                <div className="hours-row">
                  <span className="day">Monday - Friday</span>
                  <span className="time">8:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="day">Saturday</span>
                  <span className="time">9:00 AM - 3:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="day">Sunday</span>
                  <span className="time">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-section">
        <h3>📍 Location</h3>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.695111134638!2d106.70088501430984!3d10.799835492318646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c0a6799a6fd%3A0x5c43066c33f60d9b!2zMTIzIFBoxoG7kG5nIFRyaW5oIE5ndXksIFRoYW5oIFhpIFRob24sIHRoYQ!5e0!3m2!1svi!2s!4v1656658550629!5m2!1svi!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
