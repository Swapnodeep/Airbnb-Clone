import React from "react";
import "../../CSS Files/Home Page CSS/Card.css";

// Props makes a component look different but reusable
function Card({ src, title, description, price }) {
  return (
    <div className="card">
      <img src={src} alt="" />

      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
