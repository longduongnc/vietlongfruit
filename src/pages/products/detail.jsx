import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fruits } from "./fruits";
import "./ProductDetailPage.css";
import { productsimage } from "./productsimage";

export default function ProductDetailPage() {
  const { productName } = useParams();
  const [activeTab, setActiveTab] = React.useState("description");

  const [mainImage, setMainImage] = React.useState(null);
  const navigate = useNavigate();

  const product = productsimage.find(
    (p) =>
      p.name.toLowerCase() === decodeURIComponent(productName).toLowerCase()
  );

  React.useEffect(() => {
    if (product) {
      setMainImage(product.images?.[0] || "");
    }
  }, [product]);

  if (!product) {
    return <h2 className="text-center text-xl font-bold">Product not found</h2>;
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleProductClick = (name) => {
    navigate(`/product/${encodeURIComponent(name)}`);
  };
  return (
    <main className="product-page">
      <section className="hero-section">
        <div className="hero-wrapper" style={{marginTop: '-150px'}}>
          <img
            src={`${window.location.origin}/Images/BG-09.jpg`}
            alt="Hero"
            className="hero-img"
          />
          <div className="hero-content" style={{marginLeft:'-300px'}}>
            <h1 className="hero-title">Naturally Clean,</h1>
            <p className="hero-subtitle">Naturally Delicious</p>
          </div>
        </div>
      </section>

      <section className="product-detail-section" style={{marginTop: '-300px'}}>
        <div className="product-container">
          <div className="gallery-card">
            <div className="main-image-container">
              <img src={mainImage} alt={product.name} className="main-image" />
            </div>
            <div className="thumbnail-grid">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Product view ${index + 1}`}
                  className="thumbnail"
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          <div className="info-card">
            <h1 className="product-title">Rambutan</h1>
            <p className="product-description">
              The rice, Tig, South Sudan, the world is not virtually in the
              south. A salmon gag with red natural alkana gets affected warmer
              during your entire shallow water.
            </p>

            <div className="product-specs">
              <div className="spec-section">
                <h3 className="section-title">Packing:</h3>
                <div className="spec-grid">
                  <div className="spec-item">
                    <strong>Sensor</strong>
                    <span>85kg/year</span>
                  </div>
                  <div className="spec-item">
                    <strong>Bar Zig</strong>
                    <span>cannot</span>
                  </div>
                  <div className="spec-item">
                    <span>Teg 500g/+4</span>
                  </div>
                  <div className="spec-item">
                    <span>Teg 1000g/+2</span>
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              <div className="spec-section">
                <h3 className="section-title">Four Stars #</h3>
                <ul className="feature-list">
                  <li>
                    <strong>Tom</strong> worldwide chartages of unknown 2005
                  </li>
                  <li>
                    <strong>Selenova</strong> &gt; 2 Missing Star Shopping Room
                  </li>
                </ul>

                <div className="spec-grid">
                  <div className="spec-item">
                    <strong>Lake</strong> winner
                  </div>
                  <div className="spec-item">
                    Chippese, San Gustav, Paul Kali
                  </div>
                  <div className="spec-item">
                    <strong>Tags:</strong> Lib Style, Tamil
                  </div>
                  <div className="spec-item">
                    <strong>Share:</strong>{" "}
                    <span className="checkmarks">✅ ✅ ✅</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="cta-button">
              Get Price Quote <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="tabs-section">
        <div className="tabs-container">
          <div className="tabs-header">
            <button
              className={`tab-btn ${
                activeTab === "description" ? "active" : ""
              }`}
              onClick={() => handleTabClick("description")}
            >
              Description
            </button>
            <button
              className={`tab-btn ${
                activeTab === "additionalInfo" ? "active" : ""
              }`}
              onClick={() => handleTabClick("additionalInfo")}
            >
              Additional Information
            </button>
            <button
              className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => handleTabClick("reviews")}
            >
              Reviews (0)
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === "description" && (
              <div className="description-content">
                <p className="description-text">{product.description}</p>
                <div className="centered-mini-gallery">
                  <div className="gallery-main-image">
                    <img
                      src={product.images[0]}
                      alt="Product main view"
                      className="main-image"
                    />
                  </div>
                  <div className="gallery-thumbnails">
                    <img
                      src={product.images[1]}
                      alt="Product angle 1"
                      className="thumbnail"
                    />
                    <img
                      src={product.images[2]}
                      alt="Product angle 2"
                      className="thumbnail"
                    />
                  </div>
                </div>
              </div>
            )}
            {activeTab === "additionalInfo" && (
              <div className="additional-info">
                <p>Here is some additional information about the product...</p>
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="reviews-content">
                <p className="no-reviews">No reviews yet.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="related-products">
        <h2 className="section-heading">You May Also Like</h2>
        <div className="products-grid">
          {fruits.map(({ name, img }, i) => (
            <div key={i} className="product-card">
              <div className="product-image-container">
                <img src={img} alt={name} className="product-image" />
                <button className="quick-view-btn"  onClick={() => handleProductClick(name)}>Quick View</button>
              </div>
              <div className="product-rating">★★★★☆</div>
              <h3 className="product-name">{name}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
