import React from "react";
import "./certificate.css";

const CertificatePage = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-wrapper">
          <img
            src={`${window.location.origin}/Images/Layer-0.jpg`}
            alt="Hero"
            className="hero-img"
          />
          <div className="hero-content">
            <h1 className="hero-title">Naturally Clean,</h1>
            <p className="hero-subtitle">Naturally Delicious</p>
            <button className="hero-btn">
              Shop Now <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      <div className="certificate-page">
        <div
          className="certificate-card-container"
          style={{
            backgroundImage: `url(${window.location.origin}/Images/project-bg.png)`,
          }}
        >
          <div className="card-left-section">
            <img
              src={`${window.location.origin}/Images/award.png`}
              alt="Award Trophy"
              className="trophy-image"
            />
          </div>

          <div className="card-right-section">
            <div className="header-container">
              <h1 className="main-heading">
                <span className="highlight-text">We have obtained</span> the
                necessary documents
              </h1>
              <h2 className="sub-heading">as required by the importer</h2>
              <div className="divider-line"></div>

              <div className="certificates-list">
                {[
                  "Certificate of Vaga",
                  "Certificate of Oviga",
                  "Certificate of Vaga",
                  "Certificate of Ima Sala",
                  "Kansas Registration License",
                  "Product Testing Registration",
                ].map((cert, index) => (
                  <div key={index} className="certificate-item">
                    <div className="certificate-icon">
                      <i className="fas fa-certificate"></i>
                    </div>
                    <div className="certificate-text">{cert}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="certificate-section">
          <div className="certificate-header">
            <img
              src="/Images/ss_1313960012.jpg"
              alt="Sample"
              className="header-image"
            />
          </div>
          <div className="certificate-gallery">
            <h2>Certificates</h2>
            <div className="image-grid">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="image-box">
                  <img
                    src={`/Images/certificate-${num}.jpg`}
                    alt={`Certificate ${num}`}
                    className="certificate-thumbnail"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificatePage;
