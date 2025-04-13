import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "Dragon Fruit",
    price: "$5.99",
    image: `${window.location.origin}/Images/Layer-56.jpg`,
  },
  {
    name: "Grapefruit",
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
    name: "Rabutan",
    price: "$6.99",
    image: `${window.location.origin}/Images/Layer-87.jpg`,
  },
  {
    name: "Rabutan",
    price: "$6.99",
    image: `${window.location.origin}/Images/Layer-87.jpg`,
  },
  {
    name: "Rabutan",
    price: "$6.99",
    image: `${window.location.origin}/Images/Layer-87.jpg`,
  },
  {
    name: "Rabutan",
    price: "$6.99",
    image: `${window.location.origin}/Images/Layer-87.jpg`,
  },
  {
    name: "Rabutan",
    price: "$6.99",
    image: `${window.location.origin}/Images/Layer-87.jpg`,
  },
  {
    name: "Rabutan",
    price: "$6.99",
    image: `${window.location.origin}/Images/Layer-87.jpg`,
  },
  {
    name: "Rabutan",
    price: "$6.99",
    image: `${window.location.origin}/Images/Layer-87.jpg`,
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
          src={`${window.location.origin}/Images/BG-09.jpg`}
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
          <h1>Products</h1>
          <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
            <button
              className="hero-btn"
              onClick={() => (window.location.href = "/")}
            >
              Home
            </button>
            <button
              className="hero-btn"
              onClick={() => (window.location.href = "/about")}
            >
              About
            </button>
            <button
              className="hero-btn"
              onClick={() => (window.location.href = "/details")}
            >
              Details
            </button>
          </div>
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
    </main>
  );
}
