import React from 'react';
import './Header.css';

const Header = (props) => {
  const openCartHandler = () => {
    // Set the cart to open when the button in the header is clicked
    props.onOpenCart();
  };

  return (
    <header>
      <h1>ReactMeals</h1>
      <div className="cart-button">
        <button onClick={openCartHandler}>Cart</button>
        <span className="cart-item-count">{props.cartItemCount}</span>
      </div>
    </header>
  );
};

export default Header;
