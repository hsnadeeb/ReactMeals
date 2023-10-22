import React, { useState, useContext } from 'react';
import './Meals.css';
import CartContext from '../../store/cart-context';

const Meal = ({ id, name, description, price }) => {
  const [quantity, setQuantity] = useState(1);
  const cartCtx = useContext(CartContext);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleAddToCart = () => {
    const item = {
      id: name, // Ensure each item has a unique identifier
      name: name,
      description: description,
      price: price,
      amount: quantity,
    };
    cartCtx.addItem(item);
    console.log('Adding item:', item);
  };

  return (
    <div className="meal">
      <div className="meal-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="price">${price.toFixed(2)}</p>
      </div>
      <div className="meal-form">
        <form>
          <label htmlFor="quantity">Quantity: </label>
          <button
            type="button"
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity === 1}
          >
            -
          </button>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
          <button type="button" onClick={() => setQuantity(quantity + 1)}>
            +
          </button>
          <button type="button" onClick={handleAddToCart}>
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default Meal;
