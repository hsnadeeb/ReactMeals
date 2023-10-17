// Meal.js
import React from 'react';
import './Meals.css';

const Meal = ({ name, description, price }) => {
  return (
    <div className="meal">
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">₹{price.toFixed(2)}</p>
    </div>
  );
}

export default Meal;
