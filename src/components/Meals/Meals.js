import React, { useState, useContext } from 'react';
import './Meals.css';
import CartContext from '../../store/cart-context';  

const Meal = ({ name, description, price }) => {
  const [quantity, setQuantity] = useState(1);

  const cartCtx = useContext(CartContext);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleAddToCart = () => {
    const item = {
      name: name,
      description: description,
      price: price,
      amount: quantity,
    };
    cartCtx.addItem(item);
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
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
          <button type="button" onClick={handleAddToCart}>
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default Meal;
