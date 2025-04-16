import { useNavigate } from "react-router-dom";
import "./products.css";
import CustomerReviews from "./CustomerReviews";

const products = [
  {
    name: "Dragon Fruit",
    price: "$5.99",
    image: `${window.location.origin}/Images/Layer-56.jpg`,
  },
  {
    name: "Pomelo",
    price: "$3.49",
    image: `${window.location.origin}/Images/Layer-40.jpg`,
  },
  {
    name: "Mangosteen fruit",
    price: "$4.29",
    image: `${window.location.origin}/Images/Layer-72.jpg`,
  },
  {
    name: "Passion fruit",
    price: "$6.99",
    image: `${window.location.origin}/Images/Layer-58.jpg`,
  },
  {
    name: "Rabutan",
    price: "$6.99",
    image: `${window.location.origin}/Images/Layer-87.jpg`,
  },
  {
    name: "Durian",
    price: "$6.99",
    image: `${window.location.origin}/Images/Layer-75.jpg`,
  },
  {
    name: "Bell Fruit",
    price: "$6.99",
    image: `${window.location.origin}/Images/Layer-73.jpg`,
  },
  {
    name: "Milk Fruit",
    price: "$6.99",
    image: `${window.location.origin}/Images/Layer-74.jpg`,
  },
];

export default function ProductsPage() {
  const navigate = useNavigate();

  const handleProductClick = (name) => {
    navigate(`/product/${encodeURIComponent(name)}`);
  };

  return (
    <main>
      <div className="hero-wrapper">
        <img
          src={`${window.location.origin}/Images/BG-08.jpg`}
          alt="Hero"
          className="hero-img-flipped"
        />
        <div
          className="hero-contents"
          style={{
            marginLeft: "-150px",
            marginTop: "50px",
            color: "white",
            textAlign: "left",
          }}
        >
          <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>Products</h1>
          <nav className="breadcrumb-nav">
            <a href="/" className="breadcrumb-link">
              Home
            </a>
            <span className="breadcrumb-separator">›</span>
            <a href="/products" className="breadcrumb-link">
              Products
            </a>
          </nav>
        </div>
      </div>

      <div className="fruitouter" style={{ marginTop: "100px" }}>
        <div className="fruit-grid" style={{ marginTop: "-150px" }}>
          {products.map(({ name, image }, i) => (
            <div
              key={i}
              className="fruit-card"
              onClick={() => handleProductClick(name)}
            >
              <div className="fruit-card__image-container">
                <img src={image} alt={name} className="fruit-card__image" />
              </div>
              <div className="fruit-card__rating">☆☆☆☆☆</div>
              <div className="fruit-card__name">{name}</div>
            </div>
          ))}
        </div>
      </div>
      <CustomerReviews/>
    </main>
  );
}
