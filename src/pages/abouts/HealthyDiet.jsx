export default function HealthyDiet() {
  return (
    <section className="diet-section">
      <div className="diet-content">
        <div className="text-content">
          <h2>Fruits are key to a healthy diet</h2>
        </div>
        <div className="paragraph-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="diet-image">
        <img src="/Images/healthy-diet.jpg" alt="Healthy Diet" />
      </div>
      <div className="features">
        <div className="feature-item">
          <span className="feature-icon">🌿</span>
          <span>100% Natural</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">📍</span>
          <span>Traceability</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">🌱</span>
          <span>Best Practice</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">🤝</span>
          <span>Fair Trade</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">📞</span>
          <span>24/7 Support</span>
        </div>
      </div>
    </section>
  );
}