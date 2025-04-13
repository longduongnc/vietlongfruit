import "./CsrSection.css";

export default function CsrSection() {
  return (
    <div className="page-container">
      <section className="csr-section">
        <div className="csr-header">
          <div className="csr-flex-row">
            <div className="csr-icon">Csr</div>
            <p className="csr-desc">
              We realize that our social, economic and environmental
              responsibilities to the stakeholders are essential to our
              business. We aim to demonstrate these responsibilities through our
              actions and our corporate policies.
            </p>
          </div>
        </div>

        <div className="csr-cards">
          <div className="csr-card">
            <img
              src="/Images/Icon-Partner.svg"
              alt="Partners"
              className="csr-card-icon"
            />
            <h3>CSR for our partners/growers</h3>
            <ul>
              <li>Fair pricing principles</li>
              <li>Technical & financial support</li>
              <li>Sustainable business planning</li>
            </ul>
          </div>

          <div className="csr-card">
            <img
              src="/Images/Icon-Grower.svg"
              alt="Growers"
              className="csr-card-icon"
            />
            <h3>CSR for our partners/growers</h3>
            <ul>
              <li>Good working conditions</li>
              <li>Social working environments</li>
              <li>Opportunities to grow</li>
            </ul>
          </div>

          <div className="csr-card">
            <img
              src="/Images/Icon-Customer.svg"
              alt="Customers"
              className="csr-card-icon"
            />
            <h3>CSR for our customers</h3>
            <ul>
              <li>Fully traceable products</li>
              <li>Timely and exact conformance</li>
              <li>Reliable quality</li>
              <li>Flexibility in business operations</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
