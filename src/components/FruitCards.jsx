import React from "react";
import "./FruitCards.css";

export default function FruitCards() {
  const fruits = [
    { name: "Passion Fruit", img: "./Images/Layer-58.jpg" },
    { name: "Pomelo", img: "./Images/Layer-40.jpg" },
    { name: "Rambutan", img: "./Images/pngtree-ripe-rambutan-png-file-png-image_11490857.jpg" },
    { name: "Dragon Fruit", img: "./Images/Layer-56.jpg" },
    { name: "Durian", img: "./Images/Layer-75.jpg" },
    { name: "Bell Fruit", img: "./Images/Layer-73.jpg" },
    { name: "Mangosteen", img: "./Images/Layer-72.jpg" },
    { name: "Milk Fruit", img: "./Images/Layer-74.jpg" },
  ];

  return (
    <>
      <div className="head_fruit_card">
        <p className="ourproducts">Our Products</p>
        <img src="/Images/Icon-17.svg" alt="Logo" className="logo-img logo-img--modified"/>    
      </div>
      <div className="fruitouter">
        <div className="fruit-grid">
          {fruits.map(({ name, img }, i) => (
            <div key={i} className="fruit-card">
              {/* Image Container ensures a fixed size */}
              <div className="fruit-card__image-container">
                <img 
                  src={img} 
                  alt={name} 
                  className="fruit-card__image" 
                />
              </div>
              <div className="fruit-card__rating">☆☆☆☆☆</div>
              <div className="fruit-card__name">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}